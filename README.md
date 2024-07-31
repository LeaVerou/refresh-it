# 🔄 Refresh It

A set of bookmarklets to refresh page resources without a page reload.
An alternative to the heavyweight processes involving local servers.

In 2008, [Paul Irish posted the first Refresh CSS bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/) to refresh all stylesheets on the current page.
Despite the amount of tools, plugins, servers to live reload released over the years, I kept coming back to it, so eventually I decided to improve it.

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
- Resources within iframes — even iframes within iframes! (same-origin only, obvs)
- [ ] Resources in Shadow DOM (for open shadow roots)

<!-- See https://lea.verou.me/blog/2018/09/refresh-css-bookmarklet-v2/ for more details. -->

## Usage

Drag the bookmarklets below to your bookmarks bar.

<!-- bookmarklets -->

<a href="javascript:{function e(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function t(t,n){let r=0;for(let o of t.matchAll(n)){if(!o.groups?.url)continue;let n=e(o.groups.url),l=o.index+r,c=l+o[0].length;t=t.slice(0,l)+n+t.slice(c),r+=n.length-o[0].length}return t}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:o,elements:l}){for(let r in l){let o=l[r];Array.isArray(o)?o=Object.fromEntries(o.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof o&&(o={[o]:!0});for(let r in o){let l=o[r];!0===l?(n.has(r)||element.hasAttribute(r))&&(element[r]=e(element[r])):(c=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${i}]`&&(element[r]=t(element[r],l)))}}var c,i;for(let e of function(e,t=document){return Array.from(t.querySelectorAll(e))}(&quot;iframe&quot;,o))e.contentDocument&&r({root:e.contentDocument,elements:l})}(document);
}">🔄 CSS</a>

<a href="javascript:{function e(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function t(t,n){let r=0;for(let o of t.matchAll(n)){if(!o.groups?.url)continue;let n=e(o.groups.url),l=o.index+r,c=l+o[0].length;t=t.slice(0,l)+n+t.slice(c),r+=n.length-o[0].length}return t}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:o,elements:l}){for(let r in l){let o=l[r];Array.isArray(o)?o=Object.fromEntries(o.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof o&&(o={[o]:!0});for(let r in o){let l=o[r];!0===l?(n.has(r)||element.hasAttribute(r))&&(element[r]=e(element[r])):(c=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${i}]`&&(element[r]=t(element[r],l)))}}var c,i;for(let e of function(e,t=document){return Array.from(t.querySelectorAll(e))}(&quot;iframe&quot;,o))e.contentDocument&&r({root:e.contentDocument,elements:l})}({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Images</a>

<a href="javascript:{function e(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function t(t,n){let r=0;for(let l of t.matchAll(n)){if(!l.groups?.url)continue;let n=e(l.groups.url),o=l.index+r,c=o+l[0].length;t=t.slice(0,o)+n+t.slice(c),r+=n.length-l[0].length}return t}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:l,elements:o}){for(let r in o){let l=o[r];Array.isArray(l)?l=Object.fromEntries(l.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof l&&(l={[l]:!0});for(let r in l){let o=l[r];!0===o?(n.has(r)||element.hasAttribute(r))&&(element[r]=e(element[r])):(c=o,i=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${i}]`&&(element[r]=t(element[r],o)))}}var c,i;for(let e of function(e,t=document){return Array.from(t.querySelectorAll(e))}(&quot;iframe&quot;,l))e.contentDocument&&r({root:e.contentDocument,elements:o})}({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Embeds</a>

<a href="javascript:{function e(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function t(t,n){let r=0;for(let o of t.matchAll(n)){if(!o.groups?.url)continue;let n=e(o.groups.url),l=o.index+r,c=l+o[0].length;t=t.slice(0,l)+n+t.slice(c),r+=n.length-o[0].length}return t}let n=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);!function r({root:o,elements:l}){for(let r in l){let o=l[r];Array.isArray(o)?o=Object.fromEntries(o.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof o&&(o={[o]:!0});for(let r in o){let l=o[r];!0===l?(n.has(r)||element.hasAttribute(r))&&(element[r]=e(element[r])):(c=l,i=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${i}]`&&(element[r]=t(element[r],l)))}}var c,i;for(let e of function(e,t=document){return Array.from(t.querySelectorAll(e))}(&quot;iframe&quot;,o))e.contentDocument&&r({root:e.contentDocument,elements:l})}({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}});
}">🔄 Media</a>

<a href="javascript:{function e(e){let t=new URL(e);t.searchParams.set(&quot;forceReload&quot;,Date.now()),link.href=t}function t(t,r){let n=0;for(let o of t.matchAll(r)){if(!o.groups?.url)continue;let r=e(o.groups.url),l=o.index+n,c=l+o[0].length;t=t.slice(0,l)+r+t.slice(c),n+=r.length-o[0].length}return t}let r=new Set([&quot;textContent&quot;,&quot;innerHTML&quot;]);function n({root:o,elements:l}){for(let n in l){let o=l[n];Array.isArray(o)?o=Object.fromEntries(o.map((e=&gt;[e,!0]))):&quot;string&quot;==typeof o&&(o={[o]:!0});for(let n in o){let l=o[n];!0===l?(r.has(n)||element.hasAttribute(n))&&(element[n]=e(element[n])):(c=l,s=&quot;RegExp&quot;,Object.prototype.toString.call(c)===`[object ${s}]`&&(element[n]=t(element[n],l)))}}var c,s;for(let e of function(e,t=document){return Array.from(t.querySelectorAll(e))}(&quot;iframe&quot;,o))e.contentDocument&&n({root:e.contentDocument,elements:l})}n(document),n({elements:{iframe:&quot;src&quot;,embed:&quot;src&quot;,use:[&quot;href&quot;,&quot;xlink:href&quot;]}}),n({elements:{video:[&quot;src&quot;,&quot;poster&quot;],audio:&quot;src&quot;,&quot;video &gt; source&quot;:&quot;src&quot;,&quot;audio &gt; source&quot;:&quot;src&quot;}}),n({elements:{img:&quot;src&quot;,&quot;picture &gt; source&quot;:&quot;src&quot;,object:&quot;data&quot;,image:[&quot;href&quot;,&quot;xlink:href&quot;]}});
}">🔄 Resources</a>

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the [original bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/)
- Maurício Kishi, for making the iframe traversal recursive ([comment](http://lea.verou.me/2018/09/refresh-css-bookmarklet-v2/#comment-4102700684))