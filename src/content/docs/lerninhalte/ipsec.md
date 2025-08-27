---
title: "IPsec: Sicherheitsprotokolle für IP-Verbindungen"
description: "IPsec ist eine Gruppe von Protokollen zur Sicherung von IP-Verbindungen, häufig für VPNs verwendet. Es bietet Verschlüsselung, Authentifizierung und Integritätsschutz durch AH, ESP und SA."
---

- Gruppe von **Protokollen** zur **Sicherung von Verbindungen** zwischen Geräten
- häufig für [[VPN-Modelle|VPNs]] benutzt
- **Verschlüsselung** von [[TCP-IP-Modell|IP-Paketen]], **Authentifizierung** der Quelle

## Funktionsweise
1. **Schlüsselaustausch**, [[Verschlüsselungsart#Asymmetrische Verschlüsselung|Schlüsselpaar]] wird ausgetauscht
2. **Paket-Header** und **-Trailer**, Daten bekommen extra Header bezüglich *Authentifizierung* und *Verschlüsselung* als auch Trailer -> Overhead
3. **Authentifizierung**, für jedes Paket Authentifizierung, quasi wie *Echtheitsstempel* auf Sammlerstück -> Pakete garantiert von vertrauenswürdiger Quelle
4. **Verschlüsselung**, Daten und Header von Paketen werden verschlüsselt
5. **Übertragung**, Pakete werden als [[TCP-UDP|UDP]] verschickt, dadurch kommen Pakete einfacher durch Firewalls
6. **Entschlüsselung**, Daten werden entschlüsselt

## Protokolle
- **Authentication Header** *(AH)*, Sicherstellung dass Daten von vertrauenswürdiger Quelle kommen und nicht manipuliert wurden
- **Einkapselndes Sicherheitsprotokoll** *(ESP)*, verschlüsselt IP-Header und Daten für jedes Paket. Im Transportmodus nur Daten verschlüsselt. ESP fügt zu jedem Paket Header und Trailer hinzu
- **Security Association** *(SA)*, Reihe von Protokollen für Aushandlung der Verschlüsselungsschlüsseln und -algorithmen

## Vorteile
- **Netzwerksicherheit**: IPsec bietet eine starke Sicherheit auf Netzwerkebene, indem es Datenpakete verschlüsselt und Authentifizierungsmethoden verwendet, um sicherzustellen, dass die Daten nur von autorisierten Benutzern gelesen werden können.
- **Unterstützung für IP-basierte Anwendungen**: Da IPsec alle IP-basierten Anwendungen unterstützt, kann es nahtlos in bestehende Netzwerke integriert werden, ohne dass spezielle Anpassungen erforderlich sind.
- **Bewährte Technologie**: IPsec ist eine etablierte Technologie, die seit vielen Jahren verwendet wird und sich als zuverlässig erwiesen hat

## Nachteile
- **Komplexität**: Die Implementierung und Konfiguration von IPsec kann komplex sein, was zu höheren Kosten und längeren Implementierungszeiten führen kann.
- **Leistungsprobleme**: In einigen Fällen kann die Verschlüsselung von Daten zu einer Verringerung der Netzwerkgeschwindigkeit führen, insbesondere bei älteren Hardwarelösungen
- **Kompatibilität**: IPsec kann in bestimmten Netzwerkkonfigurationen oder mit bestimmten Firewalls Probleme bei der Kompatibilität aufweisen, was die Nutzung erschweren kann.

## Quellen

> Funktionsweise von IPsec VPNs. (2024, September 20). Retrieved from https://www.cloudflare.com/de-de/learning/network-layer/what-is-ipsec
> IPsec VPN und SSL VPN: Die wichtigsten Unterschiede auf einen Blick - Leipziger Zeitung. (2024, April 21). Retrieved from https://www.l-iz.de/vpn/ipsec-vpn-vs-ssl-vpn
> Was ist ein IPSec und wie genau funktioniert dieses? (2019, July 25). Retrieved from https://www.cactusvpn.com/de/der-leitfaden-fur-anfanger-zu-vpn/was-ist-ipsec
