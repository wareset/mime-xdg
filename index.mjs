/* eslint-disable */
/*
dester builds:
index.ts
*/
import { EXTENSIONS as r, MIME_TYPES as e, MIME_NAMES as a } from "./lib/mimes";

var i = {};

for (var o in r) {
    i[o] = [];
    for (var t = r[o], n = 0, f = 0; f < t.length; f++) i[o][n++] = e[t[f]] + "/" + a[t[f++]][t[f]];
}

for (var l = {}, s = e.length; s-- > 0; ) {
    l[e[s]] = {};
    for (var v = a[s].length; v-- > 0; ) l[e[s]][a[s][v]] = !0;
}

var m = r => {
    for (var e, a = "", o = "", t = "", n = "", f = (r = r.trim()).length; f-- > 0; ) {
        if ("." === (e = r[f])) o in i && (a = o) || t in i && (a = t) || n in i && (a = n); else if ("/" === e || "\\" === e) break;
        o = e + o, t = e.toUpperCase() + t, n = e.toLowerCase() + n;
    }
    return a;
}, g = r => (r = m(r)) && "." + r, h = r => (r = m(r)) ? i[r][0] : r, p = r => (r = m(r)) ? i[r].slice(0) : [];

export { i as EXTENSIONS, l as MIME_TYPES, m as ext, g as extname, h as mime, p as mimeList };
