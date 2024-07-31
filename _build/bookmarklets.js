import fs from "fs";

const bookmarklets = [
	{
		file: "dist/css.js",
		title: "🔄 CSS v2"
	}
];

let links = bookmarklets.map(bookmarklet => {
	let css = fs.readFileSync(bookmarklet.file, "utf8");
	css = `javascript:{${css}}`;

	return `<a href="${css}">${bookmarklet.title}</a>`;
});

let readme = fs.readFileSync("README.md", "utf8");
readme = readme.replace(/<!-- bookmarklets -->.+?<!-- \/ bookmarklets -->/s, `<!-- bookmarklets -->\n\n${ links.join("\n\n") }\n\n<!-- / bookmarklets -->`);

fs.writeFileSync("README.md", readme);
