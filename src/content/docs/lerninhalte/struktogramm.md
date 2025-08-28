---
title: "Struktogramm"
description: "Das Struktogramm, auch Nassi-Shneiderman-Diagramm genannt, dient der Zerlegung von Gesamtproblemen in kleinere Teilprobleme mittels Top-down-Programmierung. Es umfasst Elemente wie Anweisungen, Bedingungen, Schleifen und Case-Statements."
---

Das Struktogramm, auch als Nassi-Shneiderman-Diagramm bekannt, ist ein grafisches Hilfsmittel zur Darstellung von Algorithmen und Programmabläufen. Es unterstützt die Zerlegung komplexer Gesamtprobleme in kleinere, handhabbare Teilprobleme durch den Ansatz der Top-down-Programmierung. Dabei wird das Gesamtkonzept schrittweise verfeinert. Struktogramme bestehen aus standardisierten Elementen, die den Ablauf von Programmen visuell strukturieren und die Lesbarkeit fördern.

## Elemente

Struktogramme verwenden verschiedene Symbole, um unterschiedliche Programmkonstrukte darzustellen. Diese Elemente werden hierarchisch angeordnet, wobei jedes Symbol einen bestimmten Teil des Ablaufs repräsentiert. Im Folgenden sind die wichtigsten Elemente mit ihren visuellen Darstellungen aufgeführt.

### Anweisungen

Anweisungen stellen einfache Operationen oder Befehle dar, die sequentiell ausgeführt werden. Sie bilden die Grundbausteine des Struktogramms.

```mermaid
flowchart TD
    A[Anweisung 1] --> B[Anweisung 2]
    B --> C[Anweisung 3]
```

### Bedingungen

Bedingungen ermöglichen Verzweigungen im Ablauf. Abhängig von einer Bedingung wird entweder der eine oder der andere Pfad verfolgt.

```mermaid
flowchart TD
    A{Bedingung?} -->|Ja| B[Anweisung Ja]
    A -->|Nein| C[Anweisung Nein]
```

### Case-Statement

Das Case-Statement erlaubt Mehrfachverzweigungen basierend auf dem Wert einer Variablen. Es entspricht einer switch-Anweisung in Programmiersprachen.

```mermaid
flowchart TD
    A[Variable] --> B{Case Wert 1}
    B -->|Ja| C[Anweisung 1]
    B -->|Nein| D{Case Wert 2}
    D -->|Ja| E[Anweisung 2]
    D -->|Nein| F[Anweisung Standard]
```

### Iteration

Iterationen repräsentieren Schleifen, die einen Block von Anweisungen wiederholen, solange eine Bedingung erfüllt ist.

```mermaid
flowchart TD
    A[Start] --> B{Schleifenbedingung}
    B -->|Wahr| C[Anweisungen]
    C --> B
    B -->|Falsch| D[Ende]
```

### Kopfgesteuerte Schleife

Bei der kopfgesteuerten Schleife wird die Bedingung vor der Ausführung des Schleifenkörpers geprüft. Ist die Bedingung nicht erfüllt, wird die Schleife nicht ausgeführt.

```mermaid
flowchart TD
    A[Start] --> B{Bedingung}
    B -->|Wahr| C[Anweisungen]
    C --> B
    B -->|Falsch| D[Ende]
```

### Fußgesteuerte Schleife

Die fußgesteuerte Schleife prüft die Bedingung nach der Ausführung des Schleifenkörpers. Der Körper wird mindestens einmal ausgeführt.

```mermaid
flowchart TD
    A[Start] --> B[Anweisungen]
    B --> C{Bedingung}
    C -->|Wahr| B
    C -->|Falsch| D[Ende]
```

### Break

Break beendet die Ausführung eines Programmteils vorzeitig, beispielsweise innerhalb einer Schleife oder eines Blocks.

```mermaid
flowchart TD
    A[Anweisung] --> B[Break]
    B --> C[Ende des Blocks]
```

### Blockaufrauf

Der Blockaufrauf dient dem Aufruf eines Unterprogramms oder einer Funktion, um Modularität zu gewährleisten.

```mermaid
flowchart TD
    A[Hauptprogramm] --> B[Blockaufrauf]
    B --> C[Unterprogramm]
    C --> D[Weiter im Hauptprogramm]
```

### Parallelausführung

Parallelausführung stellt nebenläufige Abläufe dar, bei denen mehrere Prozesse gleichzeitig ausgeführt werden können.

```mermaid
flowchart TD
    A[Start] --> B[Prozess 1]
    A --> C[Prozess 2]
    B --> D[Ende]
    C --> D
```

## Quellen

> AI Chat. (2024, September 19). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1  
> Autoren der Wikimedia-Projekte. (2004, February 17). Nassi-Shneiderman-Diagramm – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=Nassi-Shneiderman-Diagramm&oldid=245429298