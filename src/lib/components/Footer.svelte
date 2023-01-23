<script lang="ts">
	import Facebook from './Facebook.svelte';
	import LinkedIn from './LinkedIn.svelte';

	const year = new Date().getFullYear();

	export let rights: string;
	export let privacy: string;
</script>

<footer
	class="prose prose-lg mx-auto flex h-screen max-w-prose snap-start flex-col items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text px-6 text-transparent md:prose-xl md:px-0 xl:prose-2xl"
>
	<div>
		<img src="/devologic-logo.svg" alt="Devologic logotype" class="mx-auto w-40" loading="lazy" />
		<div class="flex justify-center gap-2">
			<a
				aria-label="Facebook page"
				class="text-green-400 hover:text-green-300"
				href="https://facebook.com"
				rel="noreferrer"
				target="_blank"
			>
				<Facebook />
			</a>
			<a
				aria-label="LinkedIn page"
				class="text-green-400 hover:text-green-300"
				href="https://linkedin.com"
				rel="noreferrer"
				target="_blank"
			>
				<LinkedIn />
			</a>
		</div>
		<p class="mt-5 text-center text-sm font-semibold leading-6">
			© {year} Devologic Unipessoal Lda. {rights}
		</p>
		<div class="mt-16 flex items-center justify-center space-x-4 leading-6">
			<a
				class="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-sm text-transparent hover:text-green-300"
				href="/privacy-policy">{privacy}</a
			>
		</div>
	</div>
</footer>
