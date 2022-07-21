import { EXTENSIONS as EXTENSIONS_ORIGIN, TypeExtnames } from './lib/mimes'
import { MIME_TYPES as MIME_TYPES_ORIGIN, MIME_NAMES } from './lib/mimes'

// export const EXTNAMES = {} as Readonly<{ [K in keyof typeof EXTENSIONS]?: string[] }>
// export const EXTNAMES = {} as Readonly<Record<keyof typeof EXTENSIONS, string[]>>

const EXTENSIONS = {} as TypeExtnames

for (const ext in EXTENSIONS_ORIGIN) {
  // @ts-ignore
  EXTENSIONS[ext] = []
  // @ts-ignore
  for (let a = EXTENSIONS_ORIGIN[ext], j = 0, i = 0; i < a.length; i++) {
    // @ts-ignore
    EXTENSIONS[ext][j++] = MIME_TYPES_ORIGIN[a[i]] + '/' + MIME_NAMES[a[i++]][a[i]]
  }
}

// @ts-ignore
const MIME_TYPES: { [K in typeof MIME_TYPES[number]]: { [key: string]: true } } = {}
for (let i = MIME_TYPES_ORIGIN.length; i-- > 0;) {
  MIME_TYPES[MIME_TYPES_ORIGIN[i]] = {}
  for (let j = MIME_NAMES[i].length; j-- > 0;) {
    MIME_TYPES[MIME_TYPES_ORIGIN[i]][MIME_NAMES[i][j]] = true
  }
}

export { EXTENSIONS, MIME_TYPES }

export const ext = (file: string): keyof TypeExtnames | '' => {
  file = file.trim()
  let ext = '' as any
  for (let c: string, s = '', su = '', sl = '', i = file.length; i-- > 0;) {
    if ((c = file[i]) === '.') {
      s in EXTENSIONS && (ext = s) ||
      su in EXTENSIONS && (ext = su) || sl in EXTENSIONS && (ext = sl)
    } else if (c === '/' || c === '\\') break
    s = c + s, su = c.toUpperCase() + su, sl = c.toLowerCase() + sl
  }
  return ext
}

export const extname = (filepath: string): string =>
  (filepath = ext(filepath)) && '.' + filepath

export const mime = (filepath: string): string =>
  // @ts-ignore
  (filepath = ext(filepath)) ? EXTENSIONS[filepath][0] : filepath

export const mimeList = (filepath: string): string[] =>
  // @ts-ignore
  (filepath = ext(filepath)) ? EXTENSIONS[filepath].slice(0) : []
