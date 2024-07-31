# Refresh It

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

<!-- / bookmarklets -->

## Credits

- Paul Irish, for the original bookmarklet
- Maurício Kishi, for making the iframe traversal recursive