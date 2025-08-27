---
title: "Disaster Recovery"
description: "Disaster Recovery umfasst Strategien zur Vermeidung oder Minimierung von Datenverlusten und Betriebsunterbrechungen. Planung beinhaltet Business-Impact-Analyse, Risikoanalyse und Wiederherstellungsziele. Technologien sind Backups und DRaaS. Tests und Überprüfung sind kontinuierlich."
---

- **Definition**: Disaster-Recovery (DR) umfasst **Strategien und Technologien zur Vermeidung oder Minimierung von Datenverlusten und Betriebsunterbrechungen** infolge von **Katastrophenereignissen** (z. B. Geräteausfälle, Cyberattacken, Naturkatastrophen).

## 1. Disaster-Recovery-Planung
- *Entwicklung einer Strategie*, *Planung*, *Einsatz geeigneter Technologien* und *kontinuierliche Tests* sind entscheidend.
- Sicherungs- und Wiederherstellungsprozesse allein bilden keinen vollständigen DR-Plan.

## 2. Wichtige Konzepte
- **Failover**: Auslagerung von Workloads auf Backup-Systeme.
- **Failback**: Rückkehr zum ursprünglichen Primärsystem.

## 3. Business-Continuity-Planung
- Sicherstellung, dass **wesentliche Abläufe im Notfall aufrechterhalten** oder schnell wiederhergestellt werden.

## 4. Business-Impact-Analyse
- **Analyse** der **Auswirkungen** auf das Unternehmen zur **Identifikation kritischer Bereiche und Funktionen**.
- Erstellung von **Katastrophenszenarien** zur Vorhersage von Verlusten.

## 5. Risikoanalyse
- Bewertung der **Wahrscheinlichkeit** und **potenzieller Folgen** von Risiken.
- Identifikation finanzieller Verluste, Imageschäden und Produktivitätsverluste.

## 6. Priorisierung von Anwendungen
- Klassifizierung nach Wichtigkeit:
  - **Geschäftskritisch**: Unentbehrliche Anwendungen.
  - **Wichtig**: Anwendungen mit tolerierbaren Ausfallzeiten.
  - **Nicht wesentlich**: Vorübergehend ersetzbare Anwendungen.

## 7. Dokumentation von Abhängigkeiten
- Bestandsaufnahme von Hardware und Software sowie kritischen Abhängigkeiten zwischen Anwendungen.

## 8. Wiederherstellungsziele
- **RTO (Recovery Time Objective)**: Maximale Zeitspanne für die Wiederherstellung.
- **RPO (Recovery Point Objective)**: Maximales Alter der wiederherzustellenden Daten.
- **RCO (Recovery Consistency Objective)**: Tolerierbare Anzahl inkonsistenter Einträge in Geschäftsdaten.

## 9. Einhaltung gesetzlicher Vorschriften
- Sicherstellung, dass alle DR-Lösungen **Datenschutz- und Sicherheitsanforderungen** erfüllen.

## 10. Auswahl von Technologien
- Backups als Grundlage für den DR-Plan.
- Berücksichtigung von cloudbasierten Backup-Lösungen oder DRaaS-Anbietern.

## 11. Auswahl von Recovery-Standorten
- **Geografische Trennung** der Backup-Daten zur Risikominderung.

## 12. Kontinuierliche Tests und Überprüfung
- Regelmäßige Tests des DR-Plans zur Sicherstellung der Verlässlichkeit.
- Aktualisierung des Plans bei Änderungen der Hardware- und Software-Assets.

## 13. Disaster-Recovery as a Service (DRaaS)
- Cloudbasierte Lösungen zur Kostensenkung und Effizienzsteigerung.
- Anbieter dokumentieren RTOs und RPOs in Service-Level-Vereinbarungen (SLAs).