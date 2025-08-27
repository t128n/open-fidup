---
title: "Datenaustauschformate"
description: "Datenaustauschformate sind XML für hierarchische Daten, JSON für Webanwendungen und CSV für tabellarische Daten. XML ist flexibel aber speicherintensiv, JSON leichtgewichtig, CSV einfach aber ohne komplexe Strukturen. Sie ermöglichen Datenintegration zwischen Systemen."
---

## XML (eXtensible Markup Language)
- **Definition**: Ein text basiertes Format zur Darstellung strukturierter Daten in einer hierarchischen Form.
- **Einsatzbereich**: Häufig verwendet in Webdiensten, Konfigurationsdateien und zur Speicherung von Daten.
- **Vorteile**:
	- Flexibel und erweiterbar.
	- Unterstützt komplexe Datenstrukturen.
- **Nachteile**:
	- Größerer Speicherbedarf im Vergleich zu JSON.
	- Komplexere Syntax, die schwerer zu lesen sein kann.

```xml
<root>
	<sub-element attr="120">test</sub-element>
</root>
```

## JSON (JavaScript Object Notation)
- **Definition**: Ein leichtgewichtiges, textbasiertes Format zur Darstellung von Datenobjekten.
- **Einsatzbereich**: Weit verbreitet in Webanwendungen, APIs und zur Datenübertragung zwischen Client und Server.
- **Vorteile**:
	- Einfach zu lesen und zu schreiben.
	- Geringerer Speicherbedarf als XML.
	- Native Unterstützung in JavaScript.
- **Nachteile**:
	- Weniger geeignet für sehr komplexe Datenstrukturen.

```json
{
	"element": [
		false
	],
	"test": {},
	no: 0
}
```

## CSV (Comma-Separated Values)
- **Definition**: Ein einfaches, textbasiertes Format zur Speicherung tabellarischer Daten, bei dem Werte durch Kommas getrennt sind.
- **Einsatzbereich**: Häufig verwendet für den Import und Export von Daten in Tabellenkalkulationsprogrammen und Datenbanken.
- **Vorteile**:
	- Sehr einfach und leichtgewichtig.
	- Breite Unterstützung in verschiedenen Anwendungen.
- **Nachteile**:
	- Keine Unterstützung für komplexe Datenstrukturen.
	- Probleme mit der Handhabung von Sonderzeichen und Zeilenumbrüchen.

```csv
col1,col2,col3,col4
data,is,0,"even spaces"
```
## Daten aus unterschiedlichen Systemen und unterschiedlichen Formaten zusammenführen können
- **Schnittstellenentwicklung**: Entwicklung von [APIs](/lerninhalte/api-schnittstellen) oder Middleware, um Daten zwischen verschiedenen Systemen auszutauschen und zu konvertieren.
- **Formate, z.B.**:
	- [XML](lerninhalte/datenaustauschformate/): Ideal für **komplexe** Datenstrukturen und **hierarchische** Daten.
	- [JSON](lerninhalte/datenaustauschformate/): Optimal für **Webanwendungen** und **einfache Datenübertragungen**.
	- [CSV](lerninhalte/datenaustauschformate/): Praktisch für **tabellarische Daten** und **einfache Datenimporte/-exporte**.

## Quellen

> AI Chat. (2024, September 18). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1