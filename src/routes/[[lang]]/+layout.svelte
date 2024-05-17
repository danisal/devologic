<script lang="ts">
	import './style.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ MainLayout } = data);
</script>

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
