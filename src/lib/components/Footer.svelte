<script lang="ts">
	import LL from '$i18n/i18n-svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
	<div class="border-t border-slate-900/5 py-10">
		<img src="/devologic-logo.svg" alt="Devologic logotype" class="mx-auto w-40" loading="lazy" />
		<p class="mt-5 text-center text-sm leading-6 text-slate-500">
			© {year} Devologic Unipessoal Lda. {$LL.footer.allRights()}
		</p>
		<div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
			<a href="/privacy-policy">{$LL.footer.privacyPolicy()}</a>
		</div>
	</div>
</footer>
