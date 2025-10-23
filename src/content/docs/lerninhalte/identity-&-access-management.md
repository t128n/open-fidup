---
title: "Identity & Access Management"
description: "Identity & Access Management (IAM) umfasst Strategien und Technologien zur Verwaltung digitaler Identitäten und Zugriffsrechte. Es zielt darauf ab, Sicherheit zu gewährleisten, indem Authentifizierung, Zugriffssteuerung und Überwachung eingesetzt werden, um Risiken zu minimieren."
---

Identity & Access Management (IAM) ist ein Rahmenwerk aus Strategien und Technologien, das Unternehmen dabei unterstützt, digitale Identitäten zu verwalten und den sicheren Zugang zu Ressourcen zu gewährleisten. Die Hauptziele bestehen darin, sicherzustellen, dass die richtigen Personen zur richtigen Zeit aus den richtigen Gründen Zugriff auf die richtigen Ressourcen erhalten, sowie Sicherheitsrisiken durch zentrale Verwaltung und Überwachung von Zugriffsrechten zu minimieren.

## Wichtige Komponenten

1. **Identitätsverwaltung**:  
   - **Benutzerkonten**: Erstellung, Verwaltung sowie Aktivierung und Deaktivierung von Benutzerkonten.  
   - **Authentifizierung**: Methoden wie Passwörter, biometrische Daten und Multi-Faktor-Authentifizierung (MFA).  

2. **Zugriffssteuerung**:  
   - **Rollenbasierte Zugriffskontrolle (RBAC)**: Zuweisung von Zugriffsrechten basierend auf definierten Rollen.  
   - **Attributbasierte Zugriffskontrolle (ABAC)**: Entscheidungen basierend auf benutzerdefinierten Attributen, beispielsweise Abteilung oder Standort.  

3. **Verzeichnisse und Identitätsdatenbanken**:  
   - Zentralisierte Speicherung und Verwaltung von Identitätsinformationen, etwa in Systemen wie Active Directory.  

4. **Zugriffsüberwachung und -prüfung**:  
   - **Audit-Logs**: Aufzeichnung von Zugriffsversuchen und -aktivitäten.  
   - **Compliance-Berichte**: Sicherstellung der Einhaltung gesetzlicher Vorgaben und Unternehmensrichtlinien.  

## Tools und Techniken

### Authentifizierungstools

- **Single Sign-On (SSO)**: Einmaliges Anmelden für den Zugriff auf mehrere Applikationen.  
- **Multi-Faktor-Authentifizierung (MFA)**: Kombination verschiedener Authentifizierungsmethoden, beispielsweise Passwort und SMS-Code.  

### Zugriffsmanagement

- **Active Directory (AD)**: Verwaltung von Benutzern und Gruppenzugriffsrechten in Windows-Umgebungen.  
- **Identity Governance & Administration (IGA)**: Tools wie SailPoint oder One Identity zur Verwaltung und Überprüfung von Zugriffsrechten.  
- **LDAP (Lightweight Directory Access Protocol)**: Protokoll zur Abfrage und Modifikation von Verzeichnisdiensten, häufig verwendet zur Authentifizierung und Autorisierung.  

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

- [Wikipedia: Identity and Access Management](https://de.wikipedia.org/wiki/Identity_and_Access_Management)