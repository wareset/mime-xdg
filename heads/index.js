/* eslint-disable */
/*
dester builds:
heads.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../lib"), r = require("../lib/heads"), _ = require("../lib/mimes"), E = (() => {
    for (var E, M = e.createObject(), A = r._HEADS_DATA.length; A--; ) for (var i in r._HEADS_DATA[A]) E = r._HEADS_DATA[A][i = +i], 
    M[_._MIME_TYPES[A] + "/" + _._MIME_NAMES[A][i]] = _._MIME_TYPES[E[0]] + "/" + _._MIME_NAMES[E[0]][E[1]];
    return M;
})();

exports.MIME_HEADS = E, exports.mimeHead = e => E[e] || "";
