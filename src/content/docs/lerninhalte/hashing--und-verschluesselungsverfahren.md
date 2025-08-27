---
title: "Hashing- und Verschlüsselungsverfahren"
description: "Hashing-Verfahren wie SHA-256 und Verschlüsselung wie AES schützen Datenintegrität und Vertraulichkeit. Sie werden für digitale Signaturen, Passwortspeicherung und sichere Kommunikation eingesetzt."
---

## [Hashing](/open-fidup/lerninhalte/hashing)
- **Definition**: Ein Verfahren, das Daten beliebiger Größe in einen festen Hashwert (Fingerprint) umwandelt.
- **Einsatzbereich**: Datenintegrität, Passwortspeicherung, [digitale Signaturen](/open-fidup/lerninhalte/digitale-signatur).

### Auswahl des Hashing-Verfahrens
- **MD5**
	- **Länge**: 128 Bit
	- **Sicherheit**: Veraltet, anfällig für Kollisionen (zwei unterschiedliche Eingaben erzeugen denselben Hashwert).
	- **Einsatz**: Früher weit verbreitet, heute nicht mehr empfohlen für sicherheitskritische Anwendungen.
- **SHA-1**
	- **Länge**: 160 Bit
	- **Sicherheit**: Anfällig für Kollisionen, nicht mehr als sicher angesehen.
	- **Einsatz**: Ehemals Standard für digitale Signaturen, sollte durch sicherere Alternativen ersetzt werden.
- **SHA-256**
	- **Länge**: 256 Bit
	- **Sicherheit**: Aktuell als sicher angesehen, Teil der SHA-2-Familie.
	- **Einsatz**: Weit verbreitet in sicherheitskritischen Anwendungen, z.B. Blockchain, digitale Zertifikate.
- **SHA-3**
	- **Länge**: Variabel (224, 256, 384, 512 Bit)
	- **Sicherheit**: Neueste Hash-Funktion, die als sicher gilt.
	- **Einsatz**: Zukünftige Anwendungen, wo höchste Sicherheit erforderlich ist.

## Verschlüsselungsverfahren
- **Definition**: Verfahren zur Umwandlung von Klartext in Geheimtext, um die Vertraulichkeit der Daten zu gewährleisten.

### Auswahl des Verschlüsselungsverfahrens
- **AES (Advanced Encryption Standard)**
	- **Schlüssellängen**: 128, 192, 256 Bit
	- **Sicherheit**: Sehr sicher, weit verbreitet und standardisiert.
	- **Einsatz**: Ideal für die Verschlüsselung von Daten in verschiedenen Anwendungen, z.B. Dateisysteme, VPNs.
- **RSA (Rivest-Shamir-Adleman)**
	- **Schlüssellängen**: 1024, 2048, 4096 Bit
	- **Sicherheit**: Sicher, aber langsamer als symmetrische Verfahren.
	- **Einsatz**: Häufig für den Schlüsselaustausch und digitale Signaturen verwendet.
- **ChaCha20**
	- **Schlüssellängen**: 256 Bit
	- **Sicherheit**: Hohe Sicherheit und Geschwindigkeit, besonders auf mobilen Geräten.
	- **Einsatz**: Alternativ zu AES in bestimmten Anwendungen, z.B. in TLS.

## Zusammenfassung der Auswahl
- **Hashing**: SHA-256 oder SHA-3 für sicherheitskritische Anwendungen; MD5 und SHA-1 vermeiden.
- **Verschlüsselung**: AES für symmetrische Verschlüsselung; RSA für asymmetrische Verschlüsselung; ChaCha20 als moderne Alternative.

## Quellen
> AI Chat. (2024, September 18). Retrieved from https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1