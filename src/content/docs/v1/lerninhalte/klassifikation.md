---
title: "Klassifikation"
description: "Klassifikation ist ein Teil des überwachten Lernens, das Datenpunkte zu vordefinierten Kategorien zuordnet. Algorithmen wie logistische Regression, Entscheidungsbäume und KNN werden verwendet, mit Metriken wie Accuracy und Precision zur Evaluation."
---

- gehört zum [überwachten Lernen](/open-fidup/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen)
- gesucht wird eine **Funktion**, die eine möglichst genaue **Trennlinie** zwischen den Datenpunkten beschreibt
- Ziel: Zuordnung von Datenpunkten zu **vordefinierten Kategorien** oder Klassen

## Zweck
- **Organisation:** Die Daten werden übersichtlich und suchbar.
- **Analyse:** Durch die Klassifizierung lassen sich Muster und Zusammenhänge erkennen.
- **Entscheidungsfindung:** Die Ergebnisse der Klassifikation können genutzt werden, um zukünftige Entscheidungen zu treffen, z.B. welche Werbemaßnahmen besonders effektiv sind.

## Arten der Klassifikation
1. **Binäre Klassifikation**: Zwei mögliche Klassen
2. **Multi-Class-Klassifikation**: Mehr als zwei mögliche Klassen
3. **Multi-Label-Klassifikation**: Ein Datenpunkt kann mehreren Klassen zugeordnet werden

## Wichtige Algorithmen
- [Logistische Regression](/open-fidup/lerninhalte/regression#logistische-regression): Möglichkeit einer *dichotomen/binären Klassifikation*
- [Entscheidungsbäume](/open-fidup/lerninhalte/entscheidungsbaum)
- [Random Forest](/open-fidup/lerninhalte/random-forest)
- [Support Vector Machines (SVM)](/open-fidup/lerninhalte/support-vector-machine)
- [K-Nearest Neighbors (KNN)](/open-fidup/lerninhalte/k-nearest-neighbor)
- [Neuronale Netze](/open-fidup/lerninhalte/neural-network)

## Vorgehen
1. Datensammlung und -aufbereitung
2. Auswahl relevanter Features
3. Aufteilung in Trainings- und Testdaten
4. Modellauswahl und -training
5. Evaluation und Optimierung
6. Anwendung auf neue, ungesehene Daten

## Evaluationsmetriken
### Fachbuch
- **Accuracy**: Anteil korrekt klassifizierter Instanzen
- **Precision**: Anteil der korrekt als positiv klassifizierten Instanzen an allen als positiv klassifizierten ($Precision=\dfrac{True Positives}{False Positives + True Positives}​$)
- **Recall**: Anteil der korrekt als positiv klassifizierten Instanzen an allen tatsächlich positiven ($Recall = \dfrac{True Positives}{True Positives + False Negatives}$)
- **F1-Score**: Harmonisches Mittel (ausgewogenes Verhältnis) aus Precision und Recall
- **ROC-Kurve** und **AUC**: Visualisierung und Quantifizierung der Modellperformance
- **Confusion Matrix**, tabellarische Darstellung der tatsächlichen und vorhergesagten Klassifikationen eines Modells

### IHK
- Genauigkeit (= $\dfrac{\text{Korrekte} \space \text{Vorhersagen}}{\text{Gesamtzahl} \space \text{der} \space \text{Daten}}$)
- Kompaktheit
- Effizienz (gemessen an Trainingszeit und Vorhersagedauer)
- Skalierbarkeit für größere Datenmengen
- Robustheit
- ...

## Herausforderungen
- **Overfitting**: Modell lernt Trainingsdaten zu genau und generalisiert schlecht
- **Underfitting**: Modell ist zu einfach und erfasst wichtige Muster nicht
- **Imbalancierte Daten**: Ungleiche Verteilung der Klassen im Datensatz
- Fehlende oder verrauschte Daten

## Anwendungsgebiete
- Spam-Erkennung in E-Mails
- Medizinische Diagnose
- Bilderkennung
- Spracherkennung
- Kreditwürdigkeitsprüfung

## Vor- und Nachteile
- **Vorteile**:
	- Ermöglicht automatisierte Entscheidungsfindung
	- Kann mit großen Datenmengen umgehen
	- Vielseitig einsetzbar in verschiedenen Domänen
- **Nachteile**:
	- Benötigt oft große Mengen gelabelter Daten
	- Kann bei komplexen Problemen rechenintensiv sein
	- Ergebnisse können durch Bias in den Trainingsdaten beeinflusst werden


