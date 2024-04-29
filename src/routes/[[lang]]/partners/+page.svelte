<script lang="ts">
	import { ExternalLink, Facebook, Linkedin } from 'lucide-svelte';
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Amazing Partners</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				At Devologic, we believe in the power of collaboration. That's why we're proud to partner with some of the
				industry's leading companies and organizations. Together, we're working towards common goals, driving
				innovation, and delivering exceptional results.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<li>
				<img class="aspect-[3/2] w-full rounded object-contain" src="/partners/frhm.png" alt="" />
				<h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">FRHM Publicidade</h3>
				<p class="text-base leading-7 text-gray-500 hover:text-gray-700">
					<a class="flex items-center gap-2" href="https://frhmpublicidade.pt" target="_blank" rel="noopener noreferrer"
						>Visit Website <ExternalLink size="16" /></a
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
							href="https://www.facebook.com/frhmpublicidade"
							rel="noopener noreferrer"
						>
							<span class="sr-only">LinkedIn</span>
							<Linkedin size="20" aria-hidden="true" />
						</a>
					</li>
				</ul>
			</li>

			<!-- More people... -->
		</ul>
	</div>
</div>
