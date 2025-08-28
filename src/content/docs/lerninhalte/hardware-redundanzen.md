---
title: "Hardware-Redundanzen"
description: "Hardware-Redundanzen wie Failover, RAID und Cluster erhöhen die Ausfallsicherheit von IT-Systemen. Sie gewährleisten kontinuierlichen Betrieb bei Ausfällen und minimieren Downtime durch Mechanismen wie N+1 oder Multipathing."
---

Hardware-Redundanzen bezeichnen den Einsatz mehrerer Systeme oder Komponenten, um die Ausfallsicherheit und Verfügbarkeit von IT-Systemen zu erhöhen. Das Ziel besteht darin, den kontinuierlichen Betrieb bei einem Hardware-Ausfall zu gewährleisten.

## Arten von Redundanzen

### Failover
Failover ist ein Mechanismus, bei dem bei einem Ausfall eines Systems oder einer Komponente automatisch auf ein redundantes Backup-System umgeschaltet wird.

- **Cold Failover**: Das Backup-System wird erst nach einem Ausfall hochgefahren.
- **Warm Failover**: Das Backup-System läuft bereits, muss aber noch initialisiert werden.
- **Hot Failover**: Das Backup-System läuft in Echtzeit und übernimmt sofort den Betrieb, ohne merkbare Verzögerung.

### Switchover
Switchover bezeichnet einen geplanten Wechsel von einem aktiven System zu einem redundanten System, ohne dass ein Fehler vorliegt. Es wird manuell initiiert und dient oft dazu, Wartungsarbeiten durchzuführen oder Lasten besser zu verteilen. Im Unterschied zu Failover erfolgt Switchover automatisch und ungeplant bei einem Fehler, während Switchover manuell und geplant durchgeführt wird. Ein Beispiel ist der Wechsel zu einem Backup-System vor einer geplanten Wartung, um den primären Server ohne Unterbrechung des Dienstes warten zu können.

### N+1 Redundanz
Bei N+1 Redundanz steht eine zusätzliche Komponente für eine Anzahl N aktiver Komponenten bereit. Beispiel: Drei Server sind aktiv, und ein Server ist als Backup konfiguriert.

### N+2 und N+M Redundanz
N+2 und N+M Redundanz sind erweiterte Konzepte von N+1, bei denen mehr als eine redundante Komponente vorhanden ist.

### RAID
[RAID](/open-fidup/lerninhalte/raid) bezeichnet redundante Speichersysteme, die Daten über mehrere Festplatten verteilen und so Ausfälle einzelner Komponenten kompensieren.

### Cluster-Redundanz
Cluster-Redundanz nutzt mehrere verbundene Systeme, um Ausfälle zu bewältigen.

- **Active-Passive Cluster**: Ein System ist aktiv, das andere im Standby, ähnlich wie bei Failover.
- **Active-Active Cluster**: Mehrere Systeme sind gleichzeitig aktiv und teilen die Last. Fällt eines aus, übernehmen die verbleibenden Systeme.

## Netzwerk-Redundanzen

### Link Aggregation (LACP)
Link Aggregation, auch bekannt als LACP, fasst mehrere Netzwerkverbindungen zu einer einzigen logischen Verbindung zusammen. Falls ein Kabel oder ein Port ausfällt, bleibt die Verbindung über die anderen aktiv. Dies erhöht sowohl die Bandbreite als auch die Ausfallsicherheit.

### Spanning Tree Protocol (STP)
Das Spanning Tree Protocol ist ein Netzwerkprotokoll, das Schleifen in redundanten Netzwerken verhindert, indem es automatisch Redundanzpfade deaktiviert und bei Ausfall eines Pfades wieder aktiviert. Es verhindert Netzwerkloops und sorgt für Ausfallsicherheit durch automatische Neuberechnung von Pfaden.

### Hot Standby Router Protocol (HSRP) und Virtual Router Redundancy Protocol (VRRP)
HSRP und VRRP sind Protokolle, die Redundanz zwischen mehreren Routern herstellen. Fällt der aktive Router aus, übernimmt ein Backup-Router automatisch die Weiterleitung des Netzverkehrs. Dies stellt sicher, dass der Netzwerkzugriff immer über einen funktionsfähigen Router gewährleistet ist.

### Multipathing
Multipathing nutzt mehrere Pfade zwischen einem Endgerät und einem Netzwerk oder einer Speicherressource. Wenn ein Pfad ausfällt, übernimmt ein anderer Pfad den Verkehr. Dies wird beispielsweise in Storage Area Networks verwendet, um den Zugriff auf Speichergeräte zu sichern.

### Dual-Homed
Bei Dual-Homed ist ein Gerät über zwei unabhängige Netzwerke verbunden, sodass bei einem Netzwerkausfall die Verbindung über das zweite Netzwerk bestehen bleibt. Dies bietet vollständige Redundanz auf Netzwerkebene für kritische Systeme.

## Vorteile von Hardware- und Netzwerk-Redundanzen
Hardware- und Netzwerk-Redundanzen bieten mehrere Vorteile:

- **Erhöhte Verfügbarkeit**: Systeme bleiben bei Hardware- oder Netzwerkausfällen weiterhin verfügbar.
- **Ausfallsicherheit**: Sie minimieren Single Points of Failure.
- **Minimierung von Downtime**: Redundanzsysteme und -netzwerke sorgen für weniger Ausfallzeiten und einen kontinuierlichen Betrieb.
- **Datenintegrität**: Bei RAID- und Multipathing-Systemen wird die Datenintegrität trotz Ausfällen gewahrt.

## Best Practices für Redundanzen
Für eine effektive Implementierung von Redundanzen sind folgende Best Practices zu beachten:

- **Regelmäßige Tests**: Redundanzsysteme und -netzwerke sollten regelmäßig getestet werden, um ihre Funktionsfähigkeit sicherzustellen.
- **Monitoring**: Monitoring-Systeme sollten implementiert werden, um Fehler frühzeitig zu erkennen.
- **Geografische Redundanz**: Für höchste Ausfallsicherheit sollten Backup-Systeme und Netzwerke an verschiedenen Standorten betrieben werden, um Disaster Recovery zu ermöglichen.

## Quellen
ChatGPT. (2024, September 20). Abgerufen von https://chatgpt.com/c/66ed1d06-5424-800b-bc26-8455a49771b1