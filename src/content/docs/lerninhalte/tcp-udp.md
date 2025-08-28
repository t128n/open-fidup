---
title: "TCP und UDP"
description: "TCP ist ein verbindungsorientiertes Protokoll, das eine garantierte und geordnete Datenübertragung bietet und für Anwendungen wie E-Mail und Downloads geeignet ist. UDP hingegen ist verbindungslos, schneller und effizienter für Echtzeitanwendungen wie Streaming und Spiele, verzichtet jedoch auf Garantien für Übertragung und Reihenfolge. Beide Protokolle arbeiten auf der Transportschicht und unterscheiden sich in Header-Größe sowie Fehlererkennung."
---

TCP und UDP sind zwei grundlegende Transportprotokolle im [OSI-Modell](/open-fidup/lerninhalte/osi-modell) und [TCP/IP-Modell](/open-fidup/lerninhalte/tcp-ip-modell), die auf der Transportschicht operieren. Sie dienen der Übertragung von Daten zwischen Anwendungen über Netzwerke, unterscheiden sich jedoch in ihrem Ansatz: TCP priorisiert Zuverlässigkeit und Ordnung, während UDP Geschwindigkeit und Effizienz betont. TCP verwendet einen 20-Byte-Header, UDP einen 8-Byte-Header.

## TCP

Das Transmission Control Protocol (TCP) ist ein verbindungsorientiertes Protokoll, das eine zuverlässige Datenübertragung gewährleistet. Es etabliert eine Verbindung durch einen Drei-Wege-Handshake, bestehend aus SYN, SYN-ACK und ACK. Die Daten werden in der richtigen Reihenfolge übermittelt, mit umfassender Fehlererkennung durch Congestion Control und Flow Control. Retransmissionen erfolgen bei verlorenen Paketen. TCP ist langsamer als UDP, bietet jedoch höhere Sicherheit. Es eignet sich für Anwendungen, die Zuverlässigkeit erfordern.

Typische Anwendungsgebiete umfassen:
- E-Mail und Messaging
- Downloads
- HTTP, HTTPS, FTP, Telnet und SMTP

## UDP

Das User Datagram Protocol (UDP) ist ein verbindungsloses Protokoll ohne zusätzlichen Overhead. Es unterstützt Broadcasting und Multicasting effektiv, garantiert jedoch keine Datenübertragung oder Reihenfolge. Die Fehlererkennung beschränkt sich auf eine einfache Checksumme. UDP verzichtet auf Sequenzierung und Retransmissionen, was es schneller, einfacher und effizienter als TCP macht. Es ist ideal für Echtzeitanwendungen, die geringe Latenz priorisieren.

Typische Anwendungsgebiete umfassen:
- Videostreaming und Online-Spiele
- [DHCP](/open-fidup/lerninhalte/dhcp), TFTP, [SNMP](/open-fidup/lerninhalte/snmp), [DNS](/open-fidup/lerninhalte/dns), RIP und VoIP

## Vergleich

| Aspekt                  | TCP                          | UDP                          |
|-------------------------|------------------------------|------------------------------|
| Verbindungsart         | Verbindungsorientiert       | Verbindungslos              |
| Header-Größe           | 20 Byte                     | 8 Byte                      |
| Datenübertragung       | Garantiert                  | Nicht garantiert            |
| Reihenfolge            | Einhaltung garantiert       | Keine Garantie              |
| Fehlererkennung        | Umfassend (Congestion/Flow Control) | Schwach (Checksumme)        |
| Geschwindigkeit        | Langsamer                   | Schneller                   |
| Retransmission         | Ja                          | Nein                        |
| Sequenzierung          | Ja                          | Nein                        |
| Anwendungsgebiete      | E-Mail, Downloads, HTTP     | Streaming, Spiele, DHCP     |

## Quellen

> Dalwigk, F. (2019, January 20). TCP vs. UDP | Die Unterschiede der beiden Protokolle | Netzwerktechnik. Youtube. Retrieved from https://www.youtube.com/watch?v=v8_mM7zq8GE  
> TCP 3-Wege-Handshake (SYN, SYN-ACK, ACK). (2024, June 27). Retrieved from https://www.guru99.com/de/tcp-3-way-handshake.html