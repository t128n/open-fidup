---
title: "Ethernet"
description: "Ethernet ist eine weit verbreitete Technologie für lokale Netzwerke, definiert im IEEE 802.3 Standard. Es verwendet CSMA/CD als Zugriffsverfahren. Daten werden in Frames übertragen. Vorteile sind hohe Geschwindigkeit und Zuverlässigkeit. Nachteile sind begrenzte Reichweite und Kollisionen."
---

Ethernet ist eine weit verbreitete Technologie für lokale Netzwerke, die die Übertragung von Daten zwischen Geräten ermöglicht. Es ist im IEEE 802.3 Standard definiert und bildet die Grundlage für die meisten modernen Netzwerke. Das Zugriffsverfahren Carrier Sense Multiple Access with Collision Detection (CSMA/CD) sorgt dafür, dass Geräte das Medium abhören, bevor sie senden, um Kollisionen zu vermeiden. Daten werden in Frames übertragen, die aus Header, Payload und Trailer bestehen. Ethernet bietet hohe Geschwindigkeiten, Zuverlässigkeit und Skalierbarkeit, ist jedoch durch begrenzte Reichweite und potenzielle Kollisionen eingeschränkt.

## Einordnung
Ethernet gehört zur Data Link Layer (Schicht 2) des [OSI-Modells](/open-fidup/lerninhalte/osi-modell). Hier werden physikalische Adressen wie MAC-Adressen verwendet, um Geräte im Netzwerk zu identifizieren und den Zugriff auf das Übertragungsmedium zu steuern. Im [TCP/IP-Modell](/open-fidup/lerninhalte/tcp-ip-modell) ist Ethernet in die Link Layer integriert, die die physische Verbindung und die Datenübertragung zwischen Geräten behandelt. Ethernet ermöglicht somit die grundlegende Kommunikation in TCP/IP-Netzwerken.

## Zugriffsverfahren
Ethernet nutzt CSMA/CD als Zugriffsverfahren. Dabei hören die Geräte im Netzwerk, bevor sie Daten senden, um sicherzustellen, dass das Medium frei ist. Wenn zwei Geräte gleichzeitig senden, kommt es zu einer Kollision. Die Geräte erkennen die Kollision und warten eine zufällige Zeit, bevor sie erneut versuchen, ihre Daten zu senden. Dieses Verfahren maximiert die Effizienz des Netzwerks und minimiert Kollisionen.

## Datenübertragung
Daten werden in Frames übertragen, die eine bestimmte Struktur haben. Ein Ethernet-Frame besteht aus:

- **Header**: Enthält Informationen wie die Quell- und Ziel-MAC-Adressen sowie den Typ des Protokolls.
- **Payload**: Der eigentliche Dateninhalt, der übertragen wird, beispielsweise IP-Pakete.
- **Trailer**: Enthält Prüfziffern wie CRC, um sicherzustellen, dass die Daten korrekt übertragen wurden.

## Vorteile
- **Hohe Geschwindigkeit**: Unterstützt Geschwindigkeiten von 10 Mbps bis zu 100 Gbps und mehr.
- **Zuverlässigkeit**: Robuste Technologie mit geringer Fehleranfälligkeit.
- **Skalierbarkeit**: Einfaches Hinzufügen neuer Geräte ohne große Änderungen am Netzwerk.
- **Kosteneffizienz**: Weit verbreitete und kostengünstige Hardware.

## Nachteile
- **Reichweite**: Begrenzte Reichweite, typisch 100 Meter für Twisted-Pair-Kabel.
- **Kollisionen**: Bei älteren Varianten können Kollisionen auftreten, was die Leistung beeinträchtigen kann.
- **Sicherheitsrisiken**: Offene Netzwerke können anfällig für unbefugten Zugriff sein.

## Anwendungen
Ethernet findet Anwendung in lokalen Netzwerken (LAN), wo es Computer, Drucker und andere Geräte in Büros und Heimen verbindet. In Rechenzentren bietet es hohe Bandbreite und Zuverlässigkeit für Serververbindungen. In der Industrie wird es in Automatisierungssystemen wie EtherCAT oder Profinet eingesetzt.

## Quellen
> IEEE. (n.d.). IEEE 802.3 Ethernet Working Group. Retrieved from https://www.ieee802.org/3/
> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1