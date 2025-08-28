---
title: "IoT"
description: "Das Internet of Things (IoT) verbindet physische Objekte mit Sensoren und Software, um Daten zu sammeln und zu kommunizieren. Es findet Anwendung in Smart Homes, Industrie und Gesundheitswesen, bringt aber Herausforderungen wie Sicherheit und Datenschutz mit sich."
---

- Netzwerk von **physischen Objekten**, die mit **Sensoren**, **Software** und anderen Technologien ausgestattet sind, um **Daten zu sammeln** und mit anderen **Geräten und Systemen** über das Internet zu **kommunizieren**.

## Architektur von IoT-Systemen  
- **Geräte:** Physische Geräte wie Sensoren, Aktoren, Maschinen, die Daten erfassen oder Aktionen ausführen.
- **Netzwerk:** Kommunikationsinfrastruktur, die den Datenaustausch zwischen Geräten und Servern ermöglicht (z.B. WLAN, 4G/5G, Bluetooth).
- **Cloud:** Speichert und verarbeitet die Daten, führt Analysen durch und bietet Schnittstellen für Benutzer.
- **Benutzer:** Verwenden Anwendungen, um die gesammelten Daten zu visualisieren, zu analysieren und Steuerungen durchzuführen.

## Komponenten eines IoT-Systems  
- **Sensoren:** Erfassen physische Umgebungsparameter (z.B. Temperatur, Bewegung, Licht).
- **Aktoren:** Führen Aktionen basierend auf den erhaltenen Daten durch (z.B. Motorsteuerung, Heizung regeln).
- **Gateways:** Dienen als Vermittler zwischen IoT-Geräten und der Cloud, aggregieren Daten und leiten sie weiter.
- **Protokolle:** Ermöglichen die Kommunikation zwischen Geräten (z.B. MQTT, HTTP, CoAP).
  
## Anwendungsbereiche von IoT  
- **Smart Home:** Vernetzte Geräte wie Thermostate, Beleuchtung, Sicherheitskameras, die automatisch gesteuert werden können.
- **Industrie 4.0:** Vernetzung von Maschinen und Produktionsprozessen, um die Effizienz zu steigern (z.B. Predictive Maintenance).
- **Smart Cities:** Einsatz von Sensoren und vernetzten Geräten, um Verkehrssteuerung, Müllentsorgung und Energieversorgung effizienter zu gestalten.
- **Gesundheitswesen:** Vernetzte Geräte zur Überwachung von Patienten, z.B. Wearables zur Messung von Vitaldaten.
- **Landwirtschaft:** Sensoren zur Überwachung von Bodenqualität, Wetterbedingungen und automatisierten Bewässerungssystemen.

## IoT-Protokolle  
- **MQTT (Message Queuing Telemetry Transport):** Leichtgewichtiges Protokoll, ideal für Geräte mit begrenzten Ressourcen und Netzwerken mit hoher Latenz.
- **CoAP (Constrained Application Protocol):** Ähnlich wie HTTP, aber für Geräte mit begrenzten Ressourcen optimiert.
- **HTTP/HTTPS:** Standardprotokoll für Webanwendungen, auch für IoT-Geräte verwendet, wenn keine Echtzeitkommunikation erforderlich ist.

## Herausforderungen und Risiken von IoT  
- **Sicherheit:** IoT-Geräte sind oft anfällig für Cyberangriffe, insbesondere durch mangelnde Verschlüsselung oder unsichere Standardpasswörter.
- **Skalierbarkeit:** Das exponentielle Wachstum von IoT-Geräten erfordert leistungsfähige Infrastrukturen, um Daten effizient zu verarbeiten und zu speichern.
- **Interoperabilität:** Unterschiedliche Hersteller und Systeme verwenden oft inkompatible Protokolle und Standards, was die Integration erschwert.
- **Datenschutz:** Der Umgang mit großen Mengen an personenbezogenen Daten erfordert strenge Datenschutzvorkehrungen (z.B. Einhaltung der DSGVO).

## Schritte zur Entwicklung eines IoT-Systems  
1. **Anforderungsanalyse:** Identifizierung der zu erfassenden Daten und Aktionen.
2. **Geräteauswahl:** Auswahl passender Sensoren, Aktoren und Kommunikationsprotokolle.
3. **Netzwerkinfrastruktur:** Planung der Kommunikationsarchitektur (z.B. WLAN, 5G).
4. **Datenverarbeitung:** Entscheidung über lokale (Edge Computing) oder Cloud-basierte Verarbeitung.
5. **Sicherheitskonzepte:** Implementierung von Verschlüsselung, Authentifizierung und Zugriffskontrollen.
6. **Benutzeroberfläche:** Entwicklung von Anwendungen zur Visualisierung und Steuerung der IoT-Geräte.

## Edge Computing vs. Cloud Computing in IoT  
- **[Edge Computing](/open-fidup/lerninhalte/fog-computing):** Daten werden nahe der Quelle (d.h. am Gerät oder Gateway) verarbeitet, um Latenzzeiten zu reduzieren und Bandbreite zu sparen.
- **[Cloud Computing](/open-fidup/lerninhalte/cloud-computing):** Daten werden an zentrale Server gesendet, um dort verarbeitet, analysiert und gespeichert zu werden. Vorteilhaft bei großen Datenmengen oder rechenintensiven Aufgaben.

## Relevante Begriffe  
- **Smart Devices:** Intelligente Geräte, die über Sensoren verfügen und mit dem Internet verbunden sind.
- **Wearables:** Tragbare IoT-Geräte, die oft zur Gesundheitsüberwachung eingesetzt werden (z.B. Fitness-Tracker).
- **Digital Twin:** Virtuelles Modell eines physischen Objekts, das dessen Zustand in Echtzeit überwacht.
- **IoT-Plattformen:** Softwarelösungen zur Verwaltung und Analyse von IoT-Daten (z.B. AWS IoT, Microsoft Azure IoT Hub).

## Quellen

> ChatGPT. (2024, September 20). Retrieved from https://chatgpt.com/c/66ed3ccd-34d4-800b-a198-dee9a0d61710