---
title: "Fog-Computing: Dezentrale Datenverarbeitung"
description: "Fog-Computing ist eine Cloud-Technologie, bei der Endgeräte Daten in Fog Nodes vorverarbeiten, die dann in die Cloud geladen werden. Layer sind Edge, Fog und Cloud. Vorteile sind weniger Netzwerk-Traffic und geringe Latenz. Nachteile sind steigender Wartungsbedarf und höhere Hardware-Kosten."
---

- **Cloud-Technologie**, Endgeräte vorverarbeiten Daten in **Fog Nodes** *(dezentrale Minirechenzentren)*, Fog-Nodes laden Daten in die **Cloud**

![[Pasted image 20240911072047.png]]
3. **Cloud-Layer**, *zentraler* **Daten-Endpunkt**
2. **Fog-Layer**, *dezentrale*, **leistungsstarke Server**, nehmen Daten entgegen, *vorverarbeiten* sie und laden sie bei Bedarf in die **Cloud**
1. **Edge-Layer**, intelligente Geräte (**Edge-Devices**) verarbeiten Daten *direkt* oder übermitteln an *Fog Nodes*

## Vorteile

- **weniger Netzwerk-Traffic** zur Cloud
- **Geringe Latenz**: dezentrale Server können näher am Endgerät sein
- **Datensicherheit**, *Fogging* erfolgt Vorverarbeitung **lokal**, wodurch Daten anonymisiert werden können

## Nachteile
- **steigender Wartungsbedarf** durch Verteilung von Verarbeitungs- und Speicherelementen
- **höhere Hardware-Kosten**, durch lokale Datenverarbeitung
- **zusätzliche Anforderungen** an **Netzwerksicherheit**, Daten können an Fog-Nodes abgegriffen 

## Quellen

> Redaktion, I. (2024). Fog-Computing. IONOS Digital Guide. Retrieved from https://www.ionos.de/digitalguide/server/knowhow/fog-computing-definition-und-erklaerung/#content-was-ist-fog-computing-eine-definition