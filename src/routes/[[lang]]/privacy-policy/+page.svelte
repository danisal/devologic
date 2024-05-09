<script lang="ts">
	import PrivacyPolicyPage from '@/pages/privacy-policy.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ PrivacyPolicy } = data);
</script>

{#if $PrivacyPolicy.data}
	<PrivacyPolicyPage content={$PrivacyPolicy.data.privacyPolicy.content.text} />
{/if}
