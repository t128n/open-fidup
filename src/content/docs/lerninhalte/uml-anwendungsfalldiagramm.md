---
title: "UML-Anwendungsfalldiagramm"
description: "Das UML-Anwendungsfalldiagramm modelliert Struktur und Verhalten von Software, zeigt Akteure und Anwendungsfälle mit Beziehungen. Es unterstützt Kommunikation zwischen Auftraggeber und Entwickler. Elemente umfassen Systemgrenzen, Akteure und Beziehungen wie Include und Extend."
---

Das UML-Anwendungsfalldiagramm dient der Modellierung der Struktur und des Verhaltens von Software und anderen Systemen. Es stellt Anwendungsfälle und Akteure mit ihren jeweiligen Abhängigkeiten und Beziehungen dar und eignet sich zur Unterstützung der Kommunikation zwischen Auftraggeber und Entwickler.

## Einsatzgebiete
Das UML-Anwendungsfalldiagramm findet Anwendung in der Modellierung von Geschäftsprozessen sowie im Aufzeigen des Systemverhaltens aus der Sicht des Anwenders.

## Elemente
Das Diagramm umfasst mehrere zentrale Elemente, die im Folgenden mit Beispielen dargestellt werden.

### Systemkontext und Systemgrenzen
Der Systemkontext definiert den Rahmen des betrachteten Systems und grenzt es von seiner Umgebung ab.

```mermaid
usecaseDiagram
    rectangle System as "System" {
        (Anwendungsfall)
    }
    Akteur --> (Anwendungsfall)
```

### Akteure
Akteure repräsentieren Personen wie Kunden oder Administratoren sowie andere Systeme, die mit dem modellierten System interagieren.

```mermaid
usecaseDiagram
    Akteur --> (Anwendungsfall)
```

### Anwendungsfälle
Anwendungsfälle beschreiben Funktionen oder Abläufe des Systems und werden typischerweise in Kommentaren oder separaten Dateien detailliert erläutert.

```mermaid
usecaseDiagram
    Akteur --> (Anwendungsfall)
```

## Beziehungen
Zwischen Akteuren und Anwendungsfällen sowie zwischen Anwendungsfällen selbst bestehen verschiedene Beziehungen, die im Diagramm dargestellt werden.

### Assoziation oder Kommunikation
Diese Beziehung zeigt, dass ein Akteur mit einem Anwendungsfall interagiert.

```mermaid
usecaseDiagram
    Akteur --> (Anwendungsfall)
```

### Multiplizität
Die Multiplizität gibt an, wie viele Instanzen eines Akteurs oder Anwendungsfalls beteiligt sind, beispielsweise ein Akteur, der mit mehreren Anwendungsfällen verbunden ist.

```mermaid
usecaseDiagram
    Akteur --> (Anwendungsfall)
    note right of Akteur : Multiplizität: 1..*
```

### Generalisierung von Anwendungsfällen
Ein Anwendungsfall kann von einem anderen erben, wodurch gemeinsame Eigenschaften modelliert werden.

```mermaid
usecaseDiagram
    (Basisanwendungsfall) <|-- (Spezialisierter Anwendungsfall)
```

### Generalisierung von Akteuren
Akteure können hierarchisch strukturiert sein, wobei spezialisierte Akteure von allgemeineren erben.

```mermaid
usecaseDiagram
    Basisakteur <|-- Spezialisierter Akteur
    Spezialisierter Akteur --> (Anwendungsfall)
```

### Include-Beziehung
Eine Include-Beziehung bedeutet, dass ein Anwendungsfall A einen Anwendungsfall B zwangsläufig beinhaltet.

```mermaid
usecaseDiagram
    (Anwendungsfall A) ..> (Anwendungsfall B) : <<include>>
```

### Extend-Beziehung
Eine Extend-Beziehung zeigt, dass ein Anwendungsfall A einen Anwendungsfall B optional erweitert.

```mermaid
usecaseDiagram
    (Anwendungsfall A) .> (Anwendungsfall B) : <<extend>>
```

### Extend-Beziehung mit Erweiterungsstellen
Bei einer Extend-Beziehung können spezifische Erweiterungspunkte definiert werden, an denen die Erweiterung erfolgt.

```mermaid
usecaseDiagram
    (Anwendungsfall A) .> (Anwendungsfall B) : <<extend>>
    note right of (Anwendungsfall B) : Erweiterungsstelle: Bedingung
```

### Anwendungsfall mit Erweiterungsstellen
Ein Anwendungsfall kann explizite Erweiterungsstellen aufweisen, die in der Beschreibung festgelegt sind.

```mermaid
usecaseDiagram
    (Anwendungsfall) as "Anwendungsfall\n(Erweiterungsstelle: Punkt 1)"
```