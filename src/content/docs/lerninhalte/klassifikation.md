---
title: "Klassifikation"
description: "Klassifikation ist ein Teil des überwachten Lernens, das Datenpunkte zu vordefinierten Kategorien zuordnet. Algorithmen wie logistische Regression, Entscheidungsbäume und KNN werden verwendet, mit Metriken wie Accuracy und Precision zur Evaluation."
---

Klassifikation bezeichnet im Bereich des maschinellen Lernens einen Teilbereich des überwachten Lernens, bei dem Datenpunkte vordefinierten Kategorien oder Klassen zugeordnet werden. Dabei wird eine Funktion gesucht, die eine möglichst genaue Trennlinie zwischen den Datenpunkten beschreibt. Klassifikation ermöglicht die Organisation, Analyse und Entscheidungsfindung auf Basis von Daten und findet Anwendung in Bereichen wie Spam-Erkennung, medizinischer Diagnose und Bilderkennung.

## Zweck
Klassifikation dient der strukturierten Organisation von Daten, wodurch diese übersichtlich und suchbar werden. Sie unterstützt die Analyse, indem Muster und Zusammenhänge in den Daten erkannt werden. Zudem erleichtert sie die Entscheidungsfindung, etwa indem Ergebnisse genutzt werden, um zukünftige Maßnahmen wie Werbekampagnen zu optimieren.

## Arten der Klassifikation
Es gibt verschiedene Arten der Klassifikation:

1. **Binäre Klassifikation**: Hierbei werden Datenpunkte einer von zwei möglichen Klassen zugeordnet.
2. **Multi-Class-Klassifikation**: Datenpunkte können mehr als zwei Klassen zugeordnet werden.
3. **Multi-Label-Klassifikation**: Ein einzelner Datenpunkt kann gleichzeitig mehreren Klassen zugeordnet werden.

## Wichtige Algorithmen
Zu den gängigen Algorithmen für die Klassifikation zählen:

- [Logistische Regression](/open-fidup/lerninhalte/regression#logistische-regression): Ermöglicht eine dichotome oder binäre Klassifikation.
- [Entscheidungsbäume](/open-fidup/lerninhalte/entscheidungsbaum)
- [Random Forest](/open-fidup/lerninhalte/random-forest)
- [Support Vector Machines (SVM)](/open-fidup/lerninhalte/support-vector-machine)
- [K-Nearest Neighbors (KNN)](/open-fidup/lerninhalte/k-nearest-neighbor)
- [Neuronale Netze](/open-fidup/lerninhalte/neural-network)

## Vorgehen
Der Prozess der Klassifikation umfasst typischerweise folgende Schritte:

1. Datensammlung und -aufbereitung
2. Auswahl relevanter Merkmale (Features)
3. Aufteilung der Daten in Trainings- und Testdatensätze
4. Auswahl und Training eines Modells
5. Evaluation und Optimierung des Modells
6. Anwendung auf neue, unbekannte Daten

## Evaluationsmetriken
Zur Bewertung von Klassifikationsmodellen werden verschiedene Metriken verwendet. Diese können je nach Quelle variieren, wie in Fachbüchern oder IHK-Leitfäden beschrieben.

### Metriken aus Fachbüchern
- **Accuracy**: Der Anteil der korrekt klassifizierten Instanzen.
- **Precision**: Der Anteil der korrekt als positiv klassifizierten Instanzen an allen als positiv klassifizierten.  
  $$Precision = \frac{True\ Positives}{False\ Positives + True\ Positives}$$
- **Recall**: Der Anteil der korrekt als positiv klassifizierten Instanzen an allen tatsächlich positiven.  
  $$Recall = \frac{True\ Positives}{True\ Positives + False\ Negatives}$$
- **F1-Score**: Das harmonische Mittel aus Precision und Recall, das ein ausgewogenes Verhältnis darstellt.
- **ROC-Kurve** und **AUC**: Eine Visualisierung und Quantifizierung der Modellleistung.
- **Confusion Matrix**: Eine tabellarische Darstellung der tatsächlichen und vorhergesagten Klassifikationen eines Modells. Ein Beispiel für eine binäre Klassifikation:

  | Tatsächliche Klasse / Vorhergesagte Klasse | Positiv | Negativ |
  |--------------------------------------------|---------|---------|
  | Positiv                                   | True Positive | False Negative |
  | Negativ                                   | False Positive | True Negative |

### Metriken aus IHK-Leitfäden
- Genauigkeit: Berechnet als $\frac{\text{Korrekte Vorhersagen}}{\text{Gesamtzahl der Daten}}$.
- Kompaktheit
- Effizienz: Gemessen an Trainingszeit und Vorhersagedauer.
- Skalierbarkeit für größere Datenmengen
- Robustheit
- Weitere Aspekte je nach Kontext.

## Herausforderungen
Bei der Klassifikation können verschiedene Probleme auftreten:

- **Overfitting**: Das Modell lernt die Trainingsdaten zu genau und generalisiert schlecht auf neue Daten.
- **Underfitting**: Das Modell ist zu einfach und erfasst wichtige Muster nicht.
- **Imbalancierte Daten**: Eine ungleiche Verteilung der Klassen im Datensatz.
- Fehlende oder verrauschte Daten.

## Anwendungsgebiete
Klassifikation findet in zahlreichen Bereichen Anwendung, darunter:

- Spam-Erkennung in E-Mails
- Medizinische Diagnose
- Bilderkennung
- Spracherkennung
- Kreditwürdigkeitsprüfung

## Vor- und Nachteile
### Vorteile
- Ermöglicht automatisierte Entscheidungsfindung.
- Kann mit großen Datenmengen umgehen.
- Vielseitig einsetzbar in verschiedenen Domänen.

### Nachteile
- Benötigt oft große Mengen gelabelter Daten.
- Kann bei komplexen Problemen rechenintensiv sein.
- Ergebnisse können durch Bias in den Trainingsdaten beeinflusst werden.