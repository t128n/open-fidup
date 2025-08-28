---
title: "IPsec"
description: "IPsec ist eine Gruppe von Protokollen zur Sicherung von IP-Verbindungen, häufig für VPNs verwendet. Es bietet Verschlüsselung, Authentifizierung und Integritätsschutz durch AH, ESP und SA."
---

IPsec bezeichnet eine Gruppe von Protokollen zur Sicherung von Verbindungen zwischen Geräten auf der Ebene des Internetprotokolls (IP). Es findet häufig Anwendung in [VPNs](/open-fidup/lerninhalte/vpn-modelle) und ermöglicht die Verschlüsselung von [IP-Paketen](/open-fidup/lerninhalte/tcp-ip-modell), die Authentifizierung der Quelle sowie den Schutz der Integrität der Daten.

## Funktionsweise
Die Funktionsweise von IPsec umfasst mehrere Schritte zur Sicherung der Kommunikation:

1. Schlüsselaustausch: Ein [Schlüsselpaar](/open-fidup/lerninhalte/verschluesselungsart#asymmetrische-verschluesselung) wird zwischen den beteiligten Geräten ausgetauscht.
2. Paket-Header und -Trailer: Den Daten werden zusätzliche Header für Authentifizierung und Verschlüsselung sowie Trailer hinzugefügt, was zu einem Overhead führt.
3. Authentifizierung: Jedes Paket wird authentifiziert, um sicherzustellen, dass es von einer vertrauenswürdigen Quelle stammt.
4. Verschlüsselung: Die Daten und Header der Pakete werden verschlüsselt.
5. Übertragung: Die Pakete werden als [UDP](/open-fidup/lerninhalte/tcp-udp) übertragen, wodurch sie leichter durch Firewalls gelangen.
6. Entschlüsselung: Die Daten werden am Empfänger entschlüsselt.

## Protokolle
IPsec basiert auf mehreren Schlüsselprotokollen:

- **Authentication Header (AH)**: Stellt sicher, dass die Daten von einer vertrauenswürdigen Quelle stammen und nicht manipuliert wurden.
- **Encapsulating Security Payload (ESP)**: Verschlüsselt den IP-Header und die Daten jedes Pakets. Im Transportmodus werden nur die Daten verschlüsselt. ESP fügt jedem Paket einen Header und einen Trailer hinzu.
- **Security Association (SA)**: Eine Reihe von Protokollen zur Aushandlung der Verschlüsselungsschlüssel und -algorithmen.

## Vorteile
IPsec bietet mehrere Vorteile für die Netzwerksicherheit:

- **Netzwerksicherheit**: Es verschlüsselt Datenpakete und verwendet Authentifizierungsmethoden, um sicherzustellen, dass die Daten nur von autorisierten Benutzern gelesen werden können.
- **Unterstützung für IP-basierte Anwendungen**: Da es alle IP-basierten Anwendungen unterstützt, lässt es sich nahtlos in bestehende Netzwerke integrieren, ohne spezielle Anpassungen zu erfordern.
- **Bewährte Technologie**: IPsec ist eine etablierte Technologie, die seit vielen Jahren verwendet wird und sich als zuverlässig erwiesen hat.

## Nachteile
Trotz seiner Stärken weist IPsec einige Nachteile auf:

- **Komplexität**: Die Implementierung und Konfiguration kann komplex sein, was zu höheren Kosten und längeren Implementierungszeiten führen kann.
- **Leistungsprobleme**: Die Verschlüsselung kann in einigen Fällen die Netzwerkgeschwindigkeit verringern, insbesondere bei älteren Hardwarelösungen.
- **Kompatibilität**: In bestimmten Netzwerkkonfigurationen oder mit bestimmten Firewalls können Kompatibilitätsprobleme auftreten, die die Nutzung erschweren.

## Quellen
- Funktionsweise von IPsec VPNs. (2024, September 20). Retrieved from https://www.cloudflare.com/de-de/learning/network-layer/what-is-ipsec
- IPsec VPN und SSL VPN: Die wichtigsten Unterschiede auf einen Blick - Leipziger Zeitung. (2024, April 21). Retrieved from https://www.l-iz.de/vpn/ipsec-vpn-vs-ssl-vpn
- Was ist ein IPSec und wie genau funktioniert dieses? (2019, July 25). Retrieved from https://www.cactusvpn.com/de/der-leitfaden-fur-anfanger-zu-vpn/was-ist-ipsec