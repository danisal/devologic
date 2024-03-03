<script lang="ts">
	import Contact from '@/pages/contact.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ ContactPage } = data);
</script>

{#if $ContactPage.data}
	<Contact {...$ContactPage.data.contact} />
{/if}
