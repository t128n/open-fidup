---
title: "Tunneling"
description: "Tunneling transportiert Daten über Netzwerke durch Einkapselung von Paketen in andere Pakete. Es ermöglicht sichere Verbindungen in VPNs und Übertragung nicht unterstützter Protokolle. Protokolle wie GRE und IPsec werden häufig verwendet."
---

- Methode, um **Daten über ein Netzwerk zu transportieren**, wobei Protokolle verwendet werden, die von diesem Netzwerk nicht unterstützt werden.
- Es funktioniert durch die **Einkapselung** von Paketen: das Einwickeln von Paketen in andere Pakete.
- Tunneling wird häufig in **virtuellen privaten Netzwerken (VPNs)** eingesetzt und ermöglicht effiziente und sichere Verbindungen zwischen Netzwerken.

## Funktionsweise der Einkapselung von Paketen
- Daten werden in **Pakete** aufgeteilt, die aus einem Header (Ziel und Protokoll) und einer Nutzlast (eigentliche Daten) bestehen.
- Ein eingekapseltes Paket ist ein Paket innerhalb eines anderen Pakets. Der Header und die Nutzlast des ursprünglichen Pakets befinden sich im Nutzlastbereich des umgebenden Pakets.

## Vorteile der Einkapselung
- Ermöglicht die Übertragung von Daten über Netzwerke, die nicht alle Protokolle unterstützen (z.B. IPv6 über IPv4).
- Nützlich für **verschlüsselte Verbindungen**, da verschlüsselte Pakete in unverschlüsselte Pakete eingekapselt werden können, um die Weiterleitung durch Router zu ermöglichen.

## Was ist ein VPN-Tunnel?
- Ein VPN ist eine sichere, verschlüsselte Verbindung über ein öffentlich zugängliches Netzwerk.
- Tunneling ist der Prozess, durch den VPN-Pakete ihr Ziel erreichen, typischerweise in einem privaten Netzwerk.
- Häufig verwendete Protokolle:
  - **IPsec**: Protokollsuite, die auf der Netzwerkebene arbeitet und den gesamten Netzwerk-Traffic verschlüsselt.
  - **Transport Layer Security (TLS)**: Arbeitet auf Ebene 6 oder 7 des OSI-Modells, bietet Sicherheit für Datenübertragungen.

## Was ist Split Tunneling?
- Split Tunneling ermöglicht es Nutzern, sich **mit zwei Netzwerken gleichzeitig** zu verbinden: einem öffentlichen und einem privaten.
- Ein Teil des Traffics wird durch den VPN-Tunnel geleitet, während der andere Teil außerhalb des Tunnels bleibt.

## Tunneling-Protokolle
- **Generic Routing Encapsulation (GRE)**: Kapselt Datenpakete eines Routing-Protokolls in die Pakete eines anderen Protokolls. Fügt jedem Paket einen GRE-Header und einen IP-Header hinzu.
- **IP-in-IP**: Kapselt IP-Pakete in anderen IP-Paketen, wird nicht für VPNs verwendet.
- **SSH-Tunneling**: Stellt verschlüsselte Verbindungen zwischen Client und Server her, arbeitet auf Ebene 7 des OSI-Modells.
- Weitere Tunneling-Protokolle:
	- **Point-to-Point Tunneling Protocol (PPTP)**
	- **Secure Socket Tunneling Protocol (SSTP)**
	- **Layer 2 Tunneling Protocol (L2TP)**
	- **Virtual Extensible Local Area Network (VXLAN)**

## Quellen

> Was ist Tunneling? | Tunneling in Netzwerken. (2024, September 20). Retrieved from https://www.cloudflare.com/de-de/learning/network-layer/what-is-tunneling