---
title: "Tunneling"
description: "Tunneling transportiert Daten über Netzwerke durch Einkapselung von Paketen in andere Pakete. Es ermöglicht sichere Verbindungen in VPNs und Übertragung nicht unterstützter Protokolle. Protokolle wie GRE und IPsec werden häufig verwendet."
---

Tunneling bezeichnet eine Methode, um Daten über ein Netzwerk zu transportieren, indem Protokolle verwendet werden, die von diesem Netzwerk nicht unterstützt werden. Dabei erfolgt die Übertragung durch die Einkapselung von Paketen, bei der ein Paket in ein anderes Paket eingewickelt wird. Tunneling findet häufig Anwendung in virtuellen privaten Netzwerken (VPNs) und ermöglicht effiziente sowie sichere Verbindungen zwischen Netzwerken.

## Funktionsweise

Daten werden in Pakete aufgeteilt, die jeweils aus einem Header – der Ziel- und Protokollinformationen enthält – und einer Nutzlast – den eigentlichen Daten – bestehen. Bei der Einkapselung wird ein Paket in ein anderes Paket eingebettet, wobei der Header und die Nutzlast des ursprünglichen Pakets in den Nutzlastbereich des umgebenden Pakets platziert werden.

```mermaid
graph TD
    A[Originales Paket: Header + Nutzlast] --> B[Eingekapseltes Paket: Äußerer Header + (Innerer Header + Nutzlast)]
```

## Vorteile

Die Einkapselung ermöglicht die Übertragung von Daten über Netzwerke, die nicht alle Protokolle unterstützen, beispielsweise IPv6 über IPv4. Sie ist zudem nützlich für verschlüsselte Verbindungen, da verschlüsselte Pakete in unverschlüsselte Pakete eingekapselt werden können, um die Weiterleitung durch Router zu erleichtern.

## Anwendung in VPNs

Ein VPN stellt eine sichere, verschlüsselte Verbindung über ein öffentlich zugängliches Netzwerk her. Tunneling beschreibt den Prozess, durch den VPN-Pakete ihr Ziel erreichen, typischerweise in einem privaten Netzwerk. Häufig verwendete Protokolle hierfür sind:

- **IPsec**: Eine Protokollsuite, die auf der Netzwerkebene arbeitet und den gesamten Netzwerk-Traffic verschlüsselt.
- **Transport Layer Security (TLS)**: Arbeitet auf Ebene 6 oder 7 des [OSI-Modells](/open-fidup/lerninhalte/osi-modell) und bietet Sicherheit für Datenübertragungen.

### Split Tunneling

Split Tunneling ermöglicht es Nutzern, sich gleichzeitig mit zwei Netzwerken zu verbinden: einem öffentlichen und einem privaten. Dabei wird ein Teil des Traffics durch den VPN-Tunnel geleitet, während der andere Teil außerhalb des Tunnels bleibt.

## Tunneling-Protokolle

Verschiedene Protokolle unterstützen Tunneling, darunter:

- **Generic Routing Encapsulation (GRE)**: Kapselt Datenpakete eines Routing-Protokolls in die Pakete eines anderen Protokolls. Es fügt jedem Paket einen GRE-Header und einen IP-Header hinzu.
- **IP-in-IP**: Kapselt IP-Pakete in anderen IP-Paketen; wird nicht für VPNs verwendet.
- **SSH-Tunneling**: Stellt verschlüsselte Verbindungen zwischen Client und Server her und arbeitet auf Ebene 7 des [OSI-Modells](/open-fidup/lerninhalte/osi-modell).
- **Point-to-Point Tunneling Protocol (PPTP)**
- **Secure Socket Tunneling Protocol (SSTP)**
- **Layer 2 Tunneling Protocol (L2TP)**
- **Virtual Extensible Local Area Network (VXLAN)**

## Quellen

Was ist Tunneling? | Tunneling in Netzwerken. (2024, September 20). Abgerufen von https://www.cloudflare.com/de-de/learning/network-layer/what-is-tunneling