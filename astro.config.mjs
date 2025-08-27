// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGitHubAlerts from 'starlight-github-alerts'


// https://astro.build/config
export default defineConfig({
	site: 'https://t128n.github.io/open-fidup',
	integrations: [
		starlight({
			title: 'open-fidup',
			description: 'Wissensdatenbank für die Vorbereitung auf die Abschlussprüfung Fachinformatiker für Daten- und Prozessanalyse (FiDuP)',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://t128n.github.io/open-fidup' },
			],
			sidebar: [
				{
					label: 'Startseite',
					items: [
						{ label: 'Willkommen', slug: '' },
						{ label: 'Über open-fidup', slug: 'ueber' },
						{ label: 'Kontakt', slug: 'kontakt' },
					],
				},
				{
					label: 'Lerninhalte',
					autogenerate: { directory: 'lerninhalte' },
				},
				{
					label: 'Prüfungsvorbereitung',
					items: [
						{ label: '🚧 Prüfungsstruktur (in Vorbereitung)', slug: 'pruefung/struktur' },
						{ label: '🚧 Übungsaufgaben (in Vorbereitung)', slug: 'pruefung/uebungen' },
						{ label: '🚧 Musterlösungen (in Vorbereitung)', slug: 'pruefung/loesungen' },
						{ label: '🚧 Tipps & Tricks (in Vorbereitung)', slug: 'pruefung/tipps' },
					],
				},
				{
					label: 'Rechtliches',
					items: [
						{ label: 'Impressum', slug: 'impressum' },
					],
				},
			],
			head: [
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
						href: 'https://open-fidup.de',
					},
				},
			],
			plugins: [starlightGitHubAlerts()],
		}),
	],
});
