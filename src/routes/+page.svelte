<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';

	const copy = [
		'Welcome',
		'Devologic is a digital agency specializing in web development and web applications.',
		'We create websites and web applications that are easy to use, reliable, robust, and secure.',
		'We like to build digital products that put our clients on top of their markets.',
		'We provide a professional and friendly service. We work hard to keep our customers happy while using the latest technology to help them succeed.',
		'Develop fun and impactful digital products that delight our clients and their customers.',
		'Our goal is to focus on the quality of the product and technical excellence as our expertise.',
		'By combining great design with innovative technologies, we are here to help you increase your business growth.',
		`Our mission is to be in tune with our client's needs to deliver their projects on time, within budget, and with the best quality.`,
	];
</script>

<svelte:head>
	<title>Devologic | Digital Studio</title>
	<meta name="description" content="Devologic Digital Studio" />
</svelte:head>

<div class="overflow-auto snap-y snap-mandatory h-screen">
	{#each copy as sentence, index}
		<Section>
			{sentence}
		</Section>
	{/each}
	<Section>
		Let's work together to bring your online presence to the next level.

		<ContactForm
			message="Message"
			messagePlaceholder="Hello, I am interested in creating a new website for my business and would like to request a quote for your web design and development services. Could you please provide more information on your process and pricing?"
			name="Name"
			namePlaceholder="Jane Doe"
			subject="Subject"
			subjectPlaceholder="Request for a quote for a new website"
		/>
	</Section>

	<Footer privacy="Privacy Policy" rights="All rights reserved." />
</div>
