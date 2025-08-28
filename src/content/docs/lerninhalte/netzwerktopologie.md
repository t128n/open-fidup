---
title: "Netzwerktopologie"
description: "Netzwerktopologie beschreibt die Struktur von Netzwerken, wie Point-to-Point, Bus, Stern, Ring und Mesh. Jede Topologie hat Vor- und Nachteile hinsichtlich Kosten, Ausfallsicherheit und Wartung."
---

Netzwerktopologie bezeichnet die physische oder logische Anordnung von Geräten in einem Netzwerk. Sie bestimmt, wie Daten übertragen werden und beeinflusst Faktoren wie Kosten, Zuverlässigkeit und Wartungsaufwand. Häufige Topologien umfassen Point-to-Point, Point-to-Multipoint, Line- oder Chain-Topologie, Bus, Ring, Stern, Baum und Mesh. Jede Variante bietet spezifische Vorteile und Nachteile, die bei der Planung von [Netzwerkkonzepten](/open-fidup/lerninhalte/netzwerkkonzepte) berücksichtigt werden sollten.

## Point-to-Point

```mermaid
graph LR
    A[Gerät A] --- B[Gerät B]
```

Diese Topologie besteht aus einer einfachen, direkten Verbindung zwischen zwei Geräten. Beide können die Verbindung für die gegenseitige Kommunikation nutzen.

- **Vorteile**:
  - Hohe Übertragungsgeschwindigkeit.
  - Einfache Implementierung und Wartung.
  - Geringe Latenzzeit.
- **Nachteile**:
  - Begrenzte Reichweite.
  - Hohe Kosten bei vielen Verbindungen.
  - Ausfall eines Geräts unterbricht die Kommunikation.

## Point-to-Multipoint

```mermaid
graph TD
    C[Zentrales System] --- D[Host 1]
    C --- E[Host 2]
    C --- F[Host 3]
```

In dieser Topologie werden mehrere Hosts von einem zentralen System versorgt. Alle Hosts verfügen über eine eigene Leitung zum zentralen System.

- **Vorteile**:
  - Effiziente Nutzung der Ressourcen.
  - Einfache Erweiterung durch Hinzufügen neuer Hosts.
  - Zentrale Verwaltung und Kontrolle.
- **Nachteile**:
  - Das zentrale System kann zum Engpass werden.
  - Ausfall des zentralen Systems führt zu Kommunikationsausfall.
  - Höhere Komplexität in der Verkabelung.

## Line- oder Chain-Topologie

```mermaid
graph LR
    G[Host 1] --- H[Host 2] --- I[Host 3] --- J[Host 4]
```

Bei dieser Topologie werden Leitungen von Host zu Host verlegt, wodurch eine lineare Kette entsteht.

- **Vorteile**:
  - Einfache Installation und Erweiterung.
  - Geringe Kosten für Verkabelung.
  - Geeignet für kleine Netzwerke.
- **Nachteile**:
  - Ausfall eines Hosts kann das gesamte Netzwerk beeinträchtigen.
  - Begrenzte Anzahl anschließbarer Hosts.
  - Schwierigkeiten bei der Fehlersuche.

## Bus-Topologie

```mermaid
graph LR
    K[Gerät 1] --- L[Gemeinsames Kabel] --- M[Gerät 2]
    L --- N[Gerät 3]
    L --- O[Gerät 4]
```

Alle Geräte sind über ein gemeinsames Kabel verbunden.

- **Vorteile**:
  - Geringe Kosten für Verkabelung.
  - Einfache Installation.
  - Geeignet für kleine Netzwerke.
- **Nachteile**:
  - Ausfall des Hauptkabels führt zum Ausfall des gesamten Netzwerks.
  - Begrenzte Anzahl anschließbarer Geräte.
  - Schwierigkeiten bei der Fehlersuche.

## Ring-Topologie

```mermaid
graph TD
    P[Gerät 1] --- Q[Gerät 2]
    Q --- R[Gerät 3]
    R --- S[Gerät 4]
    S --- P
```

Jedes Gerät ist mit zwei anderen verbunden, wodurch ein geschlossener Ring entsteht.

- **Vorteile**:
  - Datenübertragung in eine Richtung reduziert Kollisionen.
  - Einfache Datenübertragung und -verwaltung.
  - Vorhersehbare Leistung.
- **Nachteile**:
  - Ausfall eines Geräts kann das gesamte Netzwerk beeinträchtigen.
  - Schwierige Fehlersuche.
  - Höhere Kosten für Verkabelung.

## Stern-Topologie

```mermaid
graph TD
    T[Zentrales Gerät] --- U[Gerät 1]
    T --- V[Gerät 2]
    T --- W[Gerät 3]
    T --- X[Gerät 4]
```

Alle Geräte sind über ein zentrales Gerät, wie einen Switch oder Hub, verbunden.

- **Vorteile**:
  - Einfache Fehlersuche und Wartung.
  - Ausfall eines Geräts beeinträchtigt nicht das gesamte Netzwerk.
  - Hohe Leistung und Skalierbarkeit.
- **Nachteile**:
  - Abhängigkeit vom zentralen Gerät.
  - Höhere Kosten für zentrale Geräte und Verkabelung.
  - Komplexität bei der Verkabelung.

## Baum-Topologie

```mermaid
graph TD
    Y[Zentraler Knoten] --- Z[Unterknoten 1]
    Z --- AA[Gerät 1]
    Z --- BB[Gerät 2]
    Y --- CC[Unterknoten 2]
    CC --- DD[Gerät 3]
    CC --- EE[Gerät 4]
```

Diese Topologie kombiniert Elemente der Stern- und Bus-Topologie in einer hierarchischen Struktur.

- **Vorteile**:
  - Flexibel und erweiterbar.
  - Gute Organisation der Netzwerkstruktur.
  - Einfache Fehlersuche in Teilbereichen.
- **Nachteile**:
  - Komplexität in der Implementierung.
  - Ausfall des Hauptkabels kann große Teile des Netzwerks beeinträchtigen.
  - Höhere Kosten für Verkabelung und zentrale Geräte.

## Mesh-Topologie

```mermaid
graph TD
    FF[Gerät 1] --- GG[Gerät 2]
    FF --- HH[Gerät 3]
    FF --- II[Gerät 4]
    GG --- HH
    GG --- II
    HH --- II
```

Jedes Gerät ist mit mehreren anderen verbunden, was eine netzartige Struktur ergibt.

- **Vorteile**:
  - Hohe Redundanz und Ausfallsicherheit.
  - Daten können mehrere Wege nehmen, was die Leistung verbessert.
  - Gute Skalierbarkeit.
- **Nachteile**:
  - Hohe Kosten für Verkabelung und Hardware.
  - Komplexe Implementierung und Wartung.
  - Schwierigkeiten bei der Fehlersuche.