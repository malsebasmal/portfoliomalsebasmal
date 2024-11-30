/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"cPink": "#e535af",
				"pinkSmooth": "#EA9AB2",
				"pinkPastel": "#EFCFE3",
				"yellowPastel": "#EAF2D7",
				"turquoisePastel": "#B3DEE2"
			}
		}
	},
	plugins: [daisyui]
}
