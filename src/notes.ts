import { NOTES_LIST, NOTES_DATA, TypeNotes } from './lib/notes'
import { MIME_TYPES, MIME_NAMES } from './lib/mimes'

const MIME_NOTES = {} as TypeNotes

for (let i = NOTES_DATA.length; i--;) {
  for (let c: any, j = NOTES_DATA[i].length; j--;) {
    if ((c = NOTES_DATA[i][j]) != null) {
      // @ts-ignore
      MIME_NOTES[MIME_TYPES[i] + '/' + MIME_NAMES[i][j]] = NOTES_LIST[c]
    }
  }
}

export { MIME_NOTES }

export const mimeNote = (mime: string): string =>
  // @ts-ignore
  MIME_NOTES[mime] || ''
