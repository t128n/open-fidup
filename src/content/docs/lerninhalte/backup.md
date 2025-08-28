---
title: "Backup"
description: "Backup bezeichnet die Erstellung von Kopien von Daten an anderen Orten, um Datenverlust durch Fehler, Angriffe oder Katastrophen zu vermeiden. Es umfasst verschiedene Arten wie Voll-, Inkrementell-, Differenziell- und Spiegelungs-Backups sowie Strategien wie 3-2-1 und GFS. Wichtige Konzepte sind RPO und RTO."
---

Backup bezeichnet die Erstellung von Kopien von Daten, die an einem anderen Ort aufbewahrt werden, um Datenverlust durch Hardware- oder Softwarefehler, menschliches Versagen, Hackerangriffe oder Naturkatastrophen zu vermeiden. Es handelt sich um eine zentrale Maßnahme zur Datensicherheit, die verschiedene Arten und Strategien umfasst, um die Wiederherstellung zu erleichtern und den Geschäftsbetrieb zu sichern.

## Gründe für Backups

Backups dienen mehreren Zwecken. Sie ermöglichen die Wiederherstellung verlorener oder beschädigter Daten und bieten Schutz vor Ransomware oder Malware-Angriffen. Gesetzliche Vorgaben erfordern oft die Aufbewahrung bestimmter Daten über Jahre hinweg. Zudem gewährleisten Backups die Kontinuität des Geschäftsbetriebs bei IT-Problemen.

## Backup-Arten

Es existieren verschiedene Arten von Backups, die sich in Umfang, Geschwindigkeit und Speicherbedarf unterscheiden. Die wichtigsten sind:

| Art | Beschreibung | Vorteile | Nachteile |
|----|-------------|----------|-----------|
| Vollbackup | Vollständige Sicherung aller Daten. | Alle Daten stehen bei Verlust zur Verfügung. | Zeitaufwendig und benötigt viel Speicherplatz. |
| Inkrementelles Backup | Sichert nur Daten, die sich seit dem letzten Backup geändert haben. | Spart Speicherplatz und Zeit. | Langsame Wiederherstellung erfordert Kombination mehrerer Backups. |
| Differenzielles Backup | Sichert alle Änderungen seit dem letzten Vollbackup. | Schnellere Wiederherstellung als inkrementell. | Wird mit der Zeit größer, je länger das letzte Vollbackup zurückliegt. |
| Spiegelung (Mirroring) | Echtzeit-Kopie von Daten auf externen Speicher. | Permanente Verfügbarkeit der neuesten Daten. | Kein Schutz vor versehentlichem Löschen; Änderungen werden sofort übernommen. |

### Visualisierung der Backup-Arten

Das folgende Diagramm veranschaulicht die unterschiedlichen Ansätze der Backup-Arten:

```mermaid
flowchart TD
    A[Datenquelle] --> B{Backup-Typ}
    B --> C[Vollbackup]
    B --> D[Inkrementell]
    B --> E[Differenziell]
    B --> F[Spiegelung]
    
    C --> G[Wiederherstellung: Direkt]
    D --> H[Wiederherstellung: Kombiniert]
    E --> I[Wiederherstellung: Voll + Diff]
    F --> J[Wiederherstellung: Sofort]
```

## Backup-Strategien

Backup-Strategien definieren, wie und wann Backups durchgeführt werden, um Effizienz und Sicherheit zu optimieren. Häufig verwendete Ansätze sind:

### 3-2-1-Strategie
Diese Strategie empfiehlt drei Kopien der Daten: die Originaldaten sowie zwei Backups. Die Backups sollten auf zwei verschiedenen Medien gespeichert werden, wobei mindestens eine Kopie extern (Offsite) aufbewahrt wird, beispielsweise in der Cloud oder an einem anderen geografischen Ort.

```mermaid
architecture-beta
    group original(database)[Original]
        service orig_data(database)[Originaldaten] in original

    group medium1(disk)[Festplatte Lokal]
        service backup1(disk)[Backup 1] in medium1

    group medium2(cloud)[Cloud Offsite]
        service backup2(cloud)[Backup 2] in medium2

    orig_data:R -- L:backup1
    orig_data:R -- L:backup2
```

### Grandfather-Father-Son (GFS)
Diese Methode kombiniert tägliche, wöchentliche und monatliche Backups:
- Täglich (Son): Inkrementelles oder differenzielles Backup.
- Wöchentlich (Father): Differenzielles Backup.
- Monatlich (Grandfather): Vollbackup.

Der Vorteil liegt in der langfristigen und flexiblen Datensicherung.

```mermaid
timeline
    title Grandfather-Father-Son (GFS) Zeitplan
    Monat : Vollbackup (Grandfather)
        Woche : Differenziell (Father)
            Tag 1-7 : Tägliche Inkrementelle (Son)
        Woche : Differenziell (Father)
            Tag 8-14 : Tägliche Inkrementelle (Son)
        Woche : Differenziell (Father)
        Woche : Differenziell (Father)
```

### Towers of Hanoi
Eine komplexere Methode mit intelligentem Rotationsprinzip, die weniger Backups benötigt. Sie spart Speicherplatz durch ausgeklügelte Zeitplanung, ist jedoch schwierig umzusetzen und weniger verbreitet.

```mermaid
flowchart TD
    A[Start] --> B[Tag 1: A]
    B --> C[Tag 2: B]
    C --> D[Tag 3: C]
    D --> E[Tag 4: Überschreibe A]
    E --> F[Tag 5: Überschreibe B]
    F --> G[Tag 6: Überschreibe C]
    G --> H[Rotation Weniger Speicher]
    H --> A
```

## Wichtige Begriffe

- **RPO (Recovery Point Objective)**: Die maximale Menge an Daten, die verloren gehen kann, gemessen als Zeitraum zwischen den Backups.
- **RTO (Recovery Time Objective)**: Die maximale Zeitspanne, die für die Wiederherstellung der Daten benötigt wird.
- **Backup-Fenster**: Der Zeitraum, in dem das Backup durchgeführt wird, idealerweise außerhalb der Arbeitszeiten.
- **Hot/Cold/Offline Backup**:
  - **Hot Backup**: Backup während der Betriebszeit, wobei das System weiterläuft.
  - **Cold Backup**: Backup bei ausgeschaltetem System.
  - **Offline Backup**: Backup auf nicht verbundene Systeme, wie externe Festplatten, die vom Netzwerk getrennt sind.