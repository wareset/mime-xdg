import { createObject } from './lib'
import { _NOTES_LIST, _NOTES_DATA, TypeNotes } from './lib/notes'
import { _MIME_TYPES, _MIME_NAMES } from './lib/mimes'

export const MIME_NOTES = ((): TypeNotes => {
  const res = createObject() as TypeNotes

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

export const mimeNote = (mime: string): string =>
  // @ts-ignore
  MIME_NOTES[mime] || ''
