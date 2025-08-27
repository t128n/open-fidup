---
title: "Relationenmodell"
description: "Das Relationenmodell überführt das ERM in eine Form für relationale Datenbanken. Vergleich ERM und RM mit Tabellen. Merkmale wie atomare Attribute und Primärschlüssel."
---

- Das RM ist ein Schritt in der **Datenbankentwicklung** nach dem [[Entity Relationship Model|Entity-Relationship-Modell (ERM)]]
- Es überführt das ERM in eine Form, die in relationalen Datenbanken gespeichert werden kann

## Vergleich ERM und RM

| ERM              | RM                            |
| ---------------- | ----------------------------- |
| Entitytyp        | Relation (Tabelle)            |
| Entity           | Tupel (eindeutiger Datensatz) |
| Attribute        | Spaltenüberschriften          |
| Primärschlüssel  | Primärschlüssel               |
| Beziehung (ship) | Relation (Tabelle)            |


## Darstellung im Relationenmodell
Beispiel:
```
Lehrer (Personalnummer, Name, Vorname, Schulform, Fachgebiet)
Schüler (Schülernummer, Name, Vorname)
Klasse (Klassenbezeichnung, Raum)
Zeugnis (Zeugnis_ID, Ausgabedatum)
```
oder
```
T_Lehrer(P_Personalnummer, Name, Vorname, Schulform, Fachgebiet)
T_Schüler(P_Schülernummer, Name, Vorname),
Klasse(P_Klassenbezeichnung, F_Lehrernummer, F_Schülernummer, Raum)
Zeugnis(P_Zeugnis_ID, F_Schülernummer, Ausgabedateum)
```

## Wichtige Merkmale
- Attribute sind atomar und nicht weiter zerlegbar
- Primärschlüssel sind identifizierende Eigenschaften (unterstrichen dargestellt)
- Keine Duplikate in Datensätzen erlaubt[1]
## Quellen
> https://bildung4u.eu/relationenmodell-rm/