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

<a href="javascript:{function e(r,o=&quot;*&quot;,n=document){for(let e of t(o,n)){r(e)}for(let l of t(&quot;iframe&quot;,n)){if(l.contentDocument){e(r,o,l.contentDocument)}}let l=t(&quot;*&quot;,n).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let t of l){e(r,o,t)}}function t(e,t=document){return Array.from(t.querySelectorAll(e))}function r(e){let t=new URL(e,location);let r=t.search+t.hash;t.searchParams.set(&quot;forceReload&quot;,Date.now());let o=t.search+t.hash;return r?e.replace(r,o):e+o}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function l({root:t=document,elements:l,transformURL:f=r}){for(let r in l){let c=l[r];if(Array.isArray(c)){c=Object.fromEntries(c.map((e=&gt;[e,true])))}else if(typeof c===&quot;string&quot;){c={[c]:true}}e((e=&gt;{for(let t in c){let r=c[t];if(r===true){if(n.has(t)||e.hasAttribute(t)){e[t]=f(e[t])}}else if(o(r,&quot;RegExp&quot;)){e[t]=f(e[t],r)}}}),r,t)}}const f={&quot;link[rel=stylesheet]&quot;:&quot;href&quot;,style:{textContent:/(?<=@import url\(['&quot;]?)(?<url&gt;[^)'&quot;]+)/g}};l({elements:f});
}">🔄 CSS</a>

<a href="javascript:{function e(r,o=&quot;*&quot;,n=document){for(let e of t(o,n)){r(e)}for(let c of t(&quot;iframe&quot;,n)){if(c.contentDocument){e(r,o,c.contentDocument)}}let c=t(&quot;*&quot;,n).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let t of c){e(r,o,t)}}function t(e,t=document){return Array.from(t.querySelectorAll(e))}function r(e){let t=new URL(e,location);let r=t.search+t.hash;t.searchParams.set(&quot;forceReload&quot;,Date.now());let o=t.search+t.hash;return r?e.replace(r,o):e+o}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function c({root:t=document,elements:c,transformURL:f=r}){for(let r in c){let l=c[r];if(Array.isArray(l)){l=Object.fromEntries(l.map((e=&gt;[e,true])))}else if(typeof l===&quot;string&quot;){l={[l]:true}}e((e=&gt;{for(let t in l){let r=l[t];if(r===true){if(n.has(t)||e.hasAttribute(t)){e[t]=f(e[t])}}else if(o(r,&quot;RegExp&quot;)){e[t]=f(e[t],r)}}}),r,t)}}const f={img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]};c({elements:f});
}">🔄 Images</a>

<a href="javascript:{function e(r,o=&quot;*&quot;,n=document){for(let e of t(o,n)){r(e)}for(let f of t(&quot;iframe&quot;,n)){if(f.contentDocument){e(r,o,f.contentDocument)}}let f=t(&quot;*&quot;,n).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let t of f){e(r,o,t)}}function t(e,t=document){return Array.from(t.querySelectorAll(e))}function r(e){let t=new URL(e,location);let r=t.search+t.hash;t.searchParams.set(&quot;forceReload&quot;,Date.now());let o=t.search+t.hash;return r?e.replace(r,o):e+o}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function f({root:t=document,elements:f,transformURL:l=r}){for(let r in f){let c=f[r];if(Array.isArray(c)){c=Object.fromEntries(c.map((e=&gt;[e,true])))}else if(typeof c===&quot;string&quot;){c={[c]:true}}e((e=&gt;{for(let t in c){let r=c[t];if(r===true){if(n.has(t)||e.hasAttribute(t)){e[t]=l(e[t])}}else if(o(r,&quot;RegExp&quot;)){e[t]=l(e[t],r)}}}),r,t)}}const l={iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]};f({elements:l});
}">🔄 Embeds</a>

<a href="javascript:{function e(o,r=&quot;*&quot;,n=document){for(let e of t(r,n)){o(e)}for(let c of t(&quot;iframe&quot;,n)){if(c.contentDocument){e(o,r,c.contentDocument)}}let c=t(&quot;*&quot;,n).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let t of c){e(o,r,t)}}function t(e,t=document){return Array.from(t.querySelectorAll(e))}function o(e){let t=new URL(e,location);let o=t.search+t.hash;t.searchParams.set(&quot;forceReload&quot;,Date.now());let r=t.search+t.hash;return o?e.replace(o,r):e+r}function r(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function c({root:t=document,elements:c,transformURL:f=o}){for(let o in c){let i=c[o];if(Array.isArray(i)){i=Object.fromEntries(i.map((e=&gt;[e,true])))}else if(typeof i===&quot;string&quot;){i={[i]:true}}e((e=&gt;{for(let t in i){let o=i[t];if(o===true){if(n.has(t)||e.hasAttribute(t)){e[t]=f(e[t])}}else if(r(o,&quot;RegExp&quot;)){e[t]=f(e[t],o)}}}),o,t)}}const f={video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;};c({elements:f});
}">🔄 Media</a>

<a href="javascript:{function e(r,o=&quot;*&quot;,n=document){for(let e of t(o,n)){r(e)}for(let c of t(&quot;iframe&quot;,n)){if(c.contentDocument){e(r,o,c.contentDocument)}}let c=t(&quot;*&quot;,n).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let t of c){e(r,o,t)}}function t(e,t=document){return Array.from(t.querySelectorAll(e))}function r(e){let t=new URL(e,location);let r=t.search+t.hash;t.searchParams.set(&quot;forceReload&quot;,Date.now());let o=t.search+t.hash;return r?e.replace(r,o):e+o}function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function c({root:t=document,elements:c,transformURL:s=r}){for(let r in c){let i=c[r];if(Array.isArray(i)){i=Object.fromEntries(i.map((e=&gt;[e,true])))}else if(typeof i===&quot;string&quot;){i={[i]:true}}e((e=&gt;{for(let t in i){let r=i[t];if(r===true){if(n.has(t)||e.hasAttribute(t)){e[t]=s(e[t])}}else if(o(r,&quot;RegExp&quot;)){e[t]=s(e[t],r)}}}),r,t)}}const s={&quot;link[rel=stylesheet]&quot;:&quot;href&quot;,style:{textContent:/(?<=@import url\(['&quot;]?)(?<url&gt;[^)'&quot;]+)/g}};const i={iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]};const l={video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;};const f={img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]};var a=Object.freeze({__proto__:null,css:s,embeds:i,images:f,media:l});c({elements:{...a}});
}">🔄 Resources</a>

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the [original bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/)
- Maurício Kishi, for making the iframe traversal recursive ([comment](http://lea.verou.me/2018/09/refresh-css-bookmarklet-v2/#comment-4102700684))