import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [houdini(), enhancedImages(), sveltekit()],
	resolve: {
		alias: {
			$houdini: './$houdini',
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
