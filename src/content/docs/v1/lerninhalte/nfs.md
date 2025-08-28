---
title: "NFS"
description: "NFS ist ein Speicherprotokoll für effizienten Dateizugriff über Netzwerke, entwickelt von Sun Microsystems. Es ermöglicht transparenten Zugriff auf Remote-Dateien mit Caching und Dateisperren für Konsistenz."
---

- **Definition**: NFS ist ein **Speicherprotokoll**, das einen effizienten Dateizugriff über ein Netzwerk ermöglicht. Es wurde 1984 von Sun Microsystems für Unix-basierte Systeme entwickelt und ist besonders bei Linux-Benutzern beliebt.

- **Funktionsweise**:
  - **Client**: Ein NFS-fähiger Client fordert eine Datei oder ein Verzeichnis vom NFS-Server an, indem er *Remote Procedure Calls (RPC)* verwendet.
  - **Server**: Der NFS-Server führt folgende Prüfungen durch:
    - Überprüfung, ob die angeforderte Datei oder das Verzeichnis **verfügbar** ist.
    - Überprüfung, ob der Client die erforderlichen **Zugriffsberechtigungen** hat.
  - **Mounting**: Nach erfolgreicher Prüfung **mountet der Server die Datei** oder das Verzeichnis **remote auf dem Client** und ermöglicht den **Zugriff über eine virtuelle Verbindung**. Für den Client sieht der Zugriff auf die Remote-Serverdatei ähnlich aus wie der Zugriff auf eine lokale Datei.

- **Caching**: NFS-Clients speichern **Dateien im Cache**, um die Zugriffsgeschwindigkeit zu verbessern.

- **Dateisperren**: NFS bietet Mechanismen zur **Sperrung von Dateien**, wenn **mehrere Computer gleichzeitig** versuchen, in dieselbe Datei zu schreiben, um Dateninkonsistenzen zu vermeiden.

- **Synchronisierte Dateiattributaktualisierungen**: NFS stellt sicher, dass **Änderungen an Dateiattributen** (z.B. Zeitstempel, Berechtigungen) **synchronisiert** werden, um die Konsistenz der Daten zu gewährleisten.

## Vorteile von NFS
- **Transparente Nutzung**: Benutzer können auf **Remote-Dateien zugreifen**, als wären sie lokal gespeichert.
- **Plattformunabhängigkeit**: NFS unterstützt **verschiedene Betriebssysteme**, was die **Interoperabilität zwischen unterschiedlichen Systemen** erleichtert.
- **Skalierbarkeit**: NFS kann **leicht in großen Netzwerken mit vielen Clients und Servern implementiert** werden.

## Quellen 
> NFS und SMB – Unterschied zwischen Speicherprotokollen für den Dateizugriff – AWS. (2024, September 17). Retrieved from https://aws.amazon.com/de/compare/the-difference-between-nfs-smb
