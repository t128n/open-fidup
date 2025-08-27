
---
title: "Speicherlösungen"
description: "Speicherlösungen umfassen DAS für direkten Anschluss, SAN für Netzwerk-Storage und NAS für Datei-Storage. Techniken sind File, Block und Object Storage mit unterschiedlichen Vor- und Nachteilen für verschiedene Anwendungen."
---

## Speichersysteme
![[Pasted image 20240917104333.png]]

### Direct Attached Storage (DAS)
- **kostengünstiger** Einstieg
- Speicher wird via **Punkt-zu-Punkt-Verbindung** Serial Attached SCSI direkt an Server angeschlossen
- **Stärken**
	- Niedriger Hardware-Aufwand
	- Niedrige Kosten
	- Kein zusätzlicher Protokollstack
	- Konzeptionell *sehr performant*
- **Schwächen**
	- Exklusiv an einem Host
	- Eingeschränkte Skalierbarkeit in Kapazität
	- Eingeschränkte Entfernung vom Host zum Storage (max. 10m)
- **Anwendungsgebiet**, bei hohen Anforderungen an Performance (Datenbankanwendungen, Caching)

### Storage Area Network (SAN)
- Anschluss meist über [[Fibre Channel|Fibre Channel]]
- Speicherserver haben eigene **Fibre-Channel-Infrastruktur**, analog zur Ethernet-Struktur aufgebaut
	- NIC -> Fibre-Channel-HBA (*Host-Bus-Adapter*)
	- Netzwerk Switch -> Fibre-Channel-Switch
- Server kann auf mehrere Storage-Systeme zugreifen 
- **Stärken**
	- Hohe Transferraten
	- Größere Distanzen möglich als DAS
	- Kosteneinsparungen durch Speicherkonsolidierung
	- Einfachere Administration durch Zentralisierung
- **Schwächen**
	- dedizierte Infrastrukturebene für Storage
	- Hochpreisige Hardware-Komponenten
	- Komplizierte Konfiguration
- **Anwendungsgebiete**, ähnlich wie beim DAS, Datenbank-Anwendungen, Caching, ...

### Network Attached Storage (NAS)
- Anschluss an bestehende IT-Infrastruktur via Ethernet-Switch
- **Stärken**
	- einfache Anbindung
	- Kompatibilität und Operabilität
	- Dank Networking-Filesystem einfacher konkurrierender Zugriff mehrer Clients
- **Schwächen**
	- TCP/IP-Protokoll nicht für Storage-Traffic optimiert
	- hohe Belastung des vorhandenen LANs
- **Anwendungsgebiete**, Produktiv-, Inhalts- und Archivdaten, Backups. Bei Flash-Basierten speicher auch für Datenbank-Anwendungen, Caching, ...


## Speichertechniken
![[Pasted image 20240917112006.png]]
### File Storage
![[Pasted image 20240917111323.png]]
- auch dateibasierter Speicher
- Informationen werden als **Dateien** gespeichert und in **Dateiordner** angelegt
- **Merkmale**
	1. hierarchische Verzeichnisstruktur, Ordner und Speicherortpfade
	2. Informationen/Daten werden als vollständige Dateien gespeichert
- **Protokolle**
	- Server Message Block (SMB) (Windows)
	- Network File System (NFS) (Linux)
- **Anwendungsgebiete**, PC, NAS und DAS
- **Vorteile**
	- Günstig
	- intuitive/leicht verständliche Handhabung
	- leicht (horizontal) skalierbar
- **Nachteile**
	- je mehr Daten(pfade)/Navigationskomplexität, desto langsamer der Zugriff
- **Verwendung**
	- NAS als Dateiserver in Unternehmen
	- File Storage Server in Unternehmen die auf dieselben Daten zugreifen
	- Archivierung
### Block Storage
![[Pasted image 20240917111611.png]]
- auch blockbasierter Speicher
- Informationen werden als **Blöcke** gespeichert, Speicherorte werden von Storage-Software bestimmt und verteilt, auch **über mehrere Umgebungen**
- **gleichmäßige Aufteilung** der Daten in Einheiten gleicher Blöcke
- Server setzt Dateien durch Block-Adressen zusammen
- **Anwendungsgebiete**, SAN
- **Vorteile**
	- Schnell
	- Niedrige Latenz
	- Redundanz
- **Nachteile**
	- SAN-Hardware ist Teuer
	- Keine Metadaten (jeder Block hat eigene Adresse)
- **Verwendung**
	- (Transaktionale) Datenbanken
	- Virtuelle Maschinen

### Object Storage
![[Pasted image 20240917111753.png]]
- auch objektbasierter Speicher
- **Objekte** beinhalten eindeutige ID, Daten, Metadaten und Attribute (Berechtigungen bezüglich Objekt RWX, ...)
- flache Hierarchie
- **Vorteile**
	- Hoch skalierbar
	- Flache Struktur
	- Viele Metadaten möglich, dadurch bessere Datenanalyse
- **Nachteile**
	- Langsame Umsetzung von Änderungen
- **Verwendung**
	- Clouds, Cloud-Storage

## Quellen

> Thomas-Krenn. A. G. (2022). Storage-Grundlagen: Ratgeber für IT-Interessierte zu DAS, NAS und SAN. TKmag. Retrieved from https://www.thomas-krenn.com/de/tkmag/expertentipps/storage-grundlagen-das-san-und-nas-im-ueberblick
> Was ist File Storage, Block Storage und Object Storage? (2024, September 17). Retrieved from https://serverhero.de/wissen/speicher-block-objekt-datei
> Technology, I. (2021, September 15). What is Object Storage? Youtube. Retrieved from https://www.youtube.com/watch?v=ZfTOQJlLsAs
