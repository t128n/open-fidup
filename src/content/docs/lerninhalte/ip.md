---
title: "IP"
description: "Das Internet Protocol (IP) ist das Grundprotokoll des Internets auf Ebene 3 des OSI-Modells. Es umfasst IPv4 und IPv6 für Adressierung, Subnetze und verschiedene Adresstypen wie Unicast, Multicast und Broadcast."
---

Das Internet Protocol (IP) bildet die Grundlage der Datenübertragung im Internet und operiert auf der Ebene 3 des [OSI-Modells](/open-fidup/lerninhalte/osi-modell), der Vermittlungsschicht. Es regelt die Adressierung von Geräten, die Aufteilung in Subnetze sowie verschiedene Adresstypen und unterstützt sowohl IPv4 als auch IPv6.

## Adressierung

### IPv4
IPv4-Adressen sind 32 Bit lang und werden als vier durch Punkte getrennte Dezimalzahlen dargestellt, beispielsweise `00000000.00000000.00000000.00000000`. Der begrenzte Adressraum umfasst etwa 4,3 Milliarden mögliche Adressen. Jede IPv4-Adresse besteht aus einem Netzwerk- und einem Hostsegment.

### IPv6
IPv6-Adressen sind 128 Bit lang und bestehen aus acht durch Doppelpunkte getrennten Gruppen von je vier hexadezimalen Ziffern. Dies ermöglicht nahezu unbegrenzte Adressen (etwa 340 Sextillionen) sowie effizienteres Datenrouting und verbesserte Paketverarbeitungsfunktionen. Eine IPv6-Adresse gliedert sich in drei Teile:

- Netzwerk-Identifikator: identifiziert das Netzwerk.
- Subnetz-Identifikator: identifiziert ein spezifisches Subnetz.
- Interface-Identifikator: identifiziert ein spezifisches Gerät.

### Subnetzmaske
Die Subnetzmaske teilt ein IP-Netzwerk in kleinere Subnetze auf. Classless Inter-Domain Routing (CIDR) ermöglicht eine flexible Adressierung ohne starre Klassengrenzen. Die CIDR-Notation gibt die Anzahl der führenden Einsen in der Subnetzmaske an. Variable Length Subnet Mask (VLSM) erlaubt die Verwendung unterschiedlicher Subnetzmasken innerhalb desselben Netzwerks für eine noch feinere Aufteilung.

### Adressraum
Der Adressraum wird von der Internet Assigned Numbers Authority (IANA) verwaltet. Privater Adressraum ist nicht im Internet routbar und nur innerhalb eines lokalen Netzwerksegments erreichbar. Dazu gehören:

- 10.0.0.0 – 10.255.255.255 (/8)
- 172.16.0.0 – 172.31.255.255 (/12)
- 192.168.0.0 – 192.168.255.255 (/16)

Öffentlicher Adressraum ist im gesamten Internet eindeutig und routbar.

### Adresstypen
IP-Adressen unterstützen verschiedene Typen für die Kommunikation:

- Unicast: adressiert ein einzelnes Gerät.
- Multicast: adressiert eine Gruppe von Hosts.
- Broadcast: adressiert alle Geräte im Netzwerk.
- Anycast: adressiert das nächstgelegene Gerät einer Gruppe.
- Loopback: dient der Selbstidentifikation des Geräts.

### Klassen
IPv4-Adressen sind historisch in Klassen unterteilt, die den Adressbereich definieren:

1. Klasse A: 0.X.X.X – 127.X.X.X
2. Klasse B: 128.X.X.X – 191.X.X.X
3. Klasse C: 192.X.X.X – 223.X.X.X
4. Klasse D: 224.X.X.X – 239.X.X.X
5. Klasse E: 240.X.X.X – 255.X.X.X

## Quellen
Torben Haack (2024), AP1 Vorbereitung, IP-Adressen.md