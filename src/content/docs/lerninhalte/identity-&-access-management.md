---
title: "Identity & Access Management: Sicherer Zugriff auf Ressourcen"
description: "Identity & Access Management (IAM) verwaltet digitale Identitäten und Zugriffsrechte, um Sicherheit zu gewährleisten. Es umfasst Authentifizierung, Zugriffssteuerung und Überwachung zur Minimierung von Risiken."
---

- Framework bestehend aus **Strategien und Technologien**, die Unternehmen helfen, **digitale Identitäten zu verwalten** und den **Zugang zu Ressourcen sicherzustellen**. Die Hauptziele sind:
- Sicherstellung, dass die **richtigen Personen** Zugriff auf die **richtigen Ressourcen** zur **richtigen Zeit** aus den richtigen Gründen haben.
- **Minimierung** von **Sicherheitsrisiken** durch **zentrale Verwaltung** und **Überwachung** von **Zugriffsrechten**.

## Wichtige Komponenten

1. **Identitätsverwaltung**:
   - **Benutzerkonten**: Erstellung, Verwaltung, Aktivierung/Deaktivierung von Benutzerkonten.
   - **Authentifizierung**: Methoden wie Passwörter, biometrische Daten, MFA (Multi-Faktor-Authentifizierung).
2. **Zugriffssteuerung**:
   - **Rollenbasierte Zugriffskontrolle (RBAC)**: Zuweisung von Zugriffsrechten basierend auf definierten Rollen.
   - **Attributbasierte Zugriffskontrolle (ABAC)**: Entscheidungen basierend auf benutzerdefinierten Attributen (z.B. Abteilung, Standort).
3. **Verzeichnisse & Identitätsdatenbanken**:
   - Zentralisierte Speicherung und Verwaltung von Identitätsinformationen (z.B. Active Directory).
4. **Zugriffsüberwachung und -prüfung**:
   - **Audit-Logs**: Aufzeichnung von Zugriffsversuchen und -aktivitäten.
   - **Compliance-Berichte**: Sicherstellung der Einhaltung gesetzlicher Vorgaben und Unternehmensrichtlinien.

## Tools und Techniken

### Authentifizierungstools

- **Single Sign-On (SSO)**: Einmaliges Anmelden für Zugriff auf mehrere Applikationen.
- **Multi-Faktor-Authentifizierung (MFA)**: Kombination verschiedener Authentifizierungsmethoden (z.B. Passwort + SMS-Code).

### Zugriffsmanagement

- **Active Directory (AD)**: Verwaltung von Benutzern und Gruppenzugriffsrechten in Windows-Umgebungen.
- **Identity Governance & Administration (IGA)**: Tools wie SailPoint oder One Identity zur Verwaltung und Überprüfung von Zugriffsrechten.
- **LDAP (Lightweight Directory Access Protocol)**: Protokoll zur Abfrage und Modifikation von Verzeichnisdiensten, oft verwendet zur Authentifizierung und Autorisierung.

### Sicherheitsüberprüfung

- **Penetrationstests (Pentests)**: Simulierte Angriffe zur Überprüfung der Sicherheit.
- **Vulnerability Scanner**: Tools wie Nessus oder OpenVAS zur Identifizierung von Schwachstellen.

## Best Practices

- **Principle of Least Privilege (PoLP)**: Gewähren von minimal erforderlichen Zugriffsrechten.
- **Regelmäßige Überprüfung**: Regelmäßige Audits und Überprüfung der Zugriffsrechte.
- **Benutzerschulung**: Schulung der Benutzer zu sicherheitsrelevanten Themen und bewährten Methoden.

## Vor- und Nachteile

### Vorteile

- **Erhöhte Sicherheit**: Durch zentrale Verwaltung, MFA und regelmäßige Überprüfungen.
- **Effizienzsteigerung**: Einfacher Zugang für Benutzer über SSO und automatisierte Prozesse.
- **Compliance**: Einhaltung von gesetzlichen und regulatorischen Anforderungen.

### Nachteile

- **Komplexität**: Implementierung und Verwaltung können komplex und kostenintensiv sein.
- **Einzelpunktversagen**: Zentralisiertes IAM-System kann zum „Single Point of Failure“ werden.
- **Benutzerfreundlichkeit**: Möglicherweise reduzierte Benutzerfreundlichkeit durch zusätzliche Sicherheitsmaßnahmen wie MFA.

## Quellen

> ChatGPT. (2024, September 20). Retrieved from https://chatgpt.com