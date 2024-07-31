import fs from "fs";

const bookmarklets = [
	{
		id: "css",
		title: "🔄 CSS",
	},
	{
		id: "images",
		title: "🔄 Images",
	},
	{
		id: "embeds",
		title: "🔄 Embeds",
	},
	{
		id: "media",
		title: "🔄 Media",
	},
	{
		id: "resources",
		title: "🔄 Resources",
	}
];

let links = bookmarklets.map(bookmarklet => {
	let code = fs.readFileSync(`dist/${ bookmarklet.id }.js`, "utf8");
	code = code.replaceAll('"', "&quot;").replaceAll('>', "&gt;");
	code = `javascript:{${code}}`;

	return `<a href="${code}">${bookmarklet.title}</a>`;
});

let readme = fs.readFileSync("README.md", "utf8");
let html = links.join("\n\n");

readme = readme.replace(/<!-- bookmarklets -->.+?<!-- \/ bookmarklets -->/s, `<!-- bookmarklets -->\n\n${ html }\n\n<!-- / bookmarklets -->`);

fs.writeFileSync("README.md", readme);
fs.writeFileSync("bookmarklets.html", `<!DOCTYPE html>
	<title>Refresh It Bookmarklets</title>
	<body>${ html }</body>`);
