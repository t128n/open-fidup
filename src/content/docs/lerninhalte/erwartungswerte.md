---
title: "Erwartungswerte"
description: "Der Erwartungswert ist die Prognose eines Ergebnisses eines Zufallsexperiments und beschreibt den erwarteten Ausgang. Bei diskreten Zufallsvariablen ergibt er sich aus der Summe von Wert mal Wahrscheinlichkeit, bei stetigen aus einer Integration."
---

Der Erwartungswert ist ein zentrales Konzept in der Wahrscheinlichkeitstheorie. Er stellt die Prognose eines Ergebnisses eines Zufallsexperiments dar und beschreibt den erwarteten Ausgang, den die Zufallsvariable am ehesten annimmt. Mathematisch wird er als $E(X)$ bezeichnet.

## Definition
Der Erwartungswert eines Zufallsexperiments ist der Wert, den die Zufallsvariable am ehesten annimmt. Er dient als Maß für den durchschnittlichen Ausgang.

## Berechnung bei diskreten Zufallsvariablen
Der Erwartungswert $E(X)$ einer [diskreten Zufallsvariable](/open-fidup/lerninhalte/zufallsvariable) wird berechnet durch:

$$E(X) = \sum x_i \times p_i$$

Hierbei werden die Produkte der möglichen Werte $x_i$ und deren relativen Wahrscheinlichkeiten $p_i$ addiert.

### Beispiel
Ein Beispiel für die Berechnung des Erwartungswerts zeigt die folgende Tabelle mit Ereignissen, Gewinnen, Gewinn-Verlust-Werten und Wahrscheinlichkeiten:

| Ereignis | Gewinn     | Gewinn - Verlust | Wahrscheinlichkeit |
|----------|------------|------------------|--------------------|
| 1.       | € 10.000  | € 9.999          | 1%                 |
| 2.       | € 500     | € 499            | 9%                 |
| 3.       | € 0       | -€ 1             | 90%                |

Die Berechnung des Erwartungswerts ergibt:

$$E(X) = 9.999 \times 0,01 + 499 \times 0,09 + (-1) \times 0,9 = 144$$

## Berechnung bei stetigen Zufallsvariablen
Der Erwartungswert $E(X)$ einer [stetigen Zufallsvariable](/open-fidup/lerninhalte/zufallsvariable) wird berechnet durch:

$$E(X) = \int_{-\infty}^{\infty} x \times f(x) \, dx$$

Hierbei ist $f(x)$ die [Dichtefunktion](/open-fidup/lerninhalte/dichtefunktion) der Zufallsvariablen.

## Zusammenfassung
Der Erwartungswert beschreibt den durchschnittlichen Ausgang eines Zufallsexperiments. Bei diskreten Zufallsvariablen erfolgt die Berechnung durch Summation, bei stetigen Zufallsvariablen durch Integration. Er ist ein grundlegendes Werkzeug in der Wahrscheinlichkeitstheorie.