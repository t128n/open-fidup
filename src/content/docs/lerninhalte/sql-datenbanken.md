---
title: "SQL-Datenbanken"
description: "SQL-Datenbanken verwenden ein festes Schema für strukturierte Daten in Tabellen mit ACID-Eigenschaften. Sie bieten starke Konsistenz und komplexe Abfragen, sind aber weniger skalierbar als NoSQL. Anwendungen umfassen Geschäftssysteme und Finanztransaktionen."
---

SQL-Datenbanken sind relationale Datenbanksysteme, die auf der Structured Query Language (SQL) basieren und ein festes Schema für die Speicherung, den Abruf und die Verwaltung strukturierter Daten verwenden. Sie zeichnen sich durch robuste Funktionen zur Gewährleistung von Datenintegrität und -konsistenz aus und finden breite Anwendung in Bereichen wie Geschäftssystemen und Finanztransaktionen.

## Charakteristika
SQL-Datenbanken basieren auf einem relationalen Modell, bei dem Daten in Tabellen organisiert sind, die durch Beziehungen miteinander verbunden werden. Das feste Schema definiert vordefinierte Tabellen, Spalten und Datentypen. Sie unterstützen ACID-Eigenschaften für Transaktionen und verwenden SQL als standardisierte Abfragesprache zur Datenmanipulation.

## Typen von SQL-Datenbanken

### Traditionelle relationale Datenbanken
Diese speichern Daten in Tabellen mit einem festen Schema und eignen sich für Transaktionsverarbeitung und geschäftliche Anwendungen. Beispiele sind MySQL, PostgreSQL, Oracle Database und Microsoft SQL Server.

### NewSQL-Datenbanken
NewSQL-Datenbanken kombinieren die Vorteile von SQL mit der Skalierbarkeit von [NoSQL](/open-fidup/lerninhalte/no-sql). Sie bieten Hochverfügbarkeit und SQL-Kompatibilität. Beispiele sind Google Spanner und CockroachDB.

## ACID-Eigenschaften
Die ACID-Eigenschaften gewährleisten die Zuverlässigkeit von Transaktionen in SQL-Datenbanken:

- **Atomarität**: Eine Transaktion wird entweder vollständig ausgeführt oder gar nicht.
- **Konsistenz**: Die Datenbank bleibt in einem konsistenten Zustand, auch nach Transaktionen.
- **Isolation**: Transaktionen werden isoliert durchgeführt, um Konflikte zu vermeiden.
- **Dauerhaftigkeit**: Abgeschlossene Transaktionen bleiben auch bei Systemausfällen erhalten.

## Vergleich mit NoSQL-Datenbanken

| Aspekt          | SQL                  | NoSQL                |
|-----------------|----------------------|----------------------|
| Schema          | Starr                | Flexibel             |
| Skalierung      | Vertikal             | Horizontal           |
| Konsistenz      | ACID                 | Eventual             |
| Abfragesprache  | SQL                  | Datenbankspezifisch  |

## Vor- und Nachteile

### Vorteile
SQL-Datenbanken bieten starke Datenintegrität durch das relationale Modell und ACID-Eigenschaften. SQL ermöglicht standardisierte und komplexe Abfragen, einschließlich Joins und Transaktionen, was die Datenmanipulation vereinfacht.

### Nachteile
Die vertikale Skalierung kann teuer und begrenzt sein. Änderungen am festen Schema sind bei großen Datenmengen aufwendig. Bei sehr großen Datensätzen leidet die Leistung unter der Komplexität.

## Anwendungsfälle
SQL-Datenbanken eignen sich für Geschäftssysteme, Finanztransaktionen, Content-Management-Systeme und Kundenbeziehungsmanagement.

## Herausforderungen
Herausforderungen umfassen Schemaänderungen bei bestehenden Daten, die Handhabung großer Datenmengen und Hochlastanfragen sowie Integrationsprobleme mit agilen Entwicklungsmethoden.

## Praxisrelevante Konzepte

### Normalisierung
[Normalisierung](/open-fidup/lerninhalte/normalisierung) bezeichnet den Prozess zur Organisation von Daten, um Redundanz zu minimieren und Datenintegrität zu gewährleisten. Dabei werden Daten in separate, verknüpfte Tabellen aufgeteilt.

### Indexierung
Indexierung verbessert die Abfragegeschwindigkeit und Datenzugriffsleistung durch das Erstellen von Indizes.

### Transaktionen
Transaktionen sind Sätze von Operationen, die als eine einzige Einheit behandelt werden, um die Einhaltung der ACID-Eigenschaften sicherzustellen.