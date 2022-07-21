/* eslint-disable */
/*
dester builds:
heads.ts
*/
import { createObject as r } from "../lib";

import { _HEADS_DATA as o } from "../lib/heads";

import { _MIME_TYPES as i, _MIME_NAMES as m } from "../lib/mimes";

var t = (() => {
    for (var t, e = r(), f = o.length; f--; ) for (var a in o[f]) t = o[f][a = +a], 
    e[i[f] + "/" + m[f][a]] = i[t[0]] + "/" + m[t[0]][t[1]];
    return e;
})(), e = r => t[r] || "";

export { t as MIME_HEADS, e as mimeHead };
