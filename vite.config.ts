/// <reference types="vitest" />
import solid from "solid-start";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [solid()],

		test: {
			environment: "jsdom",
			dir: "src",
			setupFiles: "./vitest.setup.ts",
			transformMode: {
				web: [/.[tj]sx?$/]
			},
			// solid needs to be inline to work around
			// a resolution issue in vitest:
			deps: {
				inline: [/solid-js/]
			},
			// resolve: {
			// 	conditions: env["VITEST"] ? ["browser"] : []
			// }
			resolve: {
				conditions: env.TEST_ENV === "server" ? [] : ["browser"]
			}
		}
	};
});
