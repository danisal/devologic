<script lang="ts">
	const year = new Date().getFullYear();

	const classes = [
		'max-w-5xl h-screen flex items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose prose-lg px-6 max-w-prose prose-fuchsia',
		'md:prose-xl md:px-0',
		'xl:prose-2xl',
	].join(' ');
</script>

<svelte:head>
	<title>Devologic | Digital Studio</title>
	<meta name="description" content="Devologic Studio" />
</svelte:head>

<div class="overflow-auto snap-y snap-mandatory h-screen">
	<section
		class="h-screen items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose-lg px-6 max-w-prose prose-fuchsia md:prose-xl md:px-0 xl:prose-2xl"
	>
		Welcome
	</section>
	<section class={classes}>Devologic is a digital agency specializing in web development and web applications.</section>
	<section class={classes}>
		We create websites and web applications that are easy to use, reliable, robust, and secure.
	</section>
	<section class={classes}>We like to build digital products that put our clients on top of their markets.</section>
	<section class={classes}>
		We provide a professional and friendly service. We work hard to keep our customers happy while using the latest
		technology to help them succeed.
	</section>
	<section class={classes}>
		Develop fun and impactful digital products that delight our clients and their customers.
	</section>
	<section class={classes}>
		Our goal is to focus on the quality of the product and technical excellence as our expertise.
	</section>
	<section class={classes}>
		By combining great design with innovative technologies, we are here to help you increase your business growth.
	</section>
	<section class={classes}>
		Our mission is to be in tune with our client's needs to deliver their projects on time, within budget, and with the
		best quality.
	</section>
	<footer class={classes}>
		<div class="">
			<img src="/devologic-logo.svg" alt="Devologic logotype" class="mx-auto w-40" loading="lazy" />
			<p class="mt-5 text-center text-sm leading-6 text-slate-500">
				© {year} Devologic Unipessoal Lda. All rights reserved.
			</p>
			<div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
				<a href="/privacy-policy">Privacy Policy</a>
			</div>
		</div>
	</footer>
</div>
