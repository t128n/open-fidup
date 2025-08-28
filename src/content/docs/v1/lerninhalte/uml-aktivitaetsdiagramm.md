---
title: "UML-Aktivitätsdiagramm"
description: "Das UML-Aktivitätsdiagramm stellt den Fluss von Aktivitäten in einem System dar, einschließlich Elemente wie Anfangsknoten, Aktionen und Entscheidungspunkte. Es hilft, komplexe Prozesse zu modellieren und zu verstehen."
---

- hilft **bestimmten Anwendungsfall** auf **detaillierteren Ebene** zu visualisieren
- **Fluss der Aktivitäten** durch ein System

## Elemente
![[Pasted image 20240910081403.png]]
- **Anfangsknoten**, stellt *Anfangszustand der Aktivität* dar
![[Pasted image 20240910081554.png]]
- **Aktivität**, Darstellung einer Aktivität des Prozesses
![[Pasted image 20240910081751.png]]
- **Aktion**, ausführbarer **Teilbereich** einer Aktivität
![[Pasted image 20240910081954.png]]
- **Kontrollfluss**, eine Aktion zu einer anderen
![[Pasted image 20240910082546.png]]
- **Objektfluss**, Weg von Objekten die sich durch Aktivität bewegen
![[Pasted image 20240910082625.png]]
- **Aktivität Endknoten**, Ende aller Kontrollflüsse
![[Pasted image 20240910082812.png]]
- **Fluss-Endknoten**, Ende eines einzelnen Kontrollflusses
![[Pasted image 20240910082832.png]]
- **Entscheidungs-Knotenpunkt** / **Knoten verschmelzen**, bedingter Verzweigungspunkt; Ein Eingang, mehrere Ausgänge / Zusammenfließen von Strömen; mehrere Eingänge, ein Ausgang
![[Pasted image 20240910082952.png]]
- **Gabel**, Fluss, der sich in zwei oder mehr parallele Ströme verzweigt
![[Pasted image 20240910083034.png]]
- **Zusammenführen**, Fluss, der zwei oder mehr parallele Ströme verzweigt
![[Pasted image 20240910083103.png]]
- **Senden von Signalen**, an eine annehmende Aktivität
![[Pasted image 20240910083218.png]]
- **Signal-Empfang**, von einer sendenen Aktivität
![[Pasted image 20240910083244.png]]
- **Anmerkung/Kommentar**
![[Pasted image 20240910083302.png]]
- **Swimlanes**, Partitionen. Aktionen werden anhand ihrer Akteure getrennt
	- **Vorteile**: macht lineare Prozesse leichter lesbar, jedoch nicht mehr als 5 Swimlanes

## Beispiel

![[Pasted image 20240910083408.png]]

## Quellen

> Siriwardhana, S. (2022). Aktivitätsdiagramm UML: Symbol, Beispiele & Erstellung [Leitfaden]. Creately Blog. Retrieved from https://creately.com/blog/de/diagramme/aktivitatsdiagramm-uml