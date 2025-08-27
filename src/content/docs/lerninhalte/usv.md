---
title: "USV: Unterbrechungsfreie Stromversorgung für IT-Systeme"
description: "USV-Geräte stellen kontinuierliche Stromversorgung sicher, schützen vor Stromausfällen und Spannungsschwankungen. Arten umfassen Offline, Line-Interactive und Online-USV, je nach Anforderungen an Umschaltzeit und Schutz."
---

- Gerät, das eine **kontinuierliche Stromversorgung** für kritische Systeme sicherstellt, selbst bei **Stromausfällen** oder **Spannungsschwankungen**. Sie **überbrückt Stromausfälle** und **schützt Geräte** vor Datenverlust oder Beschädigungen durch unerwartete Abschaltungen.

## USV-Arten
![[Pasted image 20240920091305.png]]
### Offline / Standby-USV
- **Funktionsweise**: Die USV lädt im Normalbetrieb ihre Batterien und schaltet im Falle eines Stromausfalls in wenigen Millisekunden auf Batteriebetrieb um.
- **Einsatzgebiet**: Geeignet für weniger kritische Systeme, bei denen kurze Umschaltzeiten tolerierbar sind (z. B. Büro-PCs).
- **Vorteile**:
    - Kostengünstig.
    - Einfacher Aufbau.
- **Nachteile**:
    - Umschaltzeit, die zu kurzen Spannungsverlusten führen kann.
    - Kein Schutz vor Spannungsspitzen oder -einbrüchen im Normalbetrieb.

### Line-Interactive-USV
- **Funktionsweise**: Diese USV verwendet einen Spannungsregler (AVR, Automatic Voltage Regulator), um Spannungsschwankungen im Netzbetrieb auszugleichen. Bei einem Stromausfall schaltet sie auf Batteriebetrieb um.
- **Einsatzgebiet**: Geeignet für Systeme, die häufig Spannungsprobleme haben (z. B. Netzschwankungen).
- **Vorteile**:
    - Besserer Schutz vor Spannungsschwankungen als eine Offline-USV.
    - Kürzere Umschaltzeit.
- **Nachteile**:
    - Umschaltzeit vorhanden.
    - Höhere Kosten als bei einer Offline-USV.

### Online / Doppelwandler-USV
- **Funktionsweise**: Wandelt die Netzspannung kontinuierlich in Gleichstrom und dann wieder in Wechselstrom um. Dadurch wird eine konstante und unterbrechungsfreie Stromversorgung ohne Umschaltzeiten gewährleistet.
- **Einsatzgebiet**: Für kritische Systeme (Server, Rechenzentren), die eine kontinuierliche Stromversorgung und Schutz vor allen Arten von Spannungsstörungen benötigen.
- **Vorteile**:
    - Kein Umschaltvorgang (0 ms Umschaltzeit).
    - Schutz vor allen Arten von Netzstörungen.
- **Nachteile**:
    - Teurer als Offline- und Line-Interactive-USVs.
    - Höherer Energieverbrauch (wegen ständiger Umwandlung).

## Quellen

> ChatGPT. (2024, September 20). Retrieved from https://chatgpt.com/c/66ed1d06-5424-800b-bc26-8455a49771b1
> mueller – Ihre USV-Beratung. (2024, September 20). Retrieved from https://www.usv-beratung.de