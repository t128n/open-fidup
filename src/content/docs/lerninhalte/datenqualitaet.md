---
title: "Datenqualität: Eignung von Daten für den Zweck"
description: "Datenqualität bezieht sich auf Aktualität, Genauigkeit, Vollständigkeit und Konsistenz von Daten. Merkmale sind Eindeutigkeit, Konformität und Widerspruchsfreiheit. Messung erfolgt mit DPMO. Prozess umfasst Sicherung, Analyse, Standardisierung und Bereinigung."
---

Datenqualität bezieht sich auf die **Eignung von Daten für den vorgesehenen Zweck**. Hohe Datenqualität ist entscheidend für fundierte Entscheidungen, effiziente Prozesse und die Zufriedenheit der Kunden.

## Merkmale der Datenqualität
- Aktualität
	- **Beschreibung**: Die Daten sind aktuell und relevant. Veraltete Daten können die Entscheidungsfindung negativ beeinflussen.
	- **Messung**: Anteil der Daten, die innerhalb eines bestimmten Zeitrahmens aktualisiert wurden.
- Eindeutigkeit
- Einheitlichkeit
- Genauigkeit
- Konformität
- Konsistenz
- Korrektheit
	- **Beschreibung**: Die Daten sind genau und fehlerfrei. Ungenaue Daten können zu falschen Schlussfolgerungen führen.
	- **Messung**: Vergleich der Daten mit einer vertrauenswürdigen Quelle oder durch manuelle Überprüfung.
- Redundanzfreiheit
- Relevanz
- Verständlichkeit
- Vollständigkeit
	- **Beschreibung**: Alle erforderlichen Daten sind vorhanden. Fehlende Daten können die Analyse und Entscheidungsfindung beeinträchtigen.
	- **Messung**: Anteil der vollständigen Datensätze im Vergleich zur Gesamtzahl der Datensätze.
- Zuverlässigkeit
- Historisierung
	- **Beschreibung**: Änderungen an den Daten sind nachvollziehbar. Dies ist wichtig für die Rückverfolgbarkeit und Analyse von Trends.
	- **Messung**: Überprüfung, ob historische Daten gespeichert und zugänglich sind.
- Widerspruchsfreiheit
	- **Beschreibung**: Die Daten sind konsistent und frei von Konflikten. Inkonsistenzen können zu Verwirrung und Fehlentscheidungen führen.
	- **Messung**: Analyse von Datensätzen auf Inkonsistenzen.

### Messung der Datenqualität
- **Defect per Million Opportunities (DPMO)**: Eine Kennzahl zur Quantifizierung der Anzahl der Fehler pro Million Möglichkeiten. 
  - **Berechnung**: 
  $DPMO = \left( \frac{\text{Anzahl der Fehler}}{\text{Anzahl der Datensätze} \times \text{Anzahl der Merkmale pro Datensatz}} \right) \times 1.000.000$

## Prozess
 1. **Sicherung der originalen Datenquelle**: Durch eine Sicherungskopie der Papierliste wird gewährleistet, dass die originalen Daten unverändert und un- mittelbar digital abgespeichert werden. 
 2. **Definition und Anwendung der Anforderungen**: Die bereits beschriebenen Anforderungen an die Daten werden angewandt. Wären die Anforderungen zuvor noch nicht festgelegt, müsste dies noch zusätzlich erfolgen. 
 3. **Analyse der Daten**: Die Daten werden mithilfe der Anforderungen analysiert und bewertet. 4
 4. **Standardisierung der Daten**: Alle erhobenen Daten werden durch Standardisierungsmaßnahmen vereinheitlicht, beispielsweise wird das Datum einheitlich in das Format TT.MM.JJ gebracht. 
 5. **Bereinigung der Daten**: Unnötige Daten werden entfernt und ein (künstlicher) Primärschlüssel wird hinzugefügt.

## Quellen
> AI Chat. (2024, September 20). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1