<script>
	import Testimonial from '$lib/components/Testimonial.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import LogoClouds from '$lib/components/LogoClouds.svelte';
	import LearnMoreSection from '$lib/components/LearnMoreSection.svelte';
	import CtaSection from '$lib/components/CTASection.svelte';

	export let homePage;
	export let blogPosts;
</script>

<Hero heading={homePage?.heading ?? ''} subHeading={homePage?.subHeading ?? ''} />
<Feature
	tag={homePage?.servicesTag ?? ''}
	title={homePage?.servicesTitle ?? ''}
	description={homePage?.servicesDescription ?? ''}
	services={homePage?.services ?? []}
/>
<Testimonial testimony={homePage?.testimony} />
<LogoClouds title={homePage?.toolsTitle ?? ''} description={homePage?.toolsDescription ?? ''} />
<LearnMoreSection
	title={homePage?.blogPostsTitle ?? ''}
	description={homePage?.blogPostsDescription ?? ''}
	posts={blogPosts ?? []}
/>

<CtaSection
	heading={homePage?.callOut?.heading ?? ''}
	subHeading={homePage?.callOut?.subHeading ?? ''}
	cta={homePage?.callOut?.cta ?? ''}
/>
