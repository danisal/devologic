<script>
	import { page } from '$app/stores';
</script>

<main class="grid h-screen place-content-center place-items-center">
	<h1
		class="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow lg:text-5xl"
	>
		{$page.status}
	</h1>
	<p
		class="prose prose-lg bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent md:prose-xl xl:prose-2xl"
	>
		{$page.error?.message ?? "We can't find what you are looking for"}
	</p>
</main>
