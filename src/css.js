let $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let refresh = (document) => {
	for (let link of $$("link[rel=stylesheet][href]", document)) {
		let href = new URL(link.href);
		href.searchParams.set("forceReload", Date.now());
		link.href = href;
	}

	for (let iframe of $$("iframe", document)) {
		iframe.contentDocument && refresh(iframe.contentDocument);
	}
}

refresh();