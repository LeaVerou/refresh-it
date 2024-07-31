import refresh from "./refresh.js";

// TODO source[srcset]
// TODO CSS background images, mask images, etc.
// TODO SVG images

refresh({
	elements: {
		"img": "src",
		"picture > source": "src",
		"object": "data",
		"image": ["href", "xlink:href"], // SVG
	}
});