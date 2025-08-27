---
title: "IP"
description: "Das Internet Protocol (IP) ist das Grundprotokoll des Internets auf Ebene 3 des OSI-Modells. Es umfasst IPv4 und IPv6 für Adressierung, Subnetze und verschiedene Adresstypen wie Unicast, Multicast und Broadcast."
---

- **I**nternet **P**rotocol
- [[OSI-Modell|Ebene 3, Vermittlungsschicht/Network Layer]]

## Adressierung
### IPv4
- **32-Bit** lang
- `00000000.00000000.00000000.00000000`
- vier **durch Punkte** **getrennte** Dezimalzahlen
- begrenzter Adressraum (4,3 Milliarden)
- besteht aus **Netzwerk-** und **Hostsegment**

### IPv6
- **128-Bit** lang
- **acht** durch **Doppelpunkte** getrennte Gruppen von **vier hexadezimalen Ziffern**
- nahezu **unbegrenzte Anzahl an Adressen** (340 Sextillionen)
- effizienteres **Datenrouting** und **Paketverarbeitungsfunktionen**
- besteht aus **Netzwerk-**, **Subnetz-** und **Interface-Identifikator**
	- **Netzwerk**-Identifikator: identifiziert **Netzwerk**
	- **Subnetz**-Identifikator: identifiziert **spezifisches Subnetz**
	- **Interface**-Identifikator: identifiziert **spezifisches Gerät**

### Subnetzmaske
- teilt IP-Netzwerk in Subnetze auf
- **CIDR**: Classles Inter-Domain Routing
- **CIDR-Notation**: Anzahl von *1er Bits* in Subnetzmaske
- **mehr Flexibilität** als klassenbasiertes Routing
- **VLSM**: Variable Length Subnet Mask
	- Methode zur Subnetz-Aufteilung
	- Verwendung verschiedener Subnetzmasken innerhalb desselben Netzwerkes
### Adressraum
- durch **Internet Assigned Numbers Authority** *(IANA)* festgelegt
- **privater** Adressraum: wird **nicht** geroutet, nur in einem Netzwerksegment erreichbar
	- 10.0.0.0 - 10.255.255.255 *(/8)*
	- 172.16.0.0 - 172.31.255.255 *(/12)*
	- 192.168.0.0 - 192.168.255.255 *(/16)*
- **öffentlicher** Adressraum: im gesamten Internet eindeutig, wird geroutet

### Adresstypen
- **Multicast**: an eine *Gruppe* von Hosts
- **Anycast**: *nächstgelegenes Gerät* einer *Gruppe*
- **Unicast**: an ein *einzelnes Gerät* adressiert
- **Broadcast**: an *alle Geräte* im Netzwerk
- **Loopback**: *selbstidentifkation* des Gerätes
### Klassen
1. **A**: 0.X.X.X - 127.X.X.X
2. **B**: 128.X.X.X - 191.X.X.X
4. **C**: 192.X.X.X - 223.X.X.X
5. **D**: 224.X.X.X - 239.X.X.X
6. **E**: 240.X.X.X - 255.X.X.X

## Quellen

> Torben Haack (2024), AP1 Vorbereitung, IP-Adressen.md