import { $$, refreshURL, refreshURLs, toArray, is } from './util.js';

let properties = new Set(["textContent", "innerHTML"])

export default function refresh ({root, elements}) {
	for (let selector in elements) {
		let props = elements[selector];
		if (Array.isArray(props)) {
			props = Object.fromEntries(props.map(prop => [prop, true]));
		}
		else if (typeof props === "string") {
			props = {[props]: true};
		}

		for (let prop in props) {
			let spec = props[prop];

			if (spec === true) {
				// Simple attribute
				if (properties.has(prop) || element.hasAttribute(prop)) {
					element[prop] = refreshURL(element[prop]);
				}
			}
			else if (is(spec, "RegExp")) {
				element[prop] = refreshURLs(element[prop], spec);
			}
		}
	}

	for (let iframe of $$("iframe", root)) {
		iframe.contentDocument && refresh({root: iframe.contentDocument, elements});
	}

	let shadowRoots = $$("*", root).map(e => e.shadowRoot).filter(Boolean);
	for (let shadowRoot of shadowRoots) {
		refresh({root: shadowRoot, elements});
	}
}

