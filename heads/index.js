/* eslint-disable */
/*
dester builds:
heads.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

for (var e, r = require("../lib/heads"), E = require("../lib/mimes"), M = {}, A = r.HEADS_DATA.length; A--; ) for (var _ in r.HEADS_DATA[A]) e = r.HEADS_DATA[A][_ = +_], 
M[E.MIME_TYPES[A] + "/" + E.MIME_NAMES[A][_]] = E.MIME_TYPES[e[0]] + "/" + E.MIME_NAMES[e[0]][e[1]];

exports.MIME_HEADS = M, exports.mimeHead = e => M[e] || "";
