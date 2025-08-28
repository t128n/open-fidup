---
title: "Hashing- und Verschlüsselungsverfahren"
description: "Hashing-Verfahren wie SHA-256 und Verschlüsselung wie AES schützen Datenintegrität und Vertraulichkeit. Sie werden für digitale Signaturen, Passwortspeicherung und sichere Kommunikation eingesetzt."
---

Hashing- und Verschlüsselungsverfahren sind grundlegende Techniken zur Sicherung von Daten. Hashing wandelt Daten in einen festen Wert um, um Integrität zu gewährleisten, während Verschlüsselung Klartext in Geheimtext überführt, um Vertraulichkeit zu sichern. Diese Methoden finden Anwendung in Bereichen wie Passwortspeicherung, digitalen Signaturen und sicherer Kommunikation.

## Hashing

Hashing ist ein Verfahren, das Daten beliebiger Größe in einen festen Hashwert, auch Fingerprint genannt, umwandelt. Es dient der Überprüfung der Datenintegrität, der Speicherung von Passwörtern und der Erstellung [digitaler Signaturen](/open-fidup/lerninhalte/digitale-signatur).

### Auswahl des Hashing-Verfahrens

- **MD5**
  - **Länge**: 128 Bit
  - **Sicherheit**: Veraltet und anfällig für Kollisionen, bei denen zwei unterschiedliche Eingaben denselben Hashwert erzeugen.
  - **Einsatz**: Früher weit verbreitet, heute nicht mehr für sicherheitskritische Anwendungen empfohlen.

- **SHA-1**
  - **Länge**: 160 Bit
  - **Sicherheit**: Anfällig für Kollisionen, gilt nicht mehr als sicher.
  - **Einsatz**: Ehemals Standard für digitale Signaturen, sollte durch sicherere Alternativen ersetzt werden.

- **SHA-256**
  - **Länge**: 256 Bit
  - **Sicherheit**: Aktuell als sicher angesehen, Teil der SHA-2-Familie.
  - **Einsatz**: Weit verbreitet in sicherheitskritischen Anwendungen, beispielsweise in Blockchain und digitalen Zertifikaten.

- **SHA-3**
  - **Länge**: Variabel (224, 256, 384, 512 Bit)
  - **Sicherheit**: Neueste Hash-Funktion, die als sicher gilt.
  - **Einsatz**: Zukünftige Anwendungen, wo höchste Sicherheit erforderlich ist.

## Verschlüsselungsverfahren

Verschlüsselungsverfahren wandeln Klartext in Geheimtext um, um die Vertraulichkeit der Daten zu gewährleisten.

### Auswahl des Verschlüsselungsverfahrens

- **AES (Advanced Encryption Standard)**
  - **Schlüssellängen**: 128, 192, 256 Bit
  - **Sicherheit**: Sehr sicher, weit verbreitet und standardisiert.
  - **Einsatz**: Ideal für die Verschlüsselung von Daten in verschiedenen Anwendungen, beispielsweise Dateisysteme und VPNs.

- **RSA (Rivest-Shamir-Adleman)**
  - **Schlüssellängen**: 1024, 2048, 4096 Bit
  - **Sicherheit**: Sicher, aber langsamer als symmetrische Verfahren.
  - **Einsatz**: Häufig für den Schlüsselaustausch und digitale Signaturen verwendet.

- **ChaCha20**
  - **Schlüssellängen**: 256 Bit
  - **Sicherheit**: Hohe Sicherheit und Geschwindigkeit, besonders auf mobilen Geräten.
  - **Einsatz**: Alternativ zu AES in bestimmten Anwendungen, beispielsweise in TLS.

## Zusammenfassung der Auswahl

Für Hashing eignen sich SHA-256 oder SHA-3 für sicherheitskritische Anwendungen. MD5 und SHA-1 sollten vermieden werden. Bei Verschlüsselung ist AES für symmetrische Verfahren geeignet, RSA für asymmetrische und ChaCha20 als moderne Alternative.

## Quellen

> AI Chat. (2024, September 18). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1