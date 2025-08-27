---
title: "Support Vector Machine: Klassifikationsalgorithmus"
description: "SVM ist ein überwachte Lernmethode zur Klassifikation, besonders für kleine Datensätze. Sie findet einen optimalen Hyperplane zur Trennung von Klassen, verwendet Kernel-Trick für nicht-lineare Daten und maximiert den Gap für bessere Generalisierung."
---

- **Support Vector Machine** (SVM) ist ein **[[Überwachtes und nicht-überwachtes Lernen|überwachter Lernalgorithmus]]**, der zur **[[Klassifikation]]** von Objekten verwendet wird. 
- Hauptsächlich eingesetzt für **Text-** und **Bildklassifizierung**.
- Besonders gut geeignet für **kleinere Datensätze mit klarer Trennbarkeit**.

### Vorteile
- **Effizientes Training**: Schneller trainierbar im Vergleich zu [[Neural Network|Neural Networks]]. 
- **Gute Leistung** mit **wenigen Trainingsdaten**. 
- Kann auf lineare und nicht-lineare Daten angewendet werden (mit Hilfe des Kernel-Tricks). 

### Nachteile 
- Funktioniert standardmäßig nur mit **linear separierbaren Daten**.
- Bei nicht-linearen Daten muss eine **Kernel-Funktion** verwendet werden, was die Berechnung aufwendiger macht.

## Funktionsweise

### Lineare Klassifikation
- Ziel der SVM: Einen **Hyperplane** zu finden, der zwei Klassen von Datenpunkten optimal trennt.
- Der **Hyperplane** ist eine **Trennlinie** (in 2D) oder eine **Trennebene** (in höherdimensionalen Räumen), die die Daten so trennt, dass der **Abstand** (Gap) zwischen den **nächsten Punkten jeder Klasse** und dem Hyperplane **maximal** ist.

#### Begriffe:
- **Hyperplane**: Im p-dimensionalen Raum ist dies ein flacher Unterraum mit p-1 Dimensionen:
	 - 1D: Ein Punkt
	 - 2D: Eine Linie
	- 3D: Eine Ebene
	- **Formel**: $w^Tx+b=0$
		- Gewichtungsvektor $w$
		- Datenpunkte $x$
		- Bias $b$
		- Transponierte $^T$ (Abflachung des Vektors $w$)
- **Support Vectors**: Die Punkte, die **am nächsten** zum Hyperplane liegen und seine Lage bestimmen. Sie haben die größte Bedeutung für die Berechnung des Hyperplanes und helfen dabei, **Overfitting** zu vermeiden.
- **Maximaler Gap**: Der Abstand der **nächsten Punkte** von jeder Klasse zum Hyperplane. Je größer der Gap, desto besser ist die Trennung der Klassen.
	- Abstand ist proportinal zu $\dfrac{1}{||w||}$ -> kleines $w$, max. Abstand

![[Pasted image 20240919112516.png]]

### Nicht-lineare Klassifikation
- Wenn Daten **nicht linear trennbar** sind, reicht ein einfacher Hyperplane nicht aus.
- Hier kommt der **Kernel-Trick** ins Spiel.

## Kernel-Trick
- Der **Kernel-Trick** ermöglicht es, Datenpunkte in einen **höherdimensionalen Raum** zu transformieren, wo sie durch einen **linearen Hyperplane** trennbar werden.
- Anstatt die Daten direkt in diesen höherdimensionalen Raum zu übertragen, verwendet der Kernel-Trick eine **mathematische Funktion**, um die **inneren Produkte** der Datenpunkte im neuen Raum zu berechnen, ohne die tatsächliche Transformation durchzuführen. Dies spart **Rechenaufwand**.

#### Häufig verwendete Kernel-Funktionen:
- **Linearer Kernel**: Für linear trennbare Daten.
![[Pasted image 20240919114509.png]]  - **Polynomieller Kernel**: Für nicht-lineare Daten, die durch eine polynomiale Trennung separiert werden können.
![[Pasted image 20240919114310.png]]
- **Radial Basis Function (RBF)**: Ein häufig verwendeter Kernel, um Daten mit nicht-linearen Mustern zu klassifizieren. Transformiert die Daten in einen sehr hohen (theoretisch unendlichen) dimensionalen Raum.
![[Pasted image 20240919114601.png]]
*(rechtes bild)*


### Vorteile des Kernel-Tricks:
- **Effiziente Transformation**: Der Trick führt zu einer Transformation ohne den tatsächlichen Aufwand der Berechnung eines höherdimensionalen Raums.
- **Anwendung auf komplexe Daten**: Selbst bei hochkomplexen und nicht-linearen Daten können durch den Kernel-Trick gute Ergebnisse erzielt werden.

### Nachteile des Kernel-Tricks:
- **Erhöhter Rechenaufwand**: Für große Datensätze und komplexe Kernel-Funktionen kann der Berechnungsaufwand erheblich steigen.
- **Auswahl des richtigen Kernels**: Es kann schwierig sein, den geeigneten Kernel und dessen Parameter auszuwählen, um optimale Ergebnisse zu erzielen.

## Zusammenfassung
- **SVM** ist ein leistungsstarker **Klassifikationsalgorithmus**, der sich besonders gut für **lineare Daten** eignet.
- Bei nicht-linearen Daten wird der **Kernel-Trick** verwendet, um die Daten trennbar zu machen.
- **Support Vectors** sind dabei die Schlüssel, die die Lage des **Hyperplanes** bestimmen und Overfitting vermeiden.
- Der **Gap** wird maximiert, um eine möglichst klare Trennung zwischen den Klassen zu erzielen.
  
## Quellen

> Support Vector Machine (SVM) - einfach erklärt! | Data Basecamp. (2024, September 19). Retrieved from https://databasecamp.de/ki/support-vector-machine-svm
> Science, P. D. (2018, July 09). Einführung in die Datenanalyse: Support Vector Machine. Youtube. Retrieved from https://www.youtube.com/watch?v=Xn1-0it0f5g 
> Explained, V. (2022, May 09). The Kernel Trick in Support Vector Machine (SVM). Youtube. Retrieved from https://www.youtube.com/watch?v=Q7vT0--5VII
> Explained, V. (2021, September 09). Support Vector Machine (SVM) in 2 minutes. Youtube. Retrieved from https://www.youtube.com/watch?v=_YPScrckx28&t=77s