---
title: "Neural Network: Künstliche neuronale Netze"
description: "Neuronale Netze sind Modelle des maschinellen Lernens, die aus Eingabe-, verborgenen und Ausgabeschichten bestehen. Sie verarbeiten Daten durch Gewichtungen und Aktivierungsfunktionen, mit Anwendungen in Mustererkennung und Vorhersage."
---

Neuronale Netze sind Modelle des **maschinellen Lernens**, die dem menschlichen Gehirn nachempfunden sind. Sie bestehen aus verschiedenen Schichten, die Informationen verarbeiten und Ergebnisse liefern.

## Aufbau eines Neuronalen Netzes
Ein neuronales Netz besteht aus drei Hauptschichten:

- **Eingabeschicht**: Nimmt Informationen auf.
- **Verborgene Schichten**: Verarbeiten und gewichten die Informationen. Es können mehrere verborgene Schichten vorhanden sein.
- **Ausgabeschicht**: Gibt das verarbeitete Ergebnis aus.

### Struktur
- **Knoten (Neuronen)**: Die Verarbeitungseinheiten des Netzes.
- **Kanten (Verbindungen)**: Die Verbindungen zwischen den Neuronen, die Gewichtungen tragen.

![[Pasted image 20240919130334.png]]
## Funktionsweise
1. **Informationserfassung**: Daten werden in der Eingabeschicht aufgenommen.
2. **Datenverarbeitung**: Informationen werden durch die verborgenen Schichten geleitet und gewichtet.
3. **Ergebnisausgabe**: Die Ausgabeschicht liefert das finale Ergebnis.
![[image.psd(1).png]]
## Wichtige Konzepte
- **Gewichtungen**: Bestimmen die Stärke der Verbindungen zwischen Neuronen.
- **Aktivierungsfunktion**: Entscheidet, ob und wie stark ein Neuron aktiviert wird.
- **Schwellenwert**: Der Mindestwert, ab dem ein Neuron aktiviert wird.

### Aktivierungsfunktionen
- **Sigmoid**: Werte zwischen 0 und 1, geeignet für binäre Klassifikation.
- **ReLU (Rectified Linear Unit)**: Gibt positive Werte zurück, sonst 0. Ideal für tiefe Netzwerke.
- **Tanh**: Werte zwischen -1 und 1, oft besser als Sigmoid in versteckten Schichten.

## Regularisierungstechniken
Um Überanpassung (Overfitting) zu vermeiden, werden folgende Techniken eingesetzt:

- **L1-Regularisierung (Lasso)**: Bestraft die Summe der absoluten Werte der Gewichtungen. Führt dazu, dass einige Gewichtungen auf null gesetzt werden, was die Merkmalsauswahl erleichtert.
- **L2-Regularisierung (Ridge)**: Bestraft die Summe der quadrierten Werte der Gewichtungen. Reduziert Gewichtungen gleichmäßig und stabilisiert das Modell.
- **Dropout**: Deaktiviert zufällig Neuronen während des Trainings, um robuste Merkmale zu lernen und die Abhängigkeit zwischen Neuronen zu verringern.

## Lernprozess
Der Lernprozess eines neuronalen Netzes umfasst folgende Schritte:

1. **Initialisierung**: Zufällige Zuweisung von Gewichtungen.
2. **Training**: Anpassung der Gewichtungen basierend auf Trainingsdaten.
3. **Fehlerrückführung (Backpropagation)**: Optimierung der Gewichtungen zur Minimierung des Fehlers.

### Optimierungsalgorithmen
- **Stochastic Gradient Descent (SGD)**: Eine einfache und weit verbreitete Methode.
- **Adam**: Kombiniert die Vorteile von AdaGrad und RMSprop, oft schneller und effektiver.
- **RMSprop**: Passt die Lernrate für jede Gewichtung an, um schneller zu konvergieren.

### Lernratenanpassung
Die Lernrate beeinflusst die Geschwindigkeit und Effektivität des Trainings:

- **Zu hohe Lernrate**: Kann zu instabilem Training führen.
- **Zu niedrige Lernrate**: Kann das Training verlängern und das Modell in lokalen Minima festhalten.

#### Adaptive Lernraten
- **AdaGrad**: Passt die Lernrate basierend auf der Häufigkeit der Aktualisierungen an.
- **RMSprop**: Verbessert AdaGrad, indem es die Lernrate basierend auf dem gleitenden Durchschnitt der quadratischen Gradienten anpasst.
- **Adam**: Nutzt sowohl den gleitenden Durchschnitt der Gradienten als auch der quadrierten Gradienten zur Anpassung der Lernrate.

## Beispielberechnung
- **Eingabe**: $x₁ = 1, x₂ = 0,6$
- **Gewichte**: $W₁ = 0,4, W₂ = -0,5$
- **Berechnung**: 
  $x = x₁ \times W₁ + x₂ \times W₂ = 1 \times 0,4 + 0,6 \times (-0,5) = 0,1$
- Das Ergebnis wird durch die Aktivierungsfunktion geleitet.

## Architekturen
- **Convolutional Neural Networks (CNNs)**: Besonders geeignet für Bildverarbeitung.
- **Recurrent Neural Networks (RNNs)**: Ideal für zeitliche Daten und Sequenzen.
- **Generative Adversarial Networks (GANs)**: Für die Generierung neuer Daten.

## Anwendungsgebiete
- **Mustererkennung** in großen Datensätzen.
- **Vorhersagemodelle** für Geschäftsprozesse.
- **Anomalieerkennung** in IT-Systemen.
- **Bildverarbeitung** und Objekterkennung.

## Vor- und Nachteile

### Vorteile
- Verarbeitung **komplexer, nichtlinearer Zusammenhänge.**
- **Gute Performanz** bei großen Datenmengen.

### Nachteile
- Benötigt **große Trainingsdatensätze.**
- "**Black Box**" - Entscheidungsprozess schwer nachvollziehbar.
- Ethische Bedenken: **Bias in den Daten** kann zu unfairen Entscheidungen führen.


> Neuronale Netze. (2022, January 26). Retrieved from https://studyflix.de/informatik/neuronale-netze-4297
> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1