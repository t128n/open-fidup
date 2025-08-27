---
title: "SNMP: Simple Network Management Protocol"
description: "SNMP überwacht und steuert Netzwerkgeräte via Manager-Agent-Modell. MIB-Datenbank, Nachrichten wie GET/SET/TRAP. Versionen v1-v3 mit Sicherheitsverbesserungen."
---

- Simple Network Management Protocol
- Protokoll zur **Überwachung** und **Steuerung** von Netzwerkgeräten (z.B. Router, Switches, Server, Drucker, etc.) indem Daten von diesen Geräten abgefragt und konfiguriert werden können.
- SNMP arbeitet auf der **Anwendungsschicht** (Layer 7).

## Protokollarchitektur
- **Manager**: Zentrale Instanz, die Informationen von Netzwerkgeräten sammelt.
- **Agent**: Software, die auf den Netzwerkgeräten installiert ist, um auf Anfragen des Managers zu reagieren.
- **MIB (Management Information Base)**: Eine Datenbank, die Informationen über die Netzwerkgeräte in einer strukturierten Form speichert.
  
## Hauptaufgaben
  - **Überwachen**: Erfassung von Netzwerkdaten, z.B. Bandbreitennutzung, Verfügbarkeit, CPU-Auslastung.
  - **Steuern**: Änderungen an den Geräteeinstellungen vornehmen, z.B. Neustart eines Geräts oder Ändern von IP-Adressen.
  - **Alarmierung**: SNMP kann Alarme auslösen, wenn ein Fehler oder eine Auffälligkeit auftritt (z.B. zu hohe CPU-Auslastung).

## Nachrichtenarten
  - **GET**: Anforderung bestimmter Informationen von einem Agenten.
  - **SET**: Ändert den Wert einer Variablen auf einem Agenten.
  - **TRAP**: Unaufgeforderte Nachricht von einem Agenten an den Manager, z.B. wenn ein Problem erkannt wird.
  - **GETNEXT**: Ruft die nächste Variable in der MIB ab.
  - **GETBULK**: Fordert mehrere Daten auf einmal an.

## Versionen
  - **SNMPv1**: Die erste Version, relativ einfach, aber sicherheitsanfällig.
  - **SNMPv2c**: Verbesserungen in der Leistung, aber noch immer mit Sicherheitslücken.
  - **SNMPv3**: Fügt **Sicherheitsmechanismen** wie Authentifizierung und Verschlüsselung hinzu.

## Vorteile
  - **Zentrale Verwaltung** von Netzwerken
  - **Skalierbarkeit** für große Netzwerke
  - **Automatisierte Benachrichtigungen** bei Problemen (z.B. Traps)

## Nachteile
  - Ältere Versionen (v1 und v2c) haben **Sicherheitsprobleme** (fehlende Verschlüsselung, einfache Authentifizierung).
  - Kann bei vielen Geräten oder großen Datenmengen zu **Netzwerkbelastungen** führen.

## Anwendungsbeispiele
  - Überwachung von **Servern** und **Routern** in einem Unternehmensnetzwerk.
  - Automatisierte **Alarmierungen** bei Netzwerkausfällen oder Ressourcenüberlastung.
  
## Einsatzbereiche
  - In IT-Infrastrukturen von kleinen bis großen Unternehmen zur **Netzwerkverwaltung** und Fehlerdiagnose.
## Quellen

> Thomas-Krenn. A. G. (2024, September 20). SNMP Grundlagen – Thomas-Krenn-Wiki. Retrieved from [https://www.thomas-krenn.com/de/wiki/SNMP_Grundlagen](https://www.thomas-krenn.com/de/wiki/SNMP_Grundlagen)
