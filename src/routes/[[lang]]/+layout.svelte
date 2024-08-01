<script lang="ts">
	import './style.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$houdini';
	import { JsonLd, MetaTags, type MetaTagsProps } from 'svelte-meta-tags';

	export let data: LayoutData;

	$: ({ MainLayout } = data);
	const meta = {
		title: 'Devologic',
		description: 'We provide innovative solutions for your online presence.',
		url: 'https://devologic.digital',
	};

	// SEO
	$: metaTags = {
		title: meta.title,
		titleTemplate: '%s | Digital Agency',
		description: meta.description,
		additionalLinkTags: [
			{ name: 'application-name', content: 'Devologic' },
			{ name: 'msapplication-TileColor', content: '#fafafa' },
			{ rel: 'icon', type: 'image/png', href: '/favicon/favicon-light.png', media: '(prefer-color-schema: light)' },
			{ rel: 'icon', type: 'image/png', href: '/favicon/favicon-dark.png', media: '(prefer-color-schema: dark)' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
		],
		openGraph: {
			type: 'website',
			url: meta.url,
			description: meta.description,
			images: [
				{
					url: 'https://devologic.digital/logos/devologic-icon-horizontal-light.svg',
					alt: 'Devologic logo',
					width: 1388,
					height: 414,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			title: meta.title,
			description: meta.description,
			image: 'https://devologic.digital/logos/devologic-icon-horizontal-light.svg',
			imageAlt: 'Devologic logo',
			site: meta.url,
		},
		keywords: ['web design', ' web development', ' marketing', ' marketing strategy', ' seo'],
		robots: 'index,follow',
	} satisfies MetaTagsProps;
</script>

<MetaTags {...metaTags} />

{#if $MainLayout.data}
	<Header headerLinks={$MainLayout.data.layout?.headerLinks} headerCta={$MainLayout.data.layout?.headerCta} />
	<main>
		<slot />
	</main>
	<Footer
		lang={data.lang}
		sentence={$MainLayout.data.layout?.footerSentence}
		links={$MainLayout.data.layout?.footerLinks}
		rights={$MainLayout.data.layout?.rights}
	/>
{/if}

<JsonLd
	output="body"
	schema={{
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Devologic',
		url: 'https://devologic.digital',
		logo: 'https://devologic.digital/logos/devologic-icon-vertical-light.svg',
	}}
/>
