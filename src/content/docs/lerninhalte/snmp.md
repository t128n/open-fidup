---
title: "SNMP"
description: "SNMP überwacht und steuert Netzwerkgeräte über das Manager-Agent-Modell. Es nutzt eine MIB-Datenbank und Nachrichten wie GET, SET und TRAP. Versionen von v1 bis v3 bieten zunehmende Sicherheitsverbesserungen."
---

Das Simple Network Management Protocol (SNMP) ist ein Protokoll zur Überwachung und Steuerung von Netzwerkgeräten wie Routern, Switches, Servern und Druckern. Es ermöglicht das Abfragen und Konfigurieren von Daten auf diesen Geräten. SNMP operiert auf der Anwendungsschicht des [OSI-Modells](/open-fidup/lerninhalte/osi-modell).

## Protokollarchitektur
SNMP basiert auf einem Manager-Agent-Modell. Der Manager sammelt zentral Informationen von Netzwerkgeräten. Der Agent, eine Software auf den Geräten, reagiert auf Anfragen des Managers. Die Management Information Base (MIB) dient als strukturierte Datenbank für diese Informationen.

## Hauptaufgaben
SNMP erfüllt mehrere Kernfunktionen:

- **Überwachen**: Es erfasst Netzwerkdaten, etwa Bandbreitennutzung, Verfügbarkeit und CPU-Auslastung.
- **Steuern**: Es ermöglicht Änderungen an Geräteeinstellungen, beispielsweise den Neustart eines Geräts oder die Anpassung von IP-Adressen.
- **Alarmierung**: Bei Fehlern oder Auffälligkeiten, wie hoher CPU-Auslastung, löst SNMP Alarme aus.

## Nachrichtenarten
SNMP verwendet verschiedene Nachrichtentypen für die Kommunikation:

- **GET**: Fordert spezifische Informationen von einem Agenten an.
- **SET**: Ändert den Wert einer Variablen auf einem Agenten.
- **TRAP**: Sendet unaufgeforderte Nachrichten vom Agenten an den Manager, etwa bei erkannten Problemen.
- **GETNEXT**: Ruft die nächste Variable in der MIB ab.
- **GETBULK**: Fordert mehrere Daten gleichzeitig an.

## Versionen
SNMP existiert in mehreren Versionen mit unterschiedlichen Merkmalen:

- **SNMPv1**: Die ursprüngliche Version, einfach gestaltet, aber anfällig für Sicherheitsprobleme.
- **SNMPv2c**: Bietet Leistungsverbesserungen, weist jedoch weiterhin Sicherheitslücken auf.
- **SNMPv3**: Integriert Sicherheitsmechanismen wie Authentifizierung und Verschlüsselung.

## Vorteile
SNMP bietet mehrere Stärken:

- Zentrale Verwaltung von Netzwerken.
- Skalierbarkeit für große Netzwerke.
- Automatisierte Benachrichtigungen bei Problemen durch Traps.

## Nachteile
Trotz seiner Nutzen hat SNMP Einschränkungen:

- Ältere Versionen wie v1 und v2c leiden unter Sicherheitsproblemen, etwa fehlender Verschlüsselung und einfacher Authentifizierung.
- Bei vielen Geräten oder großen Datenmengen kann es zu Netzwerkbelastungen kommen.

## Anwendungsbeispiele
SNMP findet Anwendung in verschiedenen Szenarien:

- Überwachung von Servern und Routern in Unternehmensnetzwerken.
- Automatisierte Alarmierungen bei Netzwerkausfällen oder Ressourcenüberlastung.

## Einsatzbereiche
SNMP wird in IT-Infrastrukturen von kleinen bis großen Unternehmen eingesetzt, um Netzwerkverwaltung und Fehlerdiagnose zu unterstützen.

## Quellen
Thomas-Krenn. A. G. (2024, September 20). SNMP Grundlagen – Thomas-Krenn-Wiki. Abgerufen von [https://www.thomas-krenn.com/de/wiki/SNMP_Grundlagen](https://www.thomas-krenn.com/de/wiki/SNMP_Grundlagen)