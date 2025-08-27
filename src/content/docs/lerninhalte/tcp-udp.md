---
title: "TCP und UDP: Transportschicht-Protokolle"
description: "TCP ist verbindungsorientiert, garantiert Datenübertragung und Reihenfolge, ideal für E-Mail und Downloads. UDP ist verbindungslos, schneller und effizienter für Streaming und Spiele. Beide Protokolle haben unterschiedliche Header-Größen und Fehlererkennung."
---

- Protokolle auf **Transportschicht** [[OSI-Modell|4. Transportschicht (OSI-Modell)]] / [[TCP-IP-Modell|3. Transportschicht (TCP/IP-Modell)]]

## TCP
- **T**ransmission **C**ontrol **P**rotocol, **20-Byte** Header
- **verbindugsorientiertes** Protokoll, *3-Wege-Handshake (SYN,SYN-ACK,ACK)*
- Übermittlung von Daten **garantiert** und **Einhaltung der Reihenfolge**
- **umfangreiche** Fehlererkennung (Congestion Control, Flow Control)
- **langsamer**, aber **sicherer** als UDP
- **Sequenzierung** (richtige Reihenfolge)
- **Retransimission**
- **Anwendungsgebiete**
	- E-Mail, Messaging, Downloads
	- HTTP, HTTPS, FTP, Telnet, SMTP

## UDP
- **U**ser **D**atagram **P**rotocol, **8-Byte** Header
- **verbindungsloses** Protokoll, kein Overhead dafür
- sehr gut für **broad-** und **multicast**
- Übermittlung von Daten **nicht garantiert**
- **schwache** Fehlererkennung (Checksumme)
- **schneller, einfacher, effizienter** als UDP
- **keine** Sequenzierung der Daten
- **keine** Retransmission
- **Anwendungsgebiete**, 
	- Videostreaming, Online-Spiele, ...
	- DHCP, TFTP, SNMP, DNS, RIP, VoIP

## Quellen
> Dalwigk, F. (2019, January 20). TCP vs. UDP | Die Unterschiede der beiden Protokolle | Netzwerktechnik. Youtube. Retrieved from https://www.youtube.com/watch?v=v8_mM7zq8GE
> TCP 3-Wege-Handshake (SYN, SYN-ACK, ACK). (2024, June 27). Retrieved from https://www.guru99.com/de/tcp-3-way-handshake.html
