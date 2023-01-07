<script lang="ts">
	import Facebook from './Facebook.svelte';
	import LinkedIn from './LinkedIn.svelte';

	const year = new Date().getFullYear();

	export let rights: string;
	export let privacy: string;
</script>

<footer
	class="h-screen items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose-lg px-6 max-w-prose prose-fuchsia md:prose-xl md:px-0 xl:prose-2xl"
>
	<div class="">
		<img src="/devologic-logo.svg" alt="Devologic logotype" class="mx-auto w-40" loading="lazy" />
		<div class="flex gap-2 justify-center">
			<a href="https://facebook.com" target="_blank" rel="noreferrer">
				<Facebook />
			</a>
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">
				<LinkedIn />
			</a>
		</div>
		<p class="mt-5 text-center text-sm leading-6 text-slate-500">
			© {year} Devologic Unipessoal Lda. {rights}
		</p>
		<div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
			<a href="/privacy-policy">{privacy}</a>
		</div>
	</div>
</footer>
