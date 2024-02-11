<script lang="ts">
	import type { PageData } from './$houdini';
	import BlogPostPage from '@/pages/BlogPost.svelte';

	export let data: PageData;

	$: ({ BlogPost } = data);
</script>

{#if $BlogPost.data?.blogPosts.length}
	<BlogPostPage blogPosts={$BlogPost.data.blogPosts} />
{/if}
