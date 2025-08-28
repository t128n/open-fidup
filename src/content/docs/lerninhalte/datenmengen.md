---
title: "Datenmengen"
description: "Datenmengen werden in SI-Einheiten wie kB, MB, GB und IEC-Einheiten wie KiB, MiB, GiB gemessen. SI-Einheiten basieren auf dem dezimalen System, IEC-Einheiten auf dem binären System. Eine Formel zur Umrechnung zwischen diesen Einheiten lautet: Zahl geteilt durch Fremdfaktor mal Eigenfaktor. Dies ist wichtig für die Speicherung und Übertragung von Daten."
---

Datenmengen beschreiben die Größe von Daten in verschiedenen Einheiten, die auf internationalen Standards basieren. SI-Einheiten (Internationales Einheitensystem) verwenden ein dezimales System mit Potenzen von 10, während IEC-Einheiten (International Electrotechnical Commission) ein binäres System mit Potenzen von 2 nutzen. Diese Unterscheidung ist relevant, da SI-Einheiten wie Kilobyte (kB) 1000 Byte entsprechen, IEC-Einheiten wie Kibibyte (KiB) jedoch 1024 Byte. Die korrekte Wahl der Einheit vermeidet Missverständnisse bei der Angabe von Speicherkapazitäten oder Datenübertragungsraten.

## Einheiten

Die folgenden Tabellen zeigen die gängigen SI- und IEC-Einheiten für Datenmengen, einschließlich ihrer Definitionen und Äquivalente in Byte.

| SI-Einheit (Dezimal)                     | IEC-Einheit (Binär)                   |
| ---------------------------------------- | ------------------------------------- |
| 1 kB = $10^3$ Byte = 1000 Byte           | 1 KiB = $2^{10}$ Byte = 1024 Byte     |
| 1 MB = $10^6$ Byte = 1 Million Byte      | 1 MiB = $2^{20}$ Byte = $1024^2$ Byte |
| 1 GB = $10^9$ Byte = 1 Milliarde Byte    | 1 GiB = $2^{30}$ Byte = $1024^3$ Byte |
| 1 TB = $10^{12}$ Byte = 1 Billion Byte   | 1 TiB = $2^{40}$ Byte = $1024^4$ Byte |
| 1 PB = $10^{15}$ Byte = 1 Billiarde Byte | 1 PiB = $2^{50}$ Byte = $1024^5$ Byte |

## Umrechnung

Zur Umrechnung zwischen SI- und IEC-Einheiten oder zwischen verschiedenen Einheiten desselben Systems wird die folgende Formel verwendet:

$$
\dfrac{Zahl}{Fremdfaktor} \times Eigenfaktor
$$

Dabei ist "Zahl" der Wert in der Ausgangseinheit, "Fremdfaktor" der Faktor der Ausgangseinheit und "Eigenfaktor" der Faktor der Zieleinheit. Beispiel: Um 1 MB in MiB umzurechnen, gilt $1 / 10^6 \times 2^{20}$, was etwa 0,9537 MiB ergibt.

## Quellen

> Kolkmann, T. (2017). Gibibyte, Mebibyte, Kibibyte – Was soll das sein? GIGA. Abgerufen von https://www.giga.de/downloads/windows-10/specials/gibibyte-mebibyte-kibibyte-was-soll-das-sein  
> Ka, L. (2020, 7. Mai). Formel Mebibyte zu Megabyte, Gibibyte zu Terabyte, Kibibyte, Tebibyte. Youtube. Abgerufen von https://www.youtube.com/watch?v=PGh3Kk3gqu8