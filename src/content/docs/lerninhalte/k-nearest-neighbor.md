---
title: "K-Nearest Neighbor: Klassifikationsalgorithmus im maschinellen Lernen"
description: "Der K-Nearest Neighbor (KNN) Algorithmus klassifiziert Datenpunkte basierend auf der Mehrheitswahl der k nächsten Nachbarn. Er ist einfach zu implementieren, verwendet Abstandsmetriken wie Euklidisch oder Manhattan und eignet sich für Mustererkennung und Empfehlungssysteme."
---

- Der K-Nearest Neighbors (KNN) Algorithmus ist einer der **beliebtesten** und **einfachsten** Klassifikatoren im Bereich des maschinellen Lernens.
- Es handelt sich um einen **überwachten** Lernklassifikator, der die **Klassifikation** eines **einzelnen Datenpunktes** auf Basis der *(einfachen)* **Mehrheitswahl** vornimmt.

## Funktionsweise
- KNN ist ein **Lazy Learning Modell** *(träges Lernen)*[^1], das nur **einen** Trainingsdatensatz speichert, anstatt eine Trainingsphase zu durchlaufen.
- Es handelt sich um ein **instanz-/speicherbasiertes Lernverfahren**, was zu einer starken Belastung des Arbeitsspeichers führt.
- Mit **zunehmendem Datensatz** wird der Algorithmus **zunehmend ineffizient**, was die Gesamtleistung des Modells beeinträchtigt.
- Trotz dieser Nachteile wird KNN häufig angewendet, da es **einfach zu implementieren** ist und eine **hohe Genauigkeit** bietet.

### Klassifikationsprozess
- Der Algorithmus findet die **k nächsten Nachbarn** *(Datenpunkte)* und kalkuliert das **Label** (Klassifikation) oder den vorhergesagten Wert (Regression) basierend auf der **$p=2$-Mehrheit** der Zuordnung der nahen Datenpunkte.

## Anwendungsbeispiele
- Einfache Empfehlungssysteme
- Mustererkennung
- Data Mining
- Finanzmarktprognosen
- Erkennung von Eindringlingen

## Abstandsmetriken
Die **nächsten** Datenpunkte werden durch verschiedene Abstandsalgorithmen bestimmt:

1. **Euklidischer Abstand** $(p=2)$
   - Häufigste verwendete Abstandsmetrik für reellwertige Vektoren.
   - Berechnung: 
     $$d(x,y)=\sqrt{\sum^{n}_{i=1}(y_i-x_i)^2}$$

2. **Manhattan-Abstand** $(p=1)$
   - Auch als Taxi-Distanz oder Stadtblock-Distanz bekannt.
   - Berechnung: 
     $$d(x,y)=(\sum^{m}_{i=1}|x_i-y_i|)$$

3. **Minkowski-Abstand**
   - Verallgemeinerte Form des euklidischen und Manhattan-Abstands.
   - Berechnung: 
     $$d(x,y)=(\sum^{n}_{i=1}|x_i-y_i|)^{1/p}$$

4. **Hamming-Abstand**
   - Typischerweise bei booleschen oder String-Vektoren verwendet.
   - Überlappungsmetrik zur Identifizierung von Punkten, an denen Vektoren nicht übereinstimmen.
   - Berechnung: 
     $$D_H=(\sum^{k}_{i=1}|x_i-y_i|)$$
   - Eigenschaften:
     - $x=y \Rightarrow D=0$
     - $x \neq y \Rightarrow D \neq 1$
   - Beispiel:
     - Hamming-Abstand 2, nur zwei Werte unterscheiden sich.

## Variabilität und Verzerrung
- Kleine k-Werte führen zu **hoher Varianz** und geringer Verzerrung.
- Große k-Werte führen zu **geringer Varianz** und hoher Verzerrung.

## Vorteile
- Einfache **Anwendung**.
- Einfache **Anpassung**, da alle Trainingsdaten im Arbeitsspeicher gehalten werden.
- Wenige **Hyperparameter**, lediglich k und die Abstandsmetrik.

## Nachteile
- Schlechte **Skalierung**, da KNN ein träger Algorithmus ist.
- Bei zu vielen Dimensionen steigen die Klassifizierungsfehler.
- Überanpassung durch zu niedrige k-Werte, Unteranpassung durch zu hohe k-Werte.

## Best Practices
- Verwenden Sie einen ungeraden **k-Wert**, um **Unentschieden** zu vermeiden.

[^1]: Trainingsdaten werden in den Algorithmus geladen; erst bei Vorhersagen werden die Trainingsdaten ausgewertet.

## Quellen

> Technology, I. (2024, September 02). What is the K-Nearest Neighbor (KNN) Algorithm? Youtube. Retrieved from https://www.youtube.com/watch?v=b6uHw7QW_n4  
> Was ist der „k-nearest neighbors algorithm"? | IBM. (2024, September 11). Retrieved from https://www.ibm.com/de-de/topics/knn  
> https://sebastianraschka.com/pdf/lecture-notes/stat479fs18/02_knn_notes.pdf  
