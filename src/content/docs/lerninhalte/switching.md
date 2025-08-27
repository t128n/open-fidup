---
title: "Switching"
description: "Switching analysiert Ethernet-Frames, speichert MAC-Adressen in der FDB und leitet Frames an den Zielport weiter. Es ermöglicht effiziente Datenübertragung auf der Netzzugangsschicht."
---

- quasi wie [Routing](/lerninhalte/tcp-ip-modell), bloß auf [Ebene 2](/lerninhalte/osi-modell) bzw. [Netzzugangsschicht](/lerninhalte/tcp-ip-modell)

## Ablauf
1. eingehendes **Ethernet-Frame** wird **analyisiert**
2. MAC-Adressen und Port Nummern von Sender um Empfänger werden in *MAC-Tabelle* (FDB, Forwarding Database) gespeichert (Einträge werden regelmäßig erneuert da Port-Nummer sich ändern kann)
3. Ethernet-Frame wird an Ziel Port Nummer weitergeleitet

## Quellen

> Switching. (2024, September 17). Retrieved from https://www.elektronik-kompendium.de/sites/net/0907141.htm