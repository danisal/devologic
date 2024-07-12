<script lang="ts">
	import DevologicIconHorizontalLight from '$lib/logos/DevologicIconHorizontalLight.svelte';
	import DevologicIconVerticalLight from '$lib/logos/DevologicIconVerticalLight.svelte';
	import type { MainLayout$result } from '$houdini';

	let mobileMode = false;
	export let headerLinks: NonNullable<MainLayout$result['layout']>['headerLinks'];
	export let headerCta: NonNullable<MainLayout$result['layout']>['headerCta'];

	function toggleMobile() {
		mobileMode = !mobileMode;
	}
</script>

<header class="bg-white">
	<nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
		<div class="flex lg:flex-1">
			<a class="-m-1.5 p-1.5" href="/">
				<span class="sr-only">Devologic</span>
				<DevologicIconHorizontalLight class="hidden h-7 w-auto lg:block" />
				<DevologicIconVerticalLight class="h-11 w-auto lg:hidden" />
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each headerLinks as { link, name }}
				<a href={link} class="text-sm font-semibold leading-6 text-gray-900">{name}</a>
			{/each}
		</div>
		<div class="flex flex-1 items-center justify-end gap-x-6">
			<a
				class="rounded-md bg-east-bay-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-east-bay-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-east-bay-600"
				href={headerCta?.link}>{headerCta?.name}</a
			>
		</div>
		<div class="flex lg:hidden">
			<button
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={toggleMobile}
				type="button"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					aria-hidden="true"
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					viewBox="0 0 24 24"
				>
					<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div aria-modal={mobileMode} class="lg:hidden" class:hidden={!mobileMode} role="dialog">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10"></div>
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center gap-x-6">
				<a class="-m-1.5 p-1.5" href="/">
					<span class="sr-only">Devologic</span>
					<DevologicIconVerticalLight class="h-11 w-auto" />
				</a>
				<a
					class="ml-auto rounded-md bg-east-bay-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-east-bay-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-east-bay-600"
					href={headerCta?.link}>{headerCta?.name}</a
				>
				<button class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggleMobile} type="button">
					<span class="sr-only">Close menu</span>
					<svg
						aria-hidden="true"
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
					>
						<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each headerLinks as { link, name }}
							<a
								href={link}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>{name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
