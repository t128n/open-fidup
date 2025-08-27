---
title: "iSCSI"
description: "iSCSI ermöglicht den Zugriff auf blockbasierte Speicherlösungen über TCP/IP, ohne teure Fibre Channel-Infrastruktur. Es verbindet SCSI mit IP und setzt auf Client-Server-Modell mit Initiator und Target Nodes."
---

- **I**nternet **S**mall **C**omputer **S**ystem **I**nterface
- Zugriff auf zentral verfügbare Speicherressourcen
- Verbund von SCSI mit [TCP-IP-Modell](/lerninhalte/tcp-ip-modell)
- Zugriff auf [blockbasierte Speicherlösungen](/lerninhalte/speicherloesungen) ohne teure [Fibre Channel](/lerninhalte/fibre-channel) Infrastruktur
- setzt auf [Client-Server-Modell](/lerninhalte/client-server)

## Aktoren
- **iSCSI Node Names**, weltweit einmaliger Name für Target oder Node, meistens **IQN** *(iSCSI Qualified Name)*
- **iSCSI Initiator Nodes**, Clients
	- im Betriebssystem installierte Treiber
	- verschickten SCSI-Befehle eingepackt in [TCP/IP Paketen](/lerninhalte/tcp-ip-modell)
- **iSCSI Target Nodes**, Server die Speicherplatz bereitstellen
	- wandeln iSCSI-Befehle in SCSI-Befehle um -> kann zu hoher Rechenlast führen
	- stellen ein oder mehrere LUs (*Logical Units*[^1]) bereit

## Funktionswiese
1. iSCSI-Iniator baut **Session** mit iSCSI-Target auf (normal operational session oder discovery session)
2. iSCSI-Iniator **verpackt** Befehle in PDUs[^2] und verschickt sie anschließend
3. iSCSI-Target **entpackt** Befehle und beantwortet Dienstanfrage

## Vor- und Nachteile
- **Vorteile**
	- Nutzung vorhandener Infrastruktur und Hardware
	- Administratoren mit [Ethernet](/lerninhalte/ethernet)/[TCP-IP](/lerninhalte/tcp-ip-modell) bereits vertraut
	- Flexibilität, durch [TCP/IP-Protokoll](/lerninhalte/tcp-ip-modell) Routing über Netzwerksegmente hinweg
	- -> kostengünstiger Aufbau, einfache Wartung, hohe Flexibilität und Skalierbarkeit
- **Nachteile**
	- höhere Latenzzeit als über [Fibre Channel](/lerninhalte/fibre-channel)
	- Performance Einbuße durch [TCP/IP](/lerninhalte/tcp-ip-modell) Overhead
	- [LAN](/lerninhalte/netzwerkkonzepte)-Performance beeinträchtigt Speicherzugriff


[^1:] dezidierte Festplatten-Adressierung
[^2:] Protocol Data Units

## Quellen

> Billo, T. (2021). Was ist iSCSI? Storage-Insider. Retrieved from https://www.storage-insider.de/was-ist-iscsi-a-679345