---
title: "Information"
description: "Information wird als -log2(P(x)) gemessen, wobei P(x) die Wahrscheinlichkeit eines Ereignisses ist. Sie quantifiziert Überraschung und findet Anwendung in Entscheidungsbäumen, Datenkompression und maschinellem Lernen."
---

Information bezeichnet in der Informationstheorie den quantitativen Gehalt eines Ereignisses, der sich aus seiner Unwahrscheinlichkeit ableitet. Sie wird durch die Formel $I(x) = -\log_2(P(x))$ berechnet, wobei $P(x)$ die Wahrscheinlichkeit des Ereignisses $x$ darstellt. Dieser Ansatz, entwickelt von Claude Shannon, misst die Überraschung, die ein Ereignis hervorruft, und bildet die Grundlage für Konzepte wie Entropie. Die Einheit ist Bits, und die Information ist additiv für unabhängige Ereignisse. Sie findet breite Anwendung in Bereichen wie Entscheidungsbäumen, Datenkompression und maschinellem Lernen.

## Grundformel für Information

Die Grundformel zur Berechnung der Information eines Ereignisses $x$ lautet:

$$I(x) = -\log_2(P(x))$$

Dabei gilt:
- $I(x)$: Der Informationsgehalt des Ereignisses $x$.
- $P(x)$: Die Wahrscheinlichkeit des Ereignisses $x$.

## Wichtige Eigenschaften

Die Information weist folgende Eigenschaften auf:
- **Einheit**: Bits.
- **Unwahrscheinlichkeit**: Je unwahrscheinlicher ein Ereignis, desto höher der Informationsgehalt.
- **Sichere Ereignisse**: Wenn $P(x) = 1$, dann gilt $I(x) = 0$, da keine neue Information vorliegt.

## Interpretation der Bits

Die Anzahl der Bits entspricht der Anzahl der Ja/Nein-Entscheidungen, die zur Identifizierung eines Ereignisses erforderlich sind:
- **1 Bit**: Informationsgehalt einer Ja/Nein-Entscheidung.
- **2 Bits**: Informationsgehalt einer Entscheidung mit vier gleichwahrscheinlichen Möglichkeiten.
- **n Bits**: Informationsgehalt einer Entscheidung mit $2^n$ gleichwahrscheinlichen Möglichkeiten.

## Beispiele

Folgende Beispiele illustrieren die Berechnung des Informationsgehalts:

| Wahrscheinlichkeit $P(x)$ | Informationsgehalt $I(x)$ |
|---------------------------|---------------------------|
| 0,5                       | 1 Bit                     |
| 0,25                      | 2 Bits                    |
| 0,125                     | 3 Bits                    |

## Anwendungen

Die Information findet Anwendung in verschiedenen Bereichen:
- [Entscheidungsbäume](/open-fidup/lerninhalte/entscheidungsbaum)
- Datenkompression
- Kryptographie
- [Maschinelles Lernen](/open-fidup/lerninhalte/maschinelles-lernen)

## Merksätze

- Mehr Überraschung entspricht mehr Information.
- Eine perfekte Vorhersage liefert keine Information.
- Der Informationsgehalt ist additiv für unabhängige Ereignisse.