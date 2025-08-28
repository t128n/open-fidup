---
title: "Plausibilitätskontrollen"
description: "Plausibilitätskontrollen prüfen die Glaubwürdigkeit und Konsistenz von Daten, um Fehler zu erkennen. Sie umfassen Wertebereichs-, Format- und logische Prüfungen. Automatisierte Implementierung verbessert die Entscheidungsgrundlage und vermeidet Folgefehler."
---

Plausibilitätskontrollen sind Verfahren zur Sicherstellung der [Datenqualität](/open-fidup/lerninhalte/datenqualitaet), bei denen die Glaubwürdigkeit und logische Konsistenz von Daten überprüft werden. Sie dienen der Erkennung unplausibler oder fehlerhafter Datensätze und tragen zur Vermeidung von Fehlentscheidungen bei.

## Zweck
Plausibilitätskontrollen zielen darauf ab, Datenfehler frühzeitig zu identifizieren. Sie verbessern die Qualität der Daten und unterstützen fundierte Entscheidungen, indem sie Folgefehler verhindern.

## Arten von Plausibilitätskontrollen
Es gibt verschiedene Arten von Plausibilitätskontrollen, die je nach Anforderung eingesetzt werden:

1. **Wertebereichsprüfungen:**  
   Diese überprüfen, ob Werte innerhalb festgelegter Grenzen liegen.  
   Beispiel: Das Alter einer Person muss zwischen 0 und 120 Jahren liegen.

2. **Formatprüfungen:**  
   Hierbei wird die korrekte Datenstruktur sichergestellt.  
   Beispiel: Postleitzahlen müssen fünfstellig sein[2].

3. **Logische Prüfungen:**  
   Diese prüfen die Konsistenz zwischen verschiedenen Datenelementen.  
   Beispiel: Das Geburtsdatum muss vor dem aktuellen Datum liegen.

4. **Relationskontrollen:**  
   Sie untersuchen Beziehungen zwischen verschiedenen Datenfeldern.  
   Beispiel: Das Nettogewicht muss kleiner sein als das Bruttogewicht[3].

5. **Vollständigkeitsprüfungen:**  
   Diese stellen sicher, dass alle erforderlichen Felder ausgefüllt sind.  
   Beispiel: Pflichtfelder in einem Formular müssen vollständig sein.

## Implementierung
Plausibilitätskontrollen können automatisiert bei der Dateneingabe erfolgen. Regelmäßige Überprüfungen des Datenbestands sind ebenso möglich. Spezielle Software-Tools unterstützen die [Datenqualitätssicherung](/open-fidup/lerninhalte/datenqualitaet).

## Vorteile
Die Vorteile umfassen die frühzeitige Erkennung von Datenfehlern. Sie verbessern die Grundlage für Entscheidungen und sparen Kosten, indem Folgefehler vermieden werden.

## Herausforderungen
Herausforderungen bestehen in der Definition geeigneter Prüfregeln. Eine Balance zwischen strengen Kontrollen und Flexibilität ist erforderlich. Ausnahmen und Sonderfälle müssen berücksichtigt werden.

## Best Practices
Zu den bewährten Praktiken zählen die regelmäßige Aktualisierung der Prüfregeln. Mitarbeiter sollten zur korrekten Dateneingabe geschult werden. Die Dokumentation der Kontrollen und ihrer Ergebnisse ist essenziell.