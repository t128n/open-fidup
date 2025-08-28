---
title: "OSI-Modell"
description: "Das OSI-Modell ist ein Referenzmodell für Netzwerkprotokolle mit 7 Schichten von der Bitübertragung bis zur Anwendungsschicht. Es ermöglicht standardisierte Kommunikation und gezielte Problembehebung."
---

Das OSI-Modell, kurz für Open Systems Interconnection, dient als Referenzmodell für Netzwerkprotokolle und strukturiert die Kommunikation zwischen Computersystemen in sieben Schichten. Es fördert eine standardisierte Kommunikation und erleichtert die Problembehebung durch eine klare Abgrenzung der Funktionen jeder Schicht.

## Einführung

Das OSI-Modell beschreibt eine Schichtenarchitektur, in der jede Schicht ein eigenes Abstraktionsniveau und eine festgelegte Funktion aufweist. Diese Struktur ermöglicht eine gezielte Problembehebung, da Fehler in einer Schicht isoliert betrachtet werden können.

## Schichten

Die sieben Schichten des OSI-Modells sind hierarchisch angeordnet, wobei die unteren Schichten die Grundlagen der Datenübertragung bilden und die oberen Schichten die Anwendungslogik behandeln. Jede Schicht kommuniziert mit der darüber- und darunterliegenden Schicht über definierte Schnittstellen.

| Englisch               | Deutsch                    | Erklärung                                                                                              | Protokolle                                        |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **A**pplication Layer  | **A**nwendungsschicht      | Stellt Dienste, Anwendungen und Netzwerkmanagement bereit.                                           | HTTP, FTP, SSH                                    |
| **P**resentation Layer | **D**arstellungsschicht    | Wandelt systemabhängige Darstellungen (z. B. ASCII) in unabhängige Formen um.                        | X.226 (Connection-Oriented Presentation Protocol) |
| **S**ession Layer      | **S**itzungsschicht        | Verwaltet die Prozesskommunikation zwischen zwei Systemen und behebt Fehler wie Sitzungsunterbrechungen. | X.225, ISO 9548 (Connectionless Session Protocol) |
| **T**ransport Layer    | **T**ransportschicht       | Gewährleistet End-to-End-Kommunikation mit Header-Informationen und Fehlerkontrolle. Verwendet Pakete. | [TCP](/open-fidup/lerninhalte/tcp-udp), [UDP](/open-fidup/lerninhalte/tcp-udp) |
| **N**etwork Layer      | **V**ermittlungsschicht    | Steuert den Datentransfer zwischen Netzwerksegmenten. Verwendet Fragmente.                           | [IP](/open-fidup/lerninhalte/ip), ICMP            |
| **D**ata Link Layer    | **S**icherrungsschicht     | Sichert eine zuverlässige Kommunikation innerhalb desselben Netzwerks. Verwendet Frames.             | ARP, STP[^1]                                      |
| **P**hysical Layer     | **B**itübertragungsschicht | Definiert die elektrische, mechanische und funktionale Schnittstelle.                                | [Ethernet](/open-fidup/lerninhalte/ethernet), IEEE 802.11 |

### Merksätze

Zur leichteren Erinnerung an die Reihenfolge der Schichten von oben nach unten oder umgekehrt dienen folgende Merksätze:

1. **P**lease **D**o **N**ot **T**hrow **S**alami **P**izza **A**way (von unten nach oben).
2. **A**lle **D**eutsche **S**tudenten **T**rinken **V**erschiedene **S**orten **B**ier (von oben nach unten).

[^1]: Spanning Tree Protocol.

## Quellen

> OSI Modell. (2022, October 07). Retrieved from https://studyflix.de/informatik/osi-modell-5524

> Autoren der Wikimedia-Projekte. (2002, July 13). OSI-Modell – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=OSI-Modell&oldid=247949880