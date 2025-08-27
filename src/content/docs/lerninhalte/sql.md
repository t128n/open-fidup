---
title: "SQL"
description: "SQL ist eine standardisierte Sprache zur Verwaltung relationaler Datenbanken mit Tabellen und Beziehungen. Sie unterstützt Datentypen, Integritätsregeln, CRUD-Operationen und komplexe Abfragen mit Joins und Aggregatfunktionen. Beispiele sind MySQL und PostgreSQL."
---

- Daten in Tabellen mit fester Struktur
- Beziehungen zwischen Tabellen durch Schlüssel
- Verwendung von SQL
- Beispiele: MySQL, PostgreSQL, Oracle

## Datentypen in SQL
- **Boolean:** TRUE oder FALSE
- **Integer:** Ganzzahlen (z.B. INT, BIGINT)
- **Float/Double:** Gleitkommazahlen
- **Decimal/Numeric:** Festkommazahlen für präzise Berechnungen
- **Date/Time:** Datums- und Zeitwerte
- **Char/Varchar:** Texte fester bzw. variabler Länge
- **Text/CLOB:** Große Textmengen
- **BLOB:** Binäre Daten (z.B. Bilder)
- **Geometry:** Für Geodaten (nicht in allen DBMS)

## Integrität und Schlüssel

**Referenzielle Integrität:** Sicherstellung **gültiger Beziehungen** zwischen Tabellen

**Aktualisierungs-/Löschweitergabe:**
```sql
FOREIGN KEY (spalte) REFERENCES tabelle(spalte)
  ON UPDATE CASCADE
  ON DELETE CASCADE
```

**Primärschlüssel:** Eindeutige Identifikation von Datensätzen
```sql
PRIMARY KEY (spalte)
```

**Fremdschlüssel:** Verweis auf Primärschlüssel einer anderen Tabelle
```sql
FOREIGN KEY (spalte) REFERENCES tabelle(spalte)
```

## Datenbankoperationen

**Tabellenstruktur:**
```sql
CREATE TABLE tabelle (
  spalte1 datentyp,
  spalte2 datentyp,
  ...
);

ALTER TABLE tabelle ADD spalte datentyp;
```

**Index erstellen:**
```sql
CREATE INDEX idx_name ON tabelle (spalte);
```

**Datenmanipulation:**
```sql
INSERT INTO tabelle (spalte1, spalte2) VALUES (wert1, wert2);
UPDATE tabelle SET spalte = wert WHERE bedingung;
DELETE FROM tabelle WHERE bedingung;
```

**Datenabfrage:**
```sql
SELECT spalte1, spalte2 FROM tabelle WHERE bedingung;
```

**Sortieren und Gruppieren:**
```sql
SELECT spalte FROM tabelle ORDER BY spalte;
SELECT spalte, COUNT(*) FROM tabelle GROUP BY spalte HAVING COUNT(*) > 5;
```

## Komplexe Abfragen

**Unterabfragen:**
```sql
SELECT spalte FROM tabelle WHERE spalte IN (SELECT spalte FROM andere_tabelle);
```

**Tabellenverknüpfung (JOIN):**
```sql
SELECT t1.spalte, t2.spalte 
FROM tabelle1 t1
JOIN tabelle2 t2 ON t1.id = t2.fremdschluessel;
```
![[Pasted image 20241008081155.png]]
### INNER JOIN
- Gibt nur übereinstimmende Zeilen aus beiden Tabellen zurück.
- Syntax:
```sql
SELECT columns 
FROM table1 
INNER JOIN table2 
ON table1.column = table2.column;
```
### LEFT JOIN (oder LEFT OUTER JOIN)
- Gibt alle Zeilen aus der linken Tabelle und übereinstimmende Zeilen aus der rechten Tabelle zurück.
- Nicht übereinstimmende Zeilen aus der rechten Tabelle werden mit NULL-Werten gefüllt.
### RIGHT JOIN (oder RIGHT OUTER JOIN)
- Funktioniert wie LEFT JOIN, aber behält alle Zeilen aus der rechten Tabelle.
### FULL JOIN (oder FULL OUTER JOIN)
- Kombiniert Ergebnisse von LEFT und RIGHT JOIN.
- Gibt alle Zeilen aus beiden Tabellen zurück, mit NULL-Werten für nicht übereinstimmende Zeilen.
### CROSS JOIN
- Erzeugt das kartesische Produkt beider Tabellen.
- Jede Zeile aus der ersten Tabelle wird mit jeder Zeile aus der zweiten Tabelle kombiniert.

## Ausdrücke und Bedingungen

- Vergleichsoperatoren: =, <>, <, >, <=, >=
- Logische Operatoren: AND, OR, NOT
- LIKE für Textmuster: 'A%' (beginnt mit A), '%A%' (enthält A)
- BETWEEN für Wertebereiche
- IN für Mengenzugehörigkeit

## Aggregatfunktionen

### SUM()
- **Funktion:** Berechnet die Summe aller Werte in einer numerischen Spalte.
- **Beispiel:**
```SQL
SELECT SUM(verkaufspreis) AS Gesamteinnahmen 
FROM verkauf;
```
- Berechnet die gesamte Summe aller Verkaufspreise in der Tabelle "verkauf".

### AVG()
- **Funktion:** Berechnet den Durchschnitt aller Werte in einer numerischen Spalte.
- **Beispiel:**
```SQL
SELECT AVG(alter) AS Durchschnittsalter 
FROM kunden;
```
- Berechnet das durchschnittliche Alter aller Kunden.

### COUNT()
- **Funktion:** Zählt die Anzahl der Zeilen oder nicht-NULL-Werte in einer Spalte.
- **Beispiele:**
```SQL
SELECT COUNT(*) AS AnzahlKunden 
FROM kunden;
```    
- Zählt die gesamte Anzahl der Kunden.
```SQL
SELECT COUNT(bestellnummer) AS AnzahlBestellungen 
FROM bestellungen;
```  
- Zählt die Anzahl der Bestellungen, wobei NULL-Werte in der Spalte "bestellnummer" ignoriert werden.

### MAX()
- **Funktion:** Findet den größten Wert in einer Spalte.
- **Beispiel:**    
```SQL
SELECT MAX(gehalt) AS HoehestesGehalt 
FROM mitarbeiter;
```
- Findet das höchste Gehalt unter den Mitarbeitern.

### MIN()
- **Funktion:** Findet den kleinsten Wert in einer Spalte.
- **Beispiel:**
```SQL
SELECT MIN(geburtstag) AS JuengsterMitarbeiter 
FROM mitarbeiter;
```
- Findet das Geburtsdatum des jüngsten Mitarbeiters.

### Weitere Beispiele und Kombinationen

- **Mit GROUP BY:**
```SQL
SELECT land, AVG(verkaufspreis) AS DurchschnittlicherVerkaufspreis
FROM verkauf
GROUP BY land;
```
- Berechnet den durchschnittlichen Verkaufspreis für jedes Land.
- **Mit HAVING:**      
```SQL
SELECT abteilung, COUNT(*) AS AnzahlMitarbeiter
FROM mitarbeiter
GROUP BY abteilung
HAVING COUNT(*) > 10;
```
- Zählt die Mitarbeiter pro Abteilung und zeigt nur Abteilungen mit mehr als 10 Mitarbeitern an.
**Wichtige Hinweise:**
- Aggregatfunktionen werden häufig mit der `GROUP BY`-Klausel kombiniert, um Ergebnisse nach bestimmten Kriterien zu gruppieren.
- Die `HAVING`-Klausel wird verwendet, um Gruppen basierend auf einer Bedingung zu filtern.
- Aggregatfunktionen ignorieren normalerweise NULL-Werte, außer bei `COUNT(*)`, welches alle Zeilen zählt.
**Zusätzliche Funktionen:**
- **COUNT(DISTINCT):** Zählt die Anzahl eindeutiger Werte in einer Spalte.
- **SUM(CASE WHEN ... THEN ... ELSE ... END):** Ermöglicht bedingte Summierungen.

Beispiel:
```sql
SELECT AVG(gehalt) AS durchschnittsgehalt
FROM mitarbeiter
GROUP BY abteilung;
```
