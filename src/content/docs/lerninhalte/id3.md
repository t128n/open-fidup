---
title: "ID3-Algorithmus"
description: "Der ID3-Algorithmus baut Entscheidungsbäume iterativ auf, indem er Attribute mit dem höchsten Informationsgewinn wählt. Er eignet sich für große Datensätze mit vielen Attributen zur Klassifikation."
---

- **I**terative **D**ichotomiser **3**, Algorithmus zur **Entscheidungsfindung**
- wird bei [[Entscheidungsbaum|Entscheidungsbäumen]] eingesetzt mit **großen Datenmengen** und **vielen verschiedene Attributen** von Bedeutung

- Basisstruktur ist **iterativ**
- **[[Entropie und Informationsgewinn|Entropien]]** berechnet, Attribut mit höchstem [[Entropie und Informationsgewinn|Informationsgewinn]] bzw. kleinster [[Entropie und Informationsgewinn|Entropie]] wird gewählt. Wenn jedem Blattknoten eine Klassifikation zugeordnet ist, ist Verfahren terminiert 
## Algorithmus

$T = Daten$
- ***Wenn*** alle Elemente aus $T$ zu einer Klasse gehören
	- ***Dann***
		- *// Erzeuge ein Blatt //*
			- ***Konstruiere*** ein Blatt mit **Klasse** als **Bezeichner**
	- ***Sonst***
		- *// Erzeuge rekursiv einen Teilbaum //*
			- ***Wähle*** Merkmal $x_i$ mit höchstem **[[Entropie und Informationsgewinn|information gain]]**
				- ***Für alle*** vorkommende Werte von Merkmal $x_i$
					- ***Konstruiere*** alle Teilbäume rekursiv mit den entsprechenden Teilmengen als Daten
				- ***Ende*** für Alle
				- ***Konstruiere*** einen Baumknoten mit Bezeichner $x_i$ und hänge alle erzeugten Teilbäume an
	- ***Ende*** Sonst
- ***Ende***

## Beispiel

| play | outlook | temp | humid | wind | day     | moon |
| ---- | ------- | ---- | ----- | ---- | ------- | ---- |
| no   | sunny   | hot  | high  | weak | tuesday | full |
| ...  | ...     | ...  | ...   | ...  | ...     | ...  |
- Input Datensatz, `play` wird die vorhergesagte Variable sein

![[Pasted image 20240912134913.png]]


## Quellen

> Autoren der Wikimedia-Projekte. (2004, February 28). Iterative Dichotomiser 3 – Wikipedia. Retrieved from https://de.wikipedia.org/w/index.php?title=Iterative_Dichotomiser_3&oldid=209630820
> Example: How to train the ID3 classifier to perform classification (SPMF - Java). (2024, September 12). Retrieved from https://www.philippe-fournier-viger.com/spmf/ID3.php