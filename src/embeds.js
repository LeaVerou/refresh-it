import refresh from "./refresh.js";

refresh({
	elements: {
		"iframe": "src",
		"embed": "src",
		"use": ["href", "xlink:href"], // SVG
	}
});
