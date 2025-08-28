---
title: "Überwachtes und nicht-überwachtes Lernen"
description: "Überwachtes Lernen trainiert Modelle mit gekennzeichneten Daten für Vorhersagen, während unüberwachtes Lernen Muster in unbeschrifteten Daten erkennt. Beide Ansätze haben unterschiedliche Anwendungen und Herausforderungen."
---

## Überwachtes Lernen
Überwachtes Lernen ist ein zentraler Ansatz im maschinellen Lernen, bei dem Modelle **anhand von gekennzeichneten Trainingsdaten** trainiert werden. Ziel ist es, **Muster und Zusammenhänge** zu erkennen, die auf **unbekannte Daten** angewendet werden können.

## Definition
- **Überwachtes Lernen**: Ein Lernansatz, bei dem ein Modell auf Basis von Eingabedaten (**Features**) und den zugehörigen Ausgabewerten (**Labels**) trainiert wird. Das Modell lernt, eine Funktion zu approximieren, die die Eingaben den Ausgaben zuordnet.

## Funktionsweise
1. **Datensammlung**: Ein Datensatz wird erstellt, der aus Eingabedaten und den entsprechenden Ausgabewerten besteht.
2. **Datenaufteilung**: Der Datensatz wird typischerweise in zwei Teile aufgeteilt:
    - **Trainingsdatensatz (70-80%)**: Wird verwendet, um das Modell zu trainieren. Hier lernt das Modell, die Beziehung zwischen den Eingaben und den Ausgaben zu erkennen.
    - **Testdatensatz (20-30%)**: Wird verwendet, um die Leistung des Modells zu evaluieren. Hier wird überprüft, wie gut das Modell auf unbekannte Daten generalisiert.
      In einigen Fällen kann auch ein **Validierungsdatensatz** (z. B. 10-15%) verwendet werden, um Hyperparameter zu optimieren, bevor das endgültige Modell auf dem Testdatensatz bewertet wird.
3. **Modelltraining**: Das Modell wird mit dem Trainingsdatensatz trainiert, indem es die Gewichtungen anpasst, um die Fehler zwischen den vorhergesagten und den tatsächlichen Ausgaben zu minimieren.
4. **Modellbewertung**: Nach dem Training wird das Modell mit dem Testdatensatz evaluiert. Wichtige Metriken zur Bewertung sind:
    - **Genauigkeit (Accuracy)**: Der Anteil der **korrekt klassifizierten** Beispiele.
    - **Präzision (Precision)**: Anteil der **korrekt als positiv** klassifizierten Instanzen an allen als positiv klassifizierten Instanzen. *wenige falsch-positive Vorhersagen*
    - **Recall (Sensitivität)**: Anteil der **korrekt identifizierten** relevanten Instanzen an allen relevanten Instanzen. *keine falschen Vorhersagen*
    - **F1-Score**: Das harmonische Mittel von Präzision und Recall, das ein ausgewogenes Maß für die Modellleistung bietet.

## Anwendungsbeispiele

- **Betrugserkennung**: Identifikation von betrügerischen Transaktionen in Finanzdaten durch Analyse von Mustern in historischen Transaktionen.
- **Bilderkennung**: Klassifizierung von Bildern in verschiedene Kategorien, z. B. Erkennung von Objekten oder Gesichtern in Bildern.
- **Vorhersagemodelle**: Prognose von zukünftigen Ereignissen, wie z. B. Verkaufszahlen oder Wetterbedingungen, basierend auf historischen Daten.

## Herausforderungen
- **Overfitting**: Wenn das Modell zu gut auf den Trainingsdatensatz passt und dadurch die Fähigkeit verliert, auf neuen, unbekannten Daten gut zu generalisieren. Techniken wie Regularisierung, Cross-Validation und die Verwendung eines Testdatensatzes helfen, Overfitting zu vermeiden.
- **Datenqualität**: Die Leistung des Modells hängt stark von der Qualität der Daten ab. Rauschen, fehlende Werte oder unausgewogene Klassenverteilungen können die Ergebnisse negativ beeinflussen.
- **Feature Engineering**: Die Auswahl und Transformation der Eingabedaten (Features) ist entscheidend für den Erfolg des Modells. Gut gestaltete Features können die Leistung erheblich verbessern.

## Unüberwachtes Lernen
Unüberwachtes Lernen ist ein Ansatz im maschinellen Lernen, bei dem Algorithmen **Muster und Strukturen in unbeschrifteten Daten erkennen**, ohne dass vorherige Labels oder Ausgaben bereitgestellt werden.

## Definition
- **Unüberwachtes Lernen**: Ein Lernansatz, bei dem ein Modell auf Basis von Eingabedaten trainiert wird, um eigenständig Muster, Gruppen oder Strukturen zu identifizieren.

## Funktionsweise
1. **Datensammlung**: Ein Datensatz wird erstellt, der nur Eingabedaten (**Features**) enthält, ohne zugehörige Ausgabewerte (Labels).
2. **Mustererkennung**: Der Algorithmus analysiert die Daten und identifiziert Muster, Strukturen oder Gruppen.

## Algorithmen
- **Clusteranalyse**: Gruppiert ähnliche Datenpunkte in Cluster. Beispiele:
    - **K-Means**: Teilt die Daten in K Cluster basierend auf der Ähnlichkeit.
    - **Hierarchische Clusteranalyse**: Erstellt eine Baumstruktur von Cluster, die die Beziehungen zwischen den Datenpunkten zeigt.
- **Dimensionsreduktion**: Reduziert die Anzahl der Merkmale in den Daten, während die wesentlichen Informationen erhalten bleiben. Beispiele:
    - **Principal Component Analysis (PCA)**: Transformiert die Daten in eine niedrigdimensionale Darstellung, die die Varianz maximiert.
    - **t-Distributed Stochastic Neighbor Embedding (t-SNE)**: Visualisiert hochdimensionale Daten in zwei oder drei Dimensionen, indem es ähnliche Punkte nahe beieinander anordnet.
## Anwendungsbeispiele
- **Kundensegmentierung**: Identifikation von Kundengruppen in Marketingdaten, um gezielte Kampagnen zu entwickeln.
- **Anomalieerkennung**: Erkennung von ungewöhnlichen Mustern in Daten, z. B. bei der Betrugserkennung.
- **Bildkompression**: Reduzierung der Datenmenge in Bildern durch Dimensionsreduktion, um Speicherplatz zu sparen.

## Herausforderungen
- **Interpretation der Ergebnisse**: Da es keine Labels gibt, kann es schwierig sein, die gefundenen Muster zu interpretieren und zu bewerten.
- **Wahl des Algorithmus**: Die Auswahl des richtigen Algorithmus und der Parameter kann die Ergebnisse erheblich beeinflussen.
- **Skalierbarkeit**: Einige Algorithmen können bei großen Datensätzen ineffizient sein.

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
> datasolut. (2020, August 27). Überwachtes Lernen (Supervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Retrieved from https://www.youtube.com/watch?v=BkDUDi6YDaU
> datasolut. (2020, August 29). Unüberwachtes Lernen (Unsupervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Retrieved from https://www.youtube.com/watch?v=XSOi9MKfEHQ
> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1

## Anwendungsbeispiele

- **Betrugserkennung**: Identifikation von betrügerischen Transaktionen in Finanzdaten durch Analyse von Mustern in historischen Transaktionen.
- **Bilderkennung**: Klassifizierung von Bildern in verschiedene Kategorien, z. B. Erkennung von Objekten oder Gesichtern in Bildern.
- **Vorhersagemodelle**: Prognose von zukünftigen Ereignissen, wie z. B. Verkaufszahlen oder Wetterbedingungen, basierend auf historischen Daten.

## Herausforderungen
- **Overfitting**: Wenn das Modell zu gut auf den Trainingsdatensatz passt und dadurch die Fähigkeit verliert, auf neuen, unbekannten Daten gut zu generalisieren. Techniken wie Regularisierung, Cross-Validation und die Verwendung eines Testdatensatzes helfen, Overfitting zu vermeiden.
- **Datenqualität**: Die Leistung des Modells hängt stark von der Qualität der Daten ab. Rauschen, fehlende Werte oder unausgewogene Klassenverteilungen können die Ergebnisse negativ beeinflussen.
- **Feature Engineering**: Die Auswahl und Transformation der Eingabedaten (Features) ist entscheidend für den Erfolg des Modells. Gut gestaltete Features können die Leistung erheblich verbessern.

## Unüberwachtes Lernen
Unüberwachtes Lernen ist ein Ansatz im maschinellen Lernen, bei dem Algorithmen **Muster und Strukturen in unbeschrifteten Daten erkennen**, ohne dass vorherige Labels oder Ausgaben bereitgestellt werden.

## Definition
- **Unüberwachtes Lernen**: Ein Lernansatz, bei dem ein Modell auf Basis von Eingabedaten trainiert wird, um eigenständig Muster, Gruppen oder Strukturen zu identifizieren.

## Funktionsweise
1. **Datensammlung**: Ein Datensatz wird erstellt, der nur Eingabedaten (**Features**) enthält, ohne zugehörige Ausgabewerte (Labels).
2. **Mustererkennung**: Der Algorithmus analysiert die Daten und identifiziert Muster, Strukturen oder Gruppen.

## Algorithmen
- **Clusteranalyse**: Gruppiert ähnliche Datenpunkte in Cluster. Beispiele:
    - **K-Means**: Teilt die Daten in K Cluster basierend auf der Ähnlichkeit.
    - **Hierarchische Clusteranalyse**: Erstellt eine Baumstruktur von Clustern, die die Beziehungen zwischen den Datenpunkten zeigt.
- **Dimensionsreduktion**: Reduziert die Anzahl der Merkmale in den Daten, während die wesentlichen Informationen erhalten bleiben. Beispiele:
    - **Principal Component Analysis (PCA)**: Transformiert die Daten in eine niedrigdimensionale Darstellung, die die Varianz maximiert.
    - **t-Distributed Stochastic Neighbor Embedding (t-SNE)**: Visualisiert hochdimensionale Daten in zwei oder drei Dimensionen, indem es ähnliche Punkte nahe beieinander anordnet.
## Anwendungsbeispiele
- **Kundensegmentierung**: Identifikation von Kundengruppen in Marketingdaten, um gezielte Kampagnen zu entwickeln.
- **Anomalieerkennung**: Erkennung von ungewöhnlichen Mustern in Daten, z. B. bei der Betrugserkennung.
- **Bildkompression**: Reduzierung der Datenmenge in Bildern durch Dimensionsreduktion, um Speicherplatz zu sparen.

## Herausforderungen
- **Interpretation der Ergebnisse**: Da es keine Labels gibt, kann es schwierig sein, die gefundenen Muster zu interpretieren und zu bewerten.
- **Wahl des Algorithmus**: Die Auswahl des richtigen Algorithmus und der Parameter kann die Ergebnisse erheblich beeinflussen.
- **Skalierbarkeit**: Einige Algorithmen können bei großen Datensätzen ineffizient sein.

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
> datasolut. (2020, August 27). Überwachtes Lernen (Supervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Retrieved from https://www.youtube.com/watch?v=BkDUDi6YDaU
> datasolut. (2020, August 29). Unüberwachtes Lernen (Unsupervised Learning) einfach erklärt! - Machine Learning Grundlagen. Youtube. Retrieved from https://www.youtube.com/watch?v=XSOi9MKfEHQ
> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1