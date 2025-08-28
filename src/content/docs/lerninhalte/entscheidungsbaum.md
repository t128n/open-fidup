---
title: "Entscheidungsbaum"
description: "Der Entscheidungsbaum ist eine nichtparametrische, überwachte Lernmethode für Klassifikation und Regression. Er erstellt Vorhersagen durch einfache Entscheidungsfragen. Arten sind Klassifikations- und Regressionsbaum. Terminologie umfasst Wurzelknoten, Entscheidungsknoten und Blattknoten. Vorteile sind Einfachheit und Transparenz, Nachteile sind Überanpassung und Instabilität."
---

Der Entscheidungsbaum ist eine nichtparametrische, überwachte Lernmethode im Bereich des [maschinellen Lernens](/open-fidup/lerninhalte/maschinelles-lernen), die für [Klassifikation](/open-fidup/lerninhalte/klassifikation) und [Regression](/open-fidup/lerninhalte/regression) eingesetzt wird. Das Modell trifft Vorhersagen, indem es einfache Entscheidungsfragen auf der Grundlage der Merkmale des Datensatzes stellt. Zu den Hauptarten zählen Klassifikations- und Regressionsbäume, wobei CART als Sammelbegriff dient. Die Terminologie umfasst Wurzelknoten, Entscheidungsknoten und Blattknoten. Vorteile liegen in der Einfachheit und Transparenz, während Nachteile wie Überanpassung und Instabilität auftreten können.

## Funktionsweise
Der Entscheidungsbaum entsteht durch rekursive Partitionierung des Datensatzes nach Klassen, beginnend vom Allgemeinen zum Speziellen. Dieser Prozess setzt sich fort, bis eine weitere Aufteilung keinen zusätzlichen Vorhersagewert mehr bringt.

## Arten von Entscheidungsbäumen
1. **Klassifikationsbaum**: Gibt in der Regel binäre Ausgaben wie Ja oder Nein zurück.
2. **Regressionsbaum**: Liefert kontinuierliche, numerische Werte.
3. **CART (Classification and Regression Trees)**: Sammelbegriff für Klassifikations- und Regressionsbäume.

## Terminologie
- **Wurzelknoten (Root Node)**: Der oberste Knoten, der die gesamte Entscheidung oder Nachricht repräsentiert.
- **Entscheidungsknoten (Decision/Internal Node)**: Ein Knoten, der eine Entscheidung darstellt.
- **Blattknoten (Leaf/Terminal Node)**: Der Endknoten im Baum.
- **Aufspaltung (Splitting)**: Ein Knoten verzweigt sich in mehrere Unterknoten.
- **Beschnitt (Pruning)**: Mehrere Zweige werden zu einem Baum zusammengefasst, um Überanpassung zu vermeiden.

## Vorteile
- Einfach zu verstehen und zu interpretieren.
- Erfordert geringen Vorbereitungsaufwand für Daten.
- Die Entscheidungslogik ist transparent und stellt ein White-Box-Modell dar.

## Nachteile
- Überanpassung (Overfitting) bei zu spezifischen Daten und zu komplexen Bäumen.
- Instabilität, da geringe Änderungen im Datensatz das Modell stark beeinflussen können.
- Bei unausgewogenen Datensätzen kann das Modell voreingenommen sein.

## Bedeutung der Entropie
Die Entropie spielt eine zentrale Rolle bei der Konstruktion von Entscheidungsbäumen, insbesondere im Kontext des [Entropie- und Informationsgewinns](/open-fidup/lerninhalte/entropie-und-informationsgewinn).
- **Auswahl des besten Attributs**: Durch Berechnung der Entropie für verschiedene Attribute wird dasjenige gewählt, das die größte Reduktion der Unsicherheit bewirkt.
- **Erstellung des Baums**: Der Algorithmus wählt rekursiv Attribute mit dem höchsten Informationsgewinn aus, um den Baum aufzubauen.

## Quellen

> 1.10. Decision Trees. (2024, September 11). Abgerufen von https://scikit-learn.org/stable/modules/tree.html  
> Decision Trees in Machine Learning: Two Types (+ Examples). (2024, September 12). Abgerufen von https://www.coursera.org/articles/decision-tree-machine-learning  
> Contributors to Wikimedia projects. (2024, Juli 16). Decision tree learning - Wikipedia. Abgerufen von https://en.wikipedia.org/w/index.php?title=Decision_tree_learning&oldid=1234846759