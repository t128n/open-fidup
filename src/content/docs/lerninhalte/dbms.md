---
title: "DBMS"
description: "Ein Datenbankmanagementsystem (DBMS) ist eine Software zur Speicherung, Abfrage und Verwaltung von Daten in Datenbanken. Zu den Kernfunktionen gehören Datenspeicherung, Transaktionsmanagement und Sicherheit. Die Architektur umfasst physische, logische und konzeptuelle Ebenen. Datenmodelle sind relational, objektorientiert und dokumentenorientiert. Abfragesprachen wie SQL spielen eine zentrale Rolle."
---

Ein Datenbankmanagementsystem (DBMS) ist eine Softwarelösung, die das Speichern, Abrufen und Verwalten von Daten in Datenbanken ermöglicht. Es dient als Schnittstelle zwischen der physischen Datenspeicherung und den Anwendungen oder Benutzern.

## Kernfunktionen

Die Hauptfunktionen eines DBMS umfassen:

- Datenspeicherung und -organisation
- Datenabfrage und -manipulation
- Transaktionsmanagement
- Zugriffskontrolle und Sicherheit
- Datenkonsistenz und -integrität
- Backup und Recovery

## Architektur und Komponenten

Die typische Architektur eines DBMS besteht aus mehreren Schichten:

1. **Physische Ebene:** Verwaltung der Daten auf Speichermedien.
2. **Logische Ebene:** Abstraktion der Datenstrukturen.
3. **Konzeptuelle Ebene:** Gesamtsicht auf die Datenbank.
4. **Externe Ebene:** Benutzersichten und Schnittstellen.

## Datenmodelle und Abfragesprachen

DBMS basieren auf verschiedenen Datenmodellen:

1. **Relationales Modell:** Daten werden in Tabellen mit Beziehungen organisiert.
   - Beispiel-DBMS: Oracle, MySQL, PostgreSQL.
   - Abfragesprache: [SQL](/open-fidup/lerninhalte/sql).
2. **Objektorientiertes Modell:** Daten werden als Objekte mit Methoden dargestellt.
   - Beispiel-DBMS: ObjectStore, Versant.
   - Abfragesprache: OQL.
3. **Dokumentenorientiertes Modell:** Daten werden in flexiblen Dokumentstrukturen gespeichert.
   - Beispiel-DBMS: MongoDB, CouchDB.
   - Abfragesprache: MongoDB Query Language.

## Transaktionsmanagement

Transaktionen gewährleisten die ACID-Eigenschaften:

- **Atomicity:** Eine Transaktion wird entweder vollständig ausgeführt oder gar nicht.
- **Consistency:** Die Datenbank bleibt in einem konsistenten Zustand.
- **Isolation:** Nebenläufige Transaktionen beeinflussen sich nicht gegenseitig.
- **Durability:** Änderungen werden dauerhaft gespeichert.

### Methoden zur Nebenläufigkeitssteuerung

- Sperrverfahren (z. B. Two-Phase Locking)
- Zeitstempelverfahren
- Optimistische Verfahren

## Datensicherheit und -integrität

### Sicherheitsmechanismen

- Authentifizierung und Autorisierung
- Verschlüsselung
- Auditing

### Integritätsbedingungen

- Entitätsintegrität (Primärschlüssel)
- Referenzielle Integrität (Fremdschlüssel)
- Domänenintegrität (Wertebereichsprüfungen)

## Verteilte Datenbanksysteme

Verteilte DBMS verwalten Daten über mehrere physische Standorte. Zu den Schlüsselkonzepten gehören:

- Fragmentierung: Horizontale oder vertikale Partitionierung.
- Replikation: Synchrone oder asynchrone Replikation.
- Verteilte Abfrageverarbeitung und -optimierung.

## Moderne Entwicklungen

- **NewSQL:** Skalierbare relationale Systeme (z. B. Google Spanner).
- **Polyglot Persistence:** Kombination verschiedener Datenbanktypen.
- **In-Memory-Datenbanken:** Hauptspeicherbasierte Verarbeitung für Echtzeitanwendungen.