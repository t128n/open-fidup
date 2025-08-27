---
title: "eEPK"
description: "eEPK ist zur Modellierung von Geschäftsprozessen geeignet. Regeln sind Beginn und Ende mit Ereignis, Wechsel von Ereignis und Funktion, Konnektoren. Elemente sind Ereignis, Funktion, Konnektoren, Kontrollfluss, Prozesswegweiser, Organisationseinheit, Daten, Programm, Anwendungssystem."
---

- **e**rweiterte **E**reignisgesteuerte **P**rozess**k**etten
- zur Modellierung von **[Geschäftsprozessen](/open-fidup/lerninhalte/geschaeftsprozess)** geeignet

## Regeln
1. Ein eEPK **beginnt und endet mit einem Ereignis.**
2. **Ereignisse und Funktionen wechseln** sich im Ablauf immer ab.
3. Sowohl Ereignis aus auch Funktion haben jeweils nur **einen Kontrollflußeingang** und **einen Kontrollflußausgang.**
4. Ein **Konnektor** kann **mehrere Kontrollflußeingänge** und **mehrere Kontrollflußausgänge** haben.
5. **Mehrere Teilabläufe** werden durch die **gleiche Art Konnektor** **zusammengeführt**, mit **der sie aufgeteilt** wurden.

## Elemente
![[Pasted image 20240918104010.png]]
- **Ereignis**, Start oder Ende eines Prozesses. Auslöser und Ergebnis von Funktionen
![[Pasted image 20240918104044.png]]
- **Funktion**, Elementarer Arbeitsschritt. Transformiert Input zu Output. Wird durch *Ereignis ausgelöst und hat Ereignis als Folge*
![[Pasted image 20240918104129.png]]
- **Oder-Konnektor** / **Operator**, teilt/verbindet Abfolge. Teilfolgen können *alternativ* oder auch *alle* durchlaufen werden
![[Pasted image 20240918104221.png]]
- **XOR-Konnektor** / **Operator**, teilt/verbindet Abfolge. Teilfolgen können nur *alternativ* durchlaufen werden
![[Pasted image 20240918104252.png]]
- **Und-Konnektor** / **Operator**, teilt/verbindet Abfolge. *Alle* Teilfolgen werden durchlaufen 
![[Pasted image 20240918105726.png]]
- **Kontrollfluss**, Verbindet Ereignisse und Funktionen sowie Konnektoren
![[Pasted image 20240918105748.png]]
- **Prozesswegweiser**, verweist auf kompletten *Teilprozess*, der separat modelliert ist
![[Pasted image 20240918105820.png]]
- **Organisationseinheit** / **Person**, Beteiligten an Funktion
![[Pasted image 20240918105857.png]]
- **Daten**, beschreibt welche Daten von einer Funktion *benötigt* oder *erzeugt* werden
![[Pasted image 20240918105931.png]]
- **Programm** / **Modul**, beschreibt mit welchem Modul/Programm die Funktion Daten transformiert
![[Pasted image 20240918110321.png]]
- **Anwendungssystem**, beschreibt mit welchem Anwendungssystem (mehreren Modulen, Programme, ...) die Funktion Daten transformiert

## Beispiele

![[Pasted image 20240918110920.png]]![[Pasted image 20240918110927.png]]