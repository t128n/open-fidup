---
title: "Evolutionäre Algorithmen"
description: "Evolutionäre Algorithmen sind stochastische, metaheuristische Optimierungsverfahren, deren Funktionsweise an der Evolution angelehnt ist. Phasen sind Initialisierung, Bewertung, Selektion, Kreuzung und Mutation. Anwendungsgebiete sind Sensornetze und Designoptimierungen. Operatoren sind Mutation, Rekombination und Selektion."
---

- Klasse an *stochastischen*[^1], *metaheuristischen*[^2] **Optimierungsverfahren**, deren Funktionsweise an der Evolution angelehnt ist
- **naturanaloges** Optimierungsverfahren

## Anwendungsgebiete
- Entwicklung von Sensornetzen
- Aktienmarktanalyse
- RNA-Strukturvorhersage
- Designoptimierungen
- ROboterbahnplanung

## Phasen
1. **Initialisierung**: Start-Population erstellen
2. **Bewertung**: Fitness der Population bestimmen
3. **Selektion**: Fitteste Individuum auswählen
4. **Kreuzung**: Diese miteinander Kreuzen
5. **Mutation**: Zufällige Individuen Mutieren
6. **Ersatz**: Population ersetzen, mit Bewertung fortsetzen bis Optimum erreicht

## Grundbegriffe
- **Individuum**, Hypothese, die Aufgestellt wird
- **Population**, Menge an Individuen
- **Generation**, Hierarchische Teilmenge an Populationen (... <- Kind <- Eltern <- Großeltern)
- **Nachfolger**, ein Kind ist Nachfolger von Eltern und Großeltern, ...
- **Fitnessfunktion**, Güte-Funktion, Maß wie gut Hypothese/*Individuum* ist für Daten

## Grundalgorithmus
- besteht aus drei *Unteralgorithmen*
### Darstellungsform 1
```python # Pseudocode
while !optimal: # So lange nicht alles Optimal ist
	# Eltern mit größter Fitness
	parents <- select_parents(population) 
	
	# Kinder werden anhand von Eltern generiert
	children <- generate_children(parents)
	
	# Children werden in Population gesteckt, Population wird selektiert
	population <- select_population(fitness, population, children)
	# Möglich mit sowohl nur children als auch population + children
	# Bei population + children bias Richtung einer Lösung -> im lokalen Maximum hängen bleiben
	# Bei nur children experimenteller, bessere Lösungen könnten gefunden werden
```
### Darstellungsform 2
`Initialisierung`: 
$t = 0$; *Intialisierung des Generationszählers*
$P_t$ = Zufällige Startpopulation
$f(p) \forall p  \in P_t$ *Berechnung der initialen Bewertung*
*Berechne für alle $p$ in $P_t$ die Fitness $f(p)$*

**while** Abbruchkriterien sind nicht erfüllt **do**
`Partnerwahl`: Wähle entsprechend $f(p)$ eine Teilmenge von $P_t$ und speichere sie in $M_t$
`Nachkommen`: Rekombiniere und mutiere Individuen $p \in M_t$ und speichere sie in $M'_t$;
`Bewertung`: Berechne die Fitness $f(p') \forall p' \in M'_t$ *Berechne die Fitness aller Nachkommen $p'$ aus der neuen Teilmenge $M'_t$*
`Nachfolgegeneration:` Erzeuge $P_{t+1}$ durch fitnessbasierte Auswahl aus $P_t$ und $M'_t$;
$t := t + 1$; *Erhöhe den Generationszähler*
**end while**
`Ergebnis`: Liefere bestes Individuum $p \in P_t$ als Ergebnis ab;

- Abbruchkriterien sind häufig Anzahl durchlaufener Generationen, vergangene Zeit oder erreichte Lösungsqualität

## Genetische Operatoren
### Mutationen
- Suchoperator, Suchraum wird erkundet
- Methode um Kinder zu generieren mit *einem* Elternteil
```python # Pseudocode
def mutate(parent):
	# Zu Verständniszwecken Ausgabe von parent
	print(parent) 
	# -> 0b11000001001001010010

	# Normalverteilt um 0, zufall hat gleiche Bitlänge wie parent
	# Mögliche Ergebnisse von z sind -1, 0 und 1 
	zufall[] = new BitArray(parent.length)
	zufall <- rand()

	for index in z:
		child[index] = parent[index] + zufall[index] # Bitwise Operations 
	
	return child
```

### Rekombination
- Suchoperator, Suchraum wird erkundet
- Methode um Kinder zu generieren mit *zwei* Elternteilen
```python # Pseudocode
# Uniformer Rekombinationsalgorithmus
def uniform_rekomb(parent1, parent2):
	# Zu Verständniszwecken Ausgabe von parent1, parent2
	print(parent1, parent2) 
	# -> 0b11000001001001010010 0b11001111001100011010

	# Zufalls Bitarray von Elternteilen
	# Da parent1 und parent2 gleiche Länge egal ob parent1.length oder ...
	zufall[] = new BitArray(parent1.length)
	# Array ist Gleichverteilt, 50% 1 50% 0
	zufall <- rand()

	child = 0b
	for index in zufall:
		# Wenn zufall am index ist 0, dann von parent1
		if zufall[index] == 0:
			child += parent1[index]
		# Wenn zufall am index ist 1, dann von parent2
		elif zufall[index] == 1:
			child += parent2[index]

	return child
	
# Crossover Rekombinationsalgorithmus
def crossover_rekomb(parent1, parent2):
	# Single Point bei nur z1, Two Point bei z1 und z2
	z1, z2 <- rand()

	# Bspw. z1 ist 3, z2 ist 7
	z1 = 3
	z2 = 7

	# Ersten z1 Bits von p1, Zweiten z2 Bits von p2, letzten von p1
	child1 = parent1[1:3] + parent2[3:7] + parent1[7:MAX]
	# child1 = parent1[1:z1] + parent2[z1:z2] + parent1[z2:MAX]
	
	# Ersten z1 Bits von p2, Zweiten z2 Bits von p1, letzten von p2
	child2 = parent2[1:3] + parent1[3:7] + parent2[7:MAX]
	# child2 = parent2[1:z1] + parent1[z1:z2] + parent2[z2:MAX]

	return child1, child2
```

### Selektion

#### Inselmodell *(häufig bevorzugt)*
```python # Pseudocode
def island_selection(population):
	# Population wird in x Gruppen aufgeteilt (mind. 2)
	islands <- split_population(population)

	while true:
		for island in islands:
			# aus jeder Gruppe werden die fittesten X parents ausgewählt
			fittest <- select_fittest(island)
			
			# die parents generieren dann children
			children = generate_children(fittest) # Rekomb, Mutation, ...
			
			# children kommen nicht in Gesamtpopulation sondern in ihre Gruppe zurück
			island += children

			# im jedem Durchgang werden zufällig wenige Individuen zwischen Inseln ausgetauscht
			zufall_individuum = select_random(island)
			push_to_other_island(zufall_individuum)
```

#### Einfache Menge
- eine große Menge, Population als ganzes

#### Nachbarschaft
- Aus der **Nachbarschaft** werden die **fittesten** Individuen ausgewählt.
- Beispiel:
	- Individuen:
		- a: `000`
		- b: `100`
		- c: `001`
	- **Nachbarschaftsbeziehungen**:
		- `a` ist benachbart mit `b` und `c` (Unterschied: **1 Bit**)
		- `b` und `c` sind nicht benachbart (Unterschied: **2 Bits**)
	- **Fitnesslevel**: `b` < `a` < `c`
- **Ergebnis** der Selektion: `[c, a, c]`
	- Aus der Nachbarschaft von `a` ist `c` am **fittesten**.
	- Aus der Nachbarschaft von `b` ist `a` am **fittesten**.
	- Aus der Nachbarschaft von `c` ist `c` am **fittesten**.
- Bei zu vielen Individuen kann **gefiltert** werden:
	- Wenn ein Element nur einmal ausgewählt wurde, wird es entfernt.
	- Wenn es zweimal ausgewählt wurde, bleibt es, je nach gewünschter **Ergebnisgröße**.
- Aus der Nachbarschaft wird immer der **fitteste** Individuum ausgewählt.

#### Fitness Based Selection
$$
P(x) = \dfrac{|children|}{|population|} \times \dfrac{fitness(x)}{\sum_{y \in population}fitness(y)}
$$
$|children|$ = Anzahl an produzierten Kindern
$|population|$ = Anzahl/Größe der neuen Population
$fitness(x)$ = Berechnung der Fitness vom Individuum; Wie gut ist Hypothese `x` auf meinen Trainingsdaten? (Richtige Klassifizierung, ...)
$\sum_{y \in population}fitness(y)$ = Fitness der Population

-> Wie wahrscheinlich ist es dass Individuum `x` wiederverwendet wird?

#### Ranking Based Selection

$$
P(x) = \dfrac{g(r(x))}{\sum_{y \in population}g(r(y))}
$$
$r(x)$ = Ranking, wie gut Individuum ist. Bestes Individuum ist $r(x) = 1$, zweitbestes Individuum ist $r(x) = 2$, usw. anhand von Fitnessfunktion
$g(x)$ = Monotonfallende Funktion, bspw. $g(b)=a^{-b}=5^{-1}$, wobei $b$ der Rang von $r(x)$ ist. $^{-1}$ hat höhere Wahrscheinlichkeit (0,2) als $^{-2}$ (0,04) usw.
$\sum_{y \in population}g(r(y))$ = Gesamtheit der gewichteten Wahrscheinlichkeiten für alle Individuen in der Population, basierend auf ihren Rängen

#### Tournament Selection
- Wähle **zufällig zwei Individuen** aus der Population aus und **vergleiche** sie anhand einer Fitnessfunktion.
- Wenn das Fitnessmaß von Individuum `x` größer ist als das von Individuum `y`, erhält `x` einen Punkt.
- Wiederhole diesen Prozess, indem du erneut zufällig zwei Individuen auswählst, bis alle Individuen miteinander verglichen wurden.
- Am Ende des Vergleichs wird ein Ranking erstellt, wobei eine **höhere Punktzahl einen besseren Rang** bedeutet.
- Die besten `k` Individuen werden in die neue Population übernommen.

$$
$$

[^1:] Mathematik der Daten und des Zufalls, Wahrscheinlichkeitsrechnung, ...
[^2:] mit begrenztem Wissen und wenig Zeit dennoch zu wahrscheinlichen Aussagen/praktikablen Lösungen kommen; "Es dient dazu, eine oder mehrere Heuristiken (auf Erfahrung und begrenztem Wissen beruhender Suchalgorithmus) zu finden, zu generieren, zu tunen oder auszuwählen, die eine hinreichend gute Lösung für ein Optimierungsproblem oder ein Problem des maschinellen Lernens bieten kann, insbesondere bei unvollständigen oder unvollkommenen Informationen oder begrenzter Rechenleistung."
## Quellen

> Seite „Evolutionärer Algorithmus“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. September 2024, 14:20 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Evolution%C3%A4rer_Algorithmus&oldid=248648647](https://de.wikipedia.org/w/index.php?title=Evolution%C3%A4rer_Algorithmus&oldid=248648647) (Abgerufen: 17. September 2024, 05:27 UTC)
> Tutorials, T. M. (2017, April 07). Machine Learning #57 - Evolutionäre Algorithmen #1 - Der Grundalgorithmus. Youtube. Retrieved from https://www.youtube.com/watch?v=sxT71gpsA2k
> Seite „Stochastik“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. September 2024, 15:07 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Stochastik&oldid=248650728](https://de.wikipedia.org/w/index.php?title=Stochastik&oldid=248650728) (Abgerufen: 17. September 2024, 05:28 UTC)
> Seite „Heuristik“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. August 2024, 15:08 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Heuristik&oldid=247773366](https://de.wikipedia.org/w/index.php?title=Heuristik&oldid=247773366) (Abgerufen: 17. September 2024, 05:29 UTC)
> Tutorials, T. M. (2017, April 07). Machine Learning #58 - Evolutionäre Algorithmen #2 - Mutationen. Youtube. Retrieved from https://www.youtube.com/watch?v=Bp4Xh-alVT4
> Tutorials, T. M. (2017, April 12). Machine Learning #59 - Evolutionäre Algorithmen #3 - Rekombinationen. Youtube. Retrieved from https://www.youtube.com/watch?v=as3lijLxVAo
> Tutorials, T. M. (2017, April 12). Machine Learning #60 - Evolutionäre Algorithmen #4 - Selektion. Youtube. Retrieved from https://www.youtube.com/watch?v=uf--mf-7njg
> Tutorials, T. M. (2017, April 17). Machine Learning #61 - Evolutionäre Algorithmen #5 - Fitness Based Selection. Youtube. Retrieved from https://www.youtube.com/watch?v=k58CWZjorUE
> Tutorials, T. M. (2017, April 17). Machine Learning #62 - Evolutionäre Algorithmen #6 - Ranking Based und Tournament Selection. Youtube. Retrieved from https://www.youtube.com/watch?v=9Mk5Vq3zhxs
