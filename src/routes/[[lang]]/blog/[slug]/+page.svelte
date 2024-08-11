<script lang="ts">
	import type { PageData } from './$houdini';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';

	export let data: PageData;

	$: ({ BlogPost } = data);
	$: ({ blogPosts } = $BlogPost.data ?? {});
</script>

<MetaTags description={blogPosts[0].intro} keywords={[blogPosts[0].tag]}
					openGraph={{ title:blogPosts[0].mainHeading, type: 'article', images: [{
					url: blogPosts[0].heroImage?.url,
					alt: blogPosts[0].heroImage?.alt
						}]
					}}
					title={blogPosts[0].mainHeading} />

{#if blogPosts}
	<div class="bg-white px-6 py-32 lg:px-8">
		<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
			<p class="text-base font-semibold leading-7 text-east-bay-600">{blogPosts[0].tag}</p>
			<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{blogPosts[0].mainHeading}
			</h1>
			<p class="mt-6 text-xl leading-8">
				{blogPosts[0].intro}
			</p>
			<figure class="mt-16">
				<img
					class="aspect-video rounded-xl bg-gray-50 object-cover"
					src={blogPosts[0].heroImage?.url}
					alt={blogPosts[0].heroImage?.alt}
				/>
				<figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
					<svg
						class="mt-0.5 h-5 w-5 flex-none text-gray-300"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
							clip-rule="evenodd"
						/>
					</svg>
					{blogPosts[0].heroImage?.metadata.credit}
				</figcaption>
			</figure>
			<div class="prose mt-16 max-w-2xl">{@html blogPosts[0].content.html}</div>
		</div>
	</div>
{/if}

<JsonLd
	output="body"
	schema={{
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: blogPosts[0].mainHeading,
		image: blogPosts[0].heroImage?.url,
		author: {
			'@type': 'Organization',
			name: 'Devologic'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Devologic',
			logo: {
				'@type': 'ImageObject',
				url: 'https://devologic.digital/logos/1200x675.png',
			}
		},
		datePublished: '2024-01-14'
	}}
/>