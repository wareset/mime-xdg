/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./lib"), r = require("./lib/mimes"), t = (() => {
    var t = e.createObject();
    for (var E in r._EXTENSIONS) {
        t[E] = [];
        for (var i = r._EXTENSIONS[E], M = 0, a = 0; a < i.length; a++) t[E][M++] = r._MIME_TYPES[i[a]] + "/" + r._MIME_NAMES[i[a++]][i[a]];
    }
    return t;
})(), E = (() => {
    for (var t = e.createObject(), E = r._MIME_TYPES.length; E-- > 0; ) {
        t[r._MIME_TYPES[E]] = e.createObject();
        for (var i = r._MIME_NAMES[E].length; i-- > 0; ) t[r._MIME_TYPES[E]][r._MIME_NAMES[E][i]] = !0;
    }
    return t;
})(), i = e => {
    for (var r, E = "", i = "", M = "", a = "", _ = (e = e.trim()).length; _-- > 0; ) {
        if ("." === (r = e[_])) i in t && (E = i) || M in t && (E = M) || a in t && (E = a); else if ("/" === r || "\\" === r) break;
        i = r + i, M = r.toUpperCase() + M, a = r.toLowerCase() + a;
    }
    return E;
};

exports.EXTENSIONS = t, exports.MIME_TYPES = E, exports.ext = i, exports.extname = e => {
    var r = i(e);
    if (!r) for (var t, E = "", M = (e = e.trim()).length; M-- > 0; ) {
        if ("." === (t = e[M])) {
            r = E;
            break;
        }
        if ("/" === t || "\\" === t) break;
        E = t + E;
    }
    return r ? "." + r : "";
}, exports.mimeList = e => (e = i(e)) ? t[e].slice(0) : [], exports.mimeType = e => (e = i(e)) ? t[e][0] : e;
