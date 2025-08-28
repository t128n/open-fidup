---
title: "Katastrophenwiederherstellung"
description: "Katastrophenwiederherstellung umfasst Strategien zur Vermeidung oder Minimierung von Datenverlusten und Betriebsunterbrechungen. Planung beinhaltet Business-Impact-Analyse, Risikoanalyse und Wiederherstellungsziele. Technologien sind Backups und DRaaS. Tests und Überprüfung sind kontinuierlich."
---

Katastrophenwiederherstellung (Disaster Recovery, DR) bezeichnet Strategien und Technologien zur Vermeidung oder Minimierung von Datenverlusten und Betriebsunterbrechungen infolge von Katastrophenereignissen wie Geräteausfällen, Cyberattacken oder Naturkatastrophen. Sie umfasst die Entwicklung einer Strategie, Planung, Einsatz geeigneter Technologien sowie kontinuierliche Tests. Sicherungs- und Wiederherstellungsprozesse allein bilden keinen vollständigen DR-Plan.

## Definition
Disaster Recovery umfasst Strategien und Technologien zur Vermeidung oder Minimierung von Datenverlusten und Betriebsunterbrechungen infolge von Katastrophenereignissen, beispielsweise Geräteausfälle, Cyberattacken oder Naturkatastrophen.

## Planung der Katastrophenwiederherstellung
Die Entwicklung einer Strategie, Planung, Einsatz geeigneter Technologien und kontinuierliche Tests sind entscheidend. Sicherungs- und Wiederherstellungsprozesse allein bilden keinen vollständigen DR-Plan.

## Wichtige Konzepte
- **Failover**: Auslagerung von Workloads auf Backup-Systeme.
- **Failback**: Rückkehr zum ursprünglichen Primärsystem.

## Business-Continuity-Planung
Diese stellt sicher, dass wesentliche Abläufe im Notfall aufrechterhalten oder schnell wiederhergestellt werden.

## Business-Impact-Analyse
Die Analyse der Auswirkungen auf das Unternehmen dient der Identifikation kritischer Bereiche und Funktionen. Sie umfasst die Erstellung von Katastrophenszenarien zur Vorhersage von Verlusten.

## Risikoanalyse
Diese bewertet die Wahrscheinlichkeit und potenziellen Folgen von Risiken. Sie identifiziert finanzielle Verluste, Imageschäden und Produktivitätsverluste.

## Priorisierung von Anwendungen
Anwendungen werden nach Wichtigkeit klassifiziert:
- **Geschäftskritisch**: Unentbehrliche Anwendungen.
- **Wichtig**: Anwendungen mit tolerierbaren Ausfallzeiten.
- **Nicht wesentlich**: Vorübergehend ersetzbare Anwendungen.

## Dokumentation von Abhängigkeiten
Diese beinhaltet eine Bestandsaufnahme von Hardware und Software sowie kritischen Abhängigkeiten zwischen Anwendungen.

## Wiederherstellungsziele
- **RTO (Recovery Time Objective)**: Maximale Zeitspanne für die Wiederherstellung.
- **RPO (Recovery Point Objective)**: Maximales Alter der wiederherzustellenden Daten.
- **RCO (Recovery Consistency Objective)**: Tolerierbare Anzahl inkonsistenter Einträge in Geschäftsdaten.

## Einhaltung gesetzlicher Vorschriften
Alle DR-Lösungen müssen Datenschutz- und Sicherheitsanforderungen erfüllen.

## Auswahl von Technologien
[Backups](/open-fidup/lerninhalte/backup) bilden die Grundlage für den DR-Plan. Cloudbasierte Backup-Lösungen oder [DRaaS](/open-fidup/lerninhalte/disaster-recovery)-Anbieter werden berücksichtigt.

## Auswahl von Recovery-Standorten
Eine geografische Trennung der Backup-Daten mindert Risiken.

## Kontinuierliche Tests und Überprüfung
Regelmäßige Tests des DR-Plans sichern die Verlässlichkeit. Der Plan wird bei Änderungen der Hardware- und Software-Assets aktualisiert.

## Disaster Recovery as a Service
Cloudbasierte Lösungen senken Kosten und steigern Effizienz. Anbieter dokumentieren RTOs und RPOs in [Service-Level-Vereinbarungen](/open-fidup/lerninhalte/sla).