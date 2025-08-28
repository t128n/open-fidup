---
title: "ETL"
description: "ETL ist ein Prozess zur Vereinigung von Daten aus heterogenen Quellen. Extraktion selektiert Daten, Transformation verbessert und korrigiert sie, Load lädt sie effizient. Arten der Extraktion sind periodisch, ereignisgesteuert und anfragegesteuert. Ziel ist Datenintegration für Analyse."
---

- **E**xtract, **T**ransform, **L**oad
- Prozess von **Vereinigung** von Daten aus **heterogenen Quellen**

## Extraktion
- Extraktion einer Selektion von Daten aus Quellen
- Daten liegen in **verschiedenen** Datenformaten, -strukturen, etc. vor
- Arten
	- **periodisch**, Quelle wird in regelmäßigen Abständen abgefragt
	- **ereignisgesteuert**, Quelle wird bei bestimmten Ereignissen abgefragt
	- **anfragegesteuert**, Quelle stellt Daten erst auf Anfrage bereit

## Transformation
- **Syntaktische Transformation**
	- **Verbesserung**/**Umsetzung**/**Korrektur** der Daten basierend auf **formalen** Aspekten
	- Bspw. **Standardisierung** von Datumstypen
- **Semantische Transformation**
	- **Inhaltliche Aspekte** werden überprüft
	- Bspw. Eliminierung von Duplikaten, Schlüsselanpassungen, Umrechnungen von Maßeinheiten, Aggregation, Anreicherungen, ...
## Load
- effizientes Einladen von Daten
- Datenbank **nur kurz** oder **gar nicht** blockiert
- **Integrität** soll gewährleistet werden
- Anfertigung von **Versionshistorie**
## Quellen

> Autoren der Wikimedia-Projekte. (2003, December 02). ETL-Prozess – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=ETL-Prozess&oldid=243460066