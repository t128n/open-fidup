---
title: "Euklidische Distanz: Berechnung und Anwendung"
description: "Die euklidische Distanz misst den Abstand zwischen zwei Punkten in einem n-dimensionalen Raum. Sie wird berechnet als Quadratwurzel der Summe der quadrierten Differenzen der Koordinaten. Dieses Maß wird häufig in Algorithmen wie KNN verwendet."
---

Die euklidische Distanz ist ein **Maß für den Abstand** zwischen zwei Punkten in einem **n-dimensionalen Raum**
## Allgemeine Formel
- Für zwei Punkte $P_1(x_1, y_1)$ und $P_2(x_2, y_2)$ im **zweidimensionalen Raum**: $d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- Für n-dimensionale Räume: 
  $d(P_1, P_2) = \sqrt{\sum_{i=1}^n (p_{2i} - p_{1i})^2}$
  Wobei $p_{1i}$ und $p_{2i}$ die i-ten Koordinaten der Punkte $P_1$ und $P_2$ sind.
## Algorithmus
1. Berechne die Differenz jeder Koordinate der beiden Punkte.
2. Quadriere jede dieser Differenzen.
3. Summiere alle quadrierten Differenzen.
4. Ziehe die Quadratwurzel aus dieser Summe.
## Beispiel
$P_1(1,2)$
$P_2(4,-2)$
$\vec{P_1P_2} = \left(\begin{array}{c} 4 \\ -2 \end{array}\right) - \left(\begin{array}{c} 1 \\ 2\end{array}\right) = \left(\begin{array}{c} 3 \\ -4 \end{array}\right)$
$d(P_1, P_2) = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$