---
title: "ETL"
description: "ETL bezeichnet einen Prozess zur Integration von Daten aus unterschiedlichen Quellen. Dabei werden Daten extrahiert, transformiert und geladen, um sie für Analysen bereitzustellen."
---

ETL steht für Extract, Transform und Load und beschreibt einen Prozess zur Vereinigung von Daten aus heterogenen Quellen. Die Extraktion selektiert Daten aus verschiedenen Formaten und Strukturen. Die Transformation verbessert und korrigiert diese Daten syntaktisch und semantisch. Das Laden erfolgt effizient, ohne die Datenbank langfristig zu blockieren, und stellt die Integrität sowie eine Versionshistorie sicher. Ziel ist die Datenintegration für Analysen, beispielsweise in einem [Data Warehouse](/open-fidup/lerninhalte/data-warehouse).

## Extraktion
Die Extraktion umfasst die Auswahl von Daten aus Quellen, die in verschiedenen Formaten und Strukturen vorliegen. Es gibt drei Arten der Extraktion:

- **Periodisch**: Die Quelle wird in regelmäßigen Abständen abgefragt.
- **Ereignisgesteuert**: Die Abfrage erfolgt bei bestimmten Ereignissen.
- **Anfragegesteuert**: Die Quelle stellt Daten erst auf Anfrage bereit.

## Transformation
Die Transformation verbessert und korrigiert die Daten. Sie unterteilt sich in syntaktische und semantische Aspekte.

### Syntaktische Transformation
Diese bezieht sich auf formale Aspekte und umfasst die Umsetzung oder Korrektur der Daten. Ein Beispiel ist die Standardisierung von Datumsformaten.

### Semantische Transformation
Diese überprüft inhaltliche Aspekte. Beispiele sind die Eliminierung von Duplikaten, Anpassungen von Schlüsseln, Umrechnungen von Maßeinheiten