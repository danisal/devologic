<script lang="ts">
	import type { PageData } from './$houdini';
	import CtaSection from '$lib/components/CTASection.svelte';

	export let data: PageData;

	$: ({ About, lang } = data);

	function groupArrayIntoPairs(arr: string[]) {
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

	$: ({ page } = $About.data ?? {});
	$: valuesParagraphs = page?.values?.paragraphs ? groupArrayIntoPairs(page.values.paragraphs) : [];
</script>

{#if page}
	<!-- Hero section -->
	<div class="relative isolate">
		<svg
			class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
				<path
					d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
		</svg>
		<div
			class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			aria-hidden="true"
		>
			<div
				class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#61cfda] to-[#4260b3] opacity-30"
				style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
			></div>
		</div>
		<div class="overflow-hidden">
			<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
				<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
					<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							{page?.heading}
						</h1>
						<div class="prose relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
							{@html page?.mainParagraph?.html}
						</div>
						<!--					<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">-->
						<!--						At Devologic, we believe in the transformative power of digital innovation. Nestled at the intersection of-->
						<!--						creativity and technology, we are more than a digital agency; we are architects of online experiences,-->
						<!--						champions of brand elevation, and partners in your digital success story.-->
						<!--					</p>-->
						<!--					<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">-->
						<!--						Founded on the principles of excellence, integrity, and a client-centric approach, [Your Company Name] is a-->
						<!--						team of passionate professionals dedicated to reshaping the way businesses thrive in the digital era. Our-->
						<!--						journey is defined by a commitment to pushing boundaries, fostering innovation, and crafting solutions that-->
						<!--						not only meet but exceed the evolving expectations of a dynamic online landscape.-->
						<!--					</p>-->
						<!--					<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">-->
						<!--						In every line of code we write, every pixel we perfect, and every strategy we deploy, there's a shared-->
						<!--						commitment to making your digital aspirations a reality. Join us on this journey as we navigate the digital-->
						<!--						realm together, turning possibilities into achievements, and aspirations into tangible results.-->
						<!--					</p>-->
					</div>
					<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
						<div
							class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
						>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
						</div>
						<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
						</div>
						<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mission section -->
	<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{page?.mission?.title}</h2>
			<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
				<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
					<p class="text-xl leading-8 text-gray-600">
						{page?.mission?.paragraphs[0]}
					</p>
					<div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
						<p>
							{page?.mission?.paragraphs[1]}
						</p>
						<p class="mt-10">
							{page?.mission?.paragraphs[2]}
						</p>
					</div>
				</div>
				<!--				<div class="lg:flex lg:flex-auto lg:justify-center">-->
				<!--					<dl class="w-64 space-y-8 xl:w-80">-->
				<!--						<div class="flex flex-col-reverse gap-y-4">-->
				<!--							<dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>-->
				<!--							<dd class="text-5xl font-semibold tracking-tight text-gray-900">44 million</dd>-->
				<!--						</div>-->
				<!--						<div class="flex flex-col-reverse gap-y-4">-->
				<!--							<dt class="text-base leading-7 text-gray-600">Assets under holding</dt>-->
				<!--							<dd class="text-5xl font-semibold tracking-tight text-gray-900">$119 trillion</dd>-->
				<!--						</div>-->
				<!--						<div class="flex flex-col-reverse gap-y-4">-->
				<!--							<dt class="text-base leading-7 text-gray-600">New users annually</dt>-->
				<!--							<dd class="text-5xl font-semibold tracking-tight text-gray-900">46,000</dd>-->
				<!--						</div>-->
				<!--					</dl>-->
				<!--				</div>-->
			</div>
		</div>
	</div>

	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			loading="lazy"
			src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
		/>
	</div>

	<!-- Values section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{page?.values?.title}</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">{page?.values?.subTitle}</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each valuesParagraphs as [title, paragraph]}
				<div>
					<dt class="font-semibold text-gray-900">{title}</dt>
					<dd class="mt-1 text-gray-600">
						{paragraph}
					</dd>
				</div>
			{/each}
		</dl>
	</div>

	<!-- Logo cloud -->
	<div class="relative isolate -z-10 mt-32 sm:mt-48">
		<div
			class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
		>
			<svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
				<defs>
					<pattern
						id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
						width="200"
						height="200"
						x="50%"
						y="50%"
						patternUnits="userSpaceOnUse"
						patternTransform="translate(-100 0)"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="50%" class="overflow-visible fill-gray-50">
					<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
				</svg>
				<rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
			</svg>
		</div>
		<!--		<div class="mx-auto max-w-7xl px-6 lg:px-8">-->
		<!--			<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">-->
		<!--				Trusted by the world’s most innovative teams-->
		<!--			</h2>-->
		<!--			<div-->
		<!--				class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"-->
		<!--			>-->
		<!--				<img-->
		<!--					loading="lazy"-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"-->
		<!--					alt="Transistor"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					loading="lazy"-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"-->
		<!--					alt="Reform"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					loading="lazy"-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"-->
		<!--					alt="Tuple"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					loading="lazy"-->
		<!--					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"-->
		<!--					src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"-->
		<!--					alt="SavvyCal"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					loading="lazy"-->
		<!--					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"-->
		<!--					src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"-->
		<!--					alt="Statamic"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--			</div>-->
		<!--		</div>-->
	</div>

	<!-- Team section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{page?.team?.title}</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{page?.team?.subTitle}
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each page?.team?.images as { url, alt }}
				<li>
					<img loading="lazy" class="mx-auto h-24 w-24 rounded-full object-cover" src={url} {alt} />
					<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Daniel</h3>
					<p class="text-sm leading-6 text-gray-600">{lang === 'en' ? 'Founder' : 'Fundador'}</p>
				</li>
			{/each}
			<!-- More people... -->
		</ul>
	</div>

	<!-- Blog section -->
	<!--<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">-->
	<!--	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">-->
	<!--		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>-->
	<!--		<p class="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>-->
	<!--	</div>-->
	<!--	<div-->
	<!--		class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"-->
	<!--	>-->
	<!--		<article-->
	<!--			class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"-->
	<!--		>-->
	<!--			<img-->
	<!--				loading="lazy"-->
	<!--				src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"-->
	<!--				alt=""-->
	<!--				class="absolute inset-0 -z-10 h-full w-full object-cover"-->
	<!--			/>-->
	<!--			<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>-->
	<!--			<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>-->

	<!--			<div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">-->
	<!--				<time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>-->
	<!--				<div class="-ml-4 flex items-center gap-x-4">-->
	<!--					<svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">-->
	<!--						<circle cx="1" cy="1" r="1" />-->
	<!--					</svg>-->
	<!--					<div class="flex gap-x-2.5">-->
	<!--						<img-->
	<!--							loading="lazy"-->
	<!--							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
	<!--							alt=""-->
	<!--							class="h-6 w-6 flex-none rounded-full bg-white/10"-->
	<!--						/>-->
	<!--						Michael Foster-->
	<!--					</div>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--			<h3 class="mt-3 text-lg font-semibold leading-6 text-white">-->
	<!--				<a href="#">-->
	<!--					<span class="absolute inset-0"></span>-->
	<!--					Vel expedita assumenda placeat aut nisi optio voluptates quas-->
	<!--				</a>-->
	<!--			</h3>-->
	<!--		</article>-->

	<!--		&lt;!&ndash; More posts... &ndash;&gt;-->
	<!--	</div>-->
	<!--</div>-->

	<CtaSection cta={page?.cta?.cta} heading={page?.cta?.heading} subHeading={page?.cta?.subHeading} />
{/if}
