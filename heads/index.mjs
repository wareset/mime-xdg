/* eslint-disable */
/*
dester builds:
heads.ts
*/
import { HEADS_DATA as r } from "../lib/heads";

import { MIME_TYPES as o, MIME_NAMES as i } from "../lib/mimes";

for (var m, a = {}, e = r.length; e--; ) for (var f in r[e]) m = r[e][f = +f], a[o[e] + "/" + i[e][f]] = o[m[0]] + "/" + i[m[0]][m[1]];

var t = r => a[r] || "";

export { a as MIME_HEADS, t as mimeHead };
