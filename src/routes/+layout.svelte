<script lang="ts">
	import './style.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<Header />
<main>
	<slot />
</main>
<Footer locale={data.locale} />
