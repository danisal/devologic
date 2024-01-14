<script lang="ts">
	import CtaSection from '$lib/components/CTASection.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LearnMoreSection from '$lib/components/LearnMoreSection.svelte';
	import LogoClouds from '$lib/components/LogoClouds.svelte';
	import Testimonial from '$lib/components/Testimonial.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Home } = data);
</script>

<svelte:head>
	<title>Devologic</title>
	<meta name="title" content="Devologic" />
	<meta name="language" content="English" />
</svelte:head>

<Hero heading={$Home?.data?.homePage?.heading ?? ''} subHeading={$Home?.data?.homePage?.subHeading ?? ''} />
<Feature
	tag={$Home?.data?.homePage?.servicesTag ?? ''}
	title={$Home?.data?.homePage?.servicesTitle ?? ''}
	description={$Home?.data?.homePage?.servicesDescription ?? ''}
	services={$Home?.data?.homePage?.services ?? []}
/>
<Testimonial testimony={$Home?.data?.homePage?.testimony} />
<LogoClouds
	title={$Home?.data?.homePage?.toolsTitle ?? ''}
	description={$Home?.data?.homePage?.toolsDescription ?? ''}
/>
<LearnMoreSection
	title={$Home?.data?.homePage?.blogPostsTitle ?? ''}
	description={$Home?.data?.homePage?.blogPostsDescription ?? ''}
	posts={$Home?.data?.blogPosts ?? []}
/>

<CtaSection
	heading={$Home?.data?.homePage?.callOut?.heading ?? ''}
	subHeading={$Home?.data?.homePage?.callOut?.subHeading ?? ''}
	cta={$Home?.data?.homePage?.callOut?.cta ?? ''}
/>
