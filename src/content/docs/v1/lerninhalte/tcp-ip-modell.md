---
title: "TCP/IP-Modell"
description: "Das TCP/IP-Modell ist eine Gruppe von Protokollen für Vermittlung und Transport in dezentralen Netzwerken. Es umfasst vier Schichten von Anwendung bis Netzzugang mit Aufgaben wie Adressierung und Routing. Vorteile sind Standortunabhängigkeit, Nachteile Ineffizienz bei kleinen Datenmengen."
---

- Gruppe von **Netzwerkprotokollen**
- **T**ransmission **C**ontrol **P**rotocol *(TCP)* **I**nternet **P**rotocol *(IP)*
- Zuständig für **Vermittlung** und **Transport** innerhalb eines dezentralen Netzwerkes

## Aufgaben
 - logische Adressierung / **logical Addressing**: Aufteilung großer Netzwerke in kleinere *Segmente*
 - Wegfindung / **Routing**: auf jedem *Netzwerkknoten* wird der nächste Knoten für ein Datenpaket ermittelt. Wegfindung von Paketen *über Netzwerksegmente hinaus* ^b4a03f
 - Fehlerbehandlung und Flusssteuerung / **Error and Flow Control**: *verbindungsorientierte* Kommunikation, bei Fehler *erneute Übertragung* von Paketen
 - Anwendungsunterstützung / **Application Support**: Adressierung von Diensten über *TCP/UDP-Ports*
 - Namensauflösung / **Name Resolution**: Auflösung von *Domänenamen* in IPv4/IPv6 Adressen

## Schichten

4. **Anwendungsschicht**: *Anwendungen* die über das Netzwerk kommunizieren, Protokolle: *HTTP*, *FTP*, *POP*, *SMTP*, *TLS*, *SOCK5*
3. **Transportschicht**: Aufrechthaltung *zuverlässiger End-to-End-Kommunikation*, Protokoll: *TCP*, *UDP*
2. **Internetschicht**: Weiterleitung/*Routing* von Paketen, Protokolle: *IP*, *ICMP*
1. **Netzzugangsschicht**: *physische Verbindung* von Subnetzen, Protokolle: *Ethernet* (Kabel), *IEEE 802.11* (Funk)

## Vorteile
- Datenübertragung ist **standort-** und **herstellerunabhängig**
- **Anwender** benötigt ausschließlich **Zieladresse** - Verbindung kontrolliert TCP/IP
- Anwendungen sind vom **Übertragungssystem unabhängig**

## Nachteile
- **ineffizient** bei niedrigen Datenmengen
- **spezielle Anforderungen** an Übertragungssystem nur **schwer realisierbar**

## Quellen
> TCP/IP. (2022, November 13). Retrieved from https://studyflix.de/informatik/tcp-ip-5692