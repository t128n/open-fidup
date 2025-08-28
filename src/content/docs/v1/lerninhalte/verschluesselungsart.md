---
title: "Verschlüsselungsarten"
description: "Verschlüsselung schützt Daten durch symmetrische Methoden mit einem gemeinsamen Schlüssel oder asymmetrische mit Schlüsselpaaren. Symmetrische Verschlüsselung ist schnell für große Datenmengen, asymmetrische für Sicherheit und Authentifizierung. Hybride Ansätze kombinieren beide für optimale Effizienz und Schutz."
---

## Symmetrische Verschlüsselung
- **derselbe Schlüssel** für Ver- und Entschlüsselung
- muss über sicheren Weg zwischen Sender und Empfänger ausgetauscht werden
- große Datenmengen können schnell ver- und entschlüsselt werden
- **Einsatzbereich**: Ideal für die Verschlüsselung großer Datenmengen, z.B. bei Dateiübertragungen oder Datenbanken, wo Geschwindigkeit und Effizienz wichtig sind.

## Asymmetrische Verschlüsselung
- **ein gemeinsamer**, **ein privater** Schlüssel -> **Schlüsselpaar**
	- **Public Key**, Verschlüsseln von Nachrichten, Identifikation [digitaler Signaturen](/open-fidup/lerninhalte/digitale-signatur)
		- **Private Key**, Entschlüsseln verschlüsselter Nachrichten, Erstellung [digitaler Signaturen](/open-fidup/lerninhalte/digitale-signatur)
- **Einsatzbereich**: Besonders geeignet für den Austausch von Schlüsseln oder für die Sicherstellung der Identität, z.B. bei E-Mail-Verschlüsselung oder digitalen Signaturen, wo Sicherheit und Authentifizierung wichtig sind.

## Auswahl der Verschlüsselungsart
- **Symmetrische Verschlüsselung**: 
	- **Datenmenge**: Hoch (z.B. große Dateien)
	- **Schutzbedarf**: Mittel bis hoch (wenn der Schlüssel sicher ausgetauscht werden kann)
- **Asymmetrische Verschlüsselung**: 
	- **Datenmenge**: Niedrig (z.B. kurze Nachrichten oder Schlüssel)
	- **Schutzbedarf**: Hoch (z.B. bei sensiblen Informationen, wo Identität und Integrität wichtig sind)
- **Hybride Verschlüsselung**: 
	- Kombination aus symmetrischer und asymmetrischer Verschlüsselung
	- **Einsatzbereich**: Optimal für sichere Kommunikation, z.B. bei SSL/TLS, wo asymmetrische Verschlüsselung für den Schlüsselaustausch und symmetrische Verschlüsselung für die Datenübertragung verwendet wird.
	- **Datenmenge**: Variabel (kann sowohl große als auch kleine Datenmengen effizient verarbeiten)
	- **Schutzbedarf**: Hoch (bietet sowohl Geschwindigkeit als auch Sicherheit)

## Quellen

> Arten der Verschlüsselung. (2024, September 18). Retrieved from https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Onlinekommunikation/Verschluesselt-kommunizieren/Arten-der-Verschluesselung/arten-der-verschluesselung_node.html