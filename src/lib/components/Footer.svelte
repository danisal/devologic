<script lang="ts">
	import { Facebook, type Icon, Instagram, Linkedin, Twitter } from 'lucide-svelte';
	import { type Language, languages } from '@/utils/locale';
	import { goto } from '$app/navigation';
	import type { ComponentType } from 'svelte';
	import DevologicIconHorizontalDark from '$lib/logos/DevologicIconHorizontalDark.svelte';
	import type { MainLayout$result } from '$houdini';

	export let lang: Language;
	export let rights: NonNullable<MainLayout$result['layout']>['rights'];
	export let sentence: NonNullable<MainLayout$result['layout']>['footerSentence'];
	export let links: NonNullable<MainLayout$result['layout']>['footerLinks'];

	const year = new Date().getFullYear();
	let selectedLanguage: Language;

	function handleLanguageSelect() {
		return selectedLanguage === 'pt' ? goto('/pt') : goto('/');
	}

	type SocialItem = {
		href: string;
		icon: ComponentType<Icon>;
		name: string;
	};

	const socialItems: SocialItem[] = [
		{
			href: 'https://facebook.com',
			icon: Facebook,
			name: 'Facebook',
		},
		{
			href: 'https://instagram.com',
			icon: Instagram,
			name: 'Instagram',
		},
		{
			href: 'https://twitter.com',
			icon: Twitter,
			name: 'Twitter',
		},
		{
			href: 'https://linkedin.com',
			icon: Linkedin,
			name: 'LinkedIn',
		},
	];
</script>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<a href="/">
					<span class="sr-only">Devologic</span>
					<DevologicIconHorizontalDark class="h-7" />
				</a>
				<p class="text-sm leading-6 text-gray-300">
					{sentence}
				</p>
				<!--				<div class="flex space-x-6">-->
				<!--					{#each socialItems as socialItem}-->
				<!--						<a href={socialItem.href} class="text-gray-500 hover:text-gray-400">-->
				<!--							<span class="sr-only">{socialItem.name}</span>-->
				<!--							<svelte:component this={socialItem.icon} strokeWidth="1.5" />-->
				<!--						</a>-->
				<!--					{/each}-->
				<!--				</div>-->
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
						<div class="mt-auto">
							<label for="locale" class="block text-sm font-medium leading-6 text-white">Language</label>
							<select
								id="locale"
								name="locale"
								class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-east-bay-600 sm:text-sm sm:leading-6"
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
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">&copy; {year} Devologic. {rights}</p>
		</div>
	</div>
</footer>
