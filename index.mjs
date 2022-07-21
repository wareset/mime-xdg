/* eslint-disable */
/*
dester builds:
index.ts
*/
import { createObject as r } from "./lib";

import { _EXTENSIONS as e, _MIME_TYPES as i, _MIME_NAMES as t } from "./lib/mimes";

var a = (() => {
    var a = r();
    for (var n in e) {
        a[n] = [];
        for (var o = e[n], f = 0, l = 0; l < o.length; l++) a[n][f++] = i[o[l]] + "/" + t[o[l++]][o[l]];
    }
    return a;
})(), n = (() => {
    for (var e = r(), a = i.length; a-- > 0; ) {
        e[i[a]] = r();
        for (var n = t[a].length; n-- > 0; ) e[i[a]][t[a][n]] = !0;
    }
    return e;
})(), o = r => {
    for (var e, i = "", t = "", n = "", o = "", f = (r = r.trim()).length; f-- > 0; ) {
        if ("." === (e = r[f])) t in a && (i = t) || n in a && (i = n) || o in a && (i = o); else if ("/" === e || "\\" === e) break;
        t = e + t, n = e.toUpperCase() + n, o = e.toLowerCase() + o;
    }
    return i;
}, f = r => {
    var e = o(r);
    if (!e) {
        var i = r.lastIndexOf(".");
        i > -1 && (e = r.slice(i + 1));
    }
    return e ? "." + e : "";
}, l = r => (r = o(r)) ? a[r][0] : r, v = r => (r = o(r)) ? a[r].slice(0) : [];

export { a as EXTENSIONS, n as MIME_TYPES, o as ext, f as extname, l as mime, v as mimeList };
