---
title: "Hardware-Redundanzen"
description: "Hardware-Redundanzen wie Failover, RAID und Cluster erhöhen die Ausfallsicherheit von IT-Systemen. Sie gewährleisten kontinuierlichen Betrieb bei Ausfällen und minimieren Downtime durch Mechanismen wie N+1 oder Multipathing."
---

- **Systeme oder Komponenten** **mehrfach** vorhanden sind, um die **Ausfallsicherheit** und **Verfügbarkeit** von IT-Systemen zu erhöhen. Ziel ist es, den **kontinuierlichen Betrieb** bei einem Hardware-Ausfall zu gewährleisten.

## Arten von Redundanzen

### Failover
- **Definition**: Failover ist ein Mechanismus, bei dem bei einem Ausfall eines Systems oder einer Komponente automatisch auf ein redundantes (Backup-)System umgeschaltet wird.
- **Typen von Failover**:
  - **Cold Failover**: Backup-System wird erst nach einem Ausfall hochgefahren.
  - **Warm Failover**: Backup-System läuft bereits, muss aber noch initialisiert werden.
  - **Hot Failover**: Backup-System läuft in Echtzeit und übernimmt sofort den Betrieb, ohne merkbare Verzögerung.

### Switchover
- **Definition**: Switchover bezeichnet einen geplanten Wechsel von einem aktiven System zu einem redundanten System, ohne dass ein Fehler vorliegt. Es wird manuell initiiert und dient oft dazu, Wartungsarbeiten durchzuführen oder Lasten besser zu verteilen.
- **Unterschied zu Failover**: Failover erfolgt automatisch und ungeplant bei einem Fehler, während Switchover manuell und geplant durchgeführt wird.
- **Beispiel**: Vor einer geplanten Wartung wird ein aktiver Server auf ein Backup-System umgeschaltet, um den primären Server ohne Unterbrechung des Dienstes warten zu können.

### N+1 Redundanz
- Eine zusätzliche Komponente steht für eine Anzahl N aktiver Komponenten bereit.
- **Beispiel**: 3 Server sind aktiv, und 1 Server ist als Backup konfiguriert.

### N+2, N+M Redundanz
- Erweiterte Konzepte von N+1, bei denen mehr als eine redundante Komponente vorhanden ist.
### [RAID](/lerninhalte/RAID)

### Cluster-Redundanz
- **Active-Passive Cluster**: Ein System ist aktiv, das andere im Standby (ähnlich wie Failover).
- **Active-Active Cluster**: Mehrere Systeme sind gleichzeitig aktiv und teilen die Last. Fällt eines aus, übernehmen die verbleibenden Systeme.

## Netzwerk-Redundanzen

### Link Aggregation (LACP)
- **Definition**: Mehrere Netzwerkverbindungen werden zu einer einzigen logischen Verbindung zusammengefasst. Falls ein Kabel oder ein Port ausfällt, bleibt die Verbindung über die anderen aktiv.
- **Vorteile**: Erhöht sowohl die Bandbreite als auch die Ausfallsicherheit.

### Spanning Tree Protocol (STP)
- **Definition**: Ein Netzwerkprotokoll, das Schleifen in redundanten Netzwerken verhindert, indem es automatisch Redundanzpfade deaktiviert und bei Ausfall eines Pfades wieder aktiviert.
- **Vorteil**: Verhindert Netzwerkloops und sorgt für Ausfallsicherheit durch automatische Neuberechnung von Pfaden.

### Hot Standby Router Protocol (HSRP) / Virtual Router Redundancy Protocol (VRRP)
- **Definition**: Protokolle, die Redundanz zwischen mehreren Routern herstellen. Fällt der aktive Router aus, übernimmt ein Backup-Router automatisch die Weiterleitung des Netzverkehrs.
- **Vorteil**: Sicherstellung, dass der Netzwerkzugriff immer über einen funktionsfähigen Router gewährleistet ist.

### Multipathing
- **Definition**: Mehrere Pfade zwischen einem Endgerät und einem Netzwerk oder einer Speicherressource werden genutzt. Wenn ein Pfad ausfällt, übernimmt ein anderer Pfad den Verkehr.
- **Beispiel**: In SANs (Storage Area Networks) oft verwendet, um den Zugriff auf Speichergeräte zu sichern.

### Dual-Homed
- **Definition**: Ein Gerät ist über zwei unabhängige Netzwerke verbunden, sodass bei einem Netzwerkausfall die Verbindung über das zweite Netzwerk bestehen bleibt.
- **Vorteil**: Vollständige Redundanz auf Netzwerkebene für kritische Systeme.

## Vorteile von Hardware- und Netzwerk-Redundanzen
- **Erhöhte Verfügbarkeit**: Systeme bleiben bei Hardware- oder Netzwerkausfällen weiterhin verfügbar.
- **Ausfallsicherheit**: Minimierung von Single Points of Failure (SPOF).
- **Minimierung von Downtime**: Redundanzsysteme und -netzwerke sorgen für weniger Ausfallzeiten und einen kontinuierlichen Betrieb.
- **Datenintegrität**: Bei RAID- und Multipathing-Systemen wird die Datenintegrität trotz Ausfällen gewahrt.

## Best Practices für Redundanzen
- **Regelmäßige Tests**: Redundanzsysteme und -netzwerke sollten regelmäßig getestet werden, um ihre Funktionsfähigkeit sicherzustellen.
- **Monitoring**: Monitoring-Systeme sollten implementiert werden, um Fehler frühzeitig zu erkennen.
- **Geografische Redundanz**: Für höchste Ausfallsicherheit sollten Backup-Systeme und Netzwerke an verschiedenen Standorten betrieben werden (Disaster Recovery).

## Quellen

> ChatGPT. (2024, September 20). Retrieved from https://chatgpt.com/c/66ed1d06-5424-800b-bc26-8455a49771b1