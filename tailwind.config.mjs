/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"cPink": "#e535af",
				"cBlue": "#479dec",
				"cYellow": "#e8cb06",
			}
		}
	},
	plugins: [
		daisyui,
    require('tailwindcss-animated')
	]
}
