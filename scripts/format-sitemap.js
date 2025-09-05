#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { DOMParser, XMLSerializer } from '@xmldom/xmldom';

const distPath = path.join(process.cwd(), 'dist');
const sitemapPath = path.join(distPath, 'sitemap-0.xml');
const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');

function formatXML(xmlString) {
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  
  try {
    const doc = parser.parseFromString(xmlString, 'text/xml');
    
    // Remove unnecessary namespaces for basic sitemaps
    if (doc.documentElement.nodeName === 'urlset') {
      // Remove news, xhtml, image, video namespaces as they're not needed
      doc.documentElement.removeAttribute('xmlns:news');
      doc.documentElement.removeAttribute('xmlns:xhtml');
      doc.documentElement.removeAttribute('xmlns:image');
      doc.documentElement.removeAttribute('xmlns:video');
    }
    
    // Format the XML with proper indentation
    function formatNode(node, indent = '') {
      if (node.nodeType === 1) { // Element node
        let result = indent + '<' + node.nodeName;
        
        // Add attributes
        if (node.attributes) {
          for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes.item(i);
            result += ` ${attr.name}="${attr.value}"`;
          }
        }
        
        if (node.childNodes.length === 0) {
          result += '/>\n';
        } else if (node.childNodes.length === 1 && node.firstChild.nodeType === 3) {
          // Text-only node
          result += '>' + node.firstChild.nodeValue.trim() + '</' + node.nodeName + '>\n';
        } else {
          result += '>\n';
          for (let i = 0; i < node.childNodes.length; i++) {
            const child = node.childNodes.item(i);
            if (child.nodeType === 1) { // Element node
              result += formatNode(child, indent + '  ');
            }
          }
          result += indent + '</' + node.nodeName + '>\n';
        }
        return result;
      }
      return '';
    }
    
    let formatted = '<?xml version="1.0" encoding="UTF-8"?>\n';
    formatted += formatNode(doc.documentElement);
    
    return formatted;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return xmlString; // Return original if parsing fails
  }
}

function formatSitemapFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const formatted = formatXML(content);
  
  fs.writeFileSync(filePath, formatted, 'utf-8');
  console.log(`✓ Formatted ${path.basename(filePath)}`);
}

// Format both sitemap files
formatSitemapFile(sitemapPath);
formatSitemapFile(sitemapIndexPath);

console.log('✓ Sitemap formatting completed!');