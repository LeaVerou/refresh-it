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

If you’re reading this on a GitHub or npm README, visit https://projects.verou.me/refresh-it/bookmarklets.html and drag the bookmarklets to your bookmarks bar.
Otherwise, you can drag them from below.

<!-- bookmarklets -->

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function n(e,n){let o=0;for(let r of e.matchAll(n)){if(!r.groups?.url)continue;let n=t(r.groups.url),l=r.index+o,c=l+r[0].length;e=e.slice(0,l)+n+e.slice(c),o+=n.length-r[0].length}return e}let o=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:l,elements:c}){for(let e in c){let r=c[e];Array.isArray(r)?r=Object.fromEntries(r.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof r&&(r={[r]:!0});for(let e in r){let l=r[e];!0===l?(o.has(e)||element.hasAttribute(e))&&(element[e]=t(element[e])):(f=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(f)===`[object ${i}]`&&(element[e]=n(element[e],l)))}}var f,i;for(let t of e(&quot;iframe&quot;,l))t.contentDocument&&r({root:t.contentDocument,elements:c});let m=e(&quot;*&quot;,l).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of m)r({root:e,elements:c})}(document);
}">🔄 CSS</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function n(e,n){let o=0;for(let r of e.matchAll(n)){if(!r.groups?.url)continue;let n=t(r.groups.url),l=r.index+o,c=l+r[0].length;e=e.slice(0,l)+n+e.slice(c),o+=n.length-r[0].length}return e}let o=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:l,elements:c}){for(let e in c){let r=c[e];Array.isArray(r)?r=Object.fromEntries(r.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof r&&(r={[r]:!0});for(let e in r){let l=r[e];!0===l?(o.has(e)||element.hasAttribute(e))&&(element[e]=t(element[e])):(i=l,f=&quot;RegExp&quot;,Object.prototype.toString.call(i)===`[object ${f}]`&&(element[e]=n(element[e],l)))}}var i,f;for(let t of e(&quot;iframe&quot;,l))t.contentDocument&&r({root:t.contentDocument,elements:c});let a=e(&quot;*&quot;,l).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of a)r({root:e,elements:c})}({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Images</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function n(e,n){let r=0;for(let o of e.matchAll(n)){if(!o.groups?.url)continue;let n=t(o.groups.url),l=o.index+r,f=l+o[0].length;e=e.slice(0,l)+n+e.slice(f),r+=n.length-o[0].length}return e}let r=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function o({root:l,elements:f}){for(let e in f){let o=f[e];Array.isArray(o)?o=Object.fromEntries(o.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof o&&(o={[o]:!0});for(let e in o){let l=o[e];!0===l?(r.has(e)||element.hasAttribute(e))&&(element[e]=t(element[e])):(c=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${i}]`&&(element[e]=n(element[e],l)))}}var c,i;for(let t of e(&quot;iframe&quot;,l))t.contentDocument&&o({root:t.contentDocument,elements:f});let m=e(&quot;*&quot;,l).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of m)o({root:e,elements:f})}({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Embeds</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function o(e,o){let n=0;for(let r of e.matchAll(o)){if(!r.groups?.url)continue;let o=t(r.groups.url),l=r.index+n,c=l+r[0].length;e=e.slice(0,l)+o+e.slice(c),n+=o.length-r[0].length}return e}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:l,elements:c}){for(let e in c){let r=c[e];Array.isArray(r)?r=Object.fromEntries(r.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof r&&(r={[r]:!0});for(let e in r){let l=r[e];!0===l?(n.has(e)||element.hasAttribute(e))&&(element[e]=t(element[e])):(i=l,s=&quot;RegExp&quot;,Object.prototype.toString.call(i)===`[object ${s}]`&&(element[e]=o(element[e],l)))}}var i,s;for(let t of e(&quot;iframe&quot;,l))t.contentDocument&&r({root:t.contentDocument,elements:c});let a=e(&quot;*&quot;,l).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of a)r({root:e,elements:c})}({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}});
}">🔄 Media</a>

<a href="javascript:{function e(e,t=document){return Array.from(t.querySelectorAll(e))}function t(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function r(e,r){let o=0;for(let n of e.matchAll(r)){if(!n.groups?.url)continue;let r=t(n.groups.url),l=n.index+o,c=l+n[0].length;e=e.slice(0,l)+r+e.slice(c),o+=r.length-n[0].length}return e}let o=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function n({root:l,elements:c}){for(let e in c){let n=c[e];Array.isArray(n)?n=Object.fromEntries(n.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof n&&(n={[n]:!0});for(let e in n){let l=n[e];!0===l?(o.has(e)||element.hasAttribute(e))&&(element[e]=t(element[e])):(s=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(s)===`[object ${i}]`&&(element[e]=r(element[e],l)))}}var s,i;for(let t of e(&quot;iframe&quot;,l))t.contentDocument&&n({root:t.contentDocument,elements:c});let m=e(&quot;*&quot;,l).map((e=&gt;e.shadowRoot)).filter(Boolean);for(let e of m)n({root:e,elements:c})}n(document),n({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}}),n({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}}),n({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Resources</a>

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the [original bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/)
- Maurício Kishi, for making the iframe traversal recursive ([comment](http://lea.verou.me/2018/09/refresh-css-bookmarklet-v2/#comment-4102700684))