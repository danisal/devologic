<script lang="ts">
	import type { Home$result } from '$houdini';

	export let title: string;
	export let description: string;
	export let posts: Home$result['blogPosts'];
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				{description}
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				{#each posts as post}
					<div class="flex flex-col">
						<dt class="text-base font-semibold leading-7 text-white">
							<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-east-bay-500">
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
									/>
								</svg>
							</div>
							{post.name}
						</dt>
						<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
							<p class="flex-auto">
								{post.description}
							</p>
							<p class="mt-6">
								<a href={post.url} class="text-sm font-semibold leading-6 text-east-bay-400"
									>{post.cta} <span aria-hidden="true">→</span></a
								>
							</p>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
