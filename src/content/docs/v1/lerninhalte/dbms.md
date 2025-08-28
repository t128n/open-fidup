---
title: "DBMS"
description: "DBMS ist eine Software zur Speicherung, Abfrage und Verwaltung von Daten in Datenbanken. Kernfunktionen sind Datenspeicherung, Transaktionsmanagement und Sicherheit. Architektur umfasst physische, logische und konzeptuelle Ebenen. Datenmodelle sind relational, objektorientiert und dokumentenorientiert. Abfragesprachen wie SQL sind zentral."
---

Ein Datenbankmanagementsystem (DBMS) ist eine Softwarelösung, die das **Speichern, Abrufen und Verwalten von Daten** in Datenbanken ermöglicht. Es bildet die Schnittstelle zwischen der physischen Datenspeicherung und den Anwendungen bzw. Benutzern.

## Kernfunktionen
- Datenspeicherung und -organisation
- Datenabfrage und -manipulation 
- Transaktionsmanagement
- Zugriffskontrolle und Sicherheit
- Datenkonsistenz und -integrität
- Backup und Recovery

## Architektur und Komponenten
Die typische DBMS-Architektur besteht aus mehreren Schichten:
1. **Physische Ebene:** Verwaltung der Daten auf Speichermedien
2. **Logische Ebene:** Abstraktion der Datenstrukturen
3. **Konzeptuelle Ebene:** Gesamtsicht auf die Datenbank
4. **Externe Ebene:** Benutzersichten und Schnittstellen

## Datenmodelle und Abfragesprachen

DBMS basieren auf verschiedenen Datenmodellen:

1. **Relationales Modell:** Daten in Tabellen mit Beziehungen
   - Beispiel-DBMS: Oracle, MySQL, PostgreSQL
   - Abfragesprache: SQL
2. **Objektorientiertes Modell:** Daten als Objekte mit Methoden
   - Beispiel-DBMS: ObjectStore, Versant
   - Abfragesprache: OQL
3. **Dokumentenorientiertes Modell:** Daten in flexiblen Dokumentstrukturen
   - Beispiel-DBMS: MongoDB, CouchDB
   - Abfragesprache: MongoDB Query Language

## Transaktionsmanagement

Transaktionen gewährleisten die ACID-Eigenschaften:
- **A**tomicity: Ganz oder gar nicht
- **C**onsistency: Datenbank bleibt in konsistentem Zustand
- **I**solation: Nebenläufige Transaktionen beeinflussen sich nicht
- **D**urability: Dauerhafte Speicherung der Änderungen

### Concurrency Control Methoden
- Sperrverfahren (z.B. Two-Phase Locking)
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

Verteilte DBMS verwalten Daten über mehrere physische Standorte:

- Fragmentierung: Horizontale vs. Vertikale Partitionierung
- Replikation: Synchrone vs. Asynchrone Replikation
- Verteilte Abfrageverarbeitung und -optimierung

## Moderne Entwicklungen
- **NewSQL:** Skalierbare relationale Systeme (z.B. Google Spanner)
- **Polyglot Persistence:** Kombination verschiedener Datenbanktypen
- **In-Memory Datenbanken:** Hauptspeicherbasierte Verarbeitung für Echtzeitanwendungen
