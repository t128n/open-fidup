---
title: "Digitale Signatur"
description: "Digitale Signatur ermöglicht Authentifizierung, Integrität und Vertraulichkeit durch Zertifikate. Notwendigkeit besteht für Online-Transaktionen. Umsetzung umfasst Zertifizierungsstellen, Zertifikatstypen und Verwaltung. Typen sind SSL/TLS, Code Signing und S/MIME."
---

## Notwendigkeit einer digitalen Signatur (Zertifikate)
- **Authentifizierung**: Bestätigung der Identität von Benutzern und Systemen.
- **Integrität**: Sicherstellung, dass Daten während der Übertragung nicht verändert wurden.
- **Vertraulichkeit**: Verschlüsselung von Daten, um unbefugten Zugriff zu verhindern.
- **Vertrauenswürdigkeit**: Vertrauensbasis für Online-Transaktionen und Kommunikation.
- **Rechtliche Anerkennung**: Digitale Signaturen haben rechtliche Gültigkeit in vielen Ländern.

## Praktische Umsetzung
- **Zertifizierungsstelle (CA)**:
  - Auswahl einer vertrauenswürdigen CA zur Ausstellung von digitalen Zertifikaten.
  - CA überprüft Identität des Antragstellers.

- **Zertifikatstypen**:
  - **SSL/TLS-Zertifikate**: Für sichere Webseiten ([HTTPS](/open-fidup/lerninhalte/https)).
  - **Code Signing-Zertifikate**: Für die Signierung von Software und Anwendungen.
  - **S/MIME-Zertifikate**: Für die sichere E-Mail-Kommunikation.

- **Zertifikat beantragen**:
  - Erstellung eines Schlüsselpaares (privater und öffentlicher Schlüssel).
  - Einreichung einer Zertifikatsanfrage (CSR) bei der CA.

- **Zertifikat installieren**:
  - Installation des erhaltenen Zertifikats auf dem Server oder in der Anwendung.
  - Konfiguration der Software zur Nutzung des Zertifikats.

- **Zertifikatsverwaltung**:
  - Regelmäßige Überprüfung und Erneuerung von Zertifikaten.
  - Widerruf von Zertifikaten bei Verlust des privaten Schlüssels oder bei Kompromittierung.

## Quellen

> OpenAI. (2024). _ChatGPT AI language model_. Abgerufen am 18. September 2024, von [https://www.openai.com/chatgpt](https://www.openai.com/chatgpt)