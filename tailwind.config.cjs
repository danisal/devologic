const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
				serif: ['Nunito', ...defaultTheme.fontFamily.serif]
			},
			animation: {
				blob: 'blob 8s infinite'
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
