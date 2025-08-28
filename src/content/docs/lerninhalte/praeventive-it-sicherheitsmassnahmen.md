---
title: "Präventive IT-Sicherheitsmaßnahmen"
description: "Präventive IT-Sicherheitsmaßnahmen umfassen Maßnahmen wie Netzwerksegmentierung, Firewall-Konfiguration, Intrusion Detection/Prevention Systeme und Systemhärtung. Sie zielen auf Zugriffskontrolle, Datensicherheit sowie Schulung und Sensibilisierung ab. Regelmäßige Audits und Patch-Management sind dabei von zentraler Bedeutung."
---

Präventive IT-Sicherheitsmaßnahmen dienen der Vorbeugung von Cyberbedrohungen, indem sie die Angriffsfläche reduzieren, den Zugriff auf Systeme kontrollieren und die Widerstandsfähigkeit von Infrastrukturen stärken. Sie umfassen technische, organisatorische und menschliche Aspekte, um Risiken wie unbefugten Zugriff, Datenlecks und Schadsoftware zu minimieren. Zu den Kernbereichen gehören Netzwerksegmentierung, Firewall-Konfiguration, Intrusion Detection/Prevention Systeme (IDS/IPS), Systemhärtung, Zugriffskontrolle, Datensicherheit, Schulung und Sensibilisierung, Schwachstellenmanagement sowie Netzwerküberwachung.

## Netzwerksegmentierung
Die Netzwerksegmentierung teilt das Netzwerk in logische Teilbereiche auf, um die Angriffsfläche zu verkleinern und die seitliche Ausbreitung von Angriffen zu erschweren. Kritische Systeme werden in separaten Segmenten isoliert. Dies geschieht durch den Einsatz von VLANs und Firewalls zwischen den Segmenten.

## Firewall-Konfiguration
Firewalls filtern eingehenden und ausgehenden Datenverkehr, um unerwünschte Verbindungen zu blockieren. Ein Whitelisting-Ansatz erlaubt nur explizit zugelassene Verbindungen. Die Regeln werden regelmäßig überprüft und angepasst. Moderne Next-Generation Firewalls bieten erweiterte Funktionen wie Anwendungskontrolle und Intrusion Prevention.

## Intrusion Detection/Prevention Systeme (IDS/IPS)
Diese Systeme überwachen den Netzwerkverkehr auf verdächtige Aktivitäten. IDS erkennt und meldet Auffälligkeiten, während IPS erkannte Angriffe automatisch abwehrt. Signaturen und Regeln werden regelmäßig aktualisiert, um neue Bedrohungen zu erfassen.

## Systemhärtung
Systemhärtung stärkt die Sicherheit von Systemen durch die Minimierung unnötiger Funktionen und die Aktivierung von Schutzmechanismen.

### Deaktivierung unnötiger Dienste und Ports
Nur erforderliche Dienste und Anwendungen bleiben aktiv, um offene Ports auf ein Minimum zu reduzieren. Regelmäßige Überprüfungen mit Port-Scannern identifizieren potenzielle Schwachstellen.

### Sichere Konfiguration von Betriebssystemen
Sicherheitsfeatures wie Data Execution Prevention (DEP) und Address Space Layout Randomization (ASLR) werden aktiviert. Benutzerrechte sind restriktiv gestaltet, und Sicherheitsupdates werden regelmäßig installiert.

### Application Whitelisting
Nur zugelassene Anwendungen dürfen ausgeführt werden, um die Installation von Schadsoftware zu verhindern. Dies wird durch Gruppenrichtlinien oder spezielle Software umgesetzt.

## Zugriffskontrolle
Zugriffskontrolle regelt den Zugang zu Systemen und Daten, um unbefugten Zugriff zu verhindern.

### Starke Authentifizierung
Komplexe Passwortrichtlinien werden durchgesetzt, ergänzt durch Zwei-Faktor-Authentifizierung (2FA). Single Sign-On (SSO) Lösungen vereinfachen die Verwaltung, ohne die Sicherheit zu beeinträchtigen.

### Privileged Access Management (PAM)
Privilegierte Konten werden verwaltet und überwacht, mit Just-in-Time-Zugriff auf administrative Rechte. Alle Aktivitäten mit erhöhten Rechten werden protokolliert.

### Rollenbasierte Zugriffskontrolle (RBAC)
Berechtigungen werden rollenbezogen zugewiesen, basierend auf dem Prinzip der geringsten Privilegien. Zugriffsrechte werden regelmäßig überprüft und angepasst.

## Datensicherheit
Datensicherheit schützt sensible Informationen vor Verlust, Diebstahl oder Manipulation.

### Datenverschlüsselung
Sensible Daten werden im Ruhezustand und während der Übertragung verschlüsselt, unter Verwendung starker Algorithmen wie AES-256. Schlüssel und Zertifikate werden sicher verwaltet.

### Regelmäßige Backups
Die 3-2-1 Backup-Strategie wird implementiert, mit Verschlüsselung der Backups. Wiederherstellungsprozesse werden regelmäßig getestet.

### Data Loss Prevention (DLP)
DLP identifiziert und schützt sensible Daten, verhindert unbeabsichtigte oder böswillige Datenlecks und überwacht Datenübertragungen sowie Zugriffe.

## Schulung und Sensibilisierung
Schulung und Sensibilisierung stärken das Bewusstsein für Sicherheitsrisiken und fördern sicheres Verhalten.

### Mitarbeiterschulungen
Regelmäßige Schulungen behandeln Themen wie Social Engineering und [Phishing](/open-fidup/lerninhalte/phishing). Phishing-Simulationen testen die Aufmerksamkeit der Mitarbeiter.

### Sicherheitsrichtlinien
Klare IT-Sicherheitsrichtlinien werden erstellt, kommuniziert und regelmäßig aktualisiert. Technische Maßnahmen unterstützen ihre Durchsetzung.

## Schwachstellenmanagement
Schwachstellenmanagement identifiziert und behebt Sicherheitslücken proaktiv.

### Regelmäßige Sicherheitsaudits
[Penetrationstests](/open-fidup/lerninhalte/penetrations-test) und Vulnerability Scans identifizieren Schwachstellen, die priorisiert und durch Maßnahmenpläne behoben werden.

### Patch-Management
Sicherheitsupdates werden zeitnah installiert, idealerweise automatisiert. Patches werden vor der Produktivumgebung getestet.

## Netzwerküberwachung
Netzwerküberwachung erkennt und reagiert auf Sicherheitsvorfälle in Echtzeit.

### Security Information and Event Management (SIEM)
SIEM sammelt und analysiert Sicherheitsereignisse zentralisiert, erkennt Anomalien und löst automatisierte Alarme aus.

### Netzwerk-Monitoring
Der Netzwerkverkehr wird kontinuierlich überwacht, um ungewöhnliche Muster zu identifizieren. Netzwerk-Analyzer und Protokollierungstools unterstützen dies.