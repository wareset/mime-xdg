/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./lib/mimes"), r = {};

for (var E in e.EXTENSIONS) {
    r[E] = [];
    for (var t = e.EXTENSIONS[E], M = 0, o = 0; o < t.length; o++) r[E][M++] = e.MIME_TYPES[t[o]] + "/" + e.MIME_NAMES[t[o++]][t[o]];
}

for (var i = {}, s = e.MIME_TYPES.length; s-- > 0; ) {
    i[e.MIME_TYPES[s]] = {};
    for (var S = e.MIME_NAMES[s].length; S-- > 0; ) i[e.MIME_TYPES[s]][e.MIME_NAMES[s][S]] = !0;
}

var a = e => {
    for (var E, t = "", M = "", o = "", i = "", s = (e = e.trim()).length; s-- > 0; ) {
        if ("." === (E = e[s])) M in r && (t = M) || o in r && (t = o) || i in r && (t = i); else if ("/" === E || "\\" === E) break;
        M = E + M, o = E.toUpperCase() + o, i = E.toLowerCase() + i;
    }
    return t;
};

exports.EXTENSIONS = r, exports.MIME_TYPES = i, exports.ext = a, exports.extname = e => (e = a(e)) && "." + e, 
exports.mime = e => (e = a(e)) ? r[e][0] : e, exports.mimeList = e => (e = a(e)) ? r[e].slice(0) : [];
