---
title: "Random Forest: Ensemble-Algorithmus für maschinelles Lernen"
description: "Random Forest kombiniert Entscheidungsbäume für Klassifikation und Regression. Er reduziert Overfitting, handhabt hochdimensionale Daten. Hyperparameter steuern Bäume, Feature Importance hilft bei Interpretation."
---

- **leistungsstarker** und **vielseitiger** Algorithmus des [[Maschinelles Lernen|maschinellen Lernens]], der **mehrere** [[Entscheidungsbaum|Entscheidungsbäume]] kombiniert, um ein einzelnes Ergebnis zu erzielen
- Es handelt sich um einen **[[Überwachtes und nicht-überwachtes Lernen|überwachten Lernalgorithmus]]**, der sowohl für [[Klassifikation|Klassifikations-]] als auch für [[Regression|Regressionsprobleme]] eingesetzt werden kann 

## Funktionsweise
- Random Forest baut mehrere Entscheidungsbäume auf und kombiniert deren Vorhersagen
- Jeder Baum wird mit einer zufälligen Teilmenge der Trainingsdaten (Bootstrap-Stichprobe) erstellt
- Bei jedem Split werden nur zufällig ausgewählte Merkmale berücksichtigt (Feature Bagging)
- Für die Vorhersage:
    - Bei Klassifikation: Mehrheitsentscheidung der Bäume
    - Bei Regression: Durchschnitt der Vorhersagen aller Bäume
## Vorteile
- Hohe Genauigkeit durch Ensemble-Lernen
- Reduziert Overfitting im Vergleich zu einzelnen Entscheidungsbäumen
- Kann mit hochdimensionalen Daten umgehen
- Gut parallelisierbar, da Bäume unabhängig voneinander erstellt werden

## Wichtige Hyperparameter
- **n_estimators**: Anzahl der Bäume im Wald
- **max_features**: Maximale Anzahl der Merkmale pro Split
- **min_samples_leaf**: Minimale Anzahl von Samples in einem Blatt
- **n_jobs**: Anzahl der zu verwendenden Prozessoren

## Anwendungsgebiete
- Finanzwesen: Kreditrisikobewertung, Betrugserkennung
- Gesundheitswesen: Krankheitsdiagnose, Vorhersage von Behandlungsergebnissen
- Marketing: Kundensegmentierung, Vorhersage von Kundenverhalten
- Ökologie: Vorhersage von Artenverteilungen

## Feature Importance
Random Forests können die **Wichtigkeit von Merkmalen bewerten**, was bei der Merkmalsselektion und Modellinterpretation hilft.

Durch die Kombination mehrerer unkorrellierter Bäume erzielt Random Forest oft **genauere und stabilere Ergebnisse** als einzelne Entscheidungsbäume.
