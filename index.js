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
        for (var M = r._EXTENSIONS[E], i = 0, _ = 0; _ < M.length; _++) t[E][i++] = r._MIME_TYPES[M[_]] + "/" + r._MIME_NAMES[M[_++]][M[_]];
    }
    return t;
})(), E = (() => {
    for (var t = e.createObject(), E = r._MIME_TYPES.length; E-- > 0; ) {
        t[r._MIME_TYPES[E]] = e.createObject();
        for (var M = r._MIME_NAMES[E].length; M-- > 0; ) t[r._MIME_TYPES[E]][r._MIME_NAMES[E][M]] = !0;
    }
    return t;
})(), M = e => {
    for (var r, E = "", M = "", i = "", _ = "", a = (e = e.trim()).length; a-- > 0; ) {
        if ("." === (r = e[a])) M in t && (E = M) || i in t && (E = i) || _ in t && (E = _); else if ("/" === r || "\\" === r) break;
        M = r + M, i = r.toUpperCase() + i, _ = r.toLowerCase() + _;
    }
    return E;
};

exports.EXTENSIONS = t, exports.MIME_TYPES = E, exports.ext = M, exports.extname = e => {
    var r = M(e);
    if (!r) {
        var t = e.lastIndexOf(".");
        t > -1 && (r = e.slice(t + 1));
    }
    return r ? "." + r : "";
}, exports.mimeList = e => (e = M(e)) ? t[e].slice(0) : [], exports.mimeType = e => (e = M(e)) ? t[e][0] : e;
