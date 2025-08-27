---
title: "UML-Sequenzdiagramm: Chronologische Darstellung von Objektinteraktionen"
description: "Das UML-Sequenzdiagramm visualisiert den zeitlichen Ablauf von Nachrichten zwischen Objekten in einem System. Es umfasst Elemente wie Lebenslinien, synchrone und asynchrone Nachrichten sowie Aktivitätsbalken."
---

- stellt **Ereignisauftritte chronologisch** dar
- beschreibt wie **Objekte Nachrichten** in **bestimmter Reihenfolge austauschen**
- **genaue Reihenfolge** ist wichtiger als spezifische Zeitpunkte
- **Lebenslinien** repräsentiert **Zeitverlauf eines Prozesses**

- Sequenzdiagramm umfasst **Gruppe von Objekten**, die mit **Lebenslinien** dargestellt werden und die **Nachrichten** die sie während der **Interaktion** austauschen

## Elemente
![Objekt-Symbol](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-object-symbol.svg)
- **Objekt**, wie in UML, *ohne* Klassenattribute
![Aktivitätsbalken](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-activation-box-symbol.svg)
- **Aktivitätsbalken**, Zeit, die ein Objekt zum *Abschluss* einer *Aufgabe* benötigt
![Akteur-Symbol](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-actor-symbol.svg)
- **Akteur**, Entitäten die mit dem *System interagieren* bzw. systemintern sind 
![Lebenslinien-Symbol](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-lifeline-symbol.svg)
- **Lebenslinien**, aufeinanderfolgende Ereignisse die einem 
![Symbol für synchrone Nachrichten](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-synchronous-message-symbol.svg)
- **synchrone Nachrichten**, Absender muss auf Antwort warten
![Symbol für asynchrone Nachrichten](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-asynchronous-message-symbol.svg)
- **asynchrone Nachrichten**, keine Antwort erforderlich
![Symbol für asynchrone Antwortnachrichten](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-return-message-symbol.svg)
- **(asynchrone) Antwortnachrichten**, Antwort vom Empfänger
![Symbol für asynchrone Nachrichtenerstellung](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-create-message-symbol.svg)
- **asynchrone Nachrichtenerstellung**, Erstellung eines neuen Objekts
![Symbol für Löschnachrichten](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/discovery/UML/UML-Sequence/uml-deleted-message-symbol.svg)
- **Löschnachrichten**, Zerstörung eines Objektes

## Beispiel
![[Pasted image 20240913065132.png]]

![[Pasted image 20240913072326.png]]
## Quellen

> Redaktion, I. (2018). Sequenzdiagramme: Den Nachrichtenaustausch in einem System mit UML darstellen. IONOS Digital Guide. Retrieved from https://www.ionos.de/digitalguide/websites/web-entwicklung/sequenzdiagramme-mit-uml-erstellen
> Rational Application Developer for WebSphere Software 9.7.0. (2021, March 03). Retrieved from https://www.ibm.com/docs/de/radfws/9.7?topic=diagrams-sequence
> UML Sequenzdiagramm. (2024, September 13). Retrieved from https://www.lucidchart.com/pages/de/uml-sequenzdiagramme