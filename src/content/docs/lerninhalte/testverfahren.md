---
title: "Testverfahren: Überprüfung und Validierung von Software"
description: "Testverfahren umfassen statische und dynamische Methoden zur Fehlererkennung. Arten wie Black-Box, White-Box; Typen Unit-, Komponenten-, Integrationstests."
---

- **systematische Ansätze** zur **Überprüfung und Validierung** von Software, um sicherzustellen, dass sie den **Anforderungen entspricht** und **fehlerfrei funktioniert**. Es gibt verschiedene Testmethoden und -techniken, die je nach Ziel und Kontext eingesetzt werden.

## Testverfahren
### Statische Testverfahren
- **Beschreibung**: Überprüfung von Software-Artefakten ohne Ausführung des Codes
- **Ziele**:
    - Frühzeitige Fehlererkennung
    - Überprüfung von Dokumentation und Code
- **Methoden**:
    - **Review**: Systematische Überprüfung von Dokumenten oder Code durch Experten.
    - Statische Codeanalyse
    - Walkthrough
### Dynamische Testverfahren
- **Beschreibung**: Überprüfung der Software durch Ausführung des Codes
- **Ziele**:
    - Funktionsverhalten testen
    - Speicher-/CPU-Nutzung überprüfen
    - Gesamtleistung des Systems evaluieren
- **Methoden**:
    - Black-Box-Testing
    - White-Box-Testing
    - Graue-Box-Testing
### Übersicht
![[Pasted image 20240919142509.png]]

### 1. Black-Box-Testing
![[Pasted image 20240919142350.png]]
- **Beschreibung**: Bei dieser Methode wird die Software getestet, ohne dass der Tester Kenntnisse über die interne Funktionsweise hat. Der Fokus liegt auf den Eingaben und Ausgaben.
- **Vorteile**:
  - Unabhängigkeit von der Implementierung.
  - Tests basieren auf den Anforderungen und Spezifikationen.
- **Nachteile**:
  - Mangelnde Einsicht in die interne Logik kann zu unvollständigen Tests führen.

### 2. White-Box-Testing
![[Pasted image 20240919142448.png]]
- **Beschreibung**: Hierbei hat der Tester Zugang zum Quellcode und testet die internen Strukturen und Abläufe der Software. Es werden spezifische Code-Pfade und Logik überprüft.
- **Vorteile**:
  - Detaillierte Tests der internen Logik.
  - Identifikation von Sicherheitslücken und Codefehlern.
- **Nachteile**:
  - Erfordert tiefes technisches Wissen.
  - Kann zeitaufwendig sein.

### 3. Graue-Box-Testing
![[Pasted image 20240919142522.png]]
- **Beschreibung**: Eine Kombination aus Black-Box- und White-Box-Testing, bei der der Tester teilweise Kenntnisse über die interne Struktur hat, aber auch die externen Anforderungen berücksichtigt.
- **Vorteile**:
  - Bietet eine ausgewogene Sicht auf die Software.
  - Ermöglicht umfassendere Tests.

## Testarten

### 1. Unit-Tests
![[Pasted image 20240919142745.png]]
- **Beschreibung**: Tests, die auf die kleinsten testbaren Teile der Software (z.B. Funktionen oder Methoden) abzielen. Sie werden in der Regel von Entwicklern geschrieben.
- **Ziel**: Sicherstellen, dass jede Einheit wie erwartet funktioniert.
- **Beispiel**: Test einer Funktion zur Berechnung der Summe zweier Zahlen, um sicherzustellen, dass sie die korrekte Summe zurückgibt.

### 2. Komponenten-Tests
![[Pasted image 20240919142935.png]]
*(einzelnes Modul)*
- **Beschreibung**: Tests, die auf einzelne Komponenten oder Module der Software abzielen, um deren Funktionalität zu überprüfen.
- **Ziel**: Sicherstellen, dass die Komponenten korrekt zusammenarbeiten.
- **Beispiel**: Test eines Login-Formulars, um zu überprüfen, ob die Authentifizierung korrekt funktioniert und die Benutzeroberfläche die richtigen Fehlermeldungen anzeigt.

### 3. Integrationstests
![[Pasted image 20240919142933.png]]
*(Zusammenarbeit von Modulen)*
- **Beschreibung**: Tests, die die Interaktion zwischen verschiedenen Komponenten oder Systemen überprüfen.
- **Ziel**: Sicherstellen, dass die Integration der Komponenten reibungslos funktioniert.
- **Beispiel**: Test der Interaktion zwischen dem Authentifizierungsmodul und der Datenbank, um sicherzustellen, dass Benutzeranmeldungen korrekt verarbeitet werden.

### 4. Systemtests
![[Pasted image 20240919143005.png]]
- **Beschreibung**: Tests, die das gesamte System als Ganzes überprüfen, um sicherzustellen, dass es den Anforderungen entspricht.
- **Ziel**: Validierung der Software in einer produktionsähnlichen Umgebung.
- **Beispiel**: Test der gesamten Anwendung, um sicherzustellen, dass alle Funktionen (z.B. Registrierung, Login, Datenanzeige) wie erwartet zusammenarbeiten.

### 5. Akzeptanztests
![[Pasted image 20240919143017.png]]
- **Beschreibung**: Tests, die von Endbenutzern oder Stakeholdern durchgeführt werden, um zu überprüfen, ob die Software den Geschäftsanforderungen entspricht.
- **Ziel**: Sicherstellen, dass die Software bereit für den Einsatz ist.
- **Beispiel**: Durchführung eines Testszenarios, bei dem ein Benutzer ein Produkt kauft, um sicherzustellen, dass der gesamte Kaufprozess (Warenkorb, Zahlung, Bestellbestätigung) reibungslos funktioniert.



### 6. Extremwerttest
- **Beschreibung**: Überprüfung des Systemverhaltens bei Grenzwerten und extremen Eingaben.
- **Ziel**: Robustheit und Fehlertoleranz testen.
- **Beispiel**: Test einer Funktion zur Altersberechnung mit Werten wie -1, 0, 150 Jahre.
## Test-Pyramide
![[Pasted image 20240919142623.png]]
- **Beschreibung**: Ein Konzept, das die verschiedenen Testarten in einer Pyramide anordnet, um die Balance zwischen den verschiedenen Testebenen zu verdeutlichen.
  - **Basis**: Unit-Tests (viele Tests, schnelle Ausführung).
  - **Mitte**: Komponenten- und Integrationstests (weniger Tests, mittlere Ausführungsgeschwindigkeit).
  - **Spitze**: System- und Akzeptanztests (wenige Tests, langsame Ausführung).
- **Ziel**: Förderung einer effektiven Teststrategie, die schnelle Rückmeldungen und eine hohe Testabdeckung bietet.

