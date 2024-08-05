export const css = {
	"link[rel=stylesheet]": "href",
	"style": {
		"textContent": /(?<=@import url\(['"]?)(?<url>[^)'"]+)/g,
	},
}

export const embeds = {
	"iframe": "src",
	"embed": "src",
	"use": ["href", "xlink:href"], // SVG
};

export const media = {
	"video": ["src", "poster"],
	"audio": "src",
	"video > source": "src",
	"audio > source": "src",
};

export const images = {
	"img": "src",
	"picture > source": "src",
	"object": "data",
	"image": ["href", "xlink:href"], // SVG
}