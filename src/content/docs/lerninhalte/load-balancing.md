
---
title: "Load Balancing: Verteilung von Rechenlasten"
description: "Load Balancing verteilt Rechenlasten auf mehrere Server, um die Belastung zu reduzieren und die Performance zu erhöhen. Es verwendet statische oder dynamische Algorithmen wie Round-Robin oder Least Connection für effiziente Lastverteilung."
---

- **Verteilung** von **Rechenlasten** auf zwei oder mehr Computer
- **reduziert Belastung** jedes einzelnen Servers, macht Server **effizienter** -> höhere **Performance** und geringere **Latenz**

## Funktionsweise
- **Hard-** oder **Softwarebasiert**
- Anfragen werden bestimmten Servern zugewiesen
- Zuweisung geschieht auf Grundlage von Algorithmen

### statische Algorithmen
- Lastenverteilung ohne aktuellen Zustand des Systems zu berücksichtigen
- lässt sich **schnell einrichten**, kann aber zu **Ineffizienzen** führen
- **Round-Robin-DNS**, DNS-Server rotiert A-Adressen der angefragten Domain
	- **Vorteile**, einfache Implementierung
	- **Nachteile**, DNS- & clientseitiges Caching -> ein Server wird überlastet

### dynamische Algorithmen
- **berücksichtigt** aktuelle Verfügbarkeit, Arbeitslast und Zustand der einzelnen Server
- **Vorteile**
	- können Traffic von schlecht performenden Servern auf weniger ausgelastete Server verlagern -> **gleichmäßig** und **effizienter** Traffic
- **Nachteile**
	- schwieriger zu konfigurieren
- **Beispiele**, Least Connection, Weighted Least Connection, ressourcenbasiertes und geolokalisiertes Load Balancing

## Beispiel
![[Pasted image 20240918101849.png]]
![[Pasted image 20240918101855.png]]

## Quellen

> Was ist Lastverteilung? | So funktionieren Load Balancer. (2024, September 18). Retrieved from https://www.cloudflare.com/de-de/learning/performance/what-is-load-balancing