
---
title: "SQL vs NoSQL"
description: "SQL verwendet relationale Tabellen mit statischem Schema und ACID-Eigenschaften, während NoSQL flexible Schemata und BASE-Eigenschaften bietet. SQL ist für strukturierte Daten geeignet, NoSQL für große, unstrukturierte Datenmengen."
---

| Kriterium                     | SQL                                                                                                           | NoSQL                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Datenspeicherung**          | Speicherung in relationalen Tabellen                                                                          | Datenspeicherung immer und überall möglich als Key-Value Paare in einer Datei                        |
| **Datenstruktur**             | Komplexe relationale Datenstruktur                                                                            | Hierarchische Speicherung in JSON-Basierten Dokumentation o. Ä.                                      |
| **Redundanz**                 | Geringe Redundanz durch Normalisierung                                                                        | Ggf. hohe Redundanz                                                                                  |
| **Schema**                    | Statisch<br><br>Schema muss festgelegt werden, bevor Daten hinzugefügt werden können                          | Dynamisch<br><br>Daten können ohne zuvor definiertes Schema hinzugefügt werden                       |
| **Skalierbarkeit**            | Vertikale Skalierung (scale up):<br><br>Aufrüstung der bestehenden Server, wenn sich die Datenbank vergrößert | Horizontale Skalierung (scale out):<br><br>Verteilung der Datenbank über mehrere "hosts" -> Sharding |
| **Transaktionseigenschaften** | *ACID*<br><br>*A*tomic, *C*onsistency, *I*solation, *D*urability                                              | *BASE*<br><br>*B*asically *A*vailable, *S*oft State, *E*ventually Consistent                         |

## Vorteile relationaler Datenbanken
- Standardisierte Abfragesprache durch SQL
- ACID-Eigenschaften, Atomicity, Consistency, Isolation, Durability -> verlässliche und konsistente Informationen in Datenbanken
- Weit verbreitete Datenbank: Hierdurch ist meist ein breites Wissen über Funktionsweise vorhanden

## Vorteile NoSQL-Datenbanken
- Verschiedene Datenbankmodelle können gleichzeitig genutzt werden
- Flexible Schemata sind möglich, Daten können unterschiedliche Strukturen (halb/unstrukturiert) aufweisen
- Erleichterte Verarbeitung von umfangreichen, nicht verbundenen, unbestimmten oder schnell veränderlichen Daten
- Erhöhte Leistung bei hohen Datenaufkommen im Vergleich zu relationalen Datenbanken