---
title: "HTTPS"
description: "HTTPS erweitert HTTP durch Verschlüsselung aller Daten zwischen Browser und Server. Es verwendet Zertifikate zur Authentifizierung und gewährleistet sichere Übertragung durch pro-Aufruf ausgehandelte Schlüssel."
---

HTTPS ist eine sichere Erweiterung des Hypertext Transfer Protocol (HTTP), die den Datenaustausch zwischen einem Webbrowser und einem Server verschlüsselt. Dabei werden alle übertragenen Daten geschützt, um Vertraulichkeit und Integrität zu gewährleisten. HTTPS basiert auf Zertifikaten zur Authentifizierung der beteiligten Parteien und handelt pro Aufruf neue Schlüssel aus, um die Sicherheit während der Kommunikation zu erhöhen.

## Funktionsweise
HTTPS baut auf HTTP auf und integriert Verschlüsselungsmechanismen, um den Datenverkehr zu sichern. Der Browser und der Zielserver handeln bei jedem Aufruf symmetrische Schlüssel aus, die zur Verschlüsselung der Daten während der Übertragung dienen. Diese Schlüssel werden mithilfe asymmetrischer Kryptografie initialisiert, wodurch eine sichere Verbindung etabliert wird.

## Authentifizierung und Zertifikate
Ein wesentliches Element von HTTPS ist das HTTPS-Zertifikat, das die Identität der Webseite bestätigt. Es stellt sicher, dass die Seite tatsächlich diejenige ist, die sie vorgibt zu sein, und verhindert Angriffe wie Man-in-the-Middle. Zertifikate werden von vertrauenswürdigen Stellen ausgestellt und nutzen [Verschlüsselungsverfahren](/open-fidup/lerninhalte/hashing--und-verschluesselungsverfahren), um die Authentizität zu garantieren.

## Quellen
MainHoster. (2019, February 22). #40 Einfach Erklärt: "Https / SSL Zertifikate". Youtube. Retrieved from https://www.youtube.com/watch?v=bzTjRW3fJlc