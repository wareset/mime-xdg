/* eslint-disable */
/*
dester builds:
notes.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

for (var e = require("../lib/notes"), r = require("../lib/mimes"), E = {}, T = e.NOTES_DATA.length; T--; ) for (var o, t = e.NOTES_DATA[T].length; t--; ) null != (o = e.NOTES_DATA[T][t]) && (E[r.MIME_TYPES[T] + "/" + r.MIME_NAMES[T][t]] = e.NOTES_LIST[o]);

exports.MIME_NOTES = E, exports.mimeNote = e => E[e] || "";
