<script lang="ts">
	import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-svelte';
	import { type Language, languages } from '../../utils/locale.js';
	import { goto } from '$app/navigation';

	export let lang: Language;
	export let rights: string;
	export let sentence: string;
	export let links;

	const year = new Date().getFullYear();
	let selectedLanguage;
	function handleLanguageSelect() {
		return selectedLanguage === 'pt' ? goto('/pt') : goto('/');
	}
</script>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img
					loading="lazy"
					class="h-7"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Devologic logo"
				/>
				<p class="text-sm leading-6 text-gray-300">
					{sentence}
				</p>
				<div class="flex space-x-6">
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Facebook</span>
						<Facebook />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Instagram</span>
						<Instagram />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Twitter</span>
						<Twitter />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">LinkedIn</span>
						<Linkedin />
					</a>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">{links[0].title}</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each links[0].link as link}
								<li>
									<a href={link.value} class="text-sm leading-6 text-gray-300 hover:text-white">{link.key}</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">{links[1].title}</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each links[1].link as link}
								<li>
									<a href={link.value} class="text-sm leading-6 text-gray-300 hover:text-white">{link.key}</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">{links[2].title}</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each links[2].link as link}
								<li>
									<a href={link.value} class="text-sm leading-6 text-gray-300 hover:text-white">{link.key}</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 flex flex-col md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">{links[3].title}</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each links[3].link as link}
								<li>
									<a href={link.value} class="text-sm leading-6 text-gray-300 hover:text-white">{link.key}</a>
								</li>
							{/each}
						</ul>
						<label for="locale" class="block text-sm font-medium leading-6 text-white">Language</label>
						<select
							id="locale"
							name="locale"
							class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={selectedLanguage}
							on:change={handleLanguageSelect}
						>
							{#each languages as language}
								<option selected={language.value === lang} value={language.value}>{language.label}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">&copy; {year} Devologic. {rights}</p>
		</div>
	</div>
</footer>
