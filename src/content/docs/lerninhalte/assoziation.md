---
title: "Assoziationsanalyse"
description: "Die Assoziationsanalyse sucht nach häufig auftretenden Mustern und Korrelationen zwischen Datenelementen in großen Datenbanken. Sie verwendet Begriffe wie Support, Konfidenz und Frequent Itemsets. Der Apriori-Algorithmus findet Frequent Itemsets iterativ durch Join und Prune."
---

Die Assoziationsanalyse ist eine Methode zur Identifizierung häufig auftretender Muster, Korrelationen oder kausaler Strukturen zwischen Datenelementen in großen Datenbanken. Sie basiert auf der Annahme, dass das Auftreten bestimmter Elemente das Auftreten anderer wahrscheinlicher macht, wie beispielsweise die Regel „Wenn X, dann wahrscheinlich auch Y“. Diese Analyse findet Anwendung in Bereichen wie dem [Data Mining](/open-fidup/lerninhalte/data-mining) und hilft dabei, verborgene Zusammenhänge in Datensätzen aufzudecken.

## Grundbegriffe

Die Assoziationsanalyse verwendet mehrere Schlüsselbegriffe, um Muster in Transaktionen zu beschreiben und zu quantifizieren.

- **Itemset**: Eine Menge, die aus mindestens zwei Elementen besteht.
- **Support**: Eine Kennzahl, die angibt, wie häufig ein Itemset relativ zu allen Transaktionen auftritt. Sie misst die Häufigkeit eines Elements oder einer Kombination von Elementen.

  Der Support für ein Itemset A wird wie folgt berechnet:

  $$Support(A) = \frac{\text{Transaktionen mit A}}{\text{Alle Transaktionen}}$$

  Dies lässt sich anhand eines einfachen Beispiels veranschaulichen, bei dem Transaktionen Produkte darstellen:

  | Transaktion | Produkte |
  |-------------|----------|
  | 1           | A, B     |
  | 2           | A, C     |
  | 3           | B, C     |
  | 4           | A, B, C  |

  Hier beträgt der Support für A: 3/4 = 0,75, da A in drei von vier Transaktionen vorkommt.

- **Konfidenz**: Eine Kennzahl, die die Stärke einer Assoziationsregel zwischen zwei Itemsets A und B misst. Sie gibt den Anteil der Transaktionen an, die sowohl A als auch B enthalten, bezogen auf die Transaktionen, die A enthalten.

  Die Konfidenz für die Regel A → B wird wie folgt berechnet:

  $$Konfidenz(A \rightarrow B) = \frac{Support(A \cup B)}{Support(A)} = \frac{\text{Transaktionen mit A und B}}{\text{Transaktionen mit A}}$$

  Im obigen Beispiel beträgt die Konfidenz für A → B: (2/4) / (3/4) = 2/3 ≈ 0,67, da A und B gemeinsam in zwei Transaktionen auftreten und A in drei.

- **Assoziationsregel**: Eine Regel, die Regelmäßigkeiten zwischen zwei oder mehr Elementen beschreibt, oft in der Form „Wenn A, dann B“.
- **Frequent Itemset**: Ein Itemset, das häufig zusammen auftritt und ein vorher definiertes Niveau an Support und Konfidenz erreicht.

## Apriori-Algorithmus

Der Apriori-Algorithmus ist eine iterative Methode zur Identifizierung von Frequent Itemsets in großen Datensätzen. Er arbeitet in Schritten, um die Berechnung effizient zu gestalten.

Der Algorithmus folgt diesen Schritten:

1. **Join**: Bildung neuer Itemsets der Größe k aus den Frequent Itemsets der Größe k-1, wobei k den aktuellen Iterationsschritt angibt.
2. **Prune**: Entfernung aller Itemsets, die die vorgegebene Supportschwelle nicht erreichen und daher als selten gelten.
3. Der Prozess wiederholt sich, bis keine neuen Frequent Itemsets mehr gefunden werden und der Algorithmus terminiert.

Dieser Ansatz nutzt die Eigenschaft, dass jedes Subset eines Frequent Itemsets ebenfalls frequent sein muss, um die Anzahl der Kandidaten zu reduzieren.

## Vor- und Nachteile

Die Assoziationsanalyse bietet mehrere Vorteile, bringt aber auch Herausforderungen mit sich.

- **Vorteile**:
  - Sie ermöglicht die Entdeckung von Assoziationsregeln in großen Datensätzen.
  - Der Algorithmus ist einfach zu implementieren und zu verstehen.
- **Nachteile**:
  - Bei sehr großen Datenbanken kann der Algorithmus rechenintensiv werden, was zu langen Laufzeiten führt.