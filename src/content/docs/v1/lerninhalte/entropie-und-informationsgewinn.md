---
title: "Entropie und Informationsgewinn"
description: "Entropie misst die Unsicherheit oder Unordnung in einem Datensatz und liegt zwischen 0 und 1. Informationsgewinn berechnet den Unterschied der Entropie vor und nach der Teilung eines Attributs. Das Attribut mit dem höchsten Informationsgewinn ermöglicht die beste Aufteilung für Klassifikation."
---

## Entropie
- Maß für die **Unsicherheit** oder **Unordnung** in einem Datensatz. Je höher die Entropie, desto unordentlicher oder gemischter sind die Klassen im Datensatz.
- Zahlenwert zwischen **0** und **1**. 
	- Entropie 0: Es kann eine **absolut eindeutige Klassifikation** für den Knoten vorgenommen werden. 
	- Entropie 1: Es ist gar **keine Tendenz** zu einer Klassifikation möglich.
### Formel
#### Allgemein
$S$ = Datensatz
$C$ = Alle Klassen im Satz $S$
$p(c)$ = Anzahl der Datenpunkte die zur Klasse $c$ gehören, im Verhältnis zur Gesamtzahl der Datenpunkte in Satz $S$
$$
Entropie(S) = - \sum_{c \in C} p(c) log_2 p(c)
$$
#### IHK
$$
\sum P \cdot log_2 \dfrac{1}{P}
$$
- $P$ Wahrscheinlichkeit von einer Klasse im Bezug auf alle Datenpunkte
##### Beispiel
- 91 durchgeführte Werbemaßnahmen 
- 40 fehlgeschlagene Werbemaßnahmen
- 51 erfolgreich durchgeführte Werbemaßnahmen

$\sum P \cdot log_2 \dfrac{1}{P} = \dfrac{51}{91} \cdot log_2 \dfrac{1}{\dfrac{91}{51}} + \dfrac{40}{91} \cdot log_2 \dfrac{1}{\dfrac{40}{51}} = \dfrac{51}{91} \cdot log_2 \dfrac{91}{51} + \dfrac{40}{91} \cdot log_2 \dfrac{91}{40} \approx 0,9894$

> [!NOTE]- Erklärung
> - Die Entropie wird berechnet, indem man für jede Klasse $c$ die Wahrscheinlichkeit $p(c)$ betrachtet, dass ein zufällig ausgewählter Datenpunkt aus dem Datensatz $S$ zu dieser Klasse gehört. 
>- Der Ausdruck $p(c) \log_2 p(c)$ quantifiziert die Unsicherheit oder den Informationsgehalt, der mit der Klasse $c$ verbunden ist. 
 > - Wenn $p(c)$ hoch ist (d.h. viele Datenpunkte gehören zu dieser Klasse), ist der Informationsgehalt niedrig, weil wir relativ sicher sind, dass ein zufällig ausgewählter Punkt zu dieser Klasse gehört. 
  >- Umgekehrt, wenn $p(c)$ niedrig ist (d.h. wenige Datenpunkte gehören zu dieser Klasse), ist der Informationsgehalt hoch, weil es weniger wahrscheinlich ist, dass ein zufällig ausgewählter Punkt zu dieser Klasse gehört.
>- Das Minuszeichen vor der Summe sorgt dafür, dass die Entropie immer einen positiven Wert hat, da der Logarithmus von Werten zwischen 0 und 1 negativ ist. 
>- Die Entropie ist also ein Maß für die durchschnittliche Unsicherheit oder Unordnung im Datensatz: 
  >- Wenn alle Stichproben in Datensatz $S$ zu einer Klasse gehören, dann ist $Entropie(S) = 0$, was bedeutet, dass es keine Unsicherheit gibt, da alle Datenpunkte gleich sind.
  >- Wenn die Hälfte der Proben einer Klasse und die andere Hälfte einer anderen Klasse zugeordnet werden, dann ist $Entropie(S) = 1$ (maximaler Wert), was maximale Unsicherheit anzeigt, da die Klassen gleichmäßig verteilt sind.

- wenn alle Stichproben in Datensatz $S$ zu einer Klasse gehören dann $Entropie(S) = 0$
- wenn die Hälfte der Proben einer Klasse und die andere Hälfte einer anderen Klasse zugeordnet werden, dann $Entropie(S) = 1$ (maximal Wert)

- Attribut mit *geringster Entropie* sollte gewählt werden

### Berechnung


## Informationsgewinn
- Unterschied der *Entropie* **vor** und **nach** einer **Teilung** eines bestimmten Attributs
- Attribut mit **höchstem** Informationsgewinn erzeugt beste Aufteilung

### Formel
$$
G(D,A) = Entropie(S) - \sum_{v \in V(A)} \dfrac{|D_v|}{|D|}\times{Entropie(S_v)}
$$

> [!NOTE]- Erklärung
>- Der Informationsgewinn $G(D,A)$ misst, wie viel Unsicherheit (Entropie) durch die Teilung des Datensatzes $D$ anhand des Attributs $A$ reduziert wird.
>- $Entropie(S)$ ist die Entropie des ursprünglichen Datensatzes $S$, bevor eine Teilung erfolgt. Es gibt an, wie unrein oder gemischt die Klassen im Datensatz sind.
>- Der Ausdruck $\sum_{v \in V(A)} \dfrac{D_v}{D} \times Entropie(S_v)$ repräsentiert die gewichtete Summe der Entropien der Teilmengen, die durch die Teilung des Datensatzes nach den Werten $v$ des Attributs $A$ entstehen.
  >- Hierbei ist $V(A)$ die Menge der möglichen Werte des Attributs $A$.
  > - $D_v$ ist die Anzahl der Datenpunkte, die dem Wert $v$ des Attributs $A$ zugeordnet sind, und $D$ ist die Gesamtanzahl der Datenpunkte im Datensatz $D$.
  > - Der Term $\dfrac{D_v}{D}$ gibt den Anteil der Datenpunkte an, die dem Wert $v$ zugeordnet sind, und gewichtet somit die Entropie $Entropie(S_v)$ der Teilmenge $S_v$, die den Wert $v$ hat.
> - Der Informationsgewinn $G(D,A)$ ist also die Differenz zwischen der Entropie des ursprünglichen Datensatzes und der gewichteten Summe der Entropien der Teilmengen. 
 > - Ein hoher Wert von $G(D,A)$ bedeutet, dass die Teilung des Attributs $A$ zu einer signifikanten Reduktion der Unsicherheit führt, was darauf hinweist, dass $A$ ein gutes Attribut für die Klassifikation ist.
  >- Ein niedriger oder negativer Wert würde darauf hindeuten, dass die Teilung nicht viel zur Klärung der Klassen beiträgt.

$G(D,A)$ = Informationsgewinn für das Attribut $A$ in Bezug auf den Datensatz $D$.
$V(A)$ = Möglichen Werte des Attributs $A$
$|D_v|$ = Anzahl der Datenpunkte, die dem Wert $v$ des Attributs $A$ zugeordnet sind
$|D|$ = Gesamtanzahl der Datenpunkte im Datensatz $D$
$Entropie(S_v)$ = Entropie des Teilsets $S_v$


- Der Informationsgewinn $G(D,A)$ ist also die **Entropie des ursprünglichen Datensatzes** minus die **gewichtete Summe der Entropien der Teilmengen, die durch die Teilung entstehen**. Ein höherer Wert von $G(D,A)$ bedeutet, dass das Attribut $A$ eine **bessere Trennung** der Klassen ermöglicht.


## Quellen

> Was ist ein Entscheidungsbaum | IBM. (2024, September 17). Retrieved from https://www.ibm.com/de-de/topics/decision-trees
> Tutorials, T. M. (2017, February 16). Machine Learning #39 - Entscheidungsbäume #3 - Entropie und Informationsgewinn. Youtube. Retrieved from https://www.youtube.com/watch?v=lg1pb0YaAjI