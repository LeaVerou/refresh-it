# 🔄 Refresh It

A set of bookmarklets to refresh page resources without a page reload.
An alternative to the heavyweight processes involving local servers.

Will correctly refresh:
- CSS in iframes — even iframes within iframes! (same-origin only, obvs)
- CSS in `<link>`
- [ ] CSS in `@import` in `<style>`
- [ ] CSS in Shadow DOM (for open shadow roots)

See https://lea.verou.me/blog/2018/09/refresh-css-bookmarklet-v2/ for more details.

## Usage

Drag the bookmarklets below to your bookmarks bar.

<!-- bookmarklets -->

<a href="javascript:{let e=(e,t=document)=>Array.from(t.querySelectorAll(e)),t=r=>{for(let t of e("link[rel=stylesheet][href]",r)){let e=new URL(t.href);e.searchParams.set("forceReload",Date.now()),t.href=e}for(let o of e("iframe",r))o.contentDocument&&t(o.contentDocument)};t();
}">🔄 CSS v2</a>

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the [original bookmarklet](https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/)
- Maurício Kishi, for making the iframe traversal recursive ([comment](http://lea.verou.me/2018/09/refresh-css-bookmarklet-v2/#comment-4102700684))