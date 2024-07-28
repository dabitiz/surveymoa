import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve("src")
		}
	},
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true,
		proxy: {}
	}
});
