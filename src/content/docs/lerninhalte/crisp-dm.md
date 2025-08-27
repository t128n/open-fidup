---
title: "CRISP-DM"
description: "CRISP-DM ist ein Modell für einheitliches Data Mining mit Phasen wie Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation und Deployment. Ziele sind Schaffung eines einheitlichen Prozesses und übergreifende Nutzung. Es beschreibt den Ablauf von der Problemstellung bis zur Umsetzung der Erkenntnisse."
---

- Modell für einheitliches Data Mining

![[Pasted image 20241008092942.png]]

## Ziele
- Schaffung eines einheitlichen Prozesses-und Vorgehensmodell
- Übergreifende Nutzung in verschiedenen Branchen

## Phasen

### 1. Business Understanding
- konkrete Beschreibung der **betriebswirtschaftlichen Problemstellung**
- **Situationsbewertung**: Software- und Personalressourcen bestimmen, mögliche Risiken identifizieren
- ausgehend von **betriebswirtschaftlicher Problemstellung** werden **Datenanalyseaufgaben** bestimmt (z.B. Kundensegmentierung, Scoring-Verfahren, etc.). **Erfolgskriterien** werden festgelegt (z.B. Steigerung der Antwortquote von Kampagnen um 3%) 
- **Projektplan** erstellen
	- Auflistung einzelner *Schritte mit Zeitspanne*
	- Beurteilung möglicher *Risiken* (Verzögerungen, Ursachen für Scheitern des Projektes)
	- Prüfung der zur *Verfügung stehender Ressourcen* (Mitarbeiter, Hardware, Software, ...)
### 2. Data Understanding
- **Daten sammeln**: Beschaffung der Daten, wenn erforderlich Integration der Daten in eine bestehende Datenmenge. Dokumentation von Problemen. 
- **Daten beschreiben**: Quantität der Daten, Formateigenschaften, Anzahl der Einträge und Felder, Eigenschaften der Felder. *Reichen vorliegende Daten für Projekterfolg?*
- **Untersuchung der Daten**: erste Analysen (z.b. Produktgruppen identifizieren). Erstellung von Reports, Erkenntnisse und Hypothesen visualisieren
- **Bewertung der Daten**: Bewertung der Qualität, Datenmenge ausreichend für Analyse, auf fehlende Attributwerte achten

## 3. Data Preparation
- **Auswahl** der Daten: hängt stark von den Zielen ab, Selektion von Daten wird vorgenommen (z.B. Kunden mit Umsatz > 100€/Monat), Eindeutig welche Datenmengen(-Sets) in Analyse aufgenommen/ausgeschlossen werden
- **Bereinigung** der Daten: sauberere Datenmenge auswählen oder Bereinigung der Daten um gewünschtes Ergebnis für Modellierung zu erreichen
- **Transform** und **Integration** der Daten: Kodierung der Daten, Aggregation/Disaggregation. Erstellung von wichtigen Kennzahlen (Durchschnittsgehalt, ...)
- Daten **formatieren**: Anpassung des Datentyps für Model

## 4. Modeling
- Auswahl der **Modellierungstechnik**
- **Testmodell** erstellen: Qualität und Genauigkeit des Modells überprüfen, bei überwachten Verfahren (z.B. Klassifikation) Fehlerraten als Qualitätsmaß
- Modell **bewerten**: auf definierte Data Mining Ziele und betriebswirtschaftliche Fragestellung hin bewerten  

## 5. Evaluation
- **Ergebnisse bewerten**: inwieweit hat Modell *Projektziele* erreicht, bei Nicht-Erreichung Gründe
- **Prozess bewerten**: Projekt wird rückblickend bewertet, alle wichtigen Faktoren berücksichtigt? Inwieweit Attribute für zukünftige Projekte nutzbar?
- **Nächsten Schritte festlegen**: Projektleiter entscheidet ob Projekt abgeschlossen und umgesetzt wird

## 6. Deployment
- **letzte Phase**
- gewonnene **Erkenntnisse** werden **aufbereitet**, z.B. mögliche Implementierungsstrategie
- Überprüfung der **Gültigkeit der Modelle**
- **zusammenfassender Bericht** und Präsentation

# Quellen

> Wuttke, L. (2024). CRISP-DM: das Standard-Vorgehensmodell für Data Mining. Datasolut GmbH. Retrieved from https://datasolut.com/crisp-dm-standard