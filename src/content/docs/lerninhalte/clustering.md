---
title: "Clustering"
description: "Clustering ist eine Methode zur Gruppierung ähnlicher Datenpunkte in homogene Cluster, die intern ähnlich und extern unterschiedlich sind. Algorithmen wie K-Means und hierarchisches Clustering werden verwendet. Anwendungen sind Kundensegmentierung und Anomalieerkennung. Distanzmaße wie euklidische Distanz sind zentral."
---

Clustering bezeichnet eine Methode zur Gruppierung ähnlicher Datenpunkte in homogene Cluster, die innerhalb der Gruppen möglichst ähnlich und zwischen den Gruppen möglichst unterschiedlich sind. Es handelt sich um ein unüberwachtes Lernverfahren, das in Bereichen wie Marketing, Datenanalyse und Mustererkennung Anwendung findet. Häufige Algorithmen umfassen K-Means und hierarchisches Clustering, wobei Distanzmaße wie die euklidische Distanz zur Bestimmung der Ähnlichkeit dienen.

## Grundlagen des Clustering

Clustering zielt darauf ab, Daten in homogene Gruppen einzuteilen, die intern ähnlich und extern unterschiedlich sind. Das Verfahren findet Anwendung in der Kundensegmentierung im Marketing. Der Prozess umfasst folgende Schritte:

1. Definition eines Ähnlichkeits- oder Distanzmaßes.
2. Auswahl und Anwendung eines Clustering-Algorithmus.
3. Bestimmung der optimalen Anzahl von Clustern.
4. Interpretation und Validierung der Ergebnisse.

Beispiele für Algorithmen sind K-Means und hierarchisches Clustering.

## K-Means-Clusteranalyse

K-Means ist eines der einfachsten und gängigsten Verfahren zur Clusteranalyse. Es handelt sich um einen [unüberwachten Lernalgorithmus](/open-fidup/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen), der Datenpunkte in eine vordefinierte Anzahl K von Clustern gruppiert.

### Algorithmus

Der Algorithmus verläuft wie folgt:

1. Initialisierung: Definition der Anzahl K der Cluster und Auswahl von K zufälligen Datenpunkten als initiale Cluster-Zentren.
2. Zuordnung: Zuordnung jedes Datenpunkts zum nächstgelegenen Cluster-Zentrum basierend auf der euklidischen Distanz.
3. Aktualisierung: Berechnung neuer Cluster-Zentren als Mittelwert aller Datenpunkte im jeweiligen Cluster.
4. Iteration: Wiederholung der Schritte 2 und 3, bis die Cluster-Zentren sich nicht mehr signifikant verändern oder eine maximale Anzahl von Iterationen erreicht ist.

### Wichtige Aspekte

Das Distanzmaß ist in der Regel die [euklidische Distanz](/open-fidup/lerninhalte/euklidische-distanz), insbesondere für zweidimensionale Daten. Die Qualität des Clusterings lässt sich anhand der Varianz innerhalb der Cluster beurteilen; eine geringere Varianz gilt als besser. Die optimale Anzahl K der Cluster kann mithilfe eines Elbow-Plots bestimmt werden, der zeigt, ab welchem Punkt die Reduktion der Varianz nicht mehr signifikant ist.

### Vor- und Nachteile

Vorteile umfassen die einfache Implementierung und Effizienz bei großen Datensätzen. Nachteile bestehen darin, dass das Ergebnis von der zufälligen Initialisierung abhängen kann, K vorher festgelegt werden muss und Probleme mit nicht-konvexen Clustern auftreten können.

### Anwendungen

K-Means findet Verwendung in der Marktsegmentierung, Dokumentenklassifizierung, Bildkompression und Anomalieerkennung.

## Hierarchische Clusteranalyse

Hierarchisches Clustering ist ein statistisches Verfahren zur Gruppierung ähnlicher Objekte in Cluster. Es erstellt eine hierarchische Struktur in Form eines Dendrogramms, das die Beziehungen zwischen Objekten und ihre Gruppierung auf verschiedenen Ebenen zeigt.

### Hauptmerkmale

Es erfordert keine vorherige Festlegung der Clusterzahl und ermöglicht die Analyse von Clustern auf unterschiedlichen Detailebenen. Das Ergebnis lässt sich visuell als Baumdiagramm darstellen.

### Arten

Es gibt zwei Hauptarten:

1. Agglomerativ (bottom-up): Beginnt mit einzelnen Datenpunkten als separate Cluster und fusioniert schrittweise die ähnlichsten Cluster.
2. Divisiv (top-down): Beginnt mit allen Datenpunkten in einem Cluster und teilt schrittweise in kleinere Cluster auf.

### Algorithmus (agglomerativ)

Der agglomerative Algorithmus verläuft wie folgt:

1. Jeder Datenpunkt bildet zunächst ein eigenes Cluster.
2. Berechnung der Distanzen zwischen allen Clustern.
3. Fusion der zwei ähnlichsten Cluster.
4. Wiederholung der Schritte 2 und 3, bis alle Objekte in einem Cluster sind.

### Distanzmaße

Häufig verwendete Distanzmaße sind die [euklidische Distanz](/open-fidup/lerninhalte/euklidische-distanz) und die Manhattan-Distanz. Die Manhattan-Distanz berechnet sich als Summe der absoluten Differenzen der Koordinaten zweier Punkte und ist auch als Cityblock-Distanz oder L1-Norm bekannt. Sie misst die Entfernung entlang rechtwinkliger Achsen. Beispiel: Für Punkte $P_1(4,5)$ und $P_2(20,2)$ ergibt sich $|20-4| + |2-5| = 16 + 3 = 19$.

### Fusionsmethoden

Die Fusion von Clustern erfolgt nach verschiedenen Methoden:

- Single-Linkage: Verwendet die kleinste Distanz zwischen Clustern.
- Complete-Linkage: Verwendet die größte Distanz zwischen Clustern.
- Average-Linkage: Verwendet die durchschnittliche Distanz zwischen Clustern.

### Vorteile

Vorteile sind die Flexibilität in der Clusterzahl, die hierarchische Struktur für detaillierte Analysen und die Eignung für kleine bis mittlere Datensätze.

### Nachteile

Nachteile umfassen die Rechenintensität bei großen Datensätzen, die Irreversibilität einmal getroffener Entscheidungen und die Anfälligkeit für Ausreißer.

### Anwendungsgebiete

Anwendungen finden sich in der Bioinformatik, wie bei Genexpressionsanalysen, in der Marktforschung für Kundensegmentierung, in der Dokumentenklassifizierung und in den Sozialwissenschaften für Gruppenbildung.