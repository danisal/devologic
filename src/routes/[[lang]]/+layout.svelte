<script lang="ts">
	import './style.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ locale, MainLayout } = data);
</script>

<Header />
<main>
	<slot />
</main>
<Footer
	locale={data.locale}
	sentence={$MainLayout.data.layout.footerSentence}
	links={$MainLayout.data.layout.footerLinks ?? []}
	pages={$MainLayout.data.layout.pages}
	rights={$MainLayout.data.layout.rights}
/>
