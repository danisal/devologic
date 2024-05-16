// import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$houdini: path.resolve('.', '$houdini'),
			'@/*': path.resolve('.', 'src/*'),
		},
		prerender: {
			entries: ['*'],
		},
	},
};

export default config;
