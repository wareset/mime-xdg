/* eslint-disable */
/*
dester builds:
index.ts
*/
import { createObject as r } from "./lib";

import { _EXTENSIONS as e, _MIME_TYPES as i, _MIME_NAMES as t } from "./lib/mimes";

var a = (() => {
    var a = r();
    for (var o in e) {
        a[o] = [];
        for (var f = e[o], n = 0, l = 0; l < f.length; l++) a[o][n++] = i[f[l]] + "/" + t[f[l++]][f[l]];
    }
    return a;
})(), o = (() => {
    for (var e = r(), a = i.length; a-- > 0; ) {
        e[i[a]] = r();
        for (var o = t[a].length; o-- > 0; ) e[i[a]][t[a][o]] = !0;
    }
    return e;
})(), f = r => {
    for (var e, i = "", t = "", o = "", f = "", n = (r = r.trim()).length; n-- > 0; ) {
        if ("." === (e = r[n])) t in a && (i = t) || o in a && (i = o) || f in a && (i = f); else if ("/" === e || "\\" === e) break;
        t = e + t, o = e.toUpperCase() + o, f = e.toLowerCase() + f;
    }
    return i;
}, n = r => {
    var e = f(r);
    if (!e) for (var i, t = "", a = (r = r.trim()).length; a-- > 0; ) {
        if ("." === (i = r[a])) {
            e = t;
            break;
        }
        if ("/" === i || "\\" === i) break;
        t = i + t;
    }
    return e ? "." + e : "";
}, l = r => (r = f(r)) ? a[r][0] : r, v = r => (r = f(r)) ? a[r].slice(0) : [];

export { a as EXTENSIONS, o as MIME_TYPES, f as ext, n as extname, v as mimeList, l as mimeType };
