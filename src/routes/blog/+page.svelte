<script lang="ts">
	import type { PageData } from './$houdini';
	import { format } from 'date-fns';

	export let data: PageData;

	$: ({ BlogPosts } = data);
	$: ({ edges } = $BlogPosts.data?.blogPostsConnection ?? { edges: [] });
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
		</div>
		<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
			{#each edges as edge}
				<article class="flex flex-col items-start justify-between">
					<div class="relative w-full">
						<img
							alt={edge.node.heroImage?.alt}
							src={edge.node.heroImage?.url}
							width="450"
							class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						/>
						<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
					</div>
					<div class="max-w-xl">
						<div class="mt-8 flex items-center gap-x-4 text-xs">
							<time datetime={format(edge.node.publishedAt ?? '', 'dd-MM-yyyy')} class="text-gray-500"
								>{format(edge.node.publishedAt ?? '', 'dd MMM yyyy')}</time
							>
							<a
								href="#"
								class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>{edge.node.tag[0]}</a
							>
						</div>
						<div class="group relative">
							<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href={edge.node.url}>
									<span class="absolute inset-0"></span>
									{edge.node.name}
								</a>
							</h3>
							<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								{edge.node.description}
							</p>
						</div>
						<div class="relative mt-8 flex items-center gap-x-4">
							<img
								src={edge.node.author?.photo.url}
								alt={edge.node.author?.photo.alt}
								width="100"
								class="h-10 w-10 rounded-full bg-gray-100"
							/>
							<div class="text-sm leading-6">
								<p class="font-semibold text-gray-900">
									<!-- <a href="#"> -->
									<span>
										<span class="absolute inset-0"></span>
										{edge.node.author?.name}
									</span>
								</p>
								<p class="text-gray-600">{edge.node.author?.role}</p>
							</div>
						</div>
					</div>
				</article>
			{/each}

			<!-- <article class="flex flex-col items-start justify-between">
				<div class="relative w-full">
					<img
						src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
						alt=""
						class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
					/>
					<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
				</div>
				<div class="max-w-xl">
					<div class="mt-8 flex items-center gap-x-4 text-xs">
						<time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
						<a
							href="#"
							class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>Marketing</a
						>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
							<a href="#">
								<span class="absolute inset-0"></span>
								Boost your conversion rate
							</a>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
							Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
							necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
						</p>
					</div>
					<div class="relative mt-8 flex items-center gap-x-4">
						<img
							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							class="h-10 w-10 rounded-full bg-gray-100"
						/>
						<div class="text-sm leading-6">
							<p class="font-semibold text-gray-900">
								<a href="#">
									<span class="absolute inset-0"></span>
									Michael Foster
								</a>
							</p>
							<p class="text-gray-600">Co-Founder / CTO</p>
						</div>
					</div>
				</div>
			</article> -->

			<!-- More posts... -->
		</div>
	</div>
</div>

<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->

<!-- <nav class="mx-auto mb-4 flex max-w-7xl items-center justify-between border-t border-gray-200 px-4 sm:px-0 lg:px-8">
	<div class="-mt-px flex w-0 flex-1">
		<button
			disabled={!$BlogPosts.pageInfo.hasPreviousPage}
			on:click={async () => await BlogPosts.loadPreviousPage()}
			class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
		>
			<svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
					clip-rule="evenodd"
				/>
			</svg>
			Previous
		</button>
	</div>
	<div class="hidden md:-mt-px md:flex">
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			>1</a
		>
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
			aria-current="page">2</a
		>
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			>3</a
		>
		<span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
			>...</span
		>
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			>8</a
		>
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			>9</a
		>
		<a
			href="#"
			class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			>10</a
		>
	</div>
	<div class="-mt-px flex w-0 flex-1 justify-end">
		<button
			disabled={!$BlogPosts.pageInfo.hasNextPage}
			on:click={async () => await BlogPosts.loadNextPage()}
			class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
		>
			Next
			<svg class="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</nav> -->
