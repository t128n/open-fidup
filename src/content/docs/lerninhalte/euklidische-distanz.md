---
title: "Euklidische Distanz"
description: "Die euklidische Distanz misst den Abstand zwischen zwei Punkten in einem n-dimensionalen Raum. Sie wird berechnet als Quadratwurzel der Summe der quadrierten Differenzen der Koordinaten. Dieses Maß wird häufig in Algorithmen wie [k-nearest-neighbor](/open-fidup/lerninhalte/k-nearest-neighbor) verwendet."
---

Die euklidische Distanz ist ein Maß für den Abstand zwischen zwei Punkten in einem n-dimensionalen Raum. Sie ergibt sich aus der Quadratwurzel der Summe der quadrierten Differenzen der entsprechenden Koordinaten. Dieses Distanzmaß findet Anwendung in verschiedenen Bereichen, darunter Algorithmen wie [k-nearest-neighbor](/open-fidup/lerninhalte/k-nearest-neighbor).

## Allgemeine Formel

Für zwei Punkte $$P_1(x_1, y_1)$$ und $$P_2(x_2, y_2)$$ im zweidimensionalen Raum lautet die Formel:

$$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

In n-dimensionalen Räumen erweitert sich dies zu:

$$d(P_1, P_2) = \sqrt{\sum_{i=1}^n (p_{2i} - p_{1i})^2}$$

Hierbei bezeichnen $$p_{1i}$$ und $$p_{2i}$$ die i-ten Koordinaten der Punkte $$P_1$$ und $$P_2$$.

## Berechnungsschritte

Die euklidische Distanz lässt sich in folgenden Schritten ermitteln:

1. Berechne die Differenz jeder Koordinate der beiden Punkte.
2. Quadriere jede dieser Differenzen.
3. Summiere alle quadrierten Differenzen.
4. Ziehe die Quadratwurzel aus dieser Summe.

## Beispiel

Gegeben seien die Punkte $$P_1(1, 2)$$ und $$P_2(4, -2)$$.

Der Vektor von $$P_1$$ zu $$P_2$$ ergibt sich als:

$$\vec{P_1P_2} = \begin{pmatrix} 4 \\ -2 \end{pmatrix} - \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 \\ -4 \end{pmatrix}$$

Die Distanz beträgt:

$$d(P_1, P_2) = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$$