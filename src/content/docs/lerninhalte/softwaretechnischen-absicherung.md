---
title: "Softwaretechnische Absicherung"
description: "Softwaretechnische Absicherung umfasst Maßnahmen wie User-Management, Firewalls, Port-Security und Verschlüsselung mit TPM zum Schutz vor unbefugtem Zugriff und Angriffen."
---

Softwaretechnische Absicherung bezieht sich auf eine Reihe von Maßnahmen, die in der Informatik und IT-Sicherheit eingesetzt werden, um Systeme und Netzwerke vor unbefugtem Zugriff sowie Angriffen zu schützen. Dazu gehören die Verwaltung von Benutzerkonten, der Einsatz von Firewalls und Webfiltern, die Sicherung von Netzwerkports sowie die Verschlüsselung von Daten unterstützt durch Trusted Platform Modules (TPM). Diese Ansätze zielen darauf ab, die Integrität, Vertraulichkeit und Verfügbarkeit von Informationen zu gewährleisten.

## User-Management

Das User-Management umfasst die Verwaltung von Benutzerkonten und deren Berechtigungen innerhalb eines Systems oder Netzwerks. Es stellt sicher, dass nur autorisierte Personen Zugriff auf Ressourcen erhalten.

Wichtige Aspekte sind:

- **Benutzerkontenverwaltung**: Erstellung, Änderung und Löschung von Benutzerkonten.
- **Rollenbasierte Zugriffskontrolle (RBAC)**: Zuweisung von Berechtigungen basierend auf den Rollen der Benutzer, um den Zugriff auf sensible Daten zu steuern.
- **Starke Authentifizierung**: Implementierung von Multi-Faktor-Authentifizierung (MFA), um die Sicherheit der Benutzeranmeldungen zu erhöhen.
- **Passwortrichtlinien**: Durchsetzung von Richtlinien für starke Passwörter, beispielsweise Mindestlänge und Komplexität, sowie regelmäßige Passwortänderungen.
- **Überwachung und Protokollierung**: Nachverfolgung von Benutzeraktivitäten zur Erkennung von unbefugtem Zugriff oder verdächtigen Aktivitäten.

## Firewall und Webfilter

Firewalls und Webfilter sind Sicherheitslösungen, die den Datenverkehr zwischen einem internen Netzwerk und externen Netzwerken überwachen und steuern. Sie dienen dazu, unbefugten Zugriff zu verhindern und den Datenfluss zu regulieren.

Wichtige Aspekte sind:

- **Firewall**: Hardware- oder Softwarelösung, die den ein- und ausgehenden Datenverkehr basierend auf vordefinierten Sicherheitsregeln filtert.
  - **Zugriffssteuerung**: Bestimmung, welche Verbindungen erlaubt oder blockiert werden.
  - **Intrusion Detection/Prevention Systems (IDS/IPS)**: Systeme zur Erkennung und Verhinderung von unbefugten Zugriffen oder Angriffen.
- **Webfilter**: Software, die den Zugriff auf bestimmte Websites oder Inhalte basierend auf vordefinierten Richtlinien einschränkt.
  - **Inhaltsfilterung**: Blockierung von schädlichen oder unangemessenen Inhalten.
  - **Kategorisierung**: Klassifizierung von Websites in verschiedene Kategorien, beispielsweise soziale Medien oder Glücksspiel, um den Zugriff zu steuern.

## Port-Security

Port-Security bezeichnet Sicherheitsmaßnahmen, die den Zugriff auf Netzwerkports steuern, um unbefugten Zugriff und Netzwerkangriffe zu verhindern. Sie wird typischerweise auf Switches implementiert, um die Netzwerkintegrität zu wahren.

Wichtige Aspekte sind:

- **Port-Security auf Switches**: Konfiguration von Switches, um nur autorisierte Geräte an bestimmten Ports zuzulassen.
  - **MAC-Adressfilterung**: Beschränkung des Zugriffs auf bestimmte MAC-Adressen, die an einem Port erlaubt sind.
  - **Maximale Anzahl von MAC-Adressen**: Festlegung einer maximalen Anzahl von MAC-Adressen, die an einem Port gleichzeitig aktiv sein dürfen.
- **Alarmierung**: Benachrichtigung bei unbefugtem Zugriff oder wenn ein nicht autorisiertes Gerät versucht, sich mit dem Netzwerk zu verbinden.

## Verschlüsselung mit TPM

Verschlüsselung ist der Prozess, bei dem Daten in ein unlesbares Format umgewandelt werden, um sie vor unbefugtem Zugriff zu schützen. Das Trusted Platform Module (TPM) ist ein Hardwarechip, der zur sicheren Speicherung von Verschlüsselungsschlüsseln verwendet wird und die Plattformintegrität unterstützt.

Wichtige Aspekte sind:

- **Datenverschlüsselung**: Verschlüsselung von Daten sowohl im Ruhezustand, beispielsweise auf Festplatten, als auch während der Übertragung, beispielsweise über Netzwerke.
  - **Verschlüsselungsalgorithmen**: Verwendung starker Algorithmen wie AES (Advanced Encryption Standard) zur Sicherstellung der Datensicherheit.
- **TPM**: Hardwarekomponente, die zur Generierung, Speicherung und Verwaltung von kryptografischen Schlüsseln verwendet wird.
  - **Sichere Schlüsselverwaltung**: Speicherung von Schlüsseln in einem geschützten Bereich, um sie vor unbefugtem Zugriff zu schützen.
  - **Plattformintegrität**: Überprüfung der Integrität des Systems beim Booten, um sicherzustellen, dass keine unbefugten Änderungen vorgenommen wurden.

## Quellen

> AI Chat. (2024, September 20). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1