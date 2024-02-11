import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
	plugins: [houdini(), sveltekit()],
	resolve: {
		alias: {
			$houdini: './$houdini',
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
