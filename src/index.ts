import { createObject } from './lib'
import { _EXTENSIONS, TypeExtnames } from './lib/mimes'
import { _MIME_TYPES, _MIME_NAMES } from './lib/mimes'

// export const EXTNAMES = {} as Readonly<{ [K in keyof typeof EXTENSIONS]?: string[] }>
// export const EXTNAMES = {} as Readonly<Record<keyof typeof EXTENSIONS, string[]>>

export const EXTENSIONS = ((): TypeExtnames => {
  const res = createObject() as TypeExtnames

  for (const ext in _EXTENSIONS) {
    // @ts-ignore
    res[ext] = []
    // @ts-ignore
    for (let a = _EXTENSIONS[ext], j = 0, i = 0; i < a.length; i++) {
      // @ts-ignore
      res[ext][j++] = _MIME_TYPES[a[i]] + '/' + _MIME_NAMES[a[i++]][a[i]]
    }
  }

  return res
})()

export const MIME_TYPES = (() => {
  const res =
    createObject() as { [K in typeof _MIME_TYPES[number]]: { [key: string]: true } }
  
  for (let i = _MIME_TYPES.length; i-- > 0;) {
    res[_MIME_TYPES[i]] = createObject()
    for (let j = _MIME_NAMES[i].length; j-- > 0;) {
      res[_MIME_TYPES[i]][_MIME_NAMES[i][j]] = true
    }
  }

  return res
})()

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

export const extname = (filepath: string): string => {
  let _ext: string = ext(filepath)
  if (!_ext) {
    const idx = filepath.lastIndexOf('.')
    if (idx > -1) _ext = filepath.slice(idx + 1)
  }
  return _ext ? '.' + _ext : ''
}

export const mime = (filepath: string): string =>
  // @ts-ignore
  (filepath = ext(filepath)) ? EXTENSIONS[filepath][0] : filepath

export const mimeList = (filepath: string): string[] =>
  // @ts-ignore
  (filepath = ext(filepath)) ? EXTENSIONS[filepath].slice(0) : []