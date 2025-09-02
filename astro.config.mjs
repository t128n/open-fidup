// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightGitHubAlerts from 'starlight-github-alerts';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlightGiscus from 'starlight-giscus'
import mermaid from 'astro-mermaid';


// https://astro.build/config
export default defineConfig({
	site: 'https://t128n.github.io/',
	base: '/open-fidup/',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		mermaid(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
		starlight({
			title: 'Fachinformatiker Daten- und Prozessanalyse AP2 - open-fidup',
			favicon: './src/assets/favicon.png',
			logo: {
				src: './src/assets/logo.webp',
			},
			description: 'Kostenlose Wissensdatenbank für Fachinformatiker Daten- und Prozessanalyse (FiDuP) - AP2 Prüfungsvorbereitung mit umfassenden Lernmaterialien und Übungen',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			customCss: ['./src/styles/global.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/t128n/open-fidup' },
			],
			sidebar: [
				{
					label: 'Startseite',
					items: [
						{ label: 'Willkommen', slug: '' },
					],
				},
				{
					label: 'Lerninhalte',
					autogenerate: { directory: 'lerninhalte' },
				},
				{
					label: 'Info',
					items: [
						{ label: 'Über open-fidup', slug: 'ueber' },
						{ label: 'Kontakt', slug: 'kontakt' },
						{ label: 'Impressum', slug: 'impressum' },
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: '1qFNw2cAYvmW_rOr36n3S7FReorahcQ9gc_Cjq44ivY',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: 'Kostenlose Wissensdatenbank für Fachinformatiker Daten- und Prozessanalyse (FiDuP) - AP2 Prüfungsvorbereitung mit umfassenden Lernmaterialien, Übungen und Prüfungsinhalten für die Abschlussprüfung.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'Fachinformatiker Daten- und Prozessanalyse, FiDuP, AP2, Abschlussprüfung, Prüfungsvorbereitung, IT-Ausbildung, Lernmaterialien, Fachinformatiker AP2, Datenanalyse, Prozessanalyse, IHK Prüfung, Ausbildungsprüfung',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'Fachinformatiker Daten- und Prozessanalyse AP2 - open-fidup Wissensdatenbank',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'Kostenlose Wissensdatenbank für Fachinformatiker Daten- und Prozessanalyse (FiDuP) - AP2 Prüfungsvorbereitung mit umfassenden Lernmaterialien und Übungen.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'index, follow',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Torben Haack',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'subject',
						content: 'Fachinformatiker Daten- und Prozessanalyse AP2 Prüfungsvorbereitung',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'language',
						content: 'de',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'audience',
						content: 'Auszubildende, IT-Fachkräfte, Fachinformatiker',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'content-language',
						content: 'de',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'canonical',
						href: 'https://t128n.github.io/open-fidup/',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://t128n.github.io/open-fidup/logo.svg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'open-fidup',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'Fachinformatiker Daten- und Prozessanalyse AP2 - open-fidup Wissensdatenbank',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: 'Kostenlose Wissensdatenbank für Fachinformatiker Daten- und Prozessanalyse (FiDuP) - AP2 Prüfungsvorbereitung mit umfassenden Lernmaterialien und Übungen.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://t128n.github.io/open-fidup/logo.svg',
					},
				},
				{
					tag: 'script',
					attrs: {
						type: 'application/ld+json',
					},
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "EducationalOrganization",
						"name": "open-fidup - Fachinformatiker Daten- und Prozessanalyse Wissensdatenbank",
						"alternateName": "FiDuP AP2 Prüfungsvorbereitung",
						"description": "Kostenlose Wissensdatenbank für Fachinformatiker Daten- und Prozessanalyse (FiDuP) - AP2 Prüfungsvorbereitung mit umfassenden Lernmaterialien und Übungen",
						"url": "https://t128n.github.io/open-fidup",
						"logo": "https://t128n.github.io/open-fidup/logo.svg",
						"educationalCredentialAwarded": "Fachinformatiker für Daten- und Prozessanalyse",
						"hasEducationalUse": "Preparation for vocational examination",
						"inLanguage": "de",
						"audience": {
							"@type": "EducationalAudience",
							"educationalRole": "student",
							"audienceType": "Auszubildende"
						},
						"about": [
							{
								"@type": "Thing",
								"name": "Fachinformatiker Daten- und Prozessanalyse"
							},
							{
								"@type": "Thing", 
								"name": "AP2 Abschlussprüfung"
							},
							{
								"@type": "Thing",
								"name": "IT-Ausbildung"
							}
						],
						"keywords": "Fachinformatiker Daten- und Prozessanalyse, FiDuP, AP2, Abschlussprüfung, Prüfungsvorbereitung",
						"provider": {
							"@type": "Person",
							"name": "Torben Haack"
						}
					}),
				},
				{
					tag: 'script',
					attrs: {
						type: 'application/ld+json',
					},
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Course",
						"name": "Fachinformatiker Daten- und Prozessanalyse AP2 Vorbereitung",
						"description": "Umfassende Prüfungsvorbereitung für die Abschlussprüfung Fachinformatiker Daten- und Prozessanalyse (FiDuP) AP2",
						"provider": {
							"@type": "EducationalOrganization",
							"name": "open-fidup"
						},
						"educationalCredentialAwarded": "Fachinformatiker für Daten- und Prozessanalyse",
						"coursePrerequisites": "IT-Ausbildung, Grundkenntnisse in Datenanalyse",
						"inLanguage": "de",
						"isAccessibleForFree": true,
						"url": "https://t128n.github.io/open-fidup",
						"courseWorkload": "PT40H",
						"educationalUse": "Prüfungsvorbereitung",
						"learningResourceType": "Wissensdatenbank",
						"teaches": [
							"Datenanalyse",
							"Prozessanalyse", 
							"BPMN",
							"SQL",
							"Python",
							"Data Mining",
							"IT-Sicherheit",
							"Projektmanagement"
						]
					}),
				},
			],
			plugins: [
				starlightGitHubAlerts(),
				starlightGiscus({
					repo: 't128n/open-fidup',
					repoId: 'R_kgDOPlT2yg',
					category: 'Comments',
					categoryId: 'DIC_kwDOPlT2ys4Cuq-X'
				})
			],
		}),
	],
});
