---
title: "Client-Server: Architekturkonzept für Netzwerkanwendungen"
description: "Client-Server ist das gängigste Architekturkonzept mit klarer Verteilung von Aufgaben zwischen Clients und Servern. Server stellen Daten und Dienste bereit, Clients konsumieren sie. Vorteile sind vereinfachte Administration und zentrales Management. Nachteile sind Ausfallrisiko und schlechtere Skalierbarkeit. Anwendungsgebiete sind Web- und E-Mail-Server."
---

- **gängigstes** Architekturkonzept
- klare **Verteilung von Aufgaben** zwischen Clients und Server
- **Server**, Bereitstellung von Daten und Diensten
- **Client**, Konsument von Daten und Diensten
- Ein Server bedient mehrere Clients
- Ein Computer kann sowohl Server als auch Client sein
- **Vorteile**
	- **vereinfachte** Administration und Wartung durch **Zentralisierung**
	- sicheres und globales Management von **Zugriffsrechten**
- **Nachteile**
	- Ausfall des Servers führt zum **Gesamtausfall des Systems**
	- schlechtere **Skalierbarkeit** als [[Peer-To-Peer]]
	- **zeitlicher Aufwand**
- **Anwendungsgebiete**
	- Webserver
	- E-Mail Server
	- FTP-Server
	- -> Großteil des Internet
## Quellen

> https://www.ionos.de/digitalguide/server/knowhow/client-server-modell/