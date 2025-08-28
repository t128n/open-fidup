---
title: "Regression"
description: "Regression ist eine Methode des überwachten Lernens zur Vorhersage einer abhängigen Variable basierend auf unabhängigen Variablen. Sie umfasst Formen wie lineare, multiple und logistische Regression und nutzt Verfahren wie Gradientenabstieg zur Minimierung der Kostenfunktion."
---

Regression bezeichnet eine Methode des überwachten Lernens, bei der ausgehend von einer oder mehreren unabhängigen Variablen (Prädiktoren) auf eine abhängige Variable (Kriterium) geschlossen wird. Dies ermöglicht die Messung des Einflusses der Prädiktoren auf das Kriterium oder die Vorhersage des Kriteriums. Prädiktoren können metrisch, [ordinal](/open-fidup/lerninhalte/ordinalskala) oder nominal sein.

## Formen

### Einfache lineare Regression

Die einfache lineare Regression prognostiziert ein Kriterium anhand eines einzelnen Prädiktors. Die Formel lautet:

$$\hat{y} = b \times x + a = \theta_0 + \theta_1 x$$

Dabei ist $\hat{y}$ das prognostizierte Kriterium, $b$ oder $\theta_1$ die Steigung, $x$ der Prädiktor und $a$ oder $\theta_0$ der Achsenabschnitt.

Die Berechnung erfolgt wie folgt:

$$b = r \frac{s_y}{s_x}$$

Hierbei ist $r$ der [Korrelationskoeffizient](/open-fidup/lerninhalte/korrelationskoeffizient) zwischen $x$ und $y$, $s_y$ die [Standardabweichung](/open-fidup/lerninhalte/standardabweichung) von $y$ und $s_x$ die [Standardabweichung](/open-fidup/lerninhalte/standardabweichung) von $x$.

$$a = \bar{y} - b \times \bar{x}$$

Dabei sind $\bar{y}$ und $\bar{x}$ die [arithmetischen Mittel](/open-fidup/lerninhalte/arithmetisches-mittel) von $y$ und $x$.

### Multiple lineare Regression

Die multiple lineare Regression prognostiziert ein Kriterium anhand mehrerer Prädiktoren. Die Formel lautet:

$$\hat{y} = b_1 \times x_1 + b_2 \times x_2 + \dots + b_k \times x_k + a = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_m x_m$$

Die Berechnung und Interpretation ähneln der einfachen linearen Regression.

### Logistische Regression

Die logistische Regression prognostiziert eine dichotome abhängige Variable, also eine Variable mit zwei Ausprägungen, wie Ja/Nein. Die Formel für die Sigmoidfunktion lautet:

$$f(z) = \frac{1}{1 + e^{-z}}$$

Die Wahrscheinlichkeit, dass die abhängige Variable $y = z$ gegeben $x_1, \dots, x_n$, beträgt:

$$P(y = z | x_1, \dots, x_n) = \frac{1}{1 + e^{-(\theta_0 + \theta_1 x_1 + \dots + \theta_k x_k)}}$$

Dabei ist $e$ die Eulersche Zahl (etwa 2,71828). Die Berechnung der Parameter $\theta$ erfolgt mittels Gradientenabstieg. Die Ableitung der Kostenfunktion entspricht der linearen Regression. Das Verfahren umfasst die Berechnung der multivariaten Regression und die Anwendung der Sigmoidfunktion auf $\hat{y}$.

## Kostenfunktion

Die Kostenfunktion misst den Fehler des Modells und wird minimiert, um optimale Parameter zu finden.

### Univariate Regression

$$J(\theta_0, \theta_1) = \frac{1}{2N} \sum_{n=1}^{N} (\theta_0 + \theta_1 x_n - y_n)^2$$

### Multivariate Regression

$$J(\theta_0, \theta_1) = \frac{1}{2N} \sum_{n=1}^{N} (h_\theta(x_n) - y_n)^2$$

Dabei ist $N$ die Anzahl der Datenpunkte, $h_\theta(x_n)$ die Vorhersagefunktion des Modells, $y_n$ der Zielwert. Der quadrierte Fehler eliminiert die Richtung des Fehlers, und $\frac{1}{2N}$ mittelt den Fehler über alle Datenpunkte.

Die Kostenfunktion quantifiziert die Abweichung der Vorhersagen von den tatsächlichen Werten. Je kleiner der Wert, desto besser die Anpassung des Modells.

## Berechnung

### Nullstellen der Kostenfunktionsableitung

Die Nullstellen der Ableitung der Kostenfunktion geben das Minimum an. Die Ableitungen lauten:

$$\frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1) = 0 \Longleftrightarrow \theta_0 = \frac{(\sum y)(\sum x^2) - (\sum x)(\sum xy)}{N \sum x^2 - (\sum x)^2}$$

Code-Äquivalent:

```python
theta0 = (
    (sum(y) * sum(x ** 2) - sum(x) * sum(x * y)) /
    (n * sum(x ** 2) - sum(x) ** 2)
)
```

$$\frac{\partial}{\partial \theta_1} J(\theta_0, \theta_1) = 0 \Longleftrightarrow \theta_1 = \frac{N \sum (x y) - (\sum x)(\sum y)}{N \sum x^2 - (\sum x)^2}$$

Code-Äquivalent:

```python
theta1 = (
    (n * sum(x * y) - sum(x) * sum(y)) /
    (n * sum(x ** 2) - sum(x) ** 2)
)
```

Dieses Verfahren ist genauer als Gradientenabstieg und eignet sich für kleine bis mittlere Datenmengen, ohne dass eine Feature-Skalierung erforderlich ist.

### Gradientenabstiegsverfahren

Das Gradientenabstiegsverfahren minimiert die Kostenfunktion durch iterative Anpassung der Parameter $\theta_0$ und $\theta_1$. Es beginnt mit zufälligen oder nullinitialisierten Werten.

Die Vorhersagefunktion lautet:

$$h_\theta(x) = \theta_0 + \theta_1 x$$

Die Kostenfunktion (Mean Squared Error) ist:

$$J(\theta_0, \theta_1) = \frac{1}{2n} \sum_{i=1}^{n} (h_\theta(x^{(i)}) - y^{(i)})^2$$

Die Ableitungen sind:

1. Ableitung nach $\theta_0$:

$$\frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1) = \frac{1}{n} \sum_{i=1}^{n} (h_\theta(x^{(i)}) - y^{(i)})$$

2. Ableitung nach $\theta_1$:

$$\frac{\partial}{\partial \theta_1} J(\theta_0, \theta_1) = \frac{1}{n} \sum_{i=1}^{n} x^{(i)} (h_\theta(x^{(i)}) - y^{(i)})$$

Die Update-Regeln lauten:

$$\theta_0 \leftarrow \theta_0 - \alpha \frac{1}{n} \sum_{i=1}^{n} (h_\theta(x^{(i)}) - y^{(i)})$$

$$\theta_1 \leftarrow \theta_1 - \alpha \frac{1}{n} \sum_{i=1}^{n} x^{(i)} (h_\theta(x^{(i)}) - y^{(i)})$$

Dabei ist $\alpha$ die Lernrate. Ein zu kleiner Wert verzögert die Konvergenz.

Code-Äquivalent:

```python
for step in range(1000):
    y_pred = theta0 + x * theta1
    theta1_new = theta1 - learning_rate * (1 / n) * sum(x * (y_pred - y))
    theta0_new = theta0 - learning_rate * (1 / n) * sum(y_pred - y)
    theta0, theta1 = theta0_new, theta1_new
    if step % 50 == 0:
        theta0s.append(theta0)
        theta1s.append(theta1)
```

Pseudocode:

1. Initialisierung: Setze $\theta_0 = 0$, $\theta_1 = 0$, Lernrate $\alpha$, Iterationen, Datenpunkte, $n$.
2. Für jede Iteration: Berechne Vorhersage, Fehler; aktualisiere $\theta_1$ und $\theta_0$.
3. Ende.
4. Ausgabe: Finale $\theta_0$ und $\theta_1$.

Das Verfahren eignet sich besonders für große Datenmengen.

## Feature-Skalierung

Die Feature-Skalierung normiert die Werte der Merkmale auf einen Bereich, etwa 0 bis 1, um die Konvergenz zu beschleunigen:

$$x_{\text{scaled}}^{(n)} = \frac{x^{(n)} - \min(x)}{\max(x) - \min(x)}$$

Eingabewerte müssen später entsprechend skaliert werden. Konvergenz beschreibt den Prozess, bei dem ein Algorithmus einer optimalen Lösung, wie einem minimalen Fehler, näher kommt.