import terser from "@rollup/plugin-terser";

export default ["css", "embeds", "media", "images", "resources"].map(id => ({
	input: `src/${id}.js`,
	output: {
		file: `dist/${id}.js`,
		format: "esm",
		sourcemap: false,
	},
	plugins: [terser()]
}));
