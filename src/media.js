import refresh from "./refresh.js";

refresh({
	elements: {
		"video": ["src", "poster"],
		"audio": "src",
		"video > source": "src",
		"audio > source": "src",
	}
});
