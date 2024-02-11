<script lang="ts">
	import type { PageData } from './$houdini';
	import Services from '@/pages/services.svelte';

	export let data: PageData;
	$: ({ ServicesData } = data);
</script>

<Services
	eCommerce={$ServicesData.data.eCommerce}
	marketing={$ServicesData.data.marketing}
	seo={$ServicesData.data.seo}
	socialMedia={$ServicesData.data.socialMedia}
/>
