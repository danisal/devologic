<script lang="ts">
	import type { PageServerData } from './$houdini';
	import Blog from '@/pages/blog.svelte';

	export let data: PageServerData;
	$: ({ BlogPosts } = data);
</script>

<Blog edges={$BlogPosts.data.blogPostsConnection.edges} />
