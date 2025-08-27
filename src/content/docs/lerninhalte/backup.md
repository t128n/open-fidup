---
title: "Backup"
description: "Backup erstellt Kopien von Daten an anderen Orten, um Datenverlust durch Fehler oder Angriffe zu vermeiden. Arten sind Voll-, Inkrementell-, Differenziell- und Spiegelung. Strategien wie 3-2-1 und GFS gewährleisten Sicherheit. Wichtige Begriffe sind RPO und RTO."
---

- **Kopie** von Daten, die an einem **anderen Ort** aufbewahrt wird um **Datenverlust** durch **Hardware-**, **Softwarefehler** und **menschliches Versagen**, **Hackerangriffe** oder **Naturkatastrophe** zu **vermeiden**

## Gründe für Backups
- **Datenwiederherstellung**: Ermöglicht die Wiederherstellung verlorener oder beschädigter Daten.
- **Sicherheit**: Schutz vor Ransomware oder Malware-Angriffen.
- **Gesetzliche Vorgaben**: Unternehmen müssen oft bestimmte Daten über Jahre aufbewahren.
- **Kontinuität**: Sicherstellung des Geschäftsbetriebs bei IT-Problemen.

## Backup-Arten
- **Vollbackup**
	- **Vollständige** Sicherung der Daten
	- **Vorteil**, alle Daten stehen bei einem Verlust zur Verfügung
	- **Nachteil**, Zeitaufwendig und benötigt viel Speicherplatz
- **Inkrementelles Backup**
	- Sichert nur Daten die sich **seit letztem Backup** (egal ob Voll- oder inkrementell) **geändert** haben
	- **Vorteil**, spart Speicherplatz und Zeit
	- **Nachteil**, langsame Wiederherstellung -> Kombination mehrer Backups
- **Differenzielles Backup**
	- **Alle Änderungen** seit **letzten Vollbackup**
	- **Vorteil**, schneller als inkrementell bei Wiederherstellung
	- **Nachteil**, wird mit Zeit größer je nachdem wie lange seit letztem Vollbackup
- **Spiegelung (Mirroring)**
	- **Echtzeit-Kopie** von Daten auf externen Speicher
	- **Vorteil**, Permanente Verfügbarkeit der neusten Datne
	- **Nachteil**, kein Schutz vor versehentlichem Löschen, Änderungen werden sofort übernommen

## Backup-Strategien
- **3-2-1-Strategie**
	- **3 Kopien** (Produktivdaten + 2 Backups)
	- **2 verschiedene Medien** (z.B. Festplatte und Cloud)
	- **1 Kopie extern** (Offsite-Backup, z.B. andere geographische Lage, in der Cloud)
- **Grandfather-Father-Son (GFS)**
	- **Kombination** aus täglichen, wöchentlichen und monatlichen Backups
		- **Täglich (Son)**, Inkrementelle oder differenzielles Backup
		- **Wöchentlich (Father)**, Differenzielles Backup
		- **Monatlich (Grandfather)**, Vollbackup
	- **Vorteil**: Langfristig und flexible Datensicherung
- **Towers of Hanoi**
	- komplexere Methode mit weniger Backups, jedoch **intelligentem Rotationsprinzip**
	- **Vorteil**, spart Speicherplatz, ausgeklügelte Zeitplanung
	- **Nachteil**, Schwierig umzusetzen und weniger verbreitet

## Wichtige Begriffe

- **RPO (Recovery Point Objective)**: Maximale Menge an Daten, die verloren gehen kann (Zeitraum zwischen den Backups).
- **RTO (Recovery Time Objective)**: Maximale Zeitspanne, die für die Wiederherstellung der Daten benötigt wird.
- **Backup-Fenster**: Zeitraum, in dem das Backup durchgeführt wird. Optimalerweise außerhalb der Arbeitszeiten.
- **Hot/Cold/Offline Backup**:
    - **Hot Backup**: Backup während der Betriebszeit (Datenbank läuft weiter).
    - **Cold Backup**: Backup bei ausgeschaltetem System.
    - **Offline Backup**: Backup auf nicht verbundene Systeme (z.B. externe Festplatten, die vom Netzwerk getrennt sind).

## Quellen

> ChatGPT. (2024, September 20). Retrieved from https://chatgpt.com/c/66ed14f7-2ab8-800b-be61-aa7b9d421115