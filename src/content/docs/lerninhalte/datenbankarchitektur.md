---
title: "Datenbankarchitektur"
description: "Datenbankarchitektur umfasst Stand-Alone-Systeme für Einzelplatzanwendungen und Multi-User-Systeme für Client-Server-Umgebungen mit Konkurrenzverwaltung wie Optimistic und Pessimistic Locking. Zu den Komponenten zählen Benutzeroberfläche, Datenmodul, Datenquelle, Datenmenge und Datenverbindung. Sie ermöglicht eine effiziente Datenverwaltung."
---

Datenbankarchitektur beschreibt die Struktur und Organisation von Datenbanksystemen, die von einfachen Stand-Alone-Lösungen für Einzelplatzanwendungen bis hin zu komplexen Multi-User-Systemen in Client-Server-Umgebungen reichen. Diese Architekturen unterstützen die effiziente Verwaltung von Daten durch verschiedene Komponenten und Mechanismen zur Konkurrenzverwaltung.

## Stand-Alone-Datenbanksysteme

Stand-Alone-Datenbanksysteme eignen sich für Einzelplatzanwendungen oder kleine Projekte. Sie sind effektiv bei geringen Datenmengen und erfordern keine Berücksichtigung von Konkurrenzsituationen.

## Multi-User-Datenbanksysteme

Multi-User-Datenbanksysteme sind komplexer als Stand-Alone-Systeme. Sie werden meist als Client-Server-Anwendungen realisiert und erfordern eine effektive Berechtigungsvergabe sowie Konkurrenzverwaltung.

### Konkurrenzverwaltung in Multi-User-Systemen

Die Konkurrenzverwaltung in Multi-User-Systemen umfasst verschiedene Ansätze zur Handhabung gleichzeitiger Zugriffe auf Daten:

1. **Optimistic Locking**:  
   Alle Benutzer können Aktionen ausführen. Das [DBMS](/open-fidup/lerninhalte/dbms) entscheidet anhand einer eindeutigen ID über die Datenverfügbarkeit. Dies ermöglicht hohe Produktivität, erfordert jedoch eine komplexe Implementierung.

2. **Pessimistic Locking**:  
   Das [DBMS](/open-fidup/lerninhalte/dbms) sperrt Datensätze beim Zugriff. Dies führt zu geringerer Produktivität aufgrund von Wartezeiten, ist aber einfacher zu implementieren.

3. **Release Lock**:  
   Der Entwickler implementiert Restriktionen im Quellcode. Dies bietet Flexibilität, ist jedoch aufwändig.

## Komponenten einer Datenbankarchitektur

Eine Datenbankarchitektur besteht aus mehreren Komponenten, die die Interaktion zwischen Benutzern und Daten ermöglichen:

1. **Benutzeroberfläche**:  
   Sie befindet sich meist in einem separaten Formular und kann Datenmodule zur Wiederverwendbarkeit nutzen.

2. **Datenmodul**:  
   Es enthält Komponenten zur Datenanzeige und -verbindung sowie Datenquellen als Verbindung zwischen Benutzeroberfläche und Datenmenge.

3. **Datenquelle**:  
   Sie verbindet Elemente der Benutzeroberfläche mit Datenmengen und ermöglicht die Synchronisation mehrerer datensensitiver Steuerelemente.

4. **Datenmenge**:  
   Sie repräsentiert eine Gruppe von Datensätzen aus der Datenbank und abstrahiert die physische Datenbankstruktur.

5. **Datenverbindung**:  
   Sie stellt die Verbindung zur Datenquelle her. Mögliche Mechanismen umfassen direkte Verbindungen zum Datenbankserver, die Verwendung dedizierter Dateien, Verbindungen zu anderen Datenmengen oder die Nutzung von Anwendungsservern.