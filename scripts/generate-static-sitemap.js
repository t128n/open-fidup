#!/usr/bin/env node

/**
 * Generate a static sitemap.xml file for the public/ folder
 * This is a much cleaner approach than complex dynamic generation
 * 
 * Usage with bun: bun scripts/generate-static-sitemap.js
 * Usage with node: node scripts/generate-static-sitemap.js
 */

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://t128n.github.io/open-fidup';

// Main URLs with priorities and realistic dates
const urls = [
  {
    url: baseUrl + '/',
    lastmod: '2025-01-15',
    priority: '1.0'
  },
  {
    url: baseUrl + '/ueber/',
    lastmod: '2025-01-15',
    priority: '0.9'
  },
  {
    url: baseUrl + '/impressum/',
    lastmod: '2024-12-01',
    priority: '0.6'
  }
];

// Learning content URLs
const learningTopics = [
  'abc-analyse', 'abhaengige-und-unabhaengige-daten', 'ablauforganisation', 'ablaufverfolgung',
  'abnahmeprotokoll', 'agb-gesetz', 'anr', 'ansi-sparc-architektur', 'arp', 'aufbauorganisation',
  'backup', 'block-chain', 'bpmn', 'break-even-analyse', 'business-reengineering', 'client-server',
  'crisp-dm', 'data-mining', 'datenbankmodelle', 'datenspeicher', 'ddos-angriffe-und-abwehr',
  'des', 'dhcp', 'diagrammarten', 'dns', 'dokumentenmanagementsysteme', 'dsgvo', 'eepk',
  'entscheidungsbaum', 'epk', 'er-diagramm', 'firewall', 'hashing', 'icsid', 'ids-ips',
  'interview', 'it-controlling', 'it-governance', 'it-grundschutz', 'it-risk-management',
  'itil', 'kaizen', 'kennzahlen-kpi', 'klassifikation', 'korrelationsanalyse', 'lean',
  'maschinelles-lernen', 'mittelwert', 'nat', 'normalverteilung', 'olap', 'osi-modell',
  'petri-netze', 'prinzipal-komponenten-analyse', 'projekt-kostenanalyse', 'projektmanagement',
  'projektplanung', 'prozessmodellierung', 'public-key-kryptographie', 'qualitaetsmanagement',
  'quantitative-vs-qualitative-merkmale', 'raid', 'regression', 'relationale-algebra',
  'relationale-datenbanken', 'rsa', 'scrum', 'sicherheitsmanagement', 'sicherheitsrichtlinien',
  'six-sigma', 'ssh', 'ssl-tls', 'standardabweichung', 'swot-analyse', 'tcp-ip', 'tom',
  'total-quality-management', 'tunneling', 'uml', 'uml-aktivitaetsdiagramm',
  'uml-anwendungsfalldiagramm', 'uml-klassendiagramm', 'uml-sequenzdiagramm',
  'uml-zustandsdiagramm', 'ueberwachtes-und-nicht-ueberwachtes-lernen', 'urheberrecht',
  'usv', 'varianz', 'vernetzung', 'verschluesselungsart', 'versionsmanagement', 'verteilung',
  'vertriebsmodelle', 'vpn-modelle', 'wahrscheinlichkeiten', 'webserver', 'wertschoepfungskette',
  'wiederkehrende-systemablaeufe-mithilfe-von-skripten-automatisieren-und-ueberwachen-koennen',
  'wissensmanagement', 'workshops', 'zentralisierung-und-dezentralisierung', 'zufallsvariable'
];

// Add learning content URLs
learningTopics.forEach(topic => {
  urls.push({
    url: `${baseUrl}/lerninhalte/${topic}/`,
    lastmod: '2025-01-01',
    priority: '0.8'
  });
});

// Generate sitemap XML
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(urlObj => {
    xml += '  <url>\n';
    xml += `    <loc>${urlObj.url}</loc>\n`;
    xml += `    <lastmod>${urlObj.lastmod}T00:00:00.000Z</lastmod>\n`;
    xml += `    <priority>${urlObj.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
}

// Write sitemap to public folder
const publicPath = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicPath, 'sitemap.xml');

if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

const sitemapXml = generateSitemap();
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

console.log(`✓ Generated static sitemap.xml with ${urls.length} URLs`);
console.log(`✓ Saved to: ${sitemapPath}`);
console.log('✓ This will be served directly by the web server - no processing needed!');