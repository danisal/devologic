<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ PrivacyPolicy } = data);
	$: content = $PrivacyPolicy.data?.privacyPolicy?.content?.text;
</script>

{#if content}
	<div class="container prose mx-auto px-7 py-16">
		{@html content}
	</div>
{/if}
