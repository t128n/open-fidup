---
title: "Entropie und Informationsgewinn"
description: "Entropie misst die Unsicherheit oder Unordnung in einem Datensatz und liegt zwischen 0 und 1. Informationsgewinn berechnet den Unterschied der Entropie vor und nach der Teilung eines Attributs. Das Attribut mit dem höchsten Informationsgewinn ermöglicht die beste Aufteilung für Klassifikation."
---

Entropie und Informationsgewinn sind Konzepte aus der [Entscheidungsbaum](/open-fidup/lerninhalte/entscheidungsbaum)-Analyse im [Maschinellen Lernen](/open-fidup/lerninhalte/maschinelles-lernen). Entropie quantifiziert die Unsicherheit oder Unordnung in einem Datensatz, wobei Werte zwischen 0 und 1 liegen. Informationsgewinn misst die Reduktion dieser Unsicherheit durch die Aufteilung des Datensatzes anhand eines Attributs. Das Attribut mit dem höchsten Informationsgewinn eignet sich am besten für eine effektive Klassifikation.

## Entropie

Entropie ist ein Maß für die Unsicherheit oder Unordnung in einem Datensatz. Je höher die Entropie, desto unordentlicher oder gemischter sind die Klassen im Datensatz. Der Wert liegt zwischen 0 und 1. Bei einer Entropie von 0 ist eine absolut eindeutige Klassifikation möglich. Bei einer Entropie von 1 besteht keine Tendenz zu einer Klassifikation.

### Formel

#### Allgemeine Formel

$S$ bezeichnet den Datensatz, $C$ die Menge aller Klassen in $S$ und $p(c)$ den Anteil der Datenpunkte, die zur Klasse $c$ gehören, bezogen auf die Gesamtzahl der Datenpunkte in $S$.

$$Entropie(S) = - \sum_{c \in C} p(c) \log_2 p(c)$$

#### Variante

Eine alternative Darstellung lautet:

$$\sum P \cdot \log_2 \dfrac{1}{P}$$

Hierbei steht $P$ für die Wahrscheinlichkeit einer Klasse bezogen auf alle Datenpunkte.

##### Beispiel

Gegeben sind 91 durchgeführte Werbemaßnahmen, davon 40 fehlgeschlagene und 51 erfolgreiche.

$$\sum P \cdot \log_2 \dfrac{1}{P} = \dfrac{51}{91} \cdot \log_2 \dfrac{1}{\dfrac{51}{91}} + \dfrac{40}{91} \cdot \log_2 \dfrac{1}{\dfrac{40}{91}} = \dfrac{51}{91} \cdot \log_2 \dfrac{91}{51} + \dfrac{40}{91} \cdot \log_2 \dfrac{91}{40} \approx 0{,}9894$$

Die Entropie wird berechnet, indem für jede Klasse $c$ die Wahrscheinlichkeit $p(c)$ betrachtet wird, dass ein zufällig ausgewählter Datenpunkt aus dem Datensatz $S$ zu dieser Klasse gehört. Der Ausdruck $p(c) \log_2 p(c)$ quantifiziert die Unsicherheit oder den Informationsgehalt, der mit der Klasse $c$ verbunden ist. Wenn $p(c)$ hoch ist, ist der Informationsgehalt niedrig, da die Zuordnung zu dieser Klasse relativ sicher ist. Wenn $p(c)$ niedrig ist, ist der Informationsgehalt hoch, da die Zuordnung weniger wahrscheinlich ist. Das Minuszeichen vor der Summe sorgt dafür, dass die Entropie einen positiven Wert annimmt, da der Logarithmus von Werten zwischen 0 und 1 negativ ist. Die Entropie ist ein Maß für die durchschnittliche Unsicherheit oder Unordnung im Datensatz. Wenn alle Datenpunkte in $S$ zu einer Klasse gehören, beträgt die Entropie 0, was keine Unsicherheit bedeutet. Wenn die Hälfte der Datenpunkte einer Klasse und die andere Hälfte einer anderen Klasse zugeordnet sind, beträgt die Entropie 1, was maximale Unsicherheit anzeigt. Für die Klassifikation sollte das Attribut mit der geringsten Entropie gewählt werden.

## Informationsgewinn

Informationsgewinn bezeichnet den Unterschied der Entropie vor und nach der Teilung eines Datensatzes anhand eines bestimmten Attributs. Das Attribut mit dem höchsten Informationsgewinn erzeugt die beste Aufteilung.

### Formel

$$G(D,A) = Entropie(S) - \sum_{v \in V(A)} \dfrac{|D_v|}{|D|} \times Entropie(S_v)$$

Hierbei ist $G(D,A)$ der Informationsgewinn für das Attribut $A$ bezogen auf den Datensatz $D$, $V(A)$ die Menge der möglichen Werte des Attributs $A$, $|D_v|$ die Anzahl der Datenpunkte, die dem Wert $v$ des Attributs $A$ zugeordnet sind, $|D|$ die Gesamtanzahl der Datenpunkte im Datensatz $D$ und $Entropie(S_v)$ die Entropie des Teilsets $S_v$.

Der Informationsgewinn $G(D,A)$ misst, wie viel Unsicherheit durch die Teilung des Datensatzes $D$ anhand des Attributs $A$ reduziert wird. $Entropie(S)$ ist die Entropie des ursprünglichen Datensatzes $S$ vor der Teilung. Der Ausdruck $\sum_{v \in V(A)} \frac{|D_v|}{|D|} \times Entropie(S_v)$ repräsentiert die gewichtete Summe der Entropien der Teilmengen, die durch die Teilung nach den Werten $v$ des Attributs $A$ entstehen. $V(A)$ ist die Menge der möglichen Werte des Attributs $A$, $|D_v|$ die Anzahl der Datenpunkte mit dem Wert $v$ und $|D|$ die Gesamtanzahl. Der Term $\frac{|D_v|}{|D|}$ gibt den Anteil der Datenpunkte mit dem Wert $v$ an und gewichtet die Entropie $Entropie(S_v)$ der Teilmenge $S_v$. Der Informationsgewinn $G(D,A)$ ist die Differenz zwischen der Entropie des ursprünglichen Datensatzes und der gewichteten Summe der Entropien der Teilmengen. Ein hoher Wert von $G(D,A)$ bedeutet, dass die Teilung anhand des Attributs $A$ zu einer signifikanten Reduktion der Unsicherheit führt, was $A$ zu einem guten Attribut für die Klassifikation macht. Ein niedriger oder negativer Wert deutet darauf hin, dass die Teilung wenig zur Klärung der Klassen beiträgt.

Der Informationsgewinn $G(D,A)$ ist die Entropie des ursprünglichen Datensatzes minus die gewichtete Summe der Entropien der Teilmengen, die durch die Teilung entstehen. Ein höherer Wert von $G(D,A)$ bedeutet, dass das Attribut $A$ eine bessere Trennung der Klassen ermöglicht.

## Quellen

Was ist ein Entscheidungsbaum | IBM. (2024, September 17). Retrieved from https://www.ibm.com/de-de/topics/decision-trees  
Tutorials, T. M. (2017, February 16). Machine Learning #39 - Entscheidungsbäume #3 - Entropie und Informationsgewinn. Youtube. Retrieved from https://www.youtube.com/watch?v=lg1pb0YaAjI