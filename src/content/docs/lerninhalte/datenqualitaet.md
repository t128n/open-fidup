---
title: "Datenqualität"
description: "Datenqualität bezieht sich auf Aktualität, Genauigkeit, Vollständigkeit und Konsistenz von Daten. Merkmale sind Eindeutigkeit, Konformität und Widerspruchsfreiheit. Messung erfolgt mit DPMO. Prozess umfasst Sicherung, Analyse, Standardisierung und Bereinigung."
---

Datenqualität beschreibt die Eignung von Daten für den vorgesehenen Zweck. Sie ist entscheidend für fundierte Entscheidungen, effiziente Prozesse und die Zufriedenheit der Kunden.

## Merkmale der Datenqualität

Die Datenqualität lässt sich anhand verschiedener Merkmale bewerten. Diese umfassen unter anderem Aktualität, Eindeutigkeit, Einheitlichkeit, Genauigkeit, Konformität, Konsistenz, Korrektheit, Redundanzfreiheit, Relevanz, Verständlichkeit, Vollständigkeit, Zuverlässigkeit, Historisierung und Widerspruchsfreiheit. Nachfolgende Tabelle fasst die Merkmale zusammen, für die detaillierte Beschreibungen und Messmethoden vorliegen.

| Merkmal          | Beschreibung                                                                 | Messung                                                                 |
|------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Aktualität      | Die Daten sind aktuell und relevant. Veraltete Daten können die Entscheidungsfindung negativ beeinflussen. | Anteil der Daten, die innerhalb eines bestimmten Zeitrahmens aktualisiert wurden. |
| Korrektheit     | Die Daten sind genau und fehlerfrei. Ungenaue Daten können zu falschen Schlussfolgerungen führen. | Vergleich der Daten mit einer vertrauenswürdigen Quelle oder durch manuelle Überprüfung. |
| Vollständigkeit | Alle erforderlichen Daten sind vorhanden. Fehlende Daten können die Analyse und Entscheidungsfindung beeinträchtigen. | Anteil der vollständigen Datensätze im Vergleich zur Gesamtzahl der Datensätze. |
| Historisierung  | Änderungen an den Daten sind nachvollziehbar. Dies ist wichtig für die Rückverfolgbarkeit und Analyse von Trends. | Überprüfung, ob historische Daten gespeichert und zugänglich sind. |
| Widerspruchsfreiheit | Die Daten sind konsistent und frei von Konflikten. Inkonsistenzen können zu Verwirrung und Fehlentscheidungen führen. | Analyse von Datensätzen auf Inkonsistenzen. |

### Messung der Datenqualität

Eine gängige Methode zur Quantifizierung der Datenqualität ist die Kennzahl Defect per Million Opportunities (DPMO). Sie misst die Anzahl der Fehler pro Million Möglichkeiten.

Die Berechnung erfolgt wie folgt:

$$DPMO = \left( \frac{\text{Anzahl der Fehler}}{\text{Anzahl der Datensätze} \times \text{Anzahl der Merkmale pro Datensatz}} \right) \times 1.000.000$$

## Prozess zur Sicherstellung der Datenqualität

Der Prozess zur Sicherstellung der Datenqualität umfasst mehrere Schritte:

1. Sicherung der originalen Datenquelle: Durch eine Sicherungskopie der Papierliste wird gewährleistet, dass die originalen Daten unverändert und unmittelbar digital abgespeichert werden. Dies entspricht einem [Backup](/open-fidup/lerninhalte/backup).
2. Definition und Anwendung der Anforderungen: Die bereits beschriebenen Anforderungen an die Daten werden angewandt. Wären die Anforderungen zuvor noch nicht festgelegt, müsste dies noch zusätzlich erfolgen.
3. Analyse der Daten: Die Daten werden mithilfe der Anforderungen analysiert und bewertet. Dies beinhaltet eine [Datenanalyse](/open-fidup/lerninhalte/datenanalyse).
4. Standardisierung der Daten: Alle erhobenen Daten werden durch Standardisierungsmaßnahmen vereinheitlicht, beispielsweise wird das Datum einheitlich in das Format TT.MM.JJ gebracht.
5. Bereinigung der Daten: Unnötige Daten werden entfernt und ein (künstlicher) Primärschlüssel wird hinzugefügt.

## Quellen

AI Chat. (2024, September 20). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1