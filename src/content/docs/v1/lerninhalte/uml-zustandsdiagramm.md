---
title: "UML-Zustandsdiagramm"
description: "Das UML-Zustandsdiagramm visualisiert Zustände eines endlichen Automaten und den Lebenszyklus von Objekten. Es enthält Anfangszustand, Endzustand und Zwischenzustände mit Transitionen. Ereignisse wie entry, exit und do lösen Zustandswechsel aus."
---

- Visualisierung von Zuständen eines endlichen Automaten
- Darstellung des Lebenszyklus einzelner Objekte

## Diagrammstruktur
- Jedes Diagramm hat:
  - **Anfangszustand**
  - **Endzustand**
  - Mindestens einen **Zwischenzustand**

## Zustände
- **Darstellung**: Rechtecke
- **Pseudozustände**:
  - **Startzustand**: 
    - Keine eingehende Transition
    - Exakt eine ausgehende Transition
  - **Endzustand**: 
    - Keine ausgehende Transition
    - Ende der Verhaltensabfolge
  - **Gabelung**: 
    - Aufspaltung in parallele Zustände
  - **Synchronisation**: 
    - Vereinigung mehrerer paralleler Zustände
  - **Kreuzung**: 
    - Knotenpunkt für mehrere Transitionen
  - **Entscheidung**: 
    - Alternative Transitionen basierend auf vorheriger Entscheidung
  - **Eintrittspunkt**: 
    - Zusammenfassung gleichartiger Transitionen in einen zusammengesetzten Zustand
  - **Austrittspunkt**: 
    - Zusammenfassung gleichartiger Transitionen aus einem zusammengesetzten Zustand
  - **Flache Historie**: 
    - Speicherung des letzten aktiven Unterzustands eines zusammengesetzten Zustands
  - **Tiefe Historie**: 
    - Speicherung des letzten aktiven Unterzustands aller Hierarchie-Ebenen eines zusammengesetzten Zustands

## Ereignisse
- Beschreiben Bedingungen für den Zustandwechsel:
  - **entry**: Automatisches Auslösen beim Eintritt in den Zustand
  - **exit**: Auslösen beim Verlassen des Zustands
  - **do**: Wiederholtes Auslösen, solange der Zustand nicht wechselt

## Transitionen
- Zustandsübergänge, ausgelöst durch Ereignisse
- **Innere Transitionen**: 
  - Nicht unbedingt Bestandteil des Diagramms
- **Äußere Transitionen**: 
  - Obligatorisch, Zustand wechselt

## Elemente
![[Pasted image 20240913091756.png]]

## Beispiele
![[Pasted image 20240913090611.png]]
![[Pasted image 20240913090635.png]]
![[Pasted image 20240913091809.png]]

## Quellen

> Redaktion, I. (2020). UML-Zustandsdiagramme: Folgen von Objektzuständen sichtbar machen. IONOS Digital Guide. Retrieved from https://www.ionos.de/digitalguide/websites/web-entwicklung/uml-zustandsdiagramm