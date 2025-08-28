---
title: "Speicherlösungen"
description: "Speicherlösungen umfassen DAS für direkten Anschluss, SAN für Netzwerk-Storage und NAS für Datei-Storage. Techniken sind File, Block und Object Storage mit unterschiedlichen Vor- und Nachteilen für verschiedene Anwendungen."
---

Speicherlösungen bilden die Grundlage für die Datenspeicherung in IT-Infrastrukturen und umfassen verschiedene Systeme sowie Techniken. Sie reichen von direkt angeschlossenen Speichern über netzwerkbasierte Lösungen bis hin zu unterschiedlichen Speicherformaten wie Dateien, Blöcken oder Objekten. Diese Ansätze bieten je nach Anforderung an Leistung, Skalierbarkeit und Kosten verschiedene Vor- und Nachteile und finden in Bereichen wie Datenbanken, Archivierung oder Cloud-Umgebungen Anwendung.

## Speichersysteme

| Typ | Anschluss | Stärken | Schwächen | Anwendungsgebiete |
|-----|-----------|---------|-----------|-------------------|
| Direct Attached Storage (DAS) | Punkt-zu-Punkt-Verbindung via Serial Attached SCSI | Niedriger Hardware-Aufwand, niedrige Kosten, kein zusätzlicher Protokollstack, konzeptionell sehr performant | Exklusiv an einem Host, eingeschränkte Skalierbarkeit in Kapazität, eingeschränkte Entfernung vom Host zum Storage (max. 10 m) | Hohe Anforderungen an Performance, z. B. Datenbankanwendungen, Caching |
| Storage Area Network (SAN) | Meist über [Fibre Channel](/open-fidup/lerninhalte/fibre-channel) | Hohe Transferraten, größere Distanzen möglich als DAS, Kosteneinsparungen durch Speicherkonsolidierung, einfachere Administration durch Zentralisierung | Dedizierte Infrastrukturebene für Storage, hochpreisige Hardware-Komponenten, komplizierte Konfiguration | Ähnlich wie DAS, z. B. Datenbankanwendungen, Caching |
| Network Attached Storage (NAS) | An bestehende IT-Infrastruktur via Ethernet-Switch | Einfache Anbindung, Kompatibilität und Operabilität, dank Networking-Filesystem einfacher konkurrierender Zugriff mehrerer Clients | TCP/IP-Protokoll nicht für Storage-Traffic optimiert, hohe Belastung des vorhandenen LANs | Produktiv-, Inhalts- und Archivdaten, Backups; bei Flash-basierten Speichern auch für Datenbankanwendungen, Caching |

### Direct Attached Storage (DAS)

Direct Attached Storage (DAS) stellt eine kostengünstige Einstiegsoption dar. Der Speicher wird via Punkt-zu-Punkt-Verbindung Serial Attached SCSI direkt an einen Server angeschlossen. Dies ermöglicht einen niedrigen Hardware-Aufwand und niedrige Kosten ohne zusätzlichen Protokollstack. Die Lösung gilt als konzeptionell sehr performant. Allerdings ist der Speicher exklusiv an einen Host gebunden, was die Skalierbarkeit in Kapazität einschränkt. Zudem ist die Entfernung vom Host zum Storage auf maximal 10 Meter begrenzt. DAS eignet sich für Anwendungen mit hohen Performance-Anforderungen, wie Datenbankanwendungen oder Caching.

### Storage Area Network (SAN)

Storage Area Network (SAN) nutzt meist [Fibre Channel](/open-fidup/lerninhalte/fibre-channel) als Anschluss. Speicherserver verfügen über eine eigene Fibre-Channel-Infrastruktur, die analog zur Ethernet-Struktur aufgebaut ist. Dabei entspricht die Netzwerkkarte (NIC) dem Fibre-Channel-HBA (Host-Bus-Adapter) und der Netzwerk-Switch dem Fibre-Channel-Switch. Ein Server kann auf mehrere Storage-Systeme zugreifen. SAN bietet hohe Transferraten und ermöglicht größere Distanzen als DAS. Es erlaubt Kosteneinsparungen durch Speicherkonsolidierung sowie eine einfachere Administration durch Zentralisierung. Nachteile sind die dedizierte Infrastrukturebene für Storage, hochpreisige Hardware-Komponenten und eine komplizierte Konfiguration. Anwendungsgebiete umfassen ähnliche Bereiche wie DAS, etwa Datenbankanwendungen und Caching.

### Network Attached Storage (NAS)

Network Attached Storage (NAS) bindet sich an die bestehende IT-Infrastruktur via Ethernet-Switch an. Es zeichnet sich durch eine einfache Anbindung, Kompatibilität und Operabilität aus. Dank des Networking-Filesystems ermöglicht es einen einfachen konkurrierenden Zugriff mehrerer Clients. Schwächen liegen im TCP/IP-Protokoll, das nicht für Storage-Traffic optimiert ist, sowie in der hohen Belastung des vorhandenen LANs. NAS findet Verwendung bei Produktiv-, Inhalts- und Archivdaten sowie Backups. Bei Flash-basierten Speichern eignet es sich auch für Datenbankanwendungen und Caching.

## Speichertechniken

| Typ | Beschreibung | Protokolle | Anwendungsgebiete | Vorteile | Nachteile | Verwendung |
|-----|--------------|------------|-------------------|----------|-----------|------------|
| File Storage | Informationen als Dateien in Dateiordnern gespeichert; hierarchische Verzeichnisstruktur mit Ordnern und Speicherortpfaden; Daten als vollständige Dateien | Server Message Block (SMB) für Windows, Network File System (NFS) für Linux | PC, NAS und DAS | Günstig, intuitive Handhabung, leicht skalierbar | Je mehr Datenpfade/Navigationskomplexität, desto langsamer der Zugriff | NAS als Dateiserver in Unternehmen, File Storage Server für gemeinsamen Datenzugriff, Archivierung |
| Block Storage | Informationen als Blöcke gespeichert; Speicherorte von Storage-Software bestimmt und über mehrere Umgebungen verteilt; gleichmäßige Aufteilung in Einheiten gleicher Blöcke; Server setzt Dateien durch Block-Adressen zusammen | - | SAN | Schnell, niedrige Latenz, Redundanz | SAN-Hardware teuer, keine Metadaten (jeder Block hat eigene Adresse) | Transaktionale Datenbanken, virtuelle Maschinen |
| Object Storage | Objekte mit eindeutiger ID, Daten, Metadaten und Attributen (z. B. Berechtigungen); flache Hierarchie | - | Clouds, Cloud-Storage | Hoch skalierbar, flache Struktur, viele Metadaten möglich, dadurch bessere Datenanalyse | Langsame Umsetzung von Änderungen | Clouds, Cloud-Storage |

### File Storage

File Storage, auch dateibasierter Speicher genannt, speichert Informationen als Dateien in Dateiordnern. Es weist eine hierarchische Verzeichnisstruktur mit Ordnern und Speicherortpfaden auf. Daten werden als vollständige Dateien abgelegt. Zu den Protokollen zählen Server Message Block ([SMB](/open-fidup/lerninhalte/smb)) für Windows und Network File System ([NFS](/open-fidup/lerninhalte/nfs)) für Linux. Anwendungsgebiete sind PC, NAS und DAS. Vorteile liegen in den niedrigen Kosten, der intuitiven Handhabung und der leichten Skalierbarkeit. Nachteile treten bei zunehmender Datenpfad- und Navigationskomplexität auf, da der Zugriff langsamer wird. Verwendung findet es als NAS-Dateiserver in Unternehmen, als File Storage Server für gemeinsamen Datenzugriff sowie zur Archivierung.

### Block Storage

Block Storage, auch blockbasierter Speicher genannt, speichert Informationen als Blöcke. Speicherorte werden von der Storage-Software bestimmt und über mehrere Umgebungen verteilt. Die Daten werden gleichmäßig in Einheiten gleicher Blöcke aufgeteilt. Der Server setzt Dateien durch Block-Adressen zusammen. Anwendungsgebiete sind SAN. Vorteile sind die hohe Geschwindigkeit, niedrige Latenz und Redundanz. Nachteile bestehen in der teuren SAN-Hardware und dem Fehlen von Metadaten, da jeder Block eine eigene Adresse hat. Verwendung findet es bei transaktionalen Datenbanken und virtuellen Maschinen.

### Object Storage

Object Storage, auch objektbasierter Speicher genannt, verwendet Objekte, die eine eindeutige ID, Daten, Metadaten und Attribute wie Berechtigungen enthalten. Es folgt einer flachen Hierarchie. Vorteile sind die hohe Skalierbarkeit, die flache Struktur und die Möglichkeit vieler Metadaten, was eine bessere Datenanalyse ermöglicht. Nachteile liegen in der langsamen Umsetzung von Änderungen. Verwendung findet es in Clouds und Cloud-Storage.

## Quellen

> Thomas-Krenn. A. G. (2022). Storage-Grundlagen: Ratgeber für IT-Interessierte zu DAS, NAS und SAN. TKmag. Retrieved from https://www.thomas-krenn.com/de/tkmag/expertentipps/storage-grundlagen-das-san-und-nas-im-ueberblick
> Was ist File Storage, Block Storage und Object Storage? (2024, September 17). Retrieved from https://serverhero.de/wissen/speicher-block-objekt-datei
> Technology, I. (2021, September 15). What is Object Storage? Youtube. Retrieved from https://www.youtube.com/watch?v=ZfTOQJlLsAs