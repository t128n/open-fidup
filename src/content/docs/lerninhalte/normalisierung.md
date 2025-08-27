---
title: "Normalisierung"
description: "Normalisierung ist eine Strategie zur Beseitigung von Redundanz in relationalen Datenbanken durch Überführung in Normalformen wie 1NF, 2NF und 3NF. Sie verhindert Anomalien und ermöglicht spezialisierte Abfragen."
---

- Strategie zur **Beseitigung und Vermeidung von Redundanz** in relationalen Datenbanken 

> *"Normalisierung bezeichnet man **die Überführung** einer Datenbanktabelle in eine **Normalform höheren Grades**. Die Überführung in eine Normalform **geringeren** Grades wird **Denormalisierung** genannt."*
> - https://www.ionos.de/digitalguide/hosting/hosting-technik/normalisierung-von-datenbanken/anomali

## Normalformen

1. **1. Normalform (1NF)**, alle Daten liegen *atomar* vor, Tabellenspalten beinhalten *gleichartige Werte*
2. **2. Normalform (2NF)**, jedes *Nichtschlüsselattribut* muss vom *Primärschlüssel voll funktional abhängig* sein
3. **3. Normalform (3NF)**,  *kein Nichtschlüsselattribut* darf von einem *Schlüsselkandidaten transitiv* abhängig sein

## Vorteile
- **weniger Redundanz**
- **Verhinderung** von **Anomalien**
- **spezialisiertere Abfragen** möglich
## Nachteile
- Integration von **Fremdschlüsseln**
- viele **Joins erforderlich**
- bei größeren Datensätzen mit vielen Abhängigkeiten, **viele Tabellen**

## Beispiel
- Ausgangslage
![[Pasted image 20240911123548.png]]
- **1NF**, *mehrwertige Daten* aufspalten, Spalten auf *Gleichartigkeit* prüfen
![[Pasted image 20240911123609.png]]
![[Pasted image 20240911124014.png]]
- **2NF**, Spalten die nicht *voll funktional abhängig* sind, werden ausgelagert (`Anz.` ist nur von `P.-Nr.` abhängig aber nicht `R.-Nr.`, daher wird `P.-Nr.` und abhängige Spalten ausgelagert.)
![[Pasted image 20240911125052.png]]
![[Pasted image 20240911125102.png]]
- **3NF**, Spalten die von einem *Nichtschlüsselattribut abhängig* sind, werden ausgelagert (`Artikel` ist von `Art.-Nr.` abhängig, `Art.-Nr.` ist jedoch kein Primärschlüssel)
![[Pasted image 20240911125857.png]]
![[Pasted image 20240911130048.png]]
![[Pasted image 20240911130054.png]]

## Quellen

> Redaktion, I. (2018). Weniger Redundanz dank Datenbank-Normalisierung. IONOS Digital Guide. Retrieved from https://www.ionos.de/digitalguide/hosting/hosting-technik/normalisierung-von-datenbanken