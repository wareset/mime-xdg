import type { TypeNotes } from './_includes/notes'

import { _NOTES_LIST, _NOTES_DATA } from './_includes/notes'
import { _MIME_TYPES, _MIME_NAMES } from './_includes/mimes'

export const MIME_NOTES = (function(): TypeNotes {
  const res = Object.create(null) as TypeNotes

  for (let i = _NOTES_DATA.length; i--;) {
    for (let c: any, j = _NOTES_DATA[i].length; j--;) {
      if ((c = _NOTES_DATA[i][j]) != null) {
        // @ts-ignore
        res[_MIME_TYPES[i] + '/' + _MIME_NAMES[i][j]] = _NOTES_LIST[c]
      }
    }
  }

  return res
})()

export function mimeNote(mime: string): string {
  // @ts-ignore
  return MIME_NOTES[mime] || ''
}
