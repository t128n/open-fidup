---
title: "Standardabweichung"
description: "Standardabweichung misst Streuung von Daten um Mittelwert. Formel für Gesamtheit/Stichprobe. Vorteile leichte Interpretation, Nachteile Empfindlichkeit gegenüber Ausreißern."
---

- Maß wie stark **Daten um Mittelwert streuen**

## Formel
$\sigma$ = Standardabweichung  
$n$ = Anzahl an Daten  
$x_i$ = Daten  
$\bar{x}$ = [Mittelwert](/open-fidup/lerninhalte/quadratisches-mittel) der Daten  

### Gesamtheit
$$
\sigma = \sqrt{\dfrac{1}{n}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$
**Wurzel** der **Summe** der **quadrierten Abweichungen** durch die **Anzahl der Werte** geteilt

### Stichprobe
- für Schätzungen, Stichproben, ...
$$
s = \sqrt{\dfrac{1}{n - 1}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$

## Vergleich zwischen Standardabweichung und Varianz

| Merkmal                   | Varianz ($v$)                                       | Standardabweichung ($\sigma$ oder $s$)                          |
| ------------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| Definition                | Durchschnitt der quadrierten Abweichungen           | Quadratwurzel der Varianz                                       |
| Einheit                   | Quadrat der Einheit der Daten                       | Gleiche Einheit wie die Daten                                   |
| Interpretation            | Gibt die Streuung in quadrierten Einheiten an       | Gibt die Streuung in den gleichen Einheiten wie die Daten an    |
| Empfindlichkeit gegenüber | Empfindlich gegenüber Ausreißern                    | Empfindlich gegenüber Ausreißern                                |
| Verwendung                | Oft in der Theorie und bei der Berechnung von Tests | Häufiger in der Praxis verwendet, da leichter zu interpretieren |

## Quellen

> Datatab. (2021, November 28). Varianz (Einfach erklärt). Youtube. Retrieved from https://www.youtube.com/watch?v=iPjXpiB6w9E  
> Duck.ai. (2024, September 16). Anonymisierte AI-Interaktionen. Retrieved from https://duck.ai  
