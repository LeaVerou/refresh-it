# 🔄 Refresh It!

A set of bookmarklets to refresh page resources without a page reload.
An alternative to the heavyweight processes involving local servers.

In 2008, [Paul Irish posted the first Refresh CSS bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/) to refresh all stylesheets on the current page.
Despite the amount of tools, plugins, servers to live reload released over the years, I kept coming back to it, so [eventually](https://lea.verou.me/blog/2018/09/refresh-css-bookmarklet-v2/) I decided to improve it.

It works everywhere: locally or remotely, on any domain and protocol.
No need to set up anything, no need to alter your process in any way.
You can use the local server you want, or even — the horror! — none at all.
It quietly just accepts your preferences and workflow instead of trying to change them.
Sure, it doesn't automatically detect changes, but in most cases, I don’t want it to.

Will correctly refresh:
- CSS:
	- `<link rel="stylesheet">`
	- `@import` in `<style>`
- Images:
	- `<img src>`
	- SVG `<image>` with either `href` or `xlink:href`
- Media:
	- `<video src>`
	- `<video poster>`
	- `<audio src>`
	- `<source>` in `<video>` and `<audio>`
- Embeds:
	- `<iframe>`
	- `<embed>`
- Resources in (same-origin) iframes — even iframes within iframes!
- Resources in (open) Shadow roots

<!-- See https://lea.verou.me/blog/2018/09/refresh-css-bookmarklet-v2/ for more details. -->

## Usage

If you’re reading this on a GitHub or npm README, visit https://refresh-it.verou.me/bookmarklets.html and drag the bookmarklets to your bookmarks bar.
Otherwise, you can drag them from below.

<!-- bookmarklets -->

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now());return t}function r(e,r){let o=0;for(let n of e.matchAll(r)){if(!n.groups?.url){continue}let r=t(n.groups.url);let l=n.index+o;let f=l+n[0].length;e=e.slice(0,l)+r+e.slice(f);o+=r.length-n[0].length}return e}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:f=document,elements:i}){for(let l in i){let u=i[l];if(Array.isArray(u)){u=Object.fromEntries(u.map((e=&gt;[e,true])))}else if(typeof u===&quot;string&quot;){u={[u]:true}}for(let i of e(l,f)){for(let e in u){let l=u[e];if(l===true){if(n.has(e)||i.hasAttribute(e)){i[e]=t(i[e])}}else if(o(l,&quot;RegExp&quot;)){i[e]=r(i[e],l)}}}}for(let t of e(&quot;iframe&quot;,f)){t.contentDocument&&l({root:t.contentDocument,elements:i})}let u=e(&quot;*&quot;,f).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of u){l({root:e,elements:i})}}l({elements:{&quot;link[rel=stylesheet]&quot;:&quot;href&quot;,style:{textContent:/@import url\((?<url&gt;[^)]+)\)/g}}});
}">🔄 CSS</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now());return t}function r(e,r){let o=0;for(let n of e.matchAll(r)){if(!n.groups?.url){continue}let r=t(n.groups.url);let l=n.index+o;let f=l+n[0].length;e=e.slice(0,l)+r+e.slice(f);o+=r.length-n[0].length}return e}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:f=document,elements:i}){for(let l in i){let c=i[l];if(Array.isArray(c)){c=Object.fromEntries(c.map((e=&gt;[e,true])))}else if(typeof c===&quot;string&quot;){c={[c]:true}}for(let i of e(l,f)){for(let e in c){let l=c[e];if(l===true){if(n.has(e)||i.hasAttribute(e)){i[e]=t(i[e])}}else if(o(l,&quot;RegExp&quot;)){i[e]=r(i[e],l)}}}}for(let t of e(&quot;iframe&quot;,f)){t.contentDocument&&l({root:t.contentDocument,elements:i})}let c=e(&quot;*&quot;,f).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of c){l({root:e,elements:i})}}l({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Images</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now());return t}function r(e,r){let o=0;for(let n of e.matchAll(r)){if(!n.groups?.url){continue}let r=t(n.groups.url);let l=n.index+o;let f=l+n[0].length;e=e.slice(0,l)+r+e.slice(f);o+=r.length-n[0].length}return e}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:f=document,elements:i}){for(let l in i){let c=i[l];if(Array.isArray(c)){c=Object.fromEntries(c.map((e=&gt;[e,true])))}else if(typeof c===&quot;string&quot;){c={[c]:true}}for(let i of e(l,f)){for(let e in c){let l=c[e];if(l===true){if(n.has(e)||i.hasAttribute(e)){i[e]=t(i[e])}}else if(o(l,&quot;RegExp&quot;)){i[e]=r(i[e],l)}}}}for(let t of e(&quot;iframe&quot;,f)){t.contentDocument&&l({root:t.contentDocument,elements:i})}let c=e(&quot;*&quot;,f).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of c){l({root:e,elements:i})}}l({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Embeds</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now());return t}function o(e,o){let r=0;for(let n of e.matchAll(o)){if(!n.groups?.url){continue}let o=t(n.groups.url);let l=n.index+r;let i=l+n[0].length;e=e.slice(0,l)+o+e.slice(i);r+=o.length-n[0].length}return e}function r(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:i=document,elements:c}){for(let l in c){let f=c[l];if(Array.isArray(f)){f=Object.fromEntries(f.map((e=&gt;[e,true])))}else if(typeof f===&quot;string&quot;){f={[f]:true}}for(let c of e(l,i)){for(let e in f){let l=f[e];if(l===true){if(n.has(e)||c.hasAttribute(e)){c[e]=t(c[e])}}else if(r(l,&quot;RegExp&quot;)){c[e]=o(c[e],l)}}}}for(let t of e(&quot;iframe&quot;,i)){t.contentDocument&&l({root:t.contentDocument,elements:c})}let f=e(&quot;*&quot;,i).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of f){l({root:e,elements:c})}}l({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}});
}">🔄 Media</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now());return t}function r(e,r){let o=0;for(let n of e.matchAll(r)){if(!n.groups?.url){continue}let r=t(n.groups.url);let l=n.index+o;let s=l+n[0].length;e=e.slice(0,l)+r+e.slice(s);o+=r.length-n[0].length}return e}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:s=document,elements:i}){for(let l in i){let c=i[l];if(Array.isArray(c)){c=Object.fromEntries(c.map((e=&gt;[e,true])))}else if(typeof c===&quot;string&quot;){c={[c]:true}}for(let i of e(l,s)){for(let e in c){let l=c[e];if(l===true){if(n.has(e)||i.hasAttribute(e)){i[e]=t(i[e])}}else if(o(l,&quot;RegExp&quot;)){i[e]=r(i[e],l)}}}}for(let t of e(&quot;iframe&quot;,s)){t.contentDocument&&l({root:t.contentDocument,elements:i})}let c=e(&quot;*&quot;,s).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of c){l({root:e,elements:i})}}l({elements:{&quot;link[rel=stylesheet]&quot;:&quot;href&quot;,style:{textContent:/@import url\((?<url&gt;[^)]+)\)/g}}});l({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}});l({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}});l({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Resources</a>

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the [original bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/)
- Maurício Kishi, for making the iframe traversal recursive ([comment](http://lea.verou.me/2018/09/refresh-css-bookmarklet-v2/#comment-4102700684))