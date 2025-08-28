---
title: "Softwaretechnische Absicherung"
description: "Softwaretechnische Absicherung umfasst User-Management, Firewalls, Port-Security, Verschlüsselung mit TPM. Schutz vor unbefugtem Zugriff und Angriffen."
---

## User-Management
- **Definition**: Verwaltung von Benutzerkonten und deren Berechtigungen innerhalb eines Systems oder Netzwerks.
- **Wichtige Aspekte**:
  - **Benutzerkontenverwaltung**: Erstellung, Änderung und Löschung von Benutzerkonten.
  - **Rollenbasierte Zugriffskontrolle (RBAC)**: Zuweisung von Berechtigungen basierend auf den Rollen der Benutzer, um den Zugriff auf sensible Daten zu steuern.
  - **Starke Authentifizierung**: Implementierung von Multi-Faktor-Authentifizierung (MFA), um die Sicherheit der Benutzeranmeldungen zu erhöhen.
  - **Passwortrichtlinien**: Durchsetzung von Richtlinien für starke Passwörter (z. B. Mindestlänge, Komplexität) und regelmäßige Passwortänderungen.
  - **Überwachung und Protokollierung**: Nachverfolgung von Benutzeraktivitäten zur Erkennung von unbefugtem Zugriff oder verdächtigen Aktivitäten.

## Firewall/Webfilter
- **Definition**: Sicherheitslösungen, die den Datenverkehr zwischen einem internen Netzwerk und externen Netzwerken überwachen und steuern.
- **Wichtige Aspekte**:
  - **Firewall**: Hardware- oder Softwarelösung, die den ein- und ausgehenden Datenverkehr basierend auf vordefinierten Sicherheitsregeln filtert.
    - **Zugriffssteuerung**: Bestimmung, welche Verbindungen erlaubt oder blockiert werden.
    - **Intrusion Detection/Prevention Systems (IDS/IPS)**: Systeme zur Erkennung und Verhinderung von unbefugten Zugriffen oder Angriffen.
  - **Webfilter**: Software, die den Zugriff auf bestimmte Websites oder Inhalte basierend auf vordefinierten Richtlinien einschränkt.
    - **Inhaltsfilterung**: Blockierung von schädlichen oder unangemessenen Inhalten.
    - **Kategorisierung**: Klassifizierung von Websites in verschiedene Kategorien (z. B. soziale Medien, Glücksspiel), um den Zugriff zu steuern.

## Port-Security
- **Definition**: Sicherheitsmaßnahmen, die den Zugriff auf Netzwerkports steuern, um unbefugten Zugriff und Netzwerkangriffe zu verhindern.
- **Wichtige Aspekte**:
  - **Port-Security auf Switches**: Konfiguration von Switches, um nur autorisierte Geräte an bestimmten Ports zuzulassen.
    - **MAC-Adressfilterung**: Beschränkung des Zugriffs auf bestimmte MAC-Adressen, die an einem Port erlaubt sind.
    - **Maximale Anzahl von MAC-Adressen**: Festlegung einer maximalen Anzahl von MAC-Adressen, die an einem Port gleichzeitig aktiv sein dürfen.
  - **Alarmierung**: Benachrichtigung bei unbefugtem Zugriff oder wenn ein nicht autorisiertes Gerät versucht, sich mit dem Netzwerk zu verbinden.

## Verschlüsselung (TPM)
- **Definition**: Verschlüsselung ist der Prozess, bei dem Daten in ein unlesbares Format umgewandelt werden, um sie vor unbefugtem Zugriff zu schützen. TPM (Trusted Platform Module) ist ein Hardwarechip, der zur sicheren Speicherung von Verschlüsselungsschlüsseln verwendet wird.
- **Wichtige Aspekte**:
  - **Datenverschlüsselung**: Verschlüsselung von Daten sowohl im Ruhezustand (z. B. auf Festplatten) als auch während der Übertragung (z. B. über Netzwerke).
  - **Verschlüsselungsalgorithmen**: Verwendung starker Algorithmen wie AES (Advanced Encryption Standard) zur Sicherstellung der Datensicherheit.
  - **TPM**: Hardwarekomponente, die zur Generierung, Speicherung und Verwaltung von kryptografischen Schlüsseln verwendet wird.
    - **Sichere Schlüsselverwaltung**: Speicherung von Schlüsseln in einem geschützten Bereich, um sie vor unbefugtem Zugriff zu schützen.
    - **Plattformintegrität**: Überprüfung der Integrität des Systems beim Booten, um sicherzustellen, dass keine unbefugten Änderungen vorgenommen wurden.

## Quellen
> AI Chat. (2024, September 20). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1

## Firewall/Webfilter
- **Definition**: Sicherheitslösungen, die den Datenverkehr zwischen einem internen Netzwerk und externen Netzwerken überwachen und steuern.
- **Wichtige Aspekte**:
  - **Firewall**: Hardware- oder Softwarelösung, die den ein- und ausgehenden Datenverkehr basierend auf vordefinierten Sicherheitsregeln filtert.
    - **Zugriffssteuerung**: Bestimmung, welche Verbindungen erlaubt oder blockiert werden.
    - **Intrusion Detection/Prevention Systems (IDS/IPS)**: Systeme zur Erkennung und Verhinderung von unbefugten Zugriffen oder Angriffen.
  - **Webfilter**: Software, die den Zugriff auf bestimmte Websites oder Inhalte basierend auf vordefinierten Richtlinien einschränkt.
    - **Inhaltsfilterung**: Blockierung von schädlichen oder unangemessenen Inhalten.
    - **Kategorisierung**: Klassifizierung von Websites in verschiedene Kategorien (z. B. soziale Medien, Glücksspiel), um den Zugriff zu steuern.

## Port-Security
- **Definition**: Sicherheitsmaßnahmen, die den Zugriff auf Netzwerkports steuern, um unbefugten Zugriff und Netzwerkangriffe zu verhindern.
- **Wichtige Aspekte**:
  - **Port-Security auf Switches**: Konfiguration von Switches, um nur autorisierte Geräte an bestimmten Ports zuzulassen.
    - **MAC-Adressfilterung**: Beschränkung des Zugriffs auf bestimmte MAC-Adressen, die an einem Port erlaubt sind.
    - **Maximale Anzahl von MAC-Adressen**: Festlegung einer maximalen Anzahl von MAC-Adressen, die an einem Port gleichzeitig aktiv sein dürfen.
  - **Alarmierung**: Benachrichtigung bei unbefugtem Zugriff oder wenn ein nicht autorisiertes Gerät versucht, sich mit dem Netzwerk zu verbinden.

## Verschlüsselung (TPM)
- **Definition**: Verschlüsselung ist der Prozess, bei dem Daten in ein unlesbares Format umgewandelt werden, um sie vor unbefugtem Zugriff zu schützen. TPM (Trusted Platform Module) ist ein Hardwarechip, der zur sicheren Speicherung von Verschlüsselungsschlüsseln verwendet wird.
- **Wichtige Aspekte**:
  - **Datenverschlüsselung**: Verschlüsselung von Daten sowohl im Ruhezustand (z. B. auf Festplatten) als auch während der Übertragung (z. B. über Netzwerke).
    - **Verschlüsselungsalgorithmen**: Verwendung starker Algorithmen wie AES (Advanced Encryption Standard) zur Sicherstellung der Datensicherheit.
  - **TPM**: Hardwarekomponente, die zur Generierung, Speicherung und Verwaltung von kryptografischen Schlüsseln verwendet wird.
    - **Sichere Schlüsselverwaltung**: Speicherung von Schlüsseln in einem geschützten Bereich, um sie vor unbefugtem Zugriff zu schützen.
    - **Plattformintegrität**: Überprüfung der Integrität des Systems beim Booten, um sicherzustellen, dass keine unbefugten Änderungen vorgenommen wurden.

## Quellen
> AI Chat. (2024, September 20). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1