---
title: "Evolutionäre Algorithmen"
description: "Evolutionäre Algorithmen sind stochastische, metaheuristische Optimierungsverfahren, deren Funktionsweise an der Evolution angelehnt ist. Phasen sind Initialisierung, Bewertung, Selektion, Kreuzung und Mutation. Anwendungsgebiete sind Sensornetze und Designoptimierungen. Operatoren sind Mutation, Rekombination und Selektion."
---

Evolutionäre Algorithmen bilden eine Klasse stochastischer, metaheuristischer Optimierungsverfahren, deren Funktionsweise an der biologischen Evolution angelehnt ist. Sie werden auch als naturanaloge Optimierungsverfahren bezeichnet. Diese Algorithmen simulieren Prozesse wie Selektion, Kreuzung und Mutation, um optimale Lösungen für komplexe Probleme zu finden. Sie finden Anwendung in Bereichen wie Sensornetzen, Aktienmarktanalyse, RNA-Strukturvorhersage, Designoptimierungen und Roboterbahnplanung.

## Anwendungsgebiete
Evolutionäre Algorithmen werden in verschiedenen Bereichen eingesetzt, darunter:
- Entwicklung von Sensornetzen
- Aktienmarktanalyse
- RNA-Strukturvorhersage
- Designoptimierungen
- Roboterbahnplanung

## Phasen
Der Ablauf evolutionärer Algorithmen umfasst typischerweise folgende Phasen:
1. **Initialisierung**: Erstellung einer Start-Population
2. **Bewertung**: Bestimmung der Fitness der Population
3. **Selektion**: Auswahl der fittesten Individuen
4. **Kreuzung**: Kreuzung dieser Individuen
5. **Mutation**: Zufällige Mutation einzelner Individuen
6. **Ersatz**: Ersetzung der Population und Fortsetzung der Bewertung, bis ein Optimum erreicht ist

## Grundbegriffe
- **Individuum**: Eine Hypothese, die aufgestellt wird
- **Population**: Eine Menge von Individuen
- **Generation**: Eine hierarchische Teilmenge von Populationen (z. B. Großeltern ← Eltern ← Kinder)
- **Nachfolger**: Ein Kind als Nachfolger von Eltern und Großeltern
- **Fitnessfunktion**: Eine Güte-Funktion, die misst, wie gut ein Individuum oder eine Hypothese für die gegebenen Daten geeignet ist

## Grundalgorithmus
Der Grundalgorithmus besteht aus drei Unteralgorithmen.

### Darstellungsform 1
```python
while !optimal:  # So lange nicht alles optimal ist
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
**Initialisierung**:  
$t = 0$; *Initialisierung des Generationszählers*  
$P_t$ = Zufällige Startpopulation  
$f(p) \forall p \in P_t$ *Berechnung der initialen Bewertung*  
*Berechne für alle $p$ in $P_t$ die Fitness $f(p)$*

**while** Abbruchkriterien sind nicht erfüllt **do**  
`Partnerwahl`: Wähle entsprechend $f(p)$ eine Teilmenge von $P_t$ und speichere sie in $M_t$  
`Nachkommen`: Rekombiniere und mutiere Individuen $p \in M_t$ und speichere sie in $M'_t$;  
`Bewertung`: Berechne die Fitness $f(p') \forall p' \in M'_t$ *Berechne die Fitness aller Nachkommen $p'$ aus der neuen Teilmenge $M'_t$*  
`Nachfolgegeneration:` Erzeuge $P_{t+1}$ durch fitnessbasierte Auswahl aus $P_t$ und $M'_t$;  
$t := t + 1$; *Erhöhe den Generationszähler*  
**end while**  
`Ergebnis`: Liefere bestes Individuum $p \in P_t$ als Ergebnis ab;

Abbruchkriterien sind häufig die Anzahl durchlaufener Generationen, die vergangene Zeit oder die erreichte Lösungsqualität.

## Genetische Operatoren
Genetische Operatoren umfassen Mutation, Rekombination und Selektion. Sie dienen der Exploration des Suchraums und der Generierung neuer Individuen.

### Mutationen
Mutationen sind Suchoperatoren zur Exploration des Suchraums. Sie generieren Kinder aus einem Elternteil.

```python
def mutate(parent):
    # Zu Verständniszwecken Ausgabe von parent
    print(parent) 
    # -> 0b11000001001001010010

    # Normalverteilt um 0, zufall hat gleiche Bitlänge wie parent
    # Mögliche Ergebnisse von z sind -1, 0 und 1 
    zufall[] = new BitArray(parent.length)
    zufall <- rand()

    for index in z:
        child[index] = parent[index] + zufall[index]  # Bitwise Operations 
    
    return child
```

### Rekombination
Rekombinationen sind Suchoperatoren zur Exploration des Suchraums. Sie generieren Kinder aus zwei Elternteilen.

```python
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
Selektion wählt Individuen basierend auf ihrer Fitness aus. Verschiedene Modelle existieren.

#### Inselmodell *(häufig bevorzugt)*
```python
def island_selection(population):
    # Population wird in x Gruppen aufgeteilt (mind. 2)
    islands <- split_population(population)

    while true:
        for island in islands:
            # aus jeder Gruppe werden die fittesten X parents ausgewählt
            fittest <- select_fittest(island)
            
            # die parents generieren dann children
            children = generate_children(fittest)  # Rekomb, Mutation, ...
            
            # children kommen nicht in Gesamtpopulation sondern in ihre Gruppe zurück
            island += children

            # im jedem Durchgang werden zufällig wenige Individuen zwischen Inseln ausgetauscht
            zufall_individuum = select_random(island)
            push_to_other_island(zufall_individuum)
```

#### Einfache Menge
Die Population wird als eine große, einheitliche Menge behandelt.

#### Nachbarschaft
Aus der Nachbarschaft werden die fittesten Individuen ausgewählt. Ein Beispiel veranschaulicht dies:

| Individuum | Darstellung | Fitnesslevel |
|------------|-------------|--------------|
| a          | 000         | mittel       |
| b          | 100         | niedrig      |
| c          | 001         | hoch         |

Nachbarschaftsbeziehungen:  
- a ist benachbart mit b und c (Unterschied: 1 Bit)  
- b und c sind nicht benachbart (Unterschied: 2 Bits)  

Fitnesslevel: b < a < c  

Ergebnis der Selektion: [c, a, c]  
- Aus der Nachbarschaft von a ist c am fittesten.  
- Aus der Nachbarschaft von b ist a am fittesten.  
- Aus der Nachbarschaft von c ist c am fittesten.  

Bei zu vielen Individuen kann gefiltert werden:  
- Wenn ein Element nur einmal ausgewählt wurde, wird es entfernt.  
- Wenn es zweimal ausgewählt wurde, bleibt es, je nach gewünschter Ergebnisgröße.  
Aus der Nachbarschaft wird immer das fitteste Individuum ausgewählt.

#### Fitness Based Selection
$$
P(x) = \dfrac{|children|}{|population|} \times \dfrac{fitness(x)}{\sum_{y \in population} fitness(y)}
$$
Hierbei ist $|children|$ die Anzahl der produzierten Kinder, $|population|$ die Größe der neuen Population, $fitness(x)$ die Fitness des Individuums x (z. B. korrekte Klassifizierung auf Trainingsdaten) und $\sum_{y \in population} fitness(y)$ die Gesamtfitness der Population. Dies gibt die Wahrscheinlichkeit an, dass Individuum x wiederverwendet wird.

#### Ranking Based Selection
$$
P(x) = \dfrac{g(r(x))}{\sum_{y \in population} g(r(y))}
$$
Hierbei ist $r(x)$ der Rang des Individuums basierend auf der Fitnessfunktion (bestes Individuum: $r(x) = 1$, zweitbestes: $r(x) = 2$ usw.), $g(x)$ eine monoton fallende Funktion (z. B. $g(b) = a^{-b} = 5^{-1}$, wobei $b$ der Rang ist; höhere Ränge erhalten niedrigere Wahrscheinlichkeiten wie $5^{-1} = 0,2$ gegenüber $5^{-2} = 0,04$) und $\sum_{y \in population} g(r(y))$ die Summe der gewichteten Wahrscheinlichkeiten für alle Individuen.

#### Tournament Selection
Zufällig zwei Individuen aus der Population werden ausgewählt und anhand der Fitnessfunktion verglichen. Das fittere Individuum erhält einen Punkt. Dieser Prozess wird wiederholt, bis alle Individuen verglichen wurden. Ein Ranking entsteht basierend auf der Punktzahl (höhere Punktzahl bedeutet besseren Rang). Die besten k Individuen werden in die neue Population übernommen.

## Quellen
> Seite „Evolutionärer Algorithmus“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. September 2024, 14:20 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Evolution%C3%A4rer_Algorithmus&oldid=248648647](https://de.wikipedia.org/w/index.php?title=Evolution%C3%A4rer_Algorithmus&oldid=248648647) (Abgerufen: 17. September 2024, 05:27 UTC)  
> Tutorials, T. M. (2017, April 07). Machine Learning #57 - Evolutionäre Algorithmen #1 - Der Grundalgorithmus. Youtube. Retrieved from https://www.youtube.com/watch?v=sxT71gpsA2k  
> Seite „Stochastik“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. September 2024, 15:07 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Stochastik&oldid=248650728](https://de.wikipedia.org/w/index.php?title=Stochastik&oldid=248650728) (Abgerufen: 17. September 2024, 05:28 UTC)  
> Seite „Heuristik“. In: Wikipedia – Die freie Enzyklopädie. Bearbeitungsstand: 16. August 2024, 15:08 UTC. URL: [https://de.wikipedia.org/w/index.php?title=Heuristik&oldid=247773366](https://de.wikipedia.org/w/index.php?title=Heuristik&oldid=247773366) (Abgerufen: 17. September 2024, 05:29 UTC)  
> Tutorials, T. M. (2017, April 07). Machine Learning #58 - Evolutionäre Algorithmen #2 - Mutationen. Youtube. Retrieved from https://www.youtube.com/watch?v=Bp4Xh-alVT4  
> Tutorials, T. M. (2017, April 12). Machine Learning #59 - Evolutionäre Algorithmen #3 - Rekombinationen. Youtube. Retrieved from https://www.youtube.com/watch?v=as3lijLxVAo  
> Tutorials, T. M. (2017, April 12). Machine Learning #60 - Evolutionäre Algorithmen #4 - Selektion. Youtube. Retrieved from https://www.youtube.com/watch?v=uf--mf-7njg  
> Tutorials, T. M. (2017, April 17). Machine Learning #61 - Evolutionäre Algorithmen #5 - Fitness Based Selection. Youtube. Retrieved from https://www.youtube.com/watch?v=k58CWZjorUE  
> Tutorials, T. M. (2017, April 17). Machine Learning #62 - Evolutionäre Algorithmen #6 - Ranking Based und Tournament Selection. Youtube. Retrieved from https://www.youtube.com/watch?v=9Mk5Vq3zhxs  

[^1]: Mathematik der Daten und des Zufalls, Wahrscheinlichkeitsrechnung, ...  
[^2]: Mit begrenztem Wissen und wenig Zeit dennoch zu wahrscheinlichen Aussagen/praktikablen Lösungen kommen; "Es dient dazu, eine oder mehrere Heuristiken (auf Erfahrung und begrenztem Wissen beruhender Suchalgorithmus) zu finden, zu generieren, zu tunen oder auszuwählen, die eine hinreichend gute Lösung für ein Optimierungsproblem oder ein Problem des maschinellen Lernens bieten kann, insbesondere bei unvollständigen oder unvollkommenen Informationen oder begrenzter Rechenleistung."