---
title: "NFS"
description: "NFS ist ein Speicherprotokoll für effizienten Dateizugriff über Netzwerke, entwickelt von Sun Microsystems. Es ermöglicht transparenten Zugriff auf Remote-Dateien mit Caching und Dateisperren für Konsistenz."
---

NFS, das Network File System, stellt ein Speicherprotokoll dar, das den effizienten Zugriff auf Dateien über Netzwerke ermöglicht. Ursprünglich 1984 von Sun Microsystems für Unix-basierte Systeme entwickelt, findet es insbesondere bei Linux-Nutzern weite Verbreitung. Es bietet transparenten Zugriff auf entfernte Dateien, unterstützt Caching zur Leistungssteigerung und integriert Mechanismen zur Dateisperrung sowie zur Synchronisation von Dateiattributen, um Datenkonsistenz zu gewährleisten.

## Definition
NFS ist ein Speicherprotokoll, das einen effizienten Dateizugriff über ein Netzwerk ermöglicht. Es wurde 1984 von Sun Microsystems für Unix-basierte Systeme entwickelt und erfreut sich insbesondere bei Linux-Benutzern großer Beliebtheit.

## Funktionsweise
Die Funktionsweise von NFS basiert auf einer Client-Server-Architektur. Ein NFS-fähiger Client fordert eine Datei oder ein Verzeichnis vom NFS-Server an, indem er [Remote Procedure Calls](/open-fidup/lerninhalte/rpc) verwendet. Der NFS-Server führt daraufhin folgende Prüfungen durch:

- Überprüfung, ob die angeforderte Datei oder das Verzeichnis verfügbar ist.
- Überprüfung, ob der Client die erforderlichen Zugriffsberechtigungen hat.

Nach erfolgreicher Prüfung mountet der Server die Datei oder das Verzeichnis remote auf dem Client und ermöglicht den Zugriff über eine virtuelle Verbindung. Für den Client erscheint der Zugriff auf die Remote-Serverdatei ähnlich wie der Zugriff auf eine lokale Datei.

## Caching
NFS-Clients speichern Dateien im Cache, um die Zugriffsgeschwindigkeit zu verbessern.

## Dateisperren
NFS bietet Mechanismen zur Sperrung von Dateien, wenn mehrere Computer gleichzeitig versuchen, in dieselbe Datei zu schreiben. Dies verhindert Dateninkonsistenzen.

## Synchronisierte Dateiattributaktualisierungen
NFS stellt sicher, dass Änderungen an Dateiattributen, wie Zeitstempel oder Berechtigungen, synchronisiert werden. Dadurch bleibt die Konsistenz der Daten gewährleistet.

## Vorteile von NFS
- **Transparente Nutzung**: Benutzer können auf Remote-Dateien zugreifen, als wären sie lokal gespeichert.
- **Plattformunabhängigkeit**: NFS unterstützt verschiedene Betriebssysteme, was die Interoperabilität zwischen unterschiedlichen Systemen erleichtert.
- **Skalierbarkeit**: NFS lässt sich leicht in großen Netzwerken mit vielen Clients und Servern implementieren.

## Quellen
> NFS und [SMB](/open-fidup/lerninhalte/smb) – Unterschied zwischen Speicherprotokollen für den Dateizugriff – AWS. (2024, September 17). Retrieved from https://aws.amazon.com/de/compare/the-difference-between-nfs-smb