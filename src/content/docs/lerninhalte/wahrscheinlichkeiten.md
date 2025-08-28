---
title: "Wahrscheinlichkeiten"
description: "Wahrscheinlichkeiten messen die Chance von Ereignissen in Zufallsexperimenten. Regeln wie Addition und Multiplikation helfen bei Berechnungen, abhängig von Unabhängigkeit oder Bedingungen."
---

Wahrscheinlichkeiten quantifizieren die Chance des Eintretens von Ereignissen in Zufallsexperimenten. Sie liegen zwischen 0 und 1 und basieren auf der Analyse möglicher Ergebnisse. Grundlegende Regeln wie die Additions- und Multiplikationsregel erlauben Berechnungen, die von der Unabhängigkeit der Ereignisse oder von Bedingungen abhängen. Der Beitrag behandelt Grundbegriffe, Mengen und Ereignisse sowie Berechnungsmethoden, einschließlich Abhängigkeit und bedingter Wahrscheinlichkeit.

## Grundbegriffe

Die Stochastik bildet ein Teilgebiet der Mathematik, das sich mit der Analyse von Zufallsexperimenten beschäftigt. Eine Wahrscheinlichkeit stellt ein Maß für die Chance des Eintretens eines Ereignisses dar und bewegt sich zwischen 0 und 1, was 0 % und 100 % entspricht. Bei fairen Zufallsexperimenten ist die Wahrscheinlichkeit für jedes gleichartige Ereignis identisch. Zufallsexperimente beziehen sich auf Versuche mit ungewissem Ausgang, deren Ergebnisse durch [Zufallsvariablen](/open-fidup/lerninhalte/zufallsvariable) beschrieben werden können.

## Mengen und Ereignisse

Die Ergebnismenge $\Omega$ (Omega) umfasst alle möglichen Ergebnisse eines Zufallsexperiments. Ein Beispiel ist ein Würfelwurf, bei dem $\Omega = \{1, 2, 3, 4, 5, 6\}$ gilt. Ein Ereignis $A$ stellt eine Teilmenge von $\Omega$ dar, also $A \subseteq \Omega$. Die Vereinigungsmenge $A \cup B$ enthält alle Elemente, die in $A$ oder $B$ (oder beiden) auftreten. Beispiel: Wenn $A = \{1\}$ und $B = \{2, 4, 6\}$, dann ergibt sich $A \cup B = \{1, 2, 4, 6\}$.

## Berechnung von Wahrscheinlichkeiten

Die Wahrscheinlichkeit einzelner Ereignisse berechnet sich als $P(A) = \frac{\text{günstige Fälle}}{\text{mögliche Fälle}}$. Beispiel: Die Wahrscheinlichkeit, dass ein Würfel die 3 zeigt, beträgt $P(\text{Würfel zeigt 3}) = \frac{1}{6}$.

Die Additionsregel gilt für sich gegenseitig ausschließende Ereignisse: $P(A \text{ oder } B) = P(A) + P(B)$. Beispiel: $P(2 \text{ oder } 4 \text{ oder } 6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$.

Die Multiplikationsregel gilt für unabhängige Ereignisse: $P(A \text{ und } B) = P(A) \cdot P(B)$. Beispiel: $P(\text{zweimal Kopf}) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$.

Die Gegenwahrscheinlichkeit ergibt sich als $P(\text{nicht } A) = 1 - P(A)$. Beispiel: $P(\text{mindestens einmal Kopf in zwei Würfen}) = 1 - P(\text{zweimal Zahl}) = 1 - \frac{1}{4} = \frac{3}{4}$.

## Abhängigkeit und Unabhängigkeit

Stochastisch unabhängige Ereignisse zeichnen sich dadurch aus, dass das Eintreten des einen Ereignisses die Wahrscheinlichkeit des anderen nicht beeinflusst. Es gilt $P(A \cap B) = P(A) \cdot P(B)$, wobei $P(A|B) = P(A)$ und $P(B|A) = P(B)$ sind. Stochastisch abhängige Ereignisse hingegen beeinflussen sich gegenseitig. Die Berechnung erfolgt mit der bedingten Wahrscheinlichkeit: $P(A \cap B) = P(A) \cdot P(B|A)$.

## Bedingte Wahrscheinlichkeit

Die bedingte Wahrscheinlichkeit $P(A|B) = \frac{P(A \cap B)}{P(B)}$ gilt für $P(B) > 0$. Sie beschreibt die Wahrscheinlichkeit von $A$ unter der Bedingung, dass $B$ eingetreten ist.