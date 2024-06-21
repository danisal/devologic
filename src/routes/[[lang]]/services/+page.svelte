<script lang="ts">
	import type { PageData } from './$houdini';
	import CtaSection from '$lib/components/CTASection.svelte';

	export let data: PageData;
	$: ({ ServicesData } = data);
	$: ({ seo, content, eCommerce, homePage, marketing, socialMedia } = $ServicesData.data ?? {});
	$: marketingSection = content?.section.find((s) => s.title === 'Marketing');
	$: eCommerceSection = content?.section.find((s) => s.title === 'E-Commerce');
	$: seoSection = content?.section.find((s) => s.title === 'Search Engine Optimization');
	$: socialMediaMarketing = content?.section.find((s) => s.title === 'Social Media Management');
	$: cta = content?.cta?.cta;
</script>

{#if marketingSection}
	<div class="bg-gray-900">
		<div class="relative isolate overflow-hidden pt-14">
			<img
				src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
          >
            Announcing our next round of funding. <a href="#" class="font-semibold text-white"
              ><span class="absolute inset-0" aria-hidden="true"></span>Read more
              <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div> -->
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						{content?.heading}
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						{content?.mainParagraph?.text}
					</p>
					<!--				<div class="mt-10 flex items-center justify-center gap-x-6">-->
					<!--					<a-->
					<!--						href="#"-->
					<!--						class="bg-east-bay-500 hover:bg-east-bay-400 focus-visible:outline-east-bay-400 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"-->
					<!--						>Get started</a-->
					<!--					>-->
					<!--					<a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a-->
					<!--					>-->
					<!--				</div>-->
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>
	</div>

	<!-- Marketing -->
	<div id="marketing" class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-east-bay-600">Marketing</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{marketingSection?.subTitle}
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					{marketingSection?.paragraphs[0]}
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{#each marketing as item}
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								{item.name}
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">
									{item.description}
								</p>
								<p class="mt-6">
									<a href={item.url} class="text-sm font-semibold leading-6 text-east-bay-600"
										>{cta} <span aria-hidden="true">→</span></a
									>
								</p>
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>

	<!-- E-Commerce -->
	<div id="e-commerce" class="bg-gray-900 py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-east-bay-400">E-Commerce</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{eCommerceSection?.subTitle}
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					{eCommerceSection?.paragraphs[0]}
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{#each eCommerce as item}
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
								{item.name}
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
								<p class="flex-auto">
									{item.description}
								</p>
								<p class="mt-6">
									<a href={item.url} class="text-sm font-semibold leading-6 text-east-bay-400"
										>{cta} <span aria-hidden="true">→</span></a
									>
								</p>
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>

	<!-- SEO -->
	<div id="seo" class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-east-bay-600">Search Engine Optimization</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{seoSection?.subTitle}
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					{seoSection?.paragraphs[0]}
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{#each seo as item}
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								{item.name}
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">
									{item.description}
								</p>
								<p class="mt-6">
									<a href={item.url} class="text-sm font-semibold leading-6 text-east-bay-600"
										>{cta} <span aria-hidden="true">→</span></a
									>
								</p>
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>

	<!-- Social Media -->
	<div id="social-media-management" class="bg-gray-900 py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-east-bay-400">Social Media Management</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{socialMediaMarketing?.subTitle}
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					{socialMediaMarketing?.paragraphs[0]}
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{#each socialMedia as item}
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
								{item.name}
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
								<p class="flex-auto">
									{item.description}
								</p>
								<p class="mt-6">
									<a href={item.url} class="text-sm font-semibold leading-6 text-east-bay-400"
										>{cta} <span aria-hidden="true">→</span></a
									>
								</p>
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>

	<CtaSection
		heading={homePage?.callOut?.heading}
		subHeading={homePage?.callOut?.subHeading}
		cta={homePage?.callOut?.cta}
	/>
{/if}
