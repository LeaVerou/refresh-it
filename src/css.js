import refresh from "./refresh.js";

refresh({
	root: document,
	elements: {
		"link[rel=stylesheet]": "href",
		"style": {
			"textContent": /@import url\((?<url>[^)]+)\)/g,
		},
	}
});
