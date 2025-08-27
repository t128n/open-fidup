---
title: "Information: Grundlagen der Informationsmessung"
description: "Information wird als -log2(P(x)) gemessen, wobei P(x) die Wahrscheinlichkeit eines Ereignisses ist. Sie quantifiziert Überraschung und wird in Entscheidungsbäumen, Datenkompression und maschinellem Lernen angewendet."
---

## 1. Grundformel für Information
- **Formel**: $I(x) = -\log_2(P(x))$
- **Begriffe**:
	- $I(x)$: Information des Ereignisses $x$
	- $P(x)$: Wahrscheinlichkeit des Ereignisses $x$

## 2. Wichtige Eigenschaften
- **Einheit**: Bits
- **Unwahrscheinlichkeit**: Je unwahrscheinlicher ein Ereignis, desto höher die Information.
- **Sichere Ereignisse**: $P(x) = 1 \Rightarrow I(x) = 0$ (keine neue Information).

## 3. Interpretation der Bits
- **1 Bit**: Information einer Ja/Nein-Entscheidung.
- **2 Bits**: Information einer Entscheidung mit 4 gleichwahrscheinlichen Möglichkeiten.
- **n Bits**: Information einer Entscheidung mit $2^n$ gleichwahrscheinlichen Möglichkeiten.

## 4. Beispiele
- $P(x) = 0,5 \Rightarrow I(x) = 1 \text{ Bit}$
- $P(x) = 0,25 \Rightarrow I(x) = 2 \text{ Bits}$
- $P(x) = 0,125 \Rightarrow I(x) = 3 \text{ Bits}$

## 5. Anwendungen
- Entscheidungsbäume
- Datenkompression
- Kryptographie
- Maschinelles Lernen

## 6. Merksätze
- Mehr Überraschung = Mehr Information.
- Perfekte Vorhersage = Keine Information.
- Information ist additiv für unabhängige Ereignisse.
