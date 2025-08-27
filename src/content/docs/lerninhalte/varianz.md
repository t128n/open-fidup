---
title: "Varianz"
description: "Varianz misst Streuung von Daten um Mittelwert. Formel für Gesamtheit/Stichprobe. Vorteile mathematische Basis, Nachteile Interpretation; Vergleich zu Standardabweichung."
---

- wie stark **streuen Daten um den Mittelwert**

## Formel
$v$ = Varianz
$n$ = Anzahl
$x_i$ = Daten
$\bar{x}$ = [Mittelwert](/lerninhalte/quadratisches-mittel) der Daten

### Gesamtheit
$$
v = \dfrac{1}{n} \sum^{n}_{i=1}(x_i - \bar{x})^2
$$
### Stichprobe
$$
v = \dfrac{1}{n-1} \sum^{n}_{i=1} (x_i - \bar{x})^2
$$

## Vor- und Nachteile der Varianz

### Vorteile
- **Mathematische Grundlage**: Die Varianz ist eine fundamentale Kennzahl in der Statistik, die auf der Differenz zwischen den Datenpunkten und dem Mittelwert basiert.
- Empfindlichkeit gegenüber Ausreißern: Sie **berücksichtigt alle Datenpunkte** und ist daher empfindlich gegenüber Ausreißern, was in bestimmten Analysen nützlich sein kann.
- **Basis für weitere Analysen**: Die Varianz ist die Grundlage für viele statistische Tests und Modelle, einschließlich der Standardabweichung und der Normalverteilung.

### Nachteile
- **schwieriger** zu interpretieren
- Einheitlichkeit: Die Varianz hat eine **andere Einheit als die ursprünglichen Daten** (z. B. Quadrat der Einheit), was die Interpretation erschwert.
- Empfindlichkeit gegenüber Ausreißern: Während dies ein Vorteil sein kann, kann es auch ein Nachteil sein, da **Ausreißer die Varianz stark beeinflussen** und zu verzerrten Ergebnissen führen können.
- **Nicht robust**: Die Varianz ist nicht robust gegenüber nicht-normalverteilten Daten, was zu ungenauen Schätzungen führen kann.


## Vergleich zwischen Standardabweichung und Varianz

| Merkmal                     | Varianz ($v$)                                      | Standardabweichung ($\sigma$ oder $s$)               |
|-----------------------------|----------------------------------------------------|------------------------------------------------------|
| Definition                   | Durchschnitt der quadrierten Abweichungen          | Quadratwurzel der Varianz                             |
| Einheit                      | Quadrat der Einheit der Daten                       | Gleiche Einheit wie die Daten                         |
| Interpretation              | Gibt die Streuung in quadrierten Einheiten an      | Gibt die Streuung in den gleichen Einheiten wie die Daten an |
| Empfindlichkeit gegenüber    | Empfindlich gegenüber Ausreißern                    | Empfindlich gegenüber Ausreißern                      |
| Verwendung                   | Oft in der Theorie und bei der Berechnung von Tests | Häufiger in der Praxis verwendet, da leichter zu interpretieren |


## Quellen

> Datatab. (2021, November 28). Varianz (Einfach erklärt). Youtube. Retrieved from https://www.youtube.com/watch?v=iPjXpiB6w9E  
> Duck.ai. (2024, September 16). Anonymisierte AI-Interaktionen. Retrieved from https://duck.ai