---
title: "Regression"
description: "Regression ist ein überwachte Lernmethode zur Vorhersage einer abhängigen Variable durch unabhängige Variablen. Formen umfassen lineare, multiple und logistische Regression. Berechnung erfolgt durch Minimierung der Kostenfunktion mit Gradientenabstieg."
---

> [!WARNING]
> Multivarielle Regression -> Gradientenabstieg, wie konkrete Umsetzung?
> https://www.youtube.com/watch?v=YMTwWKPliLw

- gehört zum [überwachten Lernen](/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen)
- ausgehend von **einer oder mehreren Variablen** (*Unabhängige Variablen* bzw. *Prädiktoren*) auf **eine weitere Variable** (*Abhängige Variable* bzw. *Kriterium*) zu schließen
	- **Messung** des **Einflusses** einer oder mehreren Variablen auf eine weitere Variable bzw. **Vorhersage** einer Variable durch eine oder mehrere andere Variablen
- **Prädikatoren** können metrisch, [ordinal](/lerninhalte/ordinalskala) oder nominal sein

## Formen

### **Einfache lineare** / **Univariate** Regression
- Vorhersage **eines Kriteriums** anhand von **eines Prädikators** (1:1)
- **Formel:**
	- $ \hat{y} = b 	imes x + a = 	heta_0 + 	heta_1 x $ 
	- Kriterium $\hat{y}$
	- Steigung $b/	heta_1$
	- Prädikator $x$
	- Aufpunkt/Achsenschnitt $a/	heta_0$
- **Berechnung**
	- $b/	heta_1 = r \dfrac{s_y}{s_x}$
		- [Korrelation](/lerninhalte/korrelationskoeffizient) zwischen $x$ und $y$: $r$
		- [Standardabweichung](/lerninhalte/standardabweichung) von $y$: $s_y$
		- [Standardabweichung](/lerninhalte/standardabweichung) von $x$: $s_x$
	- $a/\theta_0 = \bar{y} - b \times \bar{x} = \bar{y} - \theta_1 \times \bar{x}$
			- [Mittelwert](/lerninhalte/arithmetisches-mittel) von $y$: $\bar{y}$
			- [Mittelwert](/lerninhalte/arithmetisches-mittel) von $x$: $\bar{x}$
			### **Multiple lineare** / **Multivariate** Regression
	- Vorhersage **eines Kriteriums** anhand **mehrerer Prädikatoren** (n:1)
	- **Formel:** $\hat{y} = b_1 \times x_1 + b_2 \times x_2 + ... + b_k \times x_k + a = \theta_0+\theta_1x_2+\theta_2x_2+...+\theta_mx_m$
	- Berechnung und Deutung ähnlich wie bei der [einfachen linearen Regression](/lerninhalte/regression#einfache-lineare-regression)

	### **Logistische** Regression
	- Vorhersage eines **Ja/Nein-Prädikators**, Kategorische Einordnung
	- abhängige Variable ist eine **dichotome Variable** -> Variable mit nur *zwei Ausprägungen*
	- **Formel:** $f(z) = \dfrac{1}{1 + e^{{\theta_0}_1 \times x_1 + ... {\theta_0}_k \times x_k + a}}$
	- Wahrscheinlichkeit, ob abhängige Variable $z$ ist: $P(y=z|x_1,...,x_n) = \dfrac{1}{1 + e^{-({\theta_0}_1 \times x_1 + ... + {\theta_0}_k \times x_k +\theta_1)}}$
		- Eulersche Zahl $e$ (ungef. $2,71828$) 
	- Berechnung von $\theta_0$ anhand vom [Gradientabstiegsverfahren](/lerninhalte/regression#gradientabstiegsverfahren)
	- Ableitung der Kostenfunktion identisch mit der für die [lineare Regression](/lerninhalte/regression#multiple-lineare-multivariate-regression)
	- Berechnung nach folgendem Schema:
		- Berechnung der [multivariaten Regression](/lerninhalte/regression#multiple-lineare-multivariate-regression)
		- Anwendung der Sigmoidfunktion auf $\hat{y}$ 

## Kostenfunktion

### Univariate Regression

$$
J(	heta_0, 	heta_1) = \dfrac{1}{2N} \sum^{N}_{n=1}
(	heta_0 + 	heta_1 x_n - y_n)^2
$$

### Multivariate Regression

$$
J(	heta_0,	heta_1) = \dfrac{1}{2N} \sum^{N}_{n=1} (h_	heta(x_{n}) - y_{n})^2
$$
- $N$ Anzahl der Datenpunkte
- $h_0(x_{n})$ Vorhersagefunktion des Modells (z.B. $\hat{y} =...$)
- $y_n$ Zielwert
- $\sum^N_{n=1}(...)^2$ quadrierter Fehler aller Datenpunkte um Richtung des Fehlers zu eliminieren
- $\dfrac{1}{2N}$ Den Fehler über alle Datenpunkte mitteln

> [!Erklärung]-
> Die Formel
>
> $J(	heta_0, 	heta_1) = \dfrac{1}{2N} \sum^{N}_{n=1} (h_	heta(x^{(n)}) - y^{(n)})^2$
>
> ist die **Kostenfunktion** (auch Fehlerfunktion genannt) der linearen Regression. Sie hilft dabei, zu messen, wie gut unsere Vorhersagen des Modells sind im Vergleich zu den tatsächlichen Werten. Um sie zu verstehen, erkläre ich sie in einfachen Schritten:
> 
> 1. **$N$**: Das ist die Anzahl der Datenpunkte, also wie viele Paare von Eingabe (x) und tatsächlichem Ergebnis (y) wir in unserem Trainingsdatensatz haben.
> 
> 2. **$h_	heta(x^{(n)})$**: Dies ist die Vorhersage unseres Modells für den n-ten Datenpunkt. Das Modell gibt uns eine Schätzung basierend auf den Werten von $x$ (den Eingabe-Features) und den Parametern **$	heta_0$ und $	heta_1$** (also die Geradengleichung).
>
> 3. **$y^{(n)}$**: Das ist der tatsächliche Wert (Zielwert) für den n-ten Datenpunkt. Es ist das, was wir „wirklich“ gemessen haben.
> 
> 4. **$(h_	heta(x^{(n)}) - y^{(n)})^2$**: Hier berechnen wir den Unterschied zwischen der Vorhersage des Modells **$h_	heta(x^{(n)})$** und dem tatsächlichen Wert **$y^{(n)}$**. Der Unterschied wird quadriert, um sicherzustellen, dass sowohl positive als auch negative Abweichungen gleichermaßen bestraft werden (sonst würden sich Abweichungen möglicherweise gegenseitig aufheben).
> 
> 5. **Summe $\sum^{N}_{n=1}$**: Das bedeutet, dass wir diesen quadrierten Fehler für **alle** Datenpunkte berechnen und addieren. So messen wir den Gesamtfehler für den gesamten Datensatz.
> 6. **$\dfrac{1}{2N}$**: Zum Schluss teilen wir die Summe durch $2N$. Das sorgt dafür, dass der Fehlerwert nicht zu groß wird (wir mitteln die Fehler über alle Datenpunkte), und die $1/2$ erleichtert später die Ableitung, wenn wir die optimale Lösung für **$	heta_0$** und **$	heta_1$** berechnen.
> 
> **Einfach erklärt**:
> Die Kostenfunktion sagt uns also, **wie weit unsere Vorhersagen vom tatsächlichen Ergebnis entfernt sind**. Je kleiner der Wert der Kostenfunktion, desto besser passen unsere Vorhersagen zum echten Ergebnis.


## Berechnung

### Nullstellen der Kostenfunktionsableitung
- **Berechnung** der **Nullstellen** der **Kostenfunktionsableitung**
	- *-> Nullstelle der Ableitung gibt Extrempunkt (in diesem Fall das Minimum) an*

- Ableitungen der Kostenfunktion (wobei $\sum x$ = $\sum^{N}_{n=1}x^{(n)}$):
$$
\dfrac{\partial}{\partial 	heta_0}J(	heta_0,	heta_1) = 0 \Longleftrightarrow 	heta_0 = \dfrac{(\sum y)(\sum {x^2}) - (\sum x)(\sum {xy})}{N	imes\sum {x^2}-(\sum x)^2}
$$
> [!Code Äquivalent]-
> ```python
> theta0 = ( 
>	(sum(y) * sum(x ** 2) - sum(x) * sum(x * y)) / 
>	(n * sum(x ** 2) - sum(x) ** 2) 
 >)
> ```

$$
\dfrac{\partial}{\partial 	heta_1}J(	heta_0,	heta_1) = 0 \Longleftrightarrow 	heta_1 = \dfrac{(\sum y)(\sum {x^2}) - (\sum x)(\sum {xy})}{N \sum {x^2}-(\sum x)^2}
$$
> [!Code äquivalent]-
> ```python
> theta1 = ( 
> 	(n * sum(x * y) - sum(x) * sum(y)) / 
> 	(n * sum(x ** 2) - sum(x) **2 ) 
> )
> ```

- akkurater als Gradientabstiegsverfahren, daher keine **[Feature-Skalierung](#feature-skalierung)**
- bessere Methode bei kleiner bis mittlerer Datenmenge

### Gradientabstiegsverfahren
- Minimierung der Kostenfunktion durch **schrittweise Anpassung** der Parameter $	heta_0$ (y-Achsenabschnitt) und $	heta_1$ (Steigung).
- Beginn mit zufälligen oder nullinitialisierten $	heta$-Werten.
- **Vorhersagefunktion**:
$$
h_	heta(x) = 	heta_0 + 	heta_1 \cdot x
$$
- **Kostenfunktion** (Mean Squared Error):
$$
J(	heta_0, 	heta_1) = \frac{1}{2n} \sum_{i=1}^{n} \left( h_	heta(x^{(i)}) - y^{(i)} 
ight)^2
$$

#### Ableitungen der Kostenfunktion
- Die Ableitungen der Kostenfunktion zeigen, wie sich die Kostenfunktion verändert, wenn ($	heta_0$) und ( $	heta_1$) angepasst werden.
1. **Ableitung nach ($	heta_0$)**:
$$
\dfrac{\partial}{\partial 	heta_0} J(	heta_0, 	heta_1) = \frac{-1}{n} \sum_{i=1}^{n} \left( y^{(i)} - h_	heta(x^{(i)}) 
ight)
$$
2. **Ableitung nach ($	heta_1$)**:
$$
\dfrac{\partial}{\partial 	heta_1} J(	heta_0, 	heta_1) = \frac{-1}{n} \sum_{i=1}^{n} x^{(i)} \left( y^{(i)} - h_	heta(x^{(i)}) 
ight)
$$

#### Update-Regeln für die Parameter
- Um die Parameter zu aktualisieren, bewegen wir uns in die **entgegengesetzte Richtung der Ableitungen**:
- **Update für ($	heta_0$)**:
$$
	heta_0 \leftarrow 	heta_0 - \alpha \cdot \frac{1}{n} \sum_{i=1}^{n} \left( h_	heta(x_{(i)}) - y_{(i)} 
ight)
$$

- **Update für ($	heta_1$)**:
$$
	heta_1 \leftarrow 	heta_1 - \alpha \cdot \frac{1}{n} \sum_{i=1}^{n} x_{(i)} \left( h_	heta(x_{(i)}) - y_{(i)} 
ight)
$$
- Lernrate $\alpha$
	- Ist der Wert zu klein, dauert es sehr lange, bis der Gradientenabstieg konvergiert

#### Code-Äquivalent

```python
# Gradientenabstieg
for step in range(0, 1000): 
	# Berechne die vorhergesagten y-Werte (y_pred) basierend 
	# auf aktuellen theta-Werten
	y_pred = theta0 + x * theta1
	
    # Aktualisiere theta1: 
    # Subtrahiere den Gradienten der Kostenfunktion bezüglich theta1
	theta1_new = theta1 - learning_rate * (1 / n) * sum(x * (y_pred - y))
	
    # Aktualisiere theta0: 
    # Subtrahiere den Gradienten der Kostenfunktion bezüglich theta0
	theta0_new = theta0 - learning_rate * (1 / n) * sum(y_pred - y)
	
	# Setze die neuen theta-Werte für den nächsten Schritt
	theta0, theta1 = theta0_new, theta1_new 
	
	# Speichere die theta-Werte alle 50 Schritte zur späteren Analyse
	if step % 50 == 0: 
		theta0s.append(theta0)
		theta1s.append(theta1)
```

#### Pseudocode für den Gradientenabstieg
```pseudo
1. INITIALISIERUNG:    
    - Setze theta0 = 0 (y-Achsenabschnitt)
    - Setze theta1 = 0 (Steigung)
    - Setze learning_rate = α (z.B. 0.1)
    - Setze Anzahl der Schritte (iterations) = 1000
    - Lade die Datenpunkte (x, y) in Arrays
    - n = Anzahl der Datenpunkte

2. FÜR jede Iteration von 1 bis iterations WIEDERHOLE:    
    - Berechne die Vorhersage für jedes x: y_pred = theta0 + theta1 * x
    - Berechne den Fehler (Differenz zwischen y_pred und y): error = y_pred - y

    - Berechne die Anpassungen für theta1: sum_term_theta1 = SUMME(x * error) (für alle Datenpunkte) theta1 = theta1 - learning_rate * (1 / n) * sum_term_theta1
	
    - Berechne die Anpassungen für theta0: sum_term_theta0 = SUMME(error) (für alle Datenpunkte) theta0 = theta0 - learning_rate * (1 / n) * sum_term_theta0
	
3. ENDE der Schleife
    
4. AUSGABE:   
    - Gebe die finalen Werte von theta0 und theta1 aus.
```

- Der Gradientenabstieg ist besonders vorteilhaft bei großen Datenmengen.



## Feature-Skalierung
- Werte der Features werden auf einen bestimmten Bereich (z.B. 0 bis 1) skaliert, um die Konvergenz[^1:] zu beschleunigen:
  $x_{	ext{scaled}}^{(n)} = \dfrac{x^{(n)} - \min(x)}{\max(x) - \min(x)}$
  - Wichtig: sofern die Features skaliert werden, müssen später auch die Eingabewerte gleichskaliert werden.

---
[^1:] In der Mathematik und beim maschinellen Lernen beschreibt Konvergenz den Prozess, bei dem ein Algorithmus Schritt für Schritt einer optimalen Lösung (z.B. minimaler Fehler) immer näher kommt.

- gehört zum [überwachten Lernen](/lerninhalte/ueberwachtes-und-nicht-ueberwachtes-lernen)
- ausgehend von **einer oder mehreren Variablen** (*Unabhängige Variablen* bzw. *Prädiktoren*) auf **eine weitere Variable** (*Abhängige Variable* bzw. *Kriterium*) zu schließen
	- **Messung** des **Einflusses** einer oder mehreren Variablen auf eine weitere Variable bzw. **Vorhersage** einer Variable durch eine oder mehrere andere Variablen
- **Prädikatoren** können metrisch, [ordinal](/lerninhalte/ordinalskala) oder nominal sein

## Formen

### **Einfache lineare** / **Univariate** Regression
- Vorhersage **eines Kriteriums** anhand von **eines Prädikators** (1:1)
- **Formel:**
	- $\hat{y} = b \times x + a = \theta_0 + \theta_1 x$ 
	- Kriterium $\hat{y}$
	- Steigung $b/\theta_1$
	- Prädikator $x$
	- Aufpunkt/Achsenschnitt $a/\theta_0$
- **Berechnung**
	- $b/\theta_1 = r \dfrac{s_y}{s_x}$
		- [Korrelation](/lerninhalte/korrelationskoeffizient) zwischen $x$ und $y$: $r$
		- [Standardabweichung](/lerninhalte/standardabweichung) von $y$: $s_y$
		- [Standardabweichung](/lerninhalte/standardabweichung) von $x$: $s_x$
	- $a/\theta_0 = \bar{y} - b \times \bar{x} = \bar{y} - \theta_1 \times \bar{x}$
		- [Mittelwert](/lerninhalte/arithmetisches-mittel) von $y$: $\bar{y}$
		- [Mittelwert](/lerninhalte/arithmetisches-mittel) von $x$: $\bar{x}$

### **Multiple lineare** / **Multivariate** Regression
- Vorhersage **eines Kriteriums** anhand **mehrerer Prädikatoren** (n:1)
- **Formel:** $\hat{y} = b_1 \times x_1 + b_2 \times x_2 + ... + b_k \times x_k + a = \theta_0+\theta_1x_2+\theta_2x_2+...+\theta_mx_m$
- Berechnung und Deutung ähnlich wie bei der [einfachen linearen Regression](/lerninhalte/regression#einfache-lineare-regression)

### **Logistische** Regression
- Vorhersage eines **Ja/Nein-Prädikators**, Kategorische Einordnung
- abhängige Variable ist eine **dichotome Variable** -> Variable mit nur *zwei Ausprägungen*
- **Formel:** $f(z) = \dfrac{1}{1 + e^{{\theta_0}_1 \times x_1 + ... {\theta_0}_k \times x_k + a}}$
- Wahrscheinlichkeit, ob abhängige Variable $z$ ist: $P(y=z|x_1,...,x_n) = \dfrac{1}{1 + e^{-({\theta_0}_1 \times x_1 + ... + {\theta_0}_k \times x_k +\theta_1)}}$
	- Eulersche Zahl $e$ (ungef. $2,71828$) 
- Berechnung von $\theta_0$ anhand vom [Gradientabstiegsverfahren](/lerninhalte/regression#gradientabstiegsverfahren)
- Ableitung der Kostenfunktion identisch mit der für die [lineare Regression](/lerninhalte/regression#multiple-lineare-multivariate-regression)
- Berechnung nach folgendem Schema:
	- Berechnung der [multivariaten Regression](/lerninhalte/regression#multiple-lineare-multivariate-regression)
	- Anwendung der Sigmoidfunktion auf $\hat{y}$ 

## Kostenfunktion

### Univariate Regression

$$
J(\theta_0, \theta_1) = \dfrac{1}{2N} \sum^{N}_{n=1}
(\theta_0 + \theta_1 x_n - y_n)^2
$$

### Multivariate Regression

$$
J(\theta_0,\theta_1) = \dfrac{1}{2N} \sum^{N}_{n=1} (h_\theta(x_{n}) - y_{n})^2
$$
- $N$ Anzahl der Datenpunkte
- $h_0(x_{n})$ Vorhersagefunktion des Modells (z.B. $\hat{y} =...$)
- $y_n$ Zielwert
- $\sum^N_{n=1}(...)^2$ quadrierter Fehler aller Datenpunkte um Richtung des Fehlers zu eliminieren
- $\dfrac{1}{2N}$ Den Fehler über alle Datenpunkte mitteln

> [!Erklärung]-
> Die Formel
>
> $J(\theta_0, \theta_1) = \dfrac{1}{2N} \sum^{N}_{n=1} (h_\theta(x^{(n)}) - y^{(n)})^2$
>
> ist die **Kostenfunktion** (auch Fehlerfunktion genannt) der linearen Regression. Sie hilft dabei, zu messen, wie gut unsere Vorhersagen des Modells sind im Vergleich zu den tatsächlichen Werten. Um sie zu verstehen, erkläre ich sie in einfachen Schritten:
> 
> 1. **$N$**: Das ist die Anzahl der Datenpunkte, also wie viele Paare von Eingabe (x) und tatsächlichem Ergebnis (y) wir in unserem Trainingsdatensatz haben.
> 
> 2. **$h_\theta(x^{(n)})$**: Dies ist die Vorhersage unseres Modells für den n-ten Datenpunkt. Das Modell gibt uns eine Schätzung basierend auf den Werten von $x$ (den Eingabe-Features) und den Parametern **$\theta_0$ und $\theta_1$** (also die Geradengleichung).
>
> 3. **$y^{(n)}$**: Das ist der tatsächliche Wert (Zielwert) für den n-ten Datenpunkt. Es ist das, was wir „wirklich“ gemessen haben.
>
> 4. **$(h_\theta(x^{(n)}) - y^{(n)})^2$**: Hier berechnen wir den Unterschied zwischen der Vorhersage des Modells **$h_\theta(x^{(n)})$** und dem tatsächlichen Wert **$y^{(n)}$**. Der Unterschied wird quadriert, um sicherzustellen, dass sowohl positive als auch negative Abweichungen gleichermaßen bestraft werden (sonst würden sich Abweichungen möglicherweise gegenseitig aufheben).
> 
> 5. **Summe $\sum^{N}_{n=1}$**: Das bedeutet, dass wir diesen quadrierten Fehler für **alle** Datenpunkte berechnen und addieren. So messen wir den Gesamtfehler für den gesamten Datensatz.
> 6. **$\dfrac{1}{2N}$**: Zum Schluss teilen wir die Summe durch $2N$. Das sorgt dafür, dass der Fehlerwert nicht zu groß wird (wir mitteln die Fehler über alle Datenpunkte), und die $1/2$ erleichtert später die Ableitung, wenn wir die optimale Lösung für **$\theta_0$** und **$\theta_1$** berechnen.
>
> **Einfach erklärt**:
> Die Kostenfunktion sagt uns also, **wie weit unsere Vorhersagen vom tatsächlichen Ergebnis entfernt sind**. Je kleiner der Wert der Kostenfunktion, desto besser passen unsere Vorhersagen zum echten Ergebnis.


## Berechnung

### Nullstellen der Kostenfunktionsableitung
- **Berechnung** der **Nullstellen** der **Kostenfunktionsableitung**
	- *-> Nullstelle der Ableitung gibt Extrempunkt (in diesem Fall das Minimum) an*

- Ableitungen der Kostenfunktion (wobei $\sum x$ = $\sum^{N}_{n=1}x^{(n)}$):
$$
\dfrac{\partial}{\partial \theta_0}J(\theta_0,\theta_1) = 0 \Longleftrightarrow \theta_0 = \dfrac{(\sum y)(\sum {x^2}) - (\sum x)(\sum {xy})}{N\times\sum {x^2}-(\sum x)^2}
$$
> [!Code Äquivalent]-
> ```python
> theta0 = ( 
>	(sum(y) * sum(x ** 2) - sum(x) * sum(x * y)) / 
>	(n * sum(x ** 2) - sum(x) ** 2) 
 >)
> ```

$$
\dfrac{\partial}{\partial \theta_1}J(\theta_0,\theta_1) = 0 \Longleftrightarrow \theta_1 = \dfrac{(\sum y)(\sum {x^2}) - (\sum x)(\sum {xy})}{N \sum {x^2}-(\sum x)^2}
$$
> [!Code äquivalent]-
> ```python
> theta1 = ( 
> 	(n * sum(x * y) - sum(x) * sum(y)) / 
> 	(n * sum(x ** 2) - sum(x) **2 ) 
> )
> ```

- akkurater als Gradientabstiegsverfahren, daher keine **[Feature-Skalierung](#feature-skalierung)**
- bessere Methode bei kleiner bis mittlerer Datenmenge

### Gradientabstiegsverfahren
- Minimierung der Kostenfunktion durch **schrittweise Anpassung** der Parameter $\theta_0$ (y-Achsenabschnitt) und $\theta_1$ (Steigung).
- Beginn mit zufälligen oder nullinitialisierten $\theta$-Werten.
- **Vorhersagefunktion**:

$
h_\theta(x) = \theta_0 + \theta_1 \cdot x
$

- **Kostenfunktion** (Mean Squared Error):
$$
J(\theta_0, \theta_1) = \frac{1}{2n} \sum_{i=1}^{n} \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2
$$

#### Ableitungen der Kostenfunktion
- Die Ableitungen der Kostenfunktion zeigen, wie sich die Kostenfunktion verändert, wenn ($\theta_0$) und ( $\theta_1$) angepasst werden.
1. **Ableitung nach ($\theta_0$)**:
$$
\dfrac{\partial}{\partial \theta_0} J(\theta_0, \theta_1) = \frac{-1}{n} \sum_{i=1}^{n} \left( y^{(i)} - h_\theta(x^{(i)}) \right)
$$
2. **Ableitung nach ($\theta_1$)**:
$$
\dfrac{\partial}{\partial \theta_1} J(\theta_0, \theta_1) = \frac{-1}{n} \sum_{i=1}^{n} x^{(i)} \left( y^{(i)} - h_\theta(x^{(i)}) \right)
$$

#### Update-Regeln für die Parameter
- Um die Parameter zu aktualisieren, bewegen wir uns in die **entgegengesetzte Richtung der Ableitungen**:
- **Update für ($\theta_0$)**:
$$
\theta_0 \leftarrow \theta_0 - \alpha \cdot \frac{1}{n} \sum_{i=1}^{n} \left( h_\theta(x_{(i)}) - y_{(i)} \right)
$$

- **Update für ($\theta_1$)**:
$$
\theta_1 \leftarrow \theta_1 - \alpha \cdot \frac{1}{n} \sum_{i=1}^{n} x_{(i)} \left( h_\theta(x_{(i)}) - y_{(i)} \right)
$$
- Lernrate $\alpha$
	- Ist der Wert zu klein, dauert es sehr lange, bis der Gradientenabstieg konvergiert

#### Code-Äquivalent

```python
# Gradientenabstieg
for step in range(0, 1000): 
	# Berechne die vorhergesagten y-Werte (y_pred) basierend 
	# auf aktuellen theta-Werten
	y_pred = theta0 + x * theta1
	
    # Aktualisiere theta1: 
    # Subtrahiere den Gradienten der Kostenfunktion bezüglich theta1
	theta1_new = theta1 - learning_rate * (1 / n) * sum(x * (y_pred - y))
	
    # Aktualisiere theta0: 
    # Subtrahiere den Gradienten der Kostenfunktion bezüglich theta0
	theta0_new = theta0 - learning_rate * (1 / n) * sum(y_pred - y)
	
	# Setze die neuen theta-Werte für den nächsten Schritt
	theta0, theta1 = theta0_new, theta1_new 
	
	# Speichere die theta-Werte alle 50 Schritte zur späteren Analyse
	if step % 50 == 0: 
		theta0s.append(theta0)
		theta1s.append(theta1)
```

#### Pseudocode für den Gradientenabstieg
```pseudo
1. INITIALISIERUNG:    
    - Setze theta0 = 0 (y-Achsenabschnitt)
    - Setze theta1 = 0 (Steigung)
    - Setze learning_rate = α (z.B. 0.1)
    - Setze Anzahl der Schritte (iterations) = 1000
    - Lade die Datenpunkte (x, y) in Arrays
    - n = Anzahl der Datenpunkte

2. FÜR jede Iteration von 1 bis iterations WIEDERHOLE:    
    - Berechne die Vorhersage für jedes x: y_pred = theta0 + theta1 * x
    - Berechne den Fehler (Differenz zwischen y_pred und y): error = y_pred - y

    - Berechne die Anpassungen für theta1: sum_term_theta1 = SUMME(x * error) (für alle Datenpunkte) theta1 = theta1 - learning_rate * (1 / n) * sum_term_theta1
	
    - Berechne die Anpassungen für theta0: sum_term_theta0 = SUMME(error) (für alle Datenpunkte) theta0 = theta0 - learning_rate * (1 / n) * sum_term_theta0
	
3. ENDE der Schleife
    
4. AUSGABE:   
    - Gebe die finalen Werte von theta0 und theta1 aus.
```

- Der Gradientenabstieg ist besonders vorteilhaft bei großen Datenmengen.



## Feature-Skalierung
- Werte der Features werden auf einen bestimmten Bereich (z.B. 0 bis 1) skaliert, um die Konvergenz[^1:] zu beschleunigen:
  $x_{\text{scaled}}^{(n)} = \dfrac{x^{(n)} - \min(x)}{\max(x) - \min(x)}$
  - Wichtig: sofern die Features skaliert werden, müssen später auch die Eingabewerte gleichskaliert werden.

---
[^1:] In der Mathematik und beim maschinellen Lernen beschreibt Konvergenz den Prozess, bei dem ein Algorithmus Schritt für Schritt einer optimalen Lösung (z.B. minimaler Fehler) immer näher kommt.