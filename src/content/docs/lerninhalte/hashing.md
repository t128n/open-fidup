---
title: "Hashing"
description: "Hashing wandelt Daten in feste Hashwerte um, die für Integritätsprüfungen, Authentifizierung und Duplikatsuche verwendet werden. Eigenschaften wie Determinismus und Kollisionssicherheit machen es sicher."
---

Hashing bezeichnet eine kryptografische Methode, die Daten beliebiger Länge in kompakte, feste Hashwerte umwandelt. Diese Technik dient der Integritätsprüfung, Authentifizierung und Duplikatsuche. Eine Hashfunktion zerlegt die Eingabedaten vollständig und erzeugt eine Zeichenfolge fester Länge, deren Größe vom Algorithmus abhängt. Der resultierende Hashwert ist deterministisch, nicht rücklesbar und kollisionssicher, was ihn für verschiedene Anwendungen unverzichtbar macht.

## Definition und Grundlagen
Eine Hashfunktion ist ein Algorithmus, der Eingabedaten in einen Hashwert umwandelt. Dieser Wert hat stets die gleiche Länge, unabhängig von der Größe der ursprünglichen Daten. Hashing unterscheidet sich von [Verschlüsselungsverfahren](/open-fidup/lerninhalte/hashing--und-verschluesselungsverfahren), da es keine Rückverwandlung ermöglicht und primär zur Datenintegrität dient.

## Eigenschaften
Hashfunktionen weisen mehrere charakteristische Merkmale auf:

- **Determinismus**: Identische Eingaben erzeugen stets denselben Hashwert.
- **Nicht-Rücklesbarkeit**: Aus dem Hashwert lassen sich die Originaldaten nicht rekonstruieren.
- **Kollisionssicherheit**: Es ist extrem unwahrscheinlich, dass unterschiedliche Eingaben denselben Hashwert produzieren. Solche Fälle werden als Kollisionen bezeichnet.
- **Avalanche-Effekt**: Geringe Änderungen an den Eingabedaten führen zu erheblich unterschiedlichen Hashwerten.

## Anwendungsbereiche
Hashing findet in zahlreichen Bereichen Anwendung:

- Identifikation von Duplikaten durch Vergleich von Hashwerten.
- Erstellung von Prüfsummen und digitalen Signaturen zur Gewährleistung der Datenintegrität.
- Suche nach ähnlichen Daten durch Vergleich von Hashwerten.
- Authentifizierung von Benutzern in Sicherheitssystemen.
- Caching zur effizienten Datenspeicherung und Wiederverwendung.
- Schutz sensibler Daten, etwa durch Speicherung von Hashwerten anstelle von Klartextpasswörtern.

## Digitale Signaturen und Prüfsummen
Hashwerte dienen als digitale Fingerabdrücke für Dateien oder Nachrichten. Sie bestätigen die Integrität bei der Kommunikation zwischen Sender und Empfänger. In der Zero-Knowledge-Passwortspeicherung werden Hashwerte anstelle von Klartextpasswörtern gespeichert, um die Sicherheit zu erhöhen, ohne die Originaldaten preiszugeben.

## Vorteile
Hashing ermöglicht die sichere und kompakte Speicherung sensibler Daten. Da Hashwerte nicht rücklesbar sind, bieten sie einen hohen Schutz vor unbefugtem Zugriff. Gestohlene Hashwerte sind für Angreifer weitgehend nutzlos, da sie keine Rückschlüsse auf die ursprünglichen Daten zulassen.

## Quellen
Redaktion, I. (2022). Was ist Hashing? So funktioniert das Hashverfahren. IONOS Digital Guide. Abgerufen von https://www.ionos.de/digitalguide/websites/web-entwicklung/hashing.