---
title: "Überwachtes und nicht-überwachtes Lernen"
description: "Überwachtes Lernen trainiert Modelle mit gekennzeichneten Daten für Vorhersagen, während unüberwachtes Lernen Muster in unbeschrifteten Daten erkennt. Beide Ansätze haben unterschiedliche Anwendungen und Herausforderungen."
---

Überwachtes und nicht-überwachtes Lernen sind zwei grundlegende Paradigmen im [maschinellen Lernen](/open-fidup/lerninhalte/maschinelles-lernen). Überwachtes Lernen nutzt gekennzeichnete Daten, um Modelle zu trainieren, die Vorhersagen treffen können. Nicht-überwachtes Lernen hingegen identifiziert Muster in unbeschrifteten Daten ohne vorherige Labels. Diese Ansätze unterscheiden sich in ihren Zielen, Methoden und Anwendungen, wobei jeder spezifische Herausforderungen mit sich bringt.

## Überwachtes Lernen

Überwachtes Lernen stellt einen zentralen Ansatz im maschinellen Lernen dar. Hierbei werden Modelle anhand von gekennzeichneten Trainingsdaten trainiert, um Muster und Zusammenhänge zu erkennen. Diese können anschließend auf unbekannte Daten angewendet werden.

### Definition

Überwachtes Lernen bezeichnet einen Lernansatz, bei dem ein Modell auf Basis von Eingabedaten, den sogenannten Features, und den zugehörigen Ausgabewerten, den Labels, trainiert wird. Das Modell approximiert eine Funktion, die Eingaben den Ausgaben zuordnet.

### Funktionsweise

Der Prozess des überwachten Lernens umfasst mehrere Schritte:

1. **Datensammlung**: Es wird ein Datensatz erstellt, der Eingabedaten und die entsprechenden Ausgabewerte enthält.
2. **Datenaufteilung**: Der Datensatz wird typischerweise in zwei Teile geteilt:
   - **Trainingsdatensatz (70–80 %)**: Dient dem Training des Modells, um die Beziehung zwischen Eingaben und Ausgaben zu erlernen.
   - **Testdatensatz (20–30 %)**: Wird zur Evaluierung der Modellleistung verwendet, um die Generalisierung auf unbekannte Daten zu prüfen.
   In manchen Fällen kommt ein Validierungsdatensatz (z. B. 10–15 %) hinzu, um Hyperparameter zu optimieren, bevor das Modell am Testdatensatz bewertet wird.
3. **Modelltraining**: Das Modell wird mit dem Trainingsdatensatz trainiert, indem Gewichtungen angepasst werden, um Fehler zwischen vorhergesagten und tatsächlichen Ausgaben zu minimieren.
4. **Modellbewertung**: Nach dem Training erfolgt die Evaluierung mit dem Testdatensatz. Wichtige Metriken sind:
   - **Genauigkeit (Accuracy)**: Anteil der korrekt klassifizierten Beispiele.
   - **Präzision (Precision)**: Anteil der korrekt als positiv klassifizierten Instanzen an allen als positiv klassifizierten Instanzen. Dies minimiert falsch-positive Vorhersagen.
   - **Recall (Sensitivität)**: Anteil der korrekt identifizierten relevanten Instanzen an allen relevanten Instanzen. Dies vermeidet falsch-negative Vorhersagen.
   - **F1-Score**: Harmonisches Mittel von Präzision und Recall, das ein ausgewogenes Maß für die Modellleistung bietet.

### Anwendungsbeispiele

- **Betrugserkennung**: Identifikation betrügerischer Transaktionen in Finanzdaten durch Analyse historischer Muster.
- **Bilderkennung**: Klassifizierung von Bildern in Kategorien, etwa die Erkennung von Objekten oder Gesichtern.
- **Vorhersagemodelle**: Prognose zukünftiger Ereignisse, wie Verkaufszahlen oder Wetterbedingungen, basierend auf historischen Daten.

### Herausforderungen

- **Overfitting**: Das Modell passt zu gut an den Trainingsdatensatz an und verliert die Fähigkeit, auf neue Daten zu generalisieren. Techniken wie Regularisierung, Cross-Validation und Testdatensätze helfen dabei.
- **Datenqualität**: Rauschen, fehlende Werte oder unausgewogene Klassenverteilungen beeinträchtigen die Ergebnisse negativ.
- **Feature Engineering**: Die Auswahl und Transformation der Eingabedaten ist entscheidend; gut gestaltete Features verbessern die Leistung erheblich.

## Unüberwachtes Lernen

Unüberwachtes Lernen ist ein Ansatz im maschinellen Lernen, bei dem Algorithmen Muster und Strukturen in unbeschrifteten Daten erkennen, ohne dass vorherige Labels oder Ausgaben vorliegen.

### Definition

Unüberwachtes Lernen beschreibt einen Lernansatz, bei dem ein Modell auf Basis von Eingabedaten trainiert wird, um eigenständig Muster, Gruppen oder Strukturen zu identifizieren.

### Funktionsweise

Der Prozess des unüberwachten Lernens besteht aus zwei Hauptschritten:

1. **Datensammlung**: Es wird ein Datensatz erstellt, der nur Eingabedaten, also Features, enthält, ohne zugehörige Ausgabewerte.
2. **Mustererkennung**: Der Algorithmus analysiert die Daten und identifiziert Muster, Strukturen oder Gruppen.

### Algorithmen

- **Clusteranalyse**: Gruppiert ähnliche Datenpunkte in Cluster. Beispiele:
  - **K-Means**: Teilt Daten in K Cluster basierend auf Ähnlichkeit.
  - **Hierarchische Clusteranalyse**: Erstellt eine Baumstruktur von Clustern, die Beziehungen zwischen Datenpunkten zeigt.
- **Dimensionsreduktion**: Reduziert die Anzahl der Merkmale, während wesentliche Informationen erhalten bleiben. Beispiele:
  - **Principal Component Analysis (PCA)**: Transformiert Daten in eine niedrigdimensionale Darstellung, die Varianz maximiert.
  - **t-Distributed Stochastic Neighbor Embedding (t-SNE)**: Visualisiert hochdimensionale Daten in zwei oder drei Dimensionen, indem ähnliche Punkte nahe beieinander platziert werden.

### Anwendungsbeispiele

- **Kundensegmentierung**: Identifikation von Kundengruppen in Marketingdaten zur Entwicklung gezielter Kampagnen.
- **Anomalieerkennung**: Erkennung ungewöhnlicher Muster, etwa bei Betrugserkennung.
- **Bildkompression**: Reduzierung der Datenmenge in Bildern durch Dimensionsreduktion zur Speicherplatzersparnis.

### Herausforderungen

- **Interpretation der Ergebnisse**: Ohne Labels fällt die Interpretation und Bewertung gefundener Muster schwer.
- **Wahl des Algorithmus**: Die Auswahl des richtigen Algorithmus und seiner Parameter beeinflusst die Ergebnisse stark.
- **Skalierbarkeit**: Einige Algorithmen sind bei großen Datensätzen ineffizient.

## Vergleich

| Aspekt                 | Überwachtes Lernen (Supervised Learning)                                     | Unüberwachtes Lernen (Unsupervised Learning)                                  |
| ---------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Definition**         | Modell wird mit gekennzeichneten Daten trainiert, um Vorhersagen zu treffen. | Modell erkennt Muster in unbeschrifteten Daten ohne vorherige Labels.         |
| **Ziel**               | Vorhersage von Ausgaben basierend auf Eingaben.                              | Entdeckung von Mustern, Strukturen oder Gruppen in den Daten.                 |
| **Daten**              | Benötigt gekennzeichnete Daten (Eingaben und Ausgaben).                      | Arbeitet mit unbeschrifteten Daten (nur Eingaben).                            |
| **Beispiele**          | - Betrugserkennung<br>- Bilderkennung<br>- Vorhersagemodelle                 | - Clusteranalyse<br>- Dimensionsreduktion<br>- Anomalieerkennung              |
| **Algorithmen**        | - Entscheidungsbäume<br>- Support Vector Machines (SVM)<br>- Neuronale Netze | - K-Means<br>- Hierarchische Clusteranalyse<br>- PCA, t-SNE                   |
| **Leistungsbewertung** | Metriken wie Genauigkeit, Präzision, Recall, F1-Score.                       | Metriken wie Silhouette-Score, Davies-Bouldin-Index (für Cluster).            |
| **Herausforderungen**  | - Overfitting<br>- Datenqualität<br>- Feature Engineering                    | - Interpretation der Ergebnisse<br>- Wahl des Algorithmus<br>- Skalierbarkeit |
| **Anwendungsgebiete**  | - Medizinische Diagnosen<br>- Finanzprognosen<br>- Spam-Erkennung            | - Marktforschung<br>- Kundensegmentierung<br>- Explorative Datenanalyse       |

## Quellen

- datasolut. (2020, August 27). Überwachtes Lernen (Supervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Abgerufen von https://www.youtube.com/watch?v=BkDUDi6YDaU
- datasolut. (2020, August 29). Unüberwachtes Lernen (Unsupervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Abgerufen von https://www.youtube.com/watch?v=XSOi9MKfEHQ
- AI Chat. (2024, September 19). Abgerufen von https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1