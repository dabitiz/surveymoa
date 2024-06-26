import colors from "./src/lib/js/colors.js";
/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: colors.primary,
					secondary: colors.secondary,
					success: colors.success,
					error: colors.error
				}
			}
		]
	}
};
