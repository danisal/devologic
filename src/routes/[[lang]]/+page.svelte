<script lang="ts">
	import type { PageData } from './$houdini';
	import Feature from '$lib/components/Feature.svelte';
	import LogoClouds from '$lib/components/LogoClouds.svelte';
	import LearnMoreSection from '$lib/components/LearnMoreSection.svelte';
	import CtaSection from '$lib/components/CTASection.svelte';

	export let data: PageData;
	$: ({ Home } = data);
	$: ({ homePage, blogPosts } = $Home.data ?? {});
	$: ({ testimony, heading, subHeading, cta } = homePage ?? {});
</script>

{#if homePage}
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
					<div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							{heading}
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
							{subHeading}
						</p>
						<div class="mt-10 flex items-center gap-x-6">
							<a
								href={cta?.link}
								class="rounded-md bg-east-bay-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-east-bay-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-east-bay-600"
								>{cta?.label}</a
							>
						</div>
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

	<Feature
		tag={homePage?.servicesTag}
		title={homePage?.servicesTitle}
		description={homePage?.servicesDescription}
		services={homePage?.services ?? []}
	/>

	<div class="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
		<div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
			<div
				class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
			>
				<div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
					<div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
						<!--						<img-->
						<!--							loading="lazy"-->
						<!--							class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"-->
						<!--							src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"-->
						<!--							alt=""-->
						<!--						/>-->
					</div>
				</div>
				<div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
					<figure class="relative isolate pt-6 sm:pt-12">
						<svg
							viewBox="0 0 162 128"
							fill="none"
							aria-hidden="true"
							class="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
						>
							<path
								id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
								d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
							/>
							<use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
						</svg>
						<blockquote class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
							<p>
								{testimony?.testimony ?? ''}
							</p>
						</blockquote>
						<figcaption class="mt-8 text-base">
							<div class="font-semibold text-white">{testimony?.name ?? ''}</div>
							<div class="mt-1 text-gray-400">{testimony?.position ?? ''}</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>

	<LogoClouds title={homePage?.toolsTitle} description={homePage?.toolsDescription} />

	<LearnMoreSection
		title={homePage?.blogPostsTitle}
		description={homePage?.blogPostsDescription}
		posts={blogPosts ?? []}
	/>

	<CtaSection
		heading={homePage?.callOut?.heading}
		subHeading={homePage?.callOut?.subHeading}
		cta={homePage?.callOut?.cta}
	/>
{/if}
