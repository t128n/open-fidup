---
title: "SMB"
description: "SMB ist ein Protokoll für Datei- und Druckerfreigabe in Netzwerken, hauptsächlich für Windows. Es ermöglicht sicheren Zugriff auf Ressourcen über Client-Server-Architektur mit Authentifizierung und Dateisperren."
---

SMB, kurz für Server Message Block, ist ein Standardprotokoll für die gemeinsame Nutzung von Dateien und Druckern in Netzwerken. Es wird vor allem in Windows-Umgebungen eingesetzt und ermöglicht Anwendungen den Zugriff auf entfernte Ressourcen, als wären diese lokal gespeichert. Das Protokoll basiert auf einer Client-Server-Architektur und unterstützt Authentifizierung, Autorisierung sowie Dateisperren zur Koordination gleichzeitiger Zugriffe.

## Definition
SMB steht für Server Message Block und ist ein Standardprotokoll für die gemeinsame Nutzung von Dateien und Druckern. Es wird hauptsächlich in Windows-Betriebssystemen verwendet und ermöglicht den Zugriff auf Dateien und Drucker über ein Netzwerk.

## Funktionsweise
SMB arbeitet in einer Client-Server-Architektur, bei der Clients Anfragen an den Server senden, um auf Dateien, Drucker und andere Ressourcen zuzugreifen.

### Kommunikation
SMB verwendet ein Anfrage-Antwort-Modell. Der Client sendet eine Anfrage an den Server, der diese verarbeitet und eine Antwort zurückgibt.

### Netzwerkprotokolle
SMB kann über verschiedene Netzwerkprotokolle betrieben werden, darunter [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell), NetBEUI und IPX/SPX. [TCP/IP](/open-fidup/lerninhalte/tcp-ip-modell) ist dabei die häufigste Wahl.

## Funktionen
SMB bietet mehrere Kernfunktionen für die Netzwerkressourcenverwaltung.

- **Dateizugriff**: Ermöglicht den Zugriff auf Dateien und Verzeichnisse auf einem entfernten Server, als wären sie lokal gespeichert.
- **Druckdienste**: Unterstützt den Zugriff auf Netzwerkdrucker und ermöglicht das Drucken von Dokumenten über das Netzwerk.
- **Authentifizierung**: Bietet Mechanismen zur Authentifizierung und Autorisierung von Benutzern, um den Zugriff auf Ressourcen zu steuern.
- **Dateisperren**: Ermöglicht das Sperren von Dateien, um gleichzeitige Schreibzugriffe zu koordinieren und Dateninkonsistenzen zu vermeiden.

## Vorteile
SMB zeichnet sich durch mehrere Vorteile aus, die seine Verwendung in verschiedenen Umgebungen erleichtern.

- **Einfache Integration**: Nahtlose Integration in Windows-Umgebungen sowie Unterstützung für andere Betriebssysteme wie Linux und macOS.
- **Benutzerfreundlichkeit**: Einfache Nutzung für Endbenutzer durch grafische Benutzeroberflächen zur Navigation und zum Zugriff auf Netzwerkressourcen.
- **Flexibilität**: Unterstützt verschiedene Arten von Netzwerkressourcen, einschließlich Dateien, Drucker und anderer Dienste.

## Quellen
> Seite „Server Message Block“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 8. Januar 2024, 20:36 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Server_Message_Block&oldid=240987303](https://de.wikipedia.org/w/index.php?title=Server_Message_Block&oldid=240987303) (Abgerufen: 18. September 2024, 11:38 UTC)