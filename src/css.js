import refresh from "./refresh.js";

refresh({
	elements: {
		"link[rel=stylesheet]": "href",
		"style": {
			"textContent": /@import url\((?<url>[^)]+)\)/g,
		},
	}
});
