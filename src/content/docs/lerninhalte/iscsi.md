---
title: "iSCSI"
description: "iSCSI ermöglicht den Zugriff auf blockbasierte Speicherlösungen über TCP/IP, ohne teure Fibre Channel-Infrastruktur. Es verbindet SCSI mit IP und setzt auf Client-Server-Modell mit Initiator und Target Nodes."
---

iSCSI, kurz für Internet Small Computer System Interface, ist ein Protokoll, das den Zugriff auf zentral verfügbare Speicherressourcen ermöglicht. Es verbindet das SCSI-Protokoll mit IP und basiert auf dem [Client-Server-Modell](/open-fidup/lerninhalte/client-server). Dadurch erlaubt es den Zugriff auf [blockbasierte Speicherlösungen](/open-fidup/lerninhalte/speicherloesungen) über [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell), ohne eine teure [Fibre Channel](/open-fidup/lerninhalte/fibre-channel)-Infrastruktur zu benötigen.

## Definition und Grundlagen
iSCSI steht für Internet Small Computer System Interface. Es handelt sich um ein Protokoll, das den Zugriff auf zentral verfügbare Speicherressourcen ermöglicht. Das Protokoll verbindet SCSI mit IP und basiert auf dem [Client-Server-Modell](/open-fidup/lerninhalte/client-server). Es erlaubt den Zugriff auf [blockbasierte Speicherlösungen](/open-fidup/lerninhalte/speicherloesungen) über [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell), ohne eine teure [Fibre Channel](/open-fidup/lerninhalte/fibre-channel)-Infrastruktur zu benötigen.

## Akteure
Die Hauptakteure in einem iSCSI-System sind die iSCSI-Nodes, die in Initiator- und Target-Nodes unterteilt werden. Jede Node erhält einen weltweit eindeutigen Namen, den iSCSI Node Name, der meist als IQN (iSCSI Qualified Name) bezeichnet wird.

- **iSCSI-Initiator-Nodes**: Diese fungieren als Clients. Sie sind Treiber, die im Betriebssystem installiert sind und SCSI-Befehle in [TCP/IP-Paketen](/open-fidup/lerninhalte/tcp-ip-modell) verpacken und versenden.
- **iSCSI-Target-Nodes**: Diese fungieren als Server, die Speicherplatz bereitstellen. Sie entpacken die iSCSI-Befehle und wandeln sie in SCSI-Befehle um, was zu einer hohen Rechenlast führen kann. Jedes Target stellt eine oder mehrere Logical Units (LUs) bereit, die dezidierte Festplatten-Adressierungen darstellen.

## Funktionsweise
Die Funktionsweise von iSCSI folgt einem strukturierten Ablauf:

1. Der iSCSI-Initiator baut eine Session mit dem iSCSI-Target auf. Dies kann eine normale operative Session oder eine Discovery-Session sein.
2. Der iSCSI-Initiator verpackt Befehle in Protocol Data Units (PDUs) und sendet sie anschließend.
3. Das iSCSI-Target entpackt die Befehle und beantwortet die Anfrage.

## Vor- und Nachteile
iSCSI bietet mehrere Vorteile, bringt aber auch Nachteile mit sich.

- **Vorteile**:
  - Nutzung vorhandener Infrastruktur und Hardware.
  - Administratoren sind bereits mit [Ethernet](/open-fidup/lerninhalte/ethernet) und [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell) vertraut.
  - Flexibilität durch das [TCP/IP-Protokoll](/open-fidup/lerninhalte/tcp-ip-modell), das Routing über Netzwerksegmente ermöglicht.
  - Kostengünstiger Aufbau, einfache Wartung, hohe Flexibilität und Skalierbarkeit.

- **Nachteile**:
  - Höhere Latenzzeit im Vergleich zu [Fibre Channel](/open-fidup/lerninhalte/fibre-channel).
  - Performance-Einbußen durch den Overhead von [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell).
  - Die [LAN](/open-fidup/lerninhalte/netzwerkkonzepte)-Performance beeinträchtigt den Speicherzugriff.

## Quellen
Billo, T. (2021). Was ist iSCSI? Storage-Insider. Abgerufen von https://www.storage-insider.de/was-ist-iscsi-a-679345