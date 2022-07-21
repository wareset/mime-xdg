import { createObject } from './lib'
import { _HEADS_DATA, TypeHeads } from './lib/heads'
import { _MIME_TYPES, _MIME_NAMES } from './lib/mimes'

export const MIME_HEADS = ((): TypeHeads => {
  const res = createObject() as TypeHeads

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

export const mimeHead = (mime: string): string =>
  // @ts-ignore
  MIME_HEADS[mime] || ''
