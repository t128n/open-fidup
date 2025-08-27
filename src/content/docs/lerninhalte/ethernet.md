---
title: "Ethernet"
description: "Ethernet ist eine weit verbreitete Technologie für lokale Netzwerke, definiert im IEEE 802.3 Standard. Es verwendet CSMA/CD als Zugriffsverfahren. Daten werden in Frames übertragen. Vorteile sind hohe Geschwindigkeit und Zuverlässigkeit. Nachteile sind begrenzte Reichweite und Kollisionen."
---

- weit verbreitete Technologie für **lokale Netzwerke (LAN)**, die die Übertragung von Daten zwischen Geräten in einem Netzwerk ermöglicht. Es ist im **IEEE 802.3 Standard** definiert und bildet die Grundlage für die meisten modernen Netzwerke.

- Zugriffsverfahren **CSMA/CD** (Carrier Sense Multiple Access with Collision Detection). Bei diesem Verfahren **hören die Geräte** im Netzwerk, bevor sie Daten senden, um sicherzustellen, dass das Medium frei ist. Wenn zwei Geräte gleichzeitig senden, kommt es zu einer **Kollision**. In diesem Fall erkennen die Geräte die Kollision und warten eine **zufällige Zeit**, bevor sie erneut versuchen, ihre Daten zu senden. Dieses Verfahren hilft, die **Effizienz des Netzwerks zu maximieren und Kollisionen zu minimieren.**

- **Datenübertragung**: Daten werden in **Frames** übertragen, die eine bestimmte Struktur haben. Ein Ethernet-Frame besteht aus:
  - **Header**: Enthält Informationen wie die **Quell- und Ziel-MAC-Adressen** sowie den Typ des Protokolls.
  - **Payload**: Der eigentliche **Dateninhalt**, der übertragen wird (z.B. IP-Pakete).
  - **Trailer**: Enthält **Prüfziffern** (z.B. CRC), um sicherzustellen, dass die Daten korrekt übertragen wurden.

## Einordnung
   - **[OSI-Modell](/lerninhalte/OSI-Modell)**: Ethernet gehört zur **Data Link Layer (Schicht 2)** des OSI-Modells. Hier werden die physikalischen Adressen (MAC-Adressen) verwendet, um Geräte im Netzwerk zu identifizieren und den Zugriff auf das Übertragungsmedium zu steuern.
    - **[TCP/IP-Modell](/lerninhalte/TCP-IP-Modell)**: Im TCP/IP-Modell wird Ethernet in die **Link Layer** / **Netzzugangsschicht** integriert, die die physische Verbindung und die Datenübertragung zwischen Geräten in einem Netzwerk behandelt. Ethernet ist somit eine der grundlegenden Technologien, die die Kommunikation in TCP/IP-Netzwerken ermöglicht.

## Vorteile
- **Hohe Geschwindigkeit:** Unterstützt Geschwindigkeiten von 10 Mbps bis zu 100 Gbps und mehr.
- **Zuverlässigkeit**: Robuste Technologie mit geringer Fehleranfälligkeit.
- **Skalierbarkeit**: Einfaches Hinzufügen neuer Geräte ohne große Änderungen am Netzwerk.
- **Kosteneffizienz**: Weit verbreitete und kostengünstige Hardware.
## Nachteile
- **Reichweite**: Begrenzte Reichweite (typisch 100 Meter für Twisted-Pair-Kabel).
- **Kollisionen**: Bei älteren Varianten können Kollisionen auftreten, was die Leistung beeinträchtigen kann.
- **Sicherheitsrisiken**: Offene Netzwerke können anfällig für unbefugten Zugriff sein.

# Anwendungen
- Lokale Netzwerke (LAN): Verbindung von Computern, Druckern und anderen Geräten in Büros und Heimen.
- Rechenzentren: Hohe Bandbreite und Zuverlässigkeit für Serververbindungen.
- Industrie: Verwendung in industriellen Automatisierungssystemen (z.B. EtherCAT, Profinet).

## Quellen
> IEEE. (n.d.). IEEE 802.3 Ethernet Working Group. Retrieved from https://www.ieee802.org/3/
> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1
