---
title: "ANSI-SPARC-Architektur"
description: "Die ANSI-SPARC-Architektur trennt Datenbankschemata in externe, konzeptionelle und interne Ebene zur Verbesserung der Datenunabhängigkeit. Die externe Ebene bietet individuelle Benutzersichten, die konzeptionelle Ebene speichert Daten strukturiert und die interne Ebene handhabt die physische Speicherung. Dies ermöglicht höhere Robustheit und einfachere Wartung gegenüber Änderungen."
---

- **grundlegende Trennung** verschiedener Beschreibungsebenen für **Datenbankschemata**
- 
![[Pasted image 20240911121738.png]]
## Ebenen
1. **externe Ebene**, stellt Anwendungen und Benutzern individuelle Benutzersichten bereit, Benutzeroberflächen, Schnittstellen
2. **konzeptionelle Ebene**, welche Daten werden gespeichert, Beziehung zwischen den Daten, Designziel ist vollständige und redundanzfreie Darstellung (Normalisierung)
3. **interne/physische Ebene**, wie und wo werden die Daten in Datenbank gespeichert, Designziel ist effizienter Zugriff

## Vorteile
- **physische Unabhängigkeit**, Änderungen an physischer Ebene (*wechsel Speichermedium*) beeinflussen nicht externe Ebene oder konzeptionelle Ebene
- **logische Datenunabhängigkeit**, Änderungen an Datenbankstruktur (hinzufügen *neuer Attribute, Entitäten*) keine Auswirkungen auf externe Ebene
- **höhere Robustheit** gegenüber Änderungen
- **einfachere Wartung** und **Anpassung**

## Quellen

> Autoren der Wikimedia-Projekte. (2004, July 29). ANSI-SPARC-Architektur – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=ANSI-SPARC-Architektur&oldid=236727164
> DuckDuckGo AI Chat (2023). Anfrage zur Verbesserung des Lernzettels über ANSI-SPARC-Architektur.