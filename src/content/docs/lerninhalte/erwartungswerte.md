---
title: "Erwartungswerte"
description: "Erwartungswert ist die Prognose eines Ergebnisses eines Zufallsexperiments, der erwartete Ausgang. Bei diskreten Zufallsvariablen ist es die Summe von Wert mal Wahrscheinlichkeit. Bei stetigen erfolgt Integration. Er beschreibt den durchschnittlichen Ausgang."
---

## Prognose
- **Prognose** eines Ergebnisses eines **Zufallsexperiments**: 
  - Der *erwartete Ausgang* eines Zufallsexperiments, der Wert, den die Zufallsvariable am ehesten annimmt.
  - Mathematisch dargestellt als: $x = E(X)$

## Diskrete Zufallsvariable
- Der Erwartungswert $E(X)$ einer [[Zufallsvariable|diskreten Zufallsvariable]] wird berechnet durch:
  $$E(X) = \sum x_i \times f(x_i)$$
- Hierbei addieren wir die Produkte der möglichen Werte $x_i$ und deren relativen Wahrscheinlichkeiten $p_i$.

### Beispiel
| Ereignis | Gewinn     | Gewinn - Verlust | Wahrscheinlichkeit |
|----------|------------|------------------|--------------------|
| 1.       | € 10.000  | € 9.999          | 1%                 |
| 2.       | € 500     | € 499            | 9%                 |
| 3.       | € 0       | -€ 1             | 90%                |

Berechnung des Erwartungswerts:
$$E(X) = 9.999 \times 0,01 + 499 \times 0,09 + (-1) \times 0,9 = 144$$

## Stetige Zufallsvariable
- Der Erwartungswert $E(X)$ einer [[Zufallsvariable|stetigen Zufallsvariable]] wird berechnet durch:
  $$E(X) = \int_{-\infty}^{\infty} x \times f(x)$$
- Hierbei ist $f(x)$ die [[Dichtefunktion]] der Zufallsvariablen.

## Zusammenfassung
- Der Erwartungswert ist ein zentrales Konzept in der Wahrscheinlichkeitstheorie, das den durchschnittlichen Ausgang eines Zufallsexperiments beschreibt.
- Bei diskreten Zufallsvariablen erfolgt die Berechnung durch Summation, während bei stetigen Zufallsvariablen eine Integration notwendig ist.
