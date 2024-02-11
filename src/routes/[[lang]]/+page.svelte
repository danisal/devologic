<script lang="ts">
	import type { PageData } from './$houdini';
	import HomePage from '@/pages/home.svelte';

	export let data: PageData;
	$: ({ Home } = data);
</script>

<svelte:head>
	<title>Devologic</title>
	<meta name="title" content="Devologic" />
	<meta name="language" content="English" />
</svelte:head>

<HomePage blogPosts={$Home.data.blogPosts} homePage={$Home.data.homePage} />
