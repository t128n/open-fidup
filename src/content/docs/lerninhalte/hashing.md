---
title: "Hashing"
description: "Hashing wandelt Daten in feste Hashwerte um, die für Integritätsprüfungen, Authentifizierung und Duplikatsuche verwendet werden. Eigenschaften wie Determinismus und Kollisionssicherheit machen es sicher."
---

- **Kryptografische Methode** zur Umwandlung von Datensätzen und Zeichen beliebiger Länge in **kompakte, feste Hashwerte**.
- Eine **Hashfunktion** ist ein kryptografischer Algorithmus, der Daten vollständig zerlegt und in eine Zeichenfolge fester Länge umwandelt.
- Der **Hashwert** ist das Ergebnis der Hashfunktion und hat immer die gleiche Länge, die vom verwendeten Algorithmus abhängt.

## Charakteristische Eigenschaften
- **Determinismus**: Gleiche Eingaben führen immer zu identischen Hashwerten, unabhängig von der Länge der Eingabe.
- **Nicht rücklesbar**: Hashwerte können nicht in die ursprünglichen Daten zurückverwandelt werden.
- **Kollisionssicherheit**: Es ist extrem unwahrscheinlich, dass verschiedene Eingaben denselben Hashwert erzeugen. Tritt dies doch auf, spricht man von einer *Kollision*.
- **Kontinuität**: Kleine Änderungen in den Eingabedaten führen zu signifikant unterschiedlichen Hashwerten. Je nach Anwendungsfall können die Unterschiede stark oder minimal sein.

## Anwendungsbereiche
- **Suche nach Duplikaten**: Identifikation identischer Daten.
- **Prüfsummen und digitale Signaturen**: Gewährleistung der Integrität von Daten.
- **Suche nach ähnlichen Daten**: Vergleich von Datensätzen auf Ähnlichkeit.
- **Authentifizierungssysteme**: Sicherstellung der Identität von Benutzern.
- **Caching**: Effiziente Speicherung von Daten zur schnelleren Wiederverwendung.
- **"Verschlüsselung" wichtiger Daten**: Schutz sensibler Informationen durch Hashing.

## Digitale Signaturen und Prüfsummen
- **Digitale Fingerabdrücke**: Ein einzigartiger Hashwert, der eine Datei oder Nachricht repräsentiert.
- Bestätigung der Integrität bei der Kommunikation zwischen Sender und Empfänger.
- **Zero-Knowledge Passwortspeicherung**: Speicherung von Hashwerten anstelle von Klartextpasswörtern, um die Sicherheit zu erhöhen.

## Vorteile
- Sensible Daten können sicher und kompakt gespeichert und verwaltet werden.
- Hashwerte sind nicht rücklesbar, was die Sicherheit erhöht.
- Gestohlene Hashwerte sind für Angreifende ohne weiteres nicht nützlich, da sie nicht die ursprünglichen Daten offenbaren.

## Quellen

> Redaktion, I. (2022). Was ist Hashing? So funktioniert das Hashverfahren. IONOS Digital Guide. Retrieved from https://www.ionos.de/digitalguide/websites/web-entwicklung/hashing