---
title: "K-Nearest-Neighbor-Algorithmus"
description: "Der K-Nearest-Neighbor-Algorithmus klassifiziert Datenpunkte anhand der Mehrheitsentscheidung der k nächsten Nachbarn. Er ist einfach zu implementieren, nutzt Abstandsmetriken wie den euklidischen oder Manhattan-Abstand und findet Anwendung in der Mustererkennung sowie Empfehlungssystemen."
---

Der K-Nearest-Neighbor-Algorithmus (KNN) zählt zu den beliebtesten und einfachsten Klassifikatoren im Bereich des [maschinellen Lernens](/open-fidup/lerninhalte/maschinelles-lernen). Er handelt es sich um einen überwachten Lernklassifikator, der die Klassifikation eines einzelnen Datenpunktes auf der Grundlage einer einfachen Mehrheitswahl vornimmt.

## Funktionsweise
Der KNN-Algorithmus ist ein Modell des trägen Lernens, das lediglich einen Trainingsdatensatz speichert, ohne eine separate Trainingsphase zu durchlaufen. Er stellt ein instanzbasiertes Lernverfahren dar, was zu einer hohen Belastung des Arbeitsspeichers führt. Mit zunehmender Größe des Datensatzes nimmt die Effizienz des Algorithmus ab, wodurch die Gesamtleistung des Modells beeinträchtigt wird. Trotz dieser Nachteile findet KNN häufig Anwendung, da er einfach zu implementieren ist und eine hohe Genauigkeit bietet.

### Klassifikationsprozess
Der Algorithmus identifiziert die k nächsten Nachbarn und bestimmt das Label für die [Klassifikation](/open-fidup/lerninhalte/klassifikation) oder den vorhergesagten Wert für die [Regression](/open-fidup/lerninhalte/regression) anhand der Mehrheit der Zuordnungen dieser nahen Datenpunkte.

## Anwendungsbeispiele
Der KNN-Algorithmus eignet sich für verschiedene Anwendungen, darunter:

- Einfache Empfehlungssysteme
- Mustererkennung
- [Data Mining](/open-fidup/lerninhalte/data-mining)
- Finanzmarktprognosen
- Erkennung von Eindringlingen

## Abstandsmetriken
Die nächsten Datenpunkte werden mithilfe verschiedener Abstandsalgorithmen bestimmt. Zu den gängigen Metriken gehören:

1. **Euklidischer Abstand** $(p=2)$
   - Dies ist die häufigste Abstandsmetrik für reellwertige Vektoren.
   - Berechnung: 
     $$d(x,y)=\sqrt{\sum^{n}_{i=1}(y_i-x_i)^2}$$

2. **Manhattan-Abstand** $(p=1)$
   - Auch als Taxi-Distanz oder Stadtblock-Distanz bekannt.
   - Berechnung: 
     $$d(x,y)=\sum^{n}_{i=1}|x_i-y_i|$$

3. **Minkowski-Abstand**
   - Dies ist eine verallgemeinerte Form des euklidischen und Manhattan-Abstands.
   - Berechnung: 
     $$d(x,y)=\left(\sum^{n}_{i=1}|x_i-y_i|^{p}\right)^{1/p}$$

4. **Hamming-Abstand**
   - Typischerweise bei booleschen oder String-Vektoren verwendet.
   - Überlappungsmetrik zur Identifizierung von Punkten, an denen Vektoren nicht übereinstimmen.
   - Berechnung: 
     $$D_H=\sum^{n}_{i=1}|x_i-y_i|$$
   - Eigenschaften:
     - $x=y \Rightarrow D=0$
     - $x \neq y \Rightarrow D \geq 1$
   - Beispiel:
     - Hamming-Abstand 2, wenn sich nur zwei Werte unterscheiden.

## Variabilität und Verzerrung
Kleine k-Werte führen zu hoher Varianz und geringer Verzerrung. Große k-Werte führen zu geringer Varianz und hoher Verzerrung.

## Vorteile
- Einfache Anwendung.
- Einfache Anpassung, da alle Trainingsdaten im Arbeitsspeicher gehalten werden.
- Wenige Hyperparameter, lediglich k und die Abstandsmetrik.

## Nachteile
- Schlechte Skalierung, da KNN ein träger Algorithmus ist.
- Bei zu vielen Dimensionen steigen die Klassifizierungsfehler.
- Überanpassung durch zu niedrige k-Werte, Unteranpassung durch zu hohe k-Werte.

## Best Practices
Verwenden Sie einen ungeraden k-Wert, um Unentschieden zu vermeiden.

## Quellen

> Technology, I. (2024, September 02). What is the K-Nearest Neighbor (KNN) Algorithm? Youtube. Retrieved from https://www.youtube.com/watch?v=b6uHw7QW_n4  
> Was ist der „k-nearest neighbors algorithm"? | IBM. (2024, September 11). Retrieved from https://www.ibm.com/de-de/topics/knn  
> https://sebastianraschka.com/pdf/lecture-notes/stat479fs18/02_knn_notes.pdf  

[^1]: Trainingsdaten werden in den Algorithmus geladen; erst bei Vorhersagen werden die Trainingsdaten ausgewertet.