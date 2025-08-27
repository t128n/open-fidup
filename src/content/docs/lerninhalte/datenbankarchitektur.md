---
title: "Datenbankarchitektur: Stand-Alone und Multi-User-Systeme"
description: "Datenbankarchitektur umfasst Stand-Alone für Einzelplatzanwendungen und Multi-User für Client-Server mit Konkurrenzverwaltung wie Optimistic und Pessimistic Locking. Komponenten sind Benutzeroberfläche, Datenmodul, Datenquelle, Datenmenge und Datenverbindung. Sie ermöglicht effiziente Datenverwaltung."
---

## Stand-Alone-Datenbanksystem
- Für Einzelplatzanwendungen oder kleine Projekte
- Effektiv für kleine Datenmengen
- Keine Berücksichtigung von Konkurrenzsituationen nötig

## Multi-User-Datenbanksystem
- Komplexer als Stand-Alone-Systeme
- Meist als Client-Server-Anwendung realisiert
- Erfordert effektive Berechtigungsvergabe und Konkurrenzverwaltung

### Konkurrenzverwaltung in Multi-User-Systemen:
1. **Optimistic Locking**: 
   - Alle Benutzer können alle Aktionen ausführen
   - DBMS entscheidet anhand einer Unique ID über Datenverfügbarkeit
   - Hohe Produktivität, aber komplexe Implementierung
2. **Pessimistic Locking**:
   - DBMS sperrt Datensätze beim Zugriff
   - Geringere Produktivität durch Wartezeiten
   - Einfachere Implementierung
3. **Release Lock**:
   - Entwickler implementiert Restriktionen im Quellcode
   - Flexible, aber aufwändige Lösung

## Komponenten einer Datenbankarchitektur

1. **Benutzeroberfläche**: 
   - Meist in separatem Formular
   - Kann Datenmodule für Wiederverwendbarkeit nutzen
2. **Datenmodul**:
   - Enthält Komponenten zur Datenanzeige und -verbindung
   - Beinhaltet Datenquellen als Verbindung zwischen UI und Datenmenge
3. **Datenquelle**:
   - Verbindet UI-Elemente mit Datenmengen
   - Ermöglicht Synchronisation mehrerer datensensitiver Steuerelemente
4. **Datenmenge**:
   - Repräsentiert Gruppe von Datensätzen aus der Datenbank
   - Abstrahiert physische Datenbankstruktur
5. **Datenverbindung**:
   - Stellt Verbindung zur Datenquelle her
   - Verschiedene Mechanismen: 
     - Direkte Verbindung zum Datenbankserver
     - Verwendung dedizierter Dateien
     - Verbindungen zu anderen Datenmengen
     - Nutzung von Anwendungsservern