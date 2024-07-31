import terser from "@rollup/plugin-terser";

export default [
	{
		input: "src/css.js",
		output: {
			file: "dist/css.js",
			format: "esm",
			sourcemap: false,
		},
		plugins: [terser()]
	}
];