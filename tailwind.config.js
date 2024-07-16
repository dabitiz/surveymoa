import colors from "./src/lib/js/colors.js";
/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "130%" }],
			sm: ["0.875rem", { lineHeight: "130%" }],
			base: ["1rem", { lineHeight: "130%" }],
			lg: ["1.125rem", { lineHeight: "130%" }],
			xl: ["1.25rem", { lineHeight: "130%" }],
			"2xl": ["1.5rem", { lineHeight: "130%" }],
			"3xl": ["1.875rem", { lineHeight: "130%" }],
			"4xl": ["2.25rem", { lineHeight: "130%" }],
			"5xl": ["3rem", { lineHeight: "130%" }],
			"6xl": ["3.75rem", { lineHeight: "130%" }],
			"7xl": ["4.5rem", { lineHeight: "130%" }],
			"8xl": ["6rem", { lineHeight: "130%" }],
			"9xl": ["8rem", { lineHeight: "130%" }]
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: colors.primary,
					secondary: colors.secondary,
					success: colors.success,
					error: colors.error
				}
			}
		]
	}
};
