<script lang="ts">
	import type { PageData } from './$houdini';
	import { format } from 'date-fns';

	export let data: PageData;
	$: ({ BlogPosts } = data);
	$: ({ edges } = $BlogPosts.data?.blogPostsConnection ?? {});
</script>

{#if edges}
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
								loading="lazy"
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
								<!--							<a-->
								<!--								href="#"-->
								<!--								class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"-->
								<!--								>{edge.node.tag[0]}</a-->
								<!--							>-->
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
									loading="lazy"
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
			</div>
		</div>
	</div>
{/if}
