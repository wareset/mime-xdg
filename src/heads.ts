import type { TypeHeads } from './_includes/heads'

import { _HEADS_DATA } from './_includes/heads'
import { _MIME_TYPES, _MIME_NAMES } from './_includes/mimes'

export const MIME_HEADS = (function(): TypeHeads {
  const res = Object.create(null) as TypeHeads

  for (let mimeArr: [number, number], i = _HEADS_DATA.length; i--;) {
    for (let j in _HEADS_DATA[i]) {
      // @ts-ignore
      mimeArr = _HEADS_DATA[i][j = +j]
      // @ts-ignore
      res[_MIME_TYPES[i] + '/' + _MIME_NAMES[i][j]] =
       _MIME_TYPES[mimeArr[0]] + '/' + _MIME_NAMES[mimeArr[0]][mimeArr[1]]
    }
  }

  return res
})()

export function mimeHead(mime: string): string {
  // @ts-ignore
  return MIME_HEADS[mime] || ''
}
