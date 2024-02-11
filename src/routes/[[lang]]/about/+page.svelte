<script lang="ts">
	import type { PageData } from './$houdini';
	import AboutPage from '@/pages/about.svelte';

	export let data: PageData;

	$: ({ About } = data);

	function groupArrayIntoPairs(arr) {
		const pairs = [];
		for (let i = 0; i < arr.length; i += 2) {
			if (arr[i + 1] !== undefined) {
				pairs.push([arr[i], arr[i + 1]]);
			} else {
				pairs.push([arr[i]]);
			}
		}
		return pairs;
	}

	$: valuesParagraphs = groupArrayIntoPairs($About.data.page.values.paragraphs);
</script>

<AboutPage {valuesParagraphs} page={$About.data.page} />
