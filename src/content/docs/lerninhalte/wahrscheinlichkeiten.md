---
title: "Wahrscheinlichkeiten: Grundlagen der Stochastik"
description: "Wahrscheinlichkeiten messen die Chance von Ereignissen in Zufallsexperimenten. Regeln wie Addition und Multiplikation helfen bei Berechnungen, abhängig von Unabhängigkeit oder Bedingungen."
---

## Grundbegriffe

- **Stochastik**: Teilgebiet der Mathematik, das sich mit der Analyse von Zufallsexperimenten befasst
- **Wahrscheinlichkeit**: Maß für die Chance des Eintretens eines Ereignisses, liegt zwischen 0 und 1 (oder 0% und 100%)
- **Fairness**: Bei fairen Zufallsexperimenten ist die Wahrscheinlichkeit für jedes gleichartige Ereignis identisch

## Mengen und Ereignisse

- **Ergebnismenge** $\Omega$ (Omega): Menge aller möglichen Ergebnisse eines Zufallsexperiments
  - Beispiel: Würfel $\Omega = \{1,2,3,4,5,6\}$
- **Ereignis** $A$: Teilmenge von $\Omega$, also $A \subseteq \Omega$
- **Vereinigungsmenge** $A \cup B$: Enthält alle Elemente, die in A oder B (oder beiden) vorkommen
  - Beispiel: $A = \{1\}$, $B = \{2,4,6\}$, $A \cup B = \{1,2,4,6\}$

## Berechnung von Wahrscheinlichkeiten

1. **Einzelereignisse**: 
	- $P(A) = \frac{\text{günstige Fälle}}{\text{mögliche Fälle}}$
	- Beispiel: $P(\text{Würfel zeigt 3}) = \frac{1}{6}$

3. **Additionsregel** für sich gegenseitig ausschließende Ereignisse:
	- $P(A \text{ oder } B) = P(A) + P(B)$
	- Beispiel: $P(2 \text{ oder } 4 \text{ oder } 6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$

4. **Multiplikationsregel** für unabhängige Ereignisse:
	- $P(A \text{ und } B) = P(A) \cdot P(B)$
	- Beispiel: $P(\text{zweimal Kopf}) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$

5. **Gegenwahrscheinlichkeit**: $P(\text{nicht } A) = 1 - P(A)$
	- Beispiel: $P(\text{mindestens einmal Kopf in zwei Würfen}) = 1 - P(\text{zweimal Zahl}) = 1 - \frac{1}{4} = \frac{3}{4}$

## Abhängigkeit und Unabhängigkeit
- **Stochastisch unabhängige Ereignisse**: Das Eintreten des einen Ereignisses beeinflusst nicht die Wahrscheinlichkeit des anderen
	- $P(A \cap B) = P(A) \cdot P(B)$
	- $P(A|B) = P(A)$ und $P(B|A) = P(B)$
- **Stochastisch abhängige Ereignisse**: Das Eintreten des einen Ereignisses beeinflusst die Wahrscheinlichkeit des anderen
	- Berechnung mit bedingter Wahrscheinlichkeit: $P(A \cap B) = P(A) \cdot P(B|A)$

## Bedingte Wahrscheinlichkeit
- $P(A|B) = \frac{P(A \cap B)}{P(B)}$, für $P(B) > 0$
- Beschreibt die Wahrscheinlichkeit von A unter der Bedingung, dass B eingetreten ist

