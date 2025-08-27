---
title: "Assoziationsanalyse"
description: "Die Assoziationsanalyse sucht nach häufig auftretenden Mustern und Korrelationen zwischen Datenelementen in großen Datenbanken. Sie verwendet Begriffe wie Support, Konfidenz und Frequent Itemsets. Der Apriori-Algorithmus findet Frequent Itemsets iterativ durch Join und Prune."
---

- die **Assoziationsanalyse** sucht nach **häufig auftretenden Mustern**, **Korrelationen** oder **kausalen Strukturen** zwischen Datenelementen in großen Datenbanken
	- *wenn **X** dann wahrscheinlich auch **Y***

## Grundbegriffe
- **Itemset**, Menge bestehend aus mindestens zwei Elementen
- **Support**, Häufigkeit wie oft ein Produkt relativ gekauft wird
	- $Support(A)=\dfrac{Transkationen \space mit \space A}{Alle \space Transaktionen}$ ![[Pasted image 20241002155440.png]]
- **Konfidenz**, misst Support aller Transaktionen, die A und B enthalten
	- $Konfidenz(A + B) = \dfrac{Support(A \cup B)}{Support(A)} = \dfrac{Transaktionen \space mit \space A \space und \space B}{Transaktionen \space mit \space A}$ ![[Pasted image 20241002155500.png]]
- **Assoziationsregel**, sucht Regelmäßigkeiten zwischen zwei oder mehr Elementen
- **Frequent Itemset**, Menge von Elementen die häufig zusammen auftreten, die vorher definiertes Level an Support und Konfidenz

## Apriori Algorithmus
- Methode zur Findung von **Frequent Itemsets**
- **iterative Durchführung der Schritte**:
	- **Join**, Bildung von Itemsets der Menge $K$ ($K$ ist der aktuelle Wiederholungsschritt)
	- **Prune**, Entfernen von allen Itemsets, die **Supportschwelle** nicht erreichen und deshalb als selten gesehen werden
	- **->** sofern keine neuen Itemsets mehr gefunden werden, ist Algorithmus terminiert

## Vor- und Nachteile
- **Vorteile**
	- gute Möglichkeit um Assoziationsregeln zu finden
	- Einfach zu implementieren
- **Nachteile**
	- bei großen Datenbanken sehr rechenintensiv
