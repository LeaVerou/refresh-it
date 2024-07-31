export function $$ (selector, root = document) {
	return Array.from(root.querySelectorAll(selector));
}

export function refreshURL (url) {
	let href = new URL(url);
	href.searchParams.set("forceReload", Date.now());
	return href;
}

/**
 * Match a regex against a string and refresh all occurrences of the url subpattern
 * @param {string} text
 * @param {RegExp} pattern
 */
export function refreshURLs (text, pattern) {
	let offset = 0; // difference between the original and the new string

	for (let match of text.matchAll(pattern)) {
		if (!match.groups?.url) {
			continue;
		}

		let url = refreshURL(match.groups.url);
		let start = match.index + offset;
		let end = start + match[0].length;
		text = text.slice(0, start) + url + text.slice(end);
		offset += url.length - match[0].length;
	}

	return text;
}

export function toArray (value) {
	if (value === undefined) {
		return [];
	}

	return Array.isArray(value) ? value : [value];
}

export function is (value, type) {
	return Object.prototype.toString.call(value) === `[object ${type}]`;
}
