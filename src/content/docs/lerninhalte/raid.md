---
title: "RAID: Redundant Array of Independent Disks"
description: "RAID kombiniert Festplatten für höhere Leistung und Sicherheit. Levels wie RAID 0 für Geschwindigkeit, RAID 1 für Spiegelung, RAID 5 für Parität. Formeln berechnen Kapazität, Hot-Spare und Cold-Standby bieten Redundanz."
---

- **R**edundant **A**rray of **I**ndependent **D**isks
- RAID Controller wird benötigt

![[Pasted image 20240918094630.png]]

## RAID 0
- mind. 2 Festplatten
- teilt Daten in **gleichgroße Blöcke** auf
- Größe richtet sich nach **kleinster Festplatte**
- Blöcke sind i. d. R. **64 kByte** groß
- **Vorteile**
	- große Datenmengen verarbeiten
	- schnellere Lese- und Schreibprozesse
- **Nachteile**
	- Hohe Ausfallwahrscheinlichkeit
- **Formel**
	- $Kapazität=(Anzahl \space Festplatten) \times Festplattenkapazität$

## RAID 1
- mind. 2 Festplatten
- Daten werden parallel auf zwei Festplatten geschrieben
- Größe richtet sich nach **kleinster Festplatte**
- **Vorteile**
	- hohes Maß an Datensicherheit (ein Ausfall kann toleriert werden)
	- Lesegeschwindigkeit kann erhöht werden bei intelligentem RAID-Controller
- **Nachteile**
	- doppelte an Speicherkapazität wird benötigt
	- Kostenfaktor ist hoch
- **Formel**
	- $Kapazität=(\dfrac{Anzahl \space Festplatten}{2}) \times Festplattenkapazität$

## RAID 5
- mind. 3 Festplatten werden benötigt
- Kombination aus Striping mit **Paritätsinformation** (*XOR Verknüpfung*)
- **Vorteile**
	- hohes Maß an Datensicherheit
	- optimalere Speicherkapazitätnutzung als RAID 1
- **Nachteile**
	- Schreibvorgänge sind langsamer durch Paritätsinformationen
	- Paritätsinformationen nehmen zusätzlich Speicherplatz in Anspruch
- **Formel**
	- $Kapazität = (Anzahl \space Festplatten - 1) \times Festplattenkapazität \space kleinste \space Festplatte$
	- *bei RAID 6 $-2$*
		- $Kapazität = (Anzahl \space Festplatten - 2) \times Festplattenkapazität \space kleinste \space Festplatte$

## RAID und Redundanzkonzepte

### Hot-Spare
- **Definition**: Ein Hot-Spare ist eine zusätzliche Festplatte, die in einem RAID-System bereitgehalten wird, um im Falle eines Festplattenausfalls sofort einspringen zu können.
- **Vorteile**:
    - Automatischer Wechsel: Bei einem Ausfall wird die Hot-Spare-Festplatte automatisch aktiviert, was die Ausfallzeit minimiert.
    - Keine manuelle Intervention erforderlich.
- **Nachteile**:
    - Die Hot-Spare-Festplatte kann nicht für Daten verwendet werden, solange sie im Standby-Modus ist.
    - Erhöhte Kosten durch zusätzliche Hardware.
### Cold-Standby
- **Definition**: Ein Cold-Standby ist eine zusätzliche Festplatte, die nicht aktiv im RAID-System integriert ist, aber im Falle eines Ausfalls manuell hinzugefügt werden kann.
- **Vorteile**:
    - Kostengünstiger, da keine permanente Hardware benötigt wird.
    - Flexibilität, da die Festplatte bei Bedarf hinzugefügt werden kann.
- **Nachteile**:
    - Längere Ausfallzeiten, da eine manuelle Intervention erforderlich ist, um die Festplatte zu aktivieren.
    - Erhöhtes Risiko von Datenverlust, wenn der Ausfall nicht schnell genug behoben wird.

## Quellen 

> Coleman, L. (2024). PITS Globale Datenrettungsdienste. PITS Globale Datenrettungsdienste. Retrieved from https://www.pitsdatenrettung.de/blog/raid-level-
> Boekhoven, P. (2024, February 18). RAID-Systeme: Effiziente Speicherorganisation einfach erklärt! Youtube. Retrieved from https://www.youtube.com/watch?v=za8ZJgIWMKQ
> Formeln RAID - Fachinformatiker Systemintegration. (2024, September 18). Retrieved from https://www.karteikarte.com/lesson/69679/formeln-raid