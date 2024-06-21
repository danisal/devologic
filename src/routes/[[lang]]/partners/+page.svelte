<script lang="ts">
	import { ExternalLink, Facebook, Instagram } from 'lucide-svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ PartnersPage } = data);
</script>

{#if $PartnersPage.data}
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{$PartnersPage.data.page?.heading}</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					{$PartnersPage.data.page?.mainParagraph?.text}
				</p>
			</div>
			<ul
				role="list"
				class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<li>
					<enhanced:img class="aspect-[3/2] w-full rounded object-contain" src="./images/frhm.png" alt="FRHM Logo" />
					<h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">FRHM Publicidade</h3>
					<p class="text-base leading-7 text-gray-500 hover:text-gray-700">
						<a
							class="flex items-center gap-2"
							href="https://frhmpublicidade.pt"
							target="_blank"
							rel="noopener noreferrer">Visit Website <ExternalLink size="16" /></a
						>
					</p>
					<ul role="list" class="mt-6 flex gap-x-6">
						<li>
							<a
								class="text-gray-400 hover:text-gray-500"
								href="https://www.facebook.com/frhmpublicidade"
								rel="noopener noreferrer"
							>
								<span class="sr-only">X</span>
								<Facebook size="20" aria-hidden="true" />
							</a>
						</li>
						<li>
							<a
								class="text-gray-400 hover:text-gray-500"
								href="https://www.instagram.com/frhmpublicidade/"
								rel="noopener noreferrer"
							>
								<span class="sr-only">Instagram</span>
								<Instagram size="20" aria-hidden="true" />
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
{/if}
