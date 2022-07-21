/* eslint-disable */
/*
dester builds:
notes.ts
*/
import { createObject as r } from "../lib";

import { _NOTES_DATA as o, _NOTES_LIST as m } from "../lib/notes";

import { _MIME_TYPES as t, _MIME_NAMES as i } from "../lib/mimes";

var l = (() => {
    for (var l = r(), e = o.length; e--; ) for (var f, n = o[e].length; n--; ) null != (f = o[e][n]) && (l[t[e] + "/" + i[e][n]] = m[f]);
    return l;
})(), e = r => l[r] || "";

export { l as MIME_NOTES, e as mimeNote };
