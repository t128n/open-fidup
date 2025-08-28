---
title: "Normalisierung"
description: "Normalisierung ist eine Strategie zur Beseitigung von Redundanz in relationalen Datenbanken durch Überführung in Normalformen wie 1NF, 2NF und 3NF. Sie verhindert Anomalien und ermöglicht spezialisierte Abfragen."
---

Die Normalisierung stellt eine Strategie dar, um Redundanz in relationalen Datenbanken zu beseitigen und zu vermeiden. Sie umfasst die Überführung von Datenbanktabellen in höhere Normalformen, wodurch Anomalien verhindert und spezialisierte Abfragen ermöglicht werden. Der umgekehrte Prozess, die Überführung in eine Normalform geringeren Grades, wird als Denormalisierung bezeichnet.

## Normalformen

Die Normalisierung erfolgt schrittweise durch die Anwendung verschiedener Normalformen. Diese bauen aufeinander auf und definieren Regeln für die Struktur der Daten.

1. **1. Normalform (1NF)**: Alle Daten liegen atomar vor, und Tabellenspalten enthalten gleichartige Werte.
2. **2. Normalform (2NF)**: Jedes Nichtschlüsselattribut muss vom Primärschlüssel voll funktional abhängig sein.
3. **3. Normalform (3NF)**: Kein Nichtschlüsselattribut darf von einem Schlüsselkandidaten transitiv abhängig sein.

## Vorteile

Die Normalisierung bietet mehrere Vorteile für die Datenbankstruktur und -nutzung.

- Weniger Redundanz in den Daten.
- Verhinderung von Anomalien.
- Ermöglichung spezialisierter Abfragen.

## Nachteile

Trotz der Vorteile bringt die Normalisierung auch Nachteile mit sich, insbesondere bei der Abfrage und Verwaltung der Daten.

- Integration von Fremdschlüsseln erforderlich.
- Viele Joins notwendig.
- Bei größeren Datensätzen mit vielen Abhängigkeiten entstehen viele Tabellen.

## Beispiel

Ein Beispiel verdeutlicht den Prozess der Normalisierung anhand einer Ausgangstabelle mit Redundanzen. Die Schritte führen zur 1NF, 2NF und 3NF.

### Ausgangslage

| R.-Nr. | R.-Name | P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|--------|---------|------|----------|---------|
| 1      | Müller  | 1      | Schraube| 10   | 100      | Schraube|
| 1      | Müller  | 2      | Mutter  | 5    | 101      | Mutter  |
| 2      | Meier   | 1      | Schraube| 8    | 100      | Schraube|
| 2      | Meier   | 3      | Bolzen  | 12   | 102      | Bolzen  |

### 1. Normalform (1NF)

Mehrwertige Daten werden aufgespalten, und Spalten auf Gleichartigkeit geprüft.

| R.-Nr. | R.-Name | P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|--------|---------|------|----------|---------|
| 1      | Müller  | 1      | Schraube| 10   | 100      | Schraube|
| 1      | Müller  | 2      | Mutter  | 5    | 101      | Mutter  |
| 2      | Meier   | 1      | Schraube| 8    | 100      | Schraube|
| 2      | Meier   | 3      | Bolzen  | 12   | 102      | Bolzen  |

### 2. Normalform (2NF)

Spalten, die nicht voll funktional abhängig sind, werden ausgelagert. Die Spalte "Anz." ist nur von "P.-Nr." abhängig, nicht von "R.-Nr.", daher werden "P.-Nr." und abhängige Spalten ausgelagert.

| R.-Nr. | R.-Name |
|--------|---------|
| 1      | Müller  |
| 2      | Meier   |

| P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|------|----------|---------|
| 1      | Schraube| 10   | 100      | Schraube|
| 2      | Mutter  | 5    | 101      | Mutter  |
| 3      | Bolzen  | 12   | 102      | Bolzen  |

### 3. Normalform (3NF)

Spalten, die von einem Nichtschlüsselattribut abhängig sind, werden ausgelagert. "Artikel" ist von "Art.-Nr." abhängig, wobei "Art.-Nr." kein Primärschlüssel ist.

| R.-Nr. | R.-Name |
|--------|---------|
| 1      | Müller  |
| 2      | Meier   |

| P.-Nr. | P.-Name | Anz. | Art.-Nr. |
|--------|---------|------|----------|
| 1      | Schraube| 10   | 100      |
| 2      | Mutter  | 5    | 101      |
| 3      | Bolzen  | 12   | 102      |

| Art.-Nr. | Artikel |
|----------|---------|
| 100      | Schraube|
| 101      | Mutter  |
| 102      | Bolzen  |

## Quellen

Redaktion, I. (2018). Weniger Redundanz dank Datenbank-Normalisierung. IONOS Digital Guide. Abgerufen von https://www.ionos.de/digitalguide/hosting/hosting-technik/normalisierung-von-datenbanken