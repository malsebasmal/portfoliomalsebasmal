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
				"cRed": "#f43f5e",
				"cPurple": "#826dff"
			},
			screens: {
				"mobileS": "320px",
				"mobileM": "375px",
				"mobileL": "425px"
			}
		}
	},
	daisyui: {
		themes: ["dark"]
	},
	plugins: [
		daisyui,
    require('tailwindcss-animated')
	]
}
