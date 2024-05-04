const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
				serif: ['Nunito', ...defaultTheme.fontFamily.serif],
			},
      colors: {
        'viking': {
          '50': '#effbfc',
          '100': '#d7f5f6',
          '200': '#b3eaee',
          '300': '#61cfda',
          '400': '#44bdcc',
          '500': '#28a2b2',
          '600': '#248396',
          '700': '#236a7b',
          '800': '#255865',
          '900': '#234956',
          '950': '#12303a',
        },
        'east-bay': {
          '50': '#f2f6fc',
          '100': '#e2ebf7',
          '200': '#cbdcf2',
          '300': '#a8c6e8',
          '400': '#7ea8dc',
          '500': '#608bd1',
          '600': '#4c72c4',
          '700': '#4260b3',
          '800': '#3b4f92',
          '900': '#36487b',
          '950': '#232b48',
        },
      }
		},
	},
	plugins: [require('@tailwindcss/typography'),require('@tailwindcss/forms'),],
};
