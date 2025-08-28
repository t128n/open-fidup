---
title: "Relationenmodell"
description: "Das Relationenmodell überführt das Entity-Relationship-Modell in eine Form für relationale Datenbanken. Es vergleicht beide Modelle mit Tabellen und beschreibt Merkmale wie atomare Attribute und Primärschlüssel."
---

Das Relationenmodell stellt einen Schritt in der Datenbankentwicklung dar, der auf das [Entity-Relationship-Modell](/open-fidup/lerninhalte/entity-relationship-model) folgt. Es transformiert die im Entity-Relationship-Modell definierten Strukturen in eine Form, die in relationalen Datenbanken gespeichert und verarbeitet werden kann.

## Vergleich von Entity-Relationship-Modell und Relationenmodell

Das Relationenmodell bildet die Konzepte des Entity-Relationship-Modells in tabellarische Strukturen ab. Die folgende Tabelle zeigt die Entsprechungen:

| Entity-Relationship-Modell | Relationenmodell               |
| -------------------------- | ----------------------------- |
| Entitytyp                  | Relation (Tabelle)            |
| Entity                     | Tupel (eindeutiger Datensatz) |
| Attribut                   | Spaltenüberschrift            |
| Primärschlüssel            | Primärschlüssel               |
| Beziehung                  | Relation (Tabelle)            |

## Darstellung im Relationenmodell

Im Relationenmodell werden Entitäten und Beziehungen als Relationen dargestellt, die durch Tabellen repräsentiert werden. Ein Beispiel für eine einfache Darstellung ohne Fremdschlüssel lautet:

```
Lehrer (Personalnummer, Name, Vorname, Schulform, Fachgebiet)
Schüler (Schülernummer, Name, Vorname)
Klasse (Klassenbezeichnung, Raum)
Zeugnis (Zeugnis_ID, Ausgabedatum)
```

Eine erweiterte Darstellung mit Fremdschlüsseln zur Abbildung von Beziehungen könnte wie folgt aussehen:

```
T_Lehrer(P_Personalnummer, Name, Vorname, Schulform, Fachgebiet)
T_Schüler(P_Schülernummer, Name, Vorname)
Klasse(P_Klassenbezeichnung, F_Lehrernummer, F_Schülernummer, Raum)
Zeugnis(P_Zeugnis_ID, F_Schülernummer, Ausgabedatum)
```

## Wichtige Merkmale

Das Relationenmodell weist folgende zentrale Eigenschaften auf:

- Attribute sind atomar und nicht weiter zerlegbar.
- Primärschlüssel dienen als identifizierende Eigenschaften und werden in Darstellungen unterstrichen.
- Duplikate in Datensätzen sind nicht erlaubt.

## Quellen

- https://bildung4u.eu/relationenmodell-rm/