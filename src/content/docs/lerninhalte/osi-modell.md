---
title: "OSI-Modell: Referenzmodell für Netzwerkprotokolle"
description: "Das OSI-Modell ist ein Referenzmodell für Netzwerkprotokolle mit 7 Schichten von der Bitübertragung bis zur Anwendungsschicht. Es ermöglicht standardisierte Kommunikation und gezielte Problembehebung."
---

- **O**pen **S**ystems **I**nterconnection
- Referenzmodell für Netzwerkprotokolle als Schichtenarchitektur
- ermöglicht **standardisierte Kommunikation** zwischen verschiedenen Computersystemen

## Schichten

- jede Schicht hat eigenes **Abstraktionsniveau** und eine festgelegte **Funktion**
- Schichten ermöglichen auch **gezieltere Problembehebungen**

| Englisch               | Deutsch                    | Erklärung                                                                                              | Protokolle                                        |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **A**pplication Layer  | **A**nwendungsschicht      | Dienste, Anwendungen und Netzwerkmanagement                                                            | HTTP, FTP, SSH                                    |
| **P**resentation Layer | **D**arstellungsschicht    | Umsetzung von systemabhängigen Darstellungen (ASCII, ...) in unabhängige Formen                        | X.226 (Connection-Oriented Presentation Protocl)  |
| **S**ession Layer      | **S**itzungsschicht        | Prozesskommunikation zwischen zwei Systemen, Behebung von Fehlern wie Zusammenbrüche der Sitzung, etc. | X.225, ISO 9548 (Connectionless Session Protocol) |
| **T**ransport Layer    | **T**ransportschicht       | End-to-End-Kommunikation. Beinhalten Header-Informationen und Fehlerkontrolle. *Pakete*                | TCP, UDP                                          |
| **N**etwork Layer      | **V**ermittlungsschicht    | Datentransfer zwischen Netzwerksegmenten. *Fragmente*                                                  | IP, ICMP                                          |
| **D**ata Link Layer    | **S**icherrungsschicht     | zuverlässige, funktionierende Kommunikation im selben Netzwerk. *Frames*                               | ARP, STP [^1]                                     |
| **P**hysical Layer     | **B**itübertragungsschicht | elektrische, mechanische, funktionale Schnittstelle                                                    | Ethernet, IEEE 802.11                             |

### Merksätze

1. **P**lease **D**o **N**ot **T**hrow **S**alami **P**izza **A**way ⏫
2. **A**lle **D**eutsche **S**tudenten **T**rinken **V**erschiedene **S**orten **B**ier ⏬

[^1]: Spanning Tree Protokoll

## Quellen

> OSI Modell. (2022, October 07). Retrieved from https://studyflix.de/informatik/osi-modell-5524
> 
> Autoren der Wikimedia-Projekte. (2002, July 13). OSI-Modell – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=OSI-Modell&oldid=247949880