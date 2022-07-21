import { HEADS_DATA, TypeHeads } from './lib/heads'
import { MIME_TYPES, MIME_NAMES } from './lib/mimes'

const MIME_HEADS = {} as TypeHeads

for (let mimeArr: [number, number], i = HEADS_DATA.length; i--;) {
  for (let j in HEADS_DATA[i]) {
    // @ts-ignore
    mimeArr = HEADS_DATA[i][j = +j]
    // @ts-ignore
    MIME_HEADS[MIME_TYPES[i] + '/' + MIME_NAMES[i][j]] =
      MIME_TYPES[mimeArr[0]] + '/' + MIME_NAMES[mimeArr[0]][mimeArr[1]]
  }
}

export { MIME_HEADS }

export const mimeHead = (mime: string): string =>
  // @ts-ignore
  MIME_HEADS[mime] || ''
