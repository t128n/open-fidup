---
title: "ETL"
description: "ETL bezeichnet einen Prozess zur Integration von Daten aus unterschiedlichen Quellen. Dabei werden Daten extrahiert, transformiert und geladen, um sie für Analysen bereitzustellen."
---

ETL steht für Extract, Transform und Load und beschreibt einen Prozess zur Vereinigung von Daten aus heterogenen Quellen. Die Extraktion selektiert Daten aus verschiedenen Formaten und Strukturen. Die Transformation verbessert und korrigiert diese Daten syntaktisch und semantisch. Das Laden erfolgt effizient, ohne die Datenbank langfristig zu blockieren, und stellt die Integrität sowie eine Versionshistorie sicher. Ziel ist die Datenintegration für Analysen, beispielsweise in einem [Data Warehouse](/open-fidup/lerninhalte/data-warehouse).

## ETL-Prozess

Der ETL-Prozess folgt einem sequentiellen Ablauf, der die Datenintegration ermöglicht. Das folgende Flussdiagramm zeigt die Hauptschritte mit Beispielen:

```mermaid
flowchart TD
    A[Extraktion] --> B[Transformation]
    B --> C[Laden]
    C --> D[Analyse]
    
    subgraph Extraktion
        A1[Daten aus Datenbanken]
        A2[Daten aus APIs]
        A3[Daten aus Dateien]
    end
    
    subgraph Transformation
        B1[Daten bereinigen]
        B2[Duplikate entfernen]
        B3[Formate standardisieren]
    end
    
    subgraph Laden
        C1[In Data Warehouse laden]
        C2[Integrität prüfen]
    end
    
    subgraph Analyse
        D1[Abfragen ausführen]
        D2[Berichte generieren]
    end
```

### Beispiele in Python-Pseudocode

#### Extraktion
```python
# Beispiel: Daten aus einer Datenbank extrahieren
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('sqlite:///data.db')
query = "SELECT * FROM sales WHERE date > '2023-01-01'"
data = pd.read_sql(query, engine)
```

#### Transformation
```python
# Beispiel: Daten bereinigen und Duplikate entfernen
data.dropna(inplace=True)  # Entferne fehlende Werte
data.drop_duplicates(inplace=True)  # Entferne Duplikate
data['date'] = pd.to_datetime(data['date'])  # Standardisiere Datumsformat
```

#### Laden
```python
# Beispiel: Daten in ein Data Warehouse laden
from sqlalchemy import create_engine

warehouse_engine = create_engine('postgresql://user:pass@host:port/db')
data.to_sql('processed_sales', warehouse_engine, if_exists='append', index=False)
```

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
Diese überprüft inhaltliche Aspekte. Beispiele sind die Eliminierung von Duplikaten, Anpassungen von Schlüsseln, Umrechnungen von Maßeinheiten.

## Laden
Das Laden bezieht sich auf den Prozess des Einfügens der transformierten Daten in das Zielsystem, wie ein Data Warehouse. Es erfolgt effizient, um die Datenbank nicht langfristig zu blockieren, und stellt die Integrität sowie eine Versionshistorie sicher.