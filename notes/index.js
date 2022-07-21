/* eslint-disable */
/*
dester builds:
notes.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../lib"), r = require("../lib/notes"), _ = require("../lib/mimes"), t = (() => {
    for (var t = e.createObject(), E = r._NOTES_DATA.length; E--; ) for (var T, i = r._NOTES_DATA[E].length; i--; ) null != (T = r._NOTES_DATA[E][i]) && (t[_._MIME_TYPES[E] + "/" + _._MIME_NAMES[E][i]] = r._NOTES_LIST[T]);
    return t;
})();

exports.MIME_NOTES = t, exports.mimeNote = e => t[e] || "";
