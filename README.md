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
- CSS in iframes — even iframes within iframes! (same-origin only, obvs)
- CSS in `<link>`
- [ ] CSS in `@import` in `<style>`
- [ ] CSS in Shadow DOM (for open shadow roots)

In the future I plan to add a version for other resources, such as media files, hence the generic repo name.

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