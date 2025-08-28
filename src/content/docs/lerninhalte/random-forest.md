---
title: "Random Forest"
description: "Random Forest ist ein Algorithmus des maschinellen Lernens, der mehrere Entscheidungsbäume kombiniert, um Klassifikation und Regression zu verbessern. Er reduziert Overfitting, handhabt hochdimensionale Daten und nutzt Hyperparameter zur Steuerung der Bäume sowie Feature Importance zur Interpretation."
---

Random Forest ist ein leistungsstarker und vielseitiger Algorithmus des [maschinellen Lernens](/open-fidup/lerninhalte/maschinelles-lernen), der mehrere [Entscheidungsbäume](/open-fidup/lerninhalte/entscheidungsbaum) kombiniert, um ein einzelnes Ergebnis zu erzielen. Es handelt sich um einen [überwachten Lernalgorithmus](/open-fidup/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen), der sowohl für [Klassifikations-](/open-fidup/lerninhalte/klassifikation) als auch für [Regressionsprobleme](/open-fidup/lerninhalte/regression) eingesetzt werden kann.

## Funktionsweise
Random Forest baut mehrere Entscheidungsbäume auf und kombiniert deren Vorhersagen. Jeder Baum wird mit einer zufälligen Teilmenge der Trainingsdaten erstellt, die als Bootstrap-Stichprobe bezeichnet wird. Bei jedem Split werden nur zufällig ausgewählte Merkmale berücksichtigt, ein Verfahren, das als Feature Bagging bekannt ist. Für die Vorhersage gilt bei Klassifikation die Mehrheitsentscheidung der Bäume, bei Regression der Durchschnitt der Vorhersagen aller Bäume.

## Vorteile
- Hohe Genauigkeit durch Ensemble-Lernen.
- Reduziert Overfitting im Vergleich zu einzelnen Entscheidungsbäumen.
- Kann mit hochdimensionalen Daten umgehen.
- Gut parallelisierbar, da Bäume unabhängig voneinander erstellt werden.

## Wichtige Hyperparameter
- **n_estimators**: Anzahl der Bäume im Wald.
- **max_features**: Maximale Anzahl der Merkmale pro Split.
- **min_samples_leaf**: Minimale Anzahl von Samples in einem Blatt.
- **n_jobs**: Anzahl der zu verwendenden Prozessoren.

## Anwendungsgebiete
- Finanzwesen: Kreditrisikobewertung, Betrugserkennung.
- Gesundheitswesen: Krankheitsdiagnose, Vorhersage von Behandlungsergebnissen.
- Marketing: Kundensegmentierung, Vorhersage von Kundenverhalten.
- Ökologie: Vorhersage von Artenverteilungen.

## Feature Importance
Random Forest kann die Wichtigkeit von Merkmalen bewerten, was bei der Merkmalsselektion und Modellinterpretation hilft. Durch die Kombination mehrerer unkorrelierter Bäume erzielt Random Forest oft genauere und stabilere Ergebnisse als einzelne Entscheidungsbäume.