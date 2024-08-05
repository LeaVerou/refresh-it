import { $$, refreshURL, refreshURLs, toArray, is, walkElements } from './util.js';

let properties = new Set(["textContent", "innerHTML"])

export default function refresh ({root = document, elements, transformURL = refreshURL}) {
	for (let selector in elements) {
		let props = elements[selector];
		if (Array.isArray(props)) {
			props = Object.fromEntries(props.map(prop => [prop, true]));
		}
		else if (typeof props === "string") {
			props = {[props]: true};
		}

		walkElements(element => {
			for (let prop in props) {
				let spec = props[prop];

				if (spec === true) {
					// Simple attribute
					if (properties.has(prop) || element.hasAttribute(prop)) {
						element[prop] = transformURL(element[prop]);
					}
				}
				else if (is(spec, "RegExp")) {
					element[prop] = transformURL(element[prop], spec);
				}
			}
		}, selector, root);
	}
}

