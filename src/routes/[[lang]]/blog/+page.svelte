<script lang="ts">
	import type { PageServerData } from './$houdini';
	import Blog from '@/pages/blog.svelte';

	export let data: PageServerData;
	$: ({ BlogPosts } = data);
</script>

{#if $BlogPosts.data}
	<Blog edges={$BlogPosts.data.blogPostsConnection.edges} />
{/if}
