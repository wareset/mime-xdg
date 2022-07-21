/* eslint-disable */
/*
dester builds:
notes.ts
*/
import { NOTES_DATA as r, NOTES_LIST as o } from "../lib/notes";

import { MIME_TYPES as l, MIME_NAMES as m } from "../lib/mimes";

for (var t = {}, e = r.length; e--; ) for (var i, f = r[e].length; f--; ) null != (i = r[e][f]) && (t[l[e] + "/" + m[e][f]] = o[i]);

var n = r => t[r] || "";

export { t as MIME_NOTES, n as mimeNote };
