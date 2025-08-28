---
title: "Varianz"
description: "Die Varianz misst die Streuung von Daten um den Mittelwert. Es werden Formeln für die Gesamtheit und die Stichprobe vorgestellt. Vorteile umfassen die mathematische Grundlage und Empfindlichkeit gegenüber Ausreißern, Nachteile die schwierige Interpretation und Einheitlichkeit. Ein Vergleich zur Standardabweichung wird dargelegt."
---

Die Varianz ist ein Maß für die Streuung von Datenpunkten um ihren Mittelwert. Sie quantifiziert, wie stark die Werte einer Datenmenge variieren, und bildet eine Grundlage für viele statistische Analysen. Die Berechnung unterscheidet sich zwischen der Gesamtheit und einer Stichprobe, wobei die Varianz in quadrierten Einheiten angegeben wird.

## Formel
Die Varianz $( v )$ beschreibt die durchschnittliche quadratische Abweichung der Datenpunkte vom Mittelwert. Dabei bezeichnet $( n )$ die Anzahl der Datenpunkte, $( x_i )$ die einzelnen Datenwerte und $( \bar{x} )$ den [Mittelwert](/open-fidup/lerninhalte/quadratisches-mittel) der Daten.

### Gesamtheit
Für eine vollständige Gesamtheit wird die Varianz wie folgt berechnet:
$$
v = \dfrac{1}{n} \sum^{n}_{i=1}(x_i - \bar{x})^2
$$

### Stichprobe
Bei einer Stichprobe aus der Gesamtheit erfolgt die Berechnung mit $( n-1 )$ im Nenner, um eine unverzerrte Schätzung zu gewährleisten:
$$
v = \dfrac{1}{n-1} \sum^{n}_{i=1} (x_i - \bar{x})^2
$$

## Vor- und Nachteile der Varianz

### Vorteile
- **Mathematische Grundlage**: Die Varianz stellt eine fundamentale Kennzahl in der Statistik dar, die auf den Differenzen zwischen den Datenpunkten und dem Mittelwert beruht.
- Empfindlichkeit gegenüber Ausreißern: Sie berücksichtigt alle Datenpunkte und ist daher empfindlich gegenüber Ausreißern, was in bestimmten Analysen von Nutzen sein kann.
- **Basis für weitere Analysen**: Die Varianz bildet die Grundlage für zahlreiche statistische Tests und Modelle, einschließlich der [Standardabweichung](/open-fidup/lerninhalte/standardabweichung) und der Normalverteilung.

### Nachteile
- **Schwierige Interpretation**: Die Varianz lässt sich nicht immer leicht deuten, da sie in quadrierten Einheiten vorliegt.
- Einheitlichkeit: Die Varianz weist eine andere Einheit auf als die ursprünglichen Daten (beispielsweise das Quadrat der Einheit), was die Interpretation erschwert.
- Empfindlichkeit gegenüber Ausreißern: Obwohl dies ein Vorteil sein kann, wirkt es sich auch nachteilig aus, da Ausreißer die Varianz stark beeinflussen und zu verzerrten Ergebnissen führen können.
- **Nicht robust**: Die Varianz ist nicht robust gegenüber nicht-normalverteilten Daten, was zu ungenauen Schätzungen führen kann.

## Vergleich zwischen Standardabweichung und Varianz

| Merkmal                     | Varianz ($( v )$)                                      | Standardabweichung ($( \sigma )$ oder $( s )$)               |
|-----------------------------|-------------------------------------------------------|-------------------------------------------------------------|
| Definition                  | Durchschnitt der quadrierten Abweichungen             | Quadratwurzel der Varianz                                   |
| Einheit                     | Quadrat der Einheit der Daten                         | Gleiche Einheit wie die Daten                               |
| Interpretation             | Gibt die Streuung in quadrierten Einheiten an         | Gibt die Streuung in den gleichen Einheiten wie die Daten an |
| Empfindlichkeit gegenüber Ausreißern | Empfindlich gegenüber Ausreißern                      | Empfindlich gegenüber Ausreißern                            |
| Verwendung                  | Oft in der Theorie und bei der Berechnung von Tests   | Häufiger in der Praxis verwendet, da leichter zu interpretieren |

## Quellen

> Datatab. (2021, November 28). Varianz (Einfach erklärt). Youtube. Retrieved from https://www.youtube.com/watch?v=iPjXpiB6w9E  
> Duck.ai. (2024, September 16). Anonymisierte AI-Interaktionen. Retrieved from https://duck.ai