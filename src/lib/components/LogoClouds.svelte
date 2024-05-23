<script lang="ts">
	import type { Home$result } from '$houdini';

	export let title: NonNullable<Home$result['homePage']>['toolsTitle'];
	export let description: NonNullable<Home$result['homePage']>['toolsDescription'];
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
			<div class="mx-auto w-full max-w-xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">{description}</p>
				<!-- <div class="mt-8 flex items-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-east-bay-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-east-bay-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-east-bay-600"
            >Create account</a
          >
          <a href="#" class="text-sm font-semibold text-gray-900">Contact us <span aria-hidden="true">&rarr;</span></a>
        </div> -->
			</div>
			<div
				class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
			>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/tailwind-css.png"
					alt="TailwindCSS"
				/>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/netlify.png"
					alt="Netlify"
				/>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/nextjs.png"
					alt="NextJS"
				/>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/cloudflare.png"
					alt="Cloudflare"
				/>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/remix.png"
					alt="Remix"
				/>
				<enhanced:img
					loading="lazy"
					class="max-h-12 w-40 object-contain object-left"
					src="../../../static/logos/sveltekit.png"
					alt="SvelteKit"
				/>
			</div>
		</div>
	</div>
</div>
