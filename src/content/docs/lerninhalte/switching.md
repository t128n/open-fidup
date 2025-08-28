---
title: "Switching"
description: "Switching analysiert Ethernet-Frames, speichert MAC-Adressen in der FDB und leitet Frames an den Zielport weiter. Es ermöglicht effiziente Datenübertragung auf der Netzzugangsschicht."
---

Switching bezeichnet einen Prozess in der Netzwerktechnik, der ähnlich wie [Routing](/open-fidup/lerninhalte/tcp-ip-modell) funktioniert, jedoch auf der [Ebene 2](/open-fidup/lerninhalte/osi-modell) des OSI-Modells oder der [Netzzugangsschicht](/open-fidup/lerninhalte/tcp-ip-modell) des TCP/IP-Modells. Dabei werden eingehende Ethernet-Frames analysiert, die MAC-Adressen von Sender und Empfänger zusammen mit den entsprechenden Portnummern in einer MAC-Tabelle, auch Forwarding Database (FDB) genannt, gespeichert und die Frames an den Zielport weitergeleitet. Dies ermöglicht eine effiziente Datenübertragung in lokalen Netzwerken.

## Ablauf

Der Prozess des Switchings folgt typischerweise diesen Schritten:

1. Ein eingehendes Ethernet-Frame wird analysiert.
2. Die MAC-Adressen und Portnummern von Sender und Empfänger werden in der MAC-Tabelle (FDB) gespeichert. Diese Einträge werden regelmäßig erneuert, da sich Portnummern ändern können.
3. Das Ethernet-Frame wird an die Zielportnummer weitergeleitet.

## Quellen

> Switching. (2024, September 17). Retrieved from https://www.elektronik-kompendium.de/sites/net/0907141.htm