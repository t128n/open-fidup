---
title: "Standardabweichung"
description: "Die Standardabweichung misst die Streuung von Daten um den Mittelwert. Dieser Artikel behandelt die Formeln für die Gesamtheit und die Stichprobe sowie einen Vergleich mit der Varianz."
---

Die Standardabweichung ist ein statistisches Maß, das angibt, wie stark die Werte eines Datensatzes um den Mittelwert streuen. Sie basiert auf den quadrierten Abweichungen vom Mittelwert und wird häufig in der Datenanalyse verwendet, um die Variabilität zu quantifizieren. Im Gegensatz zur [Varianz](/open-fidup/lerninhalte/varianz) hat sie die gleiche Einheit wie die ursprünglichen Daten, was ihre Interpretation erleichtert. Sie ist jedoch empfindlich gegenüber Ausreißern.

## Formel

Die Standardabweichung wird mit den folgenden Symbolen berechnet:  
$\sigma$ oder $s$ = Standardabweichung  
$n$ = Anzahl der Datenpunkte  
$x_i$ = einzelner Datenpunkt  
$\bar{x}$ = [Mittelwert](/open-fidup/lerninhalte/quadratisches-mittel) der Daten  

### Gesamtheit

Für eine vollständige Gesamtheit lautet die Formel:

$$
\sigma = \sqrt{\dfrac{1}{n}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$

Dies entspricht der Quadratwurzel der Summe der quadrierten Abweichungen, geteilt durch die Anzahl der Werte.

### Stichprobe

Für Schätzungen auf Basis einer Stichprobe, beispielsweise in statistischen Tests, wird die Formel angepasst:

$$
s = \sqrt{\dfrac{1}{n - 1}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$

## Vergleich zwischen Standardabweichung und Varianz

| Merkmal                   | Varianz ($v$)                                       | Standardabweichung ($\sigma$ oder $s$)                          |
| ------------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| Definition                | Durchschnitt der quadrierten Abweichungen           | Quadratwurzel der Varianz                                       |
| Einheit                   | Quadrat der Einheit der Daten                       | Gleiche Einheit wie die Daten                                   |
| Interpretation            | Gibt die Streuung in quadrierten Einheiten an       | Gibt die Streuung in den gleichen Einheiten wie die Daten an    |
| Empfindlichkeit gegenüber Ausreißern | Empfindlich gegenüber Ausreißern                    | Empfindlich gegenüber Ausreißern                                |
| Verwendung                | Oft in der Theorie und bei der Berechnung von Tests | Häufiger in der Praxis verwendet, da leichter zu interpretieren |

## Quellen

> Datatab. (2021, November 28). Varianz (Einfach erklärt). Youtube. Retrieved from https://www.youtube.com/watch?v=iPjXpiB6w9E  
> Duck.ai. (2024, September 16). Anonymisierte AI-Interaktionen. Retrieved from https://duck.ai