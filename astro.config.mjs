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
			title: 'open-fidup',
			favicon: './src/assets/favicon.png',
			logo: {
				src: './src/assets/logo.webp',
			},
			description: 'Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP)',
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
						content: 'Kostenlose Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP). Umfassende Lernmaterialien und Übungen.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'FiDuP, Fachinformatiker, Datenanalyse, Prozessanalyse, Ausbildungsprüfung, IT-Ausbildung, Lernmaterialien',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'open-fidup - FiDuP Wissensdatenbank',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'Kostenlose Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP).',
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
						content: 'open-fidup - FiDuP Wissensdatenbank',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: 'Kostenlose Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP).',
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
						"name": "open-fidup",
						"description": "Kostenlose Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP)",
						"url": "https://t128n.github.io/open-fidup",
						"logo": "https://t128n.github.io/open-fidup/logo.svg",
						"educationalCredentialAwarded": "Fachinformatiker für Daten- und Prozessanalyse",
						"hasEducationalUse": "Preparation for vocational examination",
						"inLanguage": "de",
						"provider": {
							"@type": "Person",
							"name": "Torben"
						}
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
