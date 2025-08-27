---
title: "Entscheidungsbaum: Klassifikation und Regression"
description: "Entscheidungsbaum ist eine nichtparametrische, überwachte Lernmethode für Klassifikation und Regression. Er erstellt Vorhersagen durch einfache Entscheidungsfragen. Arten sind Klassifikations- und Regressionsbaum. Terminologie umfasst Wurzelknoten, Entscheidungsknoten und Blattknoten. Vorteile sind Einfachheit und Transparenz, Nachteile sind Überanpassung und Instabilität."
---

- **Nichtparametrische** **überwachte** Lernmethode
- Verwendet für **Klassifikation** und **Regression**
- Modell trifft Vorhersagen durch einfache **Entscheidungsfragen**, die aus den Merkmalen des Datensatzes gelernt werden.

## Funktionsweise
- Der Entscheidungsbaum wird erstellt, indem der Datensatz **rekursiv nach Klassen aufgesplittet** wird (vom Allgemeinen zum Speziellen) -> *rekursive Partitionierung*. Der Prozess endet, wenn eine weitere Partitionierung keinen zusätzlichen Vorhersagewert mehr bietet.

## Arten von Entscheidungsbäumen
1. **Klassifikationsbaum**
   - Gibt normalerweise Ja- oder Nein-Ausgaben / binäre Ausgaben zurück.
2. **Regressionsbaum**
   - Gibt fortlaufende Werte, also numerische Ausgaben zurück.
3. **CART** (Classification and Regression Trees)
   - Sammelbegriff für Klassifikations- und Regressionsbäume.

## Terminologie
- **Wurzelknoten** (*Root Node*): Höchster Knoten, der die gesamte Entscheidung oder "Nachricht" repräsentiert.
- **Entscheidungsknoten** (*Decision/Internal Node*): Knoten, der nach einer Entscheidung steht.
- **Blattknoten** (*Leaf/Terminal Node*): Letzter Knotenpunkt im Baum.
- **Aufspaltung** (*Splitting*): Ein Knotenpunkt verzweigt sich in mehrere Knoten.
- **Beschnitt** (*Pruning*): Mehrere Zweige werden zu einem Baum zusammengefasst, um Überanpassung zu vermeiden.

## Vorteile
- Einfach zu verstehen und zu interpretieren.
- Geringer Vorbereitungsaufwand für Daten erforderlich.
- Entscheidungslogik ist transparent; es handelt sich um ein "White Box"-Modell.

## Nachteile
- Überanpassung (Overfitting) bei zu speziellen Daten und zu komplexen Entscheidungsbäumen.
- Instabilität, da kleine Änderungen im Datensatz das Modell erheblich beeinflussen können.
- Bei unausgewogenen Datensätzen kann das Modell voreingenommen sein.

## Warum ist Entropie wichtig?
- **Auswahl des besten Attributs:** Durch die Berechnung der Entropie für verschiedene Attribute kann dasjenige ausgewählt werden, das die größte Reduktion der Unsicherheit verursacht.
- **Erstellung des Baums:** Der Algorithmus wählt rekursiv die Attribute mit dem höchsten Informationsgewinn aus, um den Baum zu konstruieren.

## Quellen

> 1.10. Decision Trees. (2024, September 11). Abgerufen von https://scikit-learn.org/stable/modules/tree.html  
> Decision Trees in Machine Learning: Two Types (+ Examples). (2024, September 12). Abgerufen von https://www.coursera.org/articles/decision-tree-machine-learning  
> Contributors to Wikimedia projects. (2024, Juli 16). Decision tree learning - Wikipedia. Abgerufen von https://en.wikipedia.org/w/index.php?title=Decision_tree_learning&oldid=1234846759
