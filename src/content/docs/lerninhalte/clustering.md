---
title: "Clustering"
description: "Clustering ist eine Methode zur Gruppierung ähnlicher Datenpunkte in homogene Cluster, die intern ähnlich und extern unterschiedlich sind. Algorithmen wie K-Means und hierarchisches Clustering werden verwendet. Anwendungen sind Kundensegmentierung und Anomalieerkennung. Distanzmaße wie euklidische Distanz sind zentral."
---

- Methode zur **Gruppierung ähnlicher Datenpunkte** in Cluster.
- Ziel: Daten in **homogene Gruppen (Cluster)** einteilen, die intern möglichst ähnlich und extern möglichst unterschiedlich sind
- Anwendung: Häufig im Marketing zur Kundensegmentierung eingesetzt
- Vorgehen:
    1. Ähnlichkeits-/Distanzmaß definieren
    2. Clustering-Algorithmus auswählen und anwenden
    3. Optimale Clusterzahl bestimmen
    4. Ergebnisse interpretieren und validieren
- Beispiel-Algorithmen: K-Means, hierarchisches Clustering

## K-Means Clusteranalyse
K-Means ist eines der **einfachsten** und **gängigsten** Verfahren zur Clusteranalyse. Es ist ein [unüberwachter Lernalgorithmus](/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen), der Datenpunkte in K vordefinierten Clustern gruppiert.
### Algorithmus
1. **Initialisierung**: Definiere die Anzahl K der Cluster und wähle K zufällige Datenpunkte als initiale Cluster-Zentren aus.
2. **Zuordnung**: Ordne jeden Datenpunkt dem nächstgelegenen Cluster-Zentrum zu, basierend auf der euklidischen Distanz.
3. **Aktualisierung**: Berechne die neuen Cluster-Zentren als Mittelwert aller Datenpunkte im jeweiligen Cluster.
4. **Iteration**: Wiederhole Schritte 2 und 3, bis die Cluster-Zentren sich nicht mehr signifikant verändern oder eine maximale Anzahl von Iterationen erreicht ist.
### Wichtige Aspekte
- **Distanzmaß**: In der Regel wird die [euklidische Distanz](/lerninhalte/euklidische-distanz) verwendet, insbesondere für zweidimensionale Daten.
- **Qualitätsbewertung**: Die Qualität des Clusterings kann anhand der Varianz innerhalb der Cluster beurteilt werden. Ein Clustering mit geringerer Varianz gilt als besser.
- **Wahl von K**: Die optimale Anzahl der Cluster K kann mithilfe des "Elbow-Plots" bestimmt werden. Dieser zeigt, ab welchem Punkt die Reduktion der Varianz nicht mehr signifikant ist. (Allgemeine Varianz bestimmen, dann halt gucken ab wann Varianz nicht mehr so stark abnimmt)
### Vor- und Nachteile
- **Vorteile**:
	- Einfach zu implementieren und zu verstehen
	- Effizient bei großen Datensätzen
- **Nachteile**:
	- Ergebnis kann von der zufälligen Initialisierung abhängen
	- Vorherige Festlegung von K erforderlich
	- Kann Probleme mit nicht-konvexen Clustern haben
### Anwendungen
- Marktsegmentierung
- Dokumentenklassifizierung
- Bildkompression
- Anomalieerkennung

## Hierarchische Clusteranalyse
- Statistisches Verfahren zur Gruppierung **ähnlicher Objekte in Cluster**
- Erstellt eine hierarchische Struktur (Baum) der Cluster, genannt Dendrogramm
- Zeigt Beziehungen zwischen Objekten und wie sie auf verschiedenen Ebenen gruppiert werden

### Hauptmerkmale
- **Keine vorherige Festlegung** der Clusterzahl erforderlich
- Ermöglicht die Analyse von Clustern auf verschiedenen Detailebenen
- Ergebnis ist visuell als Baumdiagramm darstellbar

### Arten
1. Agglomerativ (bottom-up):
    - Startet mit einzelnen Datenpunkten als separate Cluster
    - Fusioniert schrittweise die ähnlichsten Cluster
2. Divisiv (top-down):
    - Beginnt mit allen Datenpunkten in einem Cluster
    - Teilt schrittweise in kleinere Cluster auf

### Algorithmus (agglomerativ)
1. Jeder Datenpunkt bildet zunächst ein eigenes Cluster
2. Berechnung der Distanzen zwischen allen Clustern
3. Fusion der zwei ähnlichsten Cluster
4. Wiederholung der Schritte 2-3 bis alle Objekte in einem Cluster sind

### Distanzmaße
- [Euklidische Distanz](/lerninhalte/euklidische-distanz)
- Manhattan-Distanz
	- Summe der absoluten Differenzen der Koordinaten zweier Punkte
	- Auch bekannt als "Cityblock-Distanz" oder "L1-Norm"
	- Misst Entfernung entlang rechtwinkliger Achsen
	- z.B. $P_1(4,5), P_2(20, 2) = \vec{P_1P_2}= |20-4| + |2-5| = 16 + 3 = 19$

### Fusionsmethoden
![[Pasted image 20241002144231.png]]
- Single-Linkage: Kleinste Distanz zwischen Clustern
![[Pasted image 20241002144239.png]]
- Complete-Linkage: Größte Distanz zwischen Clustern
![[Pasted image 20241002144248.png]]
- Average-Linkage: Durchschnittliche Distanz zwischen Clustern

### Vorteile
- Flexibel in der Clusterzahl
- Hierarchische Struktur ermöglicht detaillierte Analyse
- Gut für kleine bis mittlere Datensätze geeignet

### Nachteile
- Rechenintensiv für große Datensätze
- Einmal getroffene Entscheidungen sind nicht revidierbar
- Anfällig für Ausreißer

### Anwendungsgebiete
- Bioinformatik (z.B. Genexpressionsanalyse)
- Marktforschung (Kundensegmentierung)
- Dokumentenklassifikation
- Sozialwissenschaften (Gruppenbildung)