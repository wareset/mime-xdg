// setTimeout(() => {}, 1000 * 60 * 60)

console.clear()

console.log('mime-info __data__ Factory')

import * as nodePath from 'node:path'
import * as nodeFs from 'node:fs'
import { promises as nodeFsPromises } from 'node:fs'

import sax from 'sax'

const DIR = nodePath.resolve('')
const DIR_RESOURE = nodePath.resolve(DIR, 'resource')

const FILE_MIME_JSON = nodePath.resolve(DIR, '__mime.json')
const FILE_CMNT_JSON = nodePath.resolve(DIR, '__note.json')
const FILE_HEAD_JSON = nodePath.resolve(DIR, '__head.json')
const PATH_SRC_LIB = '../src/lib'
const FILE_MIMETYPES_TS = nodePath.resolve(DIR, PATH_SRC_LIB, 'mimes.ts')
const FILE_MIMENOTES_TS = nodePath.resolve(DIR, PATH_SRC_LIB, 'notes.ts')
const FILE_MIMEHEADS_TS = nodePath.resolve(DIR, PATH_SRC_LIB, 'heads.ts')

const parseTypes = async (path, EXTENSIONS) => {
  console.log(path)

  const text = await nodeFsPromises.readFile(path, { encoding: 'utf8' })

  const reg = /[^\n]+[\n$]/g
  for (let matches, s; matches = reg.exec(text);) {
    s = matches[0].trim()
    if (s && s[0] !== '#') {
      const arr = s.split(/\s+/)
      const mime = arr.shift()

      const exts = arr
      if (exts.length) {
        for (const ext of exts) {
          // ext = ext.toLowerCase()
          if (!/^[-\w.+]+$/.test(ext)) console.log('BAD', ext)
          else if (!(ext in EXTENSIONS)) EXTENSIONS[ext] = [mime]
          else if (!EXTENSIONS[ext].includes(mime)) EXTENSIONS[ext].push(mime)
        }
      } else {
        // TODO: если нет расширений что делать?
        // console.log('NOT', mime, MIMES[mimeName][mimeSubname])
      }
    }
  }
}

const getNodeModulesPackage = async (packageName, dir, oldDir) => {
  dir = dir || nodePath.resolve('')
  try {
    let path = nodePath.resolve(dir, 'node_modules')
    await nodeFsPromises.access(path)
    path = nodePath.resolve(path, packageName)
    await nodeFsPromises.access(path)
    return path
  } catch {
    if (oldDir !== (oldDir = dir = nodePath.parse(dir).dir)) {
      return getNodeModulesPackage(packageName, dir, oldDir)
    } else return ''
  }
}

const parseSharedMimeInfo = async (EXTENSIONS, COMMENTS, HEADMIMES) => {
  const packageName = 'xdg--shared-mime-info'
  const DIR_SHARED_MIME = await getNodeModulesPackage(packageName)
  if (!DIR_SHARED_MIME) throw 'Not found ' + packageName
  const FILE_MIMES = nodePath.resolve(DIR_SHARED_MIME, 'data', 'freedesktop.org.xml.in')
  console.log(DIR_SHARED_MIME)

  const data = { node: {}, children: [] }
  const CURRENT = [data]

  const saxStream = sax.createStream(true)

  saxStream.on('error', (e) => {
    throw e
  })

  let newCur
  saxStream.on('text', (text) => {
    CURRENT[CURRENT.length - 1].text = text
  })

  saxStream.on('opentag', (node) => {
    CURRENT[CURRENT.length - 1].children.push(newCur = { node, children: [] })
    if (!node.isSelfClosing) CURRENT.push(newCur)
  })

  saxStream.on('closetag', (tag) => {
    if (tag === CURRENT[CURRENT.length - 1].node.name) CURRENT.pop()
  })

  await new Promise((res) => {
    saxStream.on('end', () => {
      res()
    })
    nodeFs.createReadStream(FILE_MIMES).pipe(saxStream)
  })

  const mimeInfo = data.children[0]
  if (mimeInfo.node.name !== 'mime-info') throw mimeInfo
  const children = mimeInfo.children

  // console.log(children)

  let pattern = ''
  for (const mimeType of children) {
    const node = mimeType.node
    if (node.name !== 'mime-type') throw mimeType

    const mimes = [node.attributes.type]
    const exts = []
    let subClassOf = ''
    let comment = ''
    for (const childData of mimeType.children) {
      switch (childData.node.name) {
        case 'comment':
          // TODO: допилить комментарии, если они будут нужны
          comment = childData.text
          break
        case 'sub-class-of':
          subClassOf = childData.node.attributes.type
          break
        case 'glob':
          pattern = childData.node.attributes.pattern
          if (pattern.startsWith('*.')) {
            pattern = pattern.slice(2)
            if (/^[-\w.+]+$/.test(pattern)) exts.push(pattern)
            else console.log('BAD', pattern)
            // все норм. двойных расширений нет
            // if (pattern.indexOf('.') > 1) console.log('DOT', types[0], 1, pattern)
          } else {
            // TODO: доделать паттерны
            // console.log('PATTERN', types[0], 1, pattern)
          }
          break
        case 'alias':
          mimes.push(childData.node.attributes.type)
          break
        default:
      }
    }
    if (exts.length) {
      for (const ext of exts) {
        // ext = ext.toLowerCase()
        if (!(ext in EXTENSIONS)) EXTENSIONS[ext] = []
        if (!EXTENSIONS[ext].temp) EXTENSIONS[ext].temp = []
        EXTENSIONS[ext].temp.push([exts.length, mimes])
      }

      if (comment) {
        COMMENTS[mimes[0]] = comment
        for (let i = 1; i < mimes.length; i++) {
          COMMENTS[mimes[i]] || (COMMENTS[mimes[i]] = comment)
        }
      }

      if (subClassOf) {
        HEADMIMES[mimes[0]] = subClassOf
        for (let i = 1; i < mimes.length; i++) {
          HEADMIMES[mimes[i]] || (HEADMIMES[mimes[i]] = subClassOf)
        }
      }
    }
  }

  for (const ext in EXTENSIONS) {
    if (EXTENSIONS[ext].temp) {
      EXTENSIONS[ext].temp.sort((a, b) => a[0] - b[0])
      for (const temp of EXTENSIONS[ext].temp) {
        for (const mime of temp[1]) {
          if (!EXTENSIONS[ext].includes(mime)) EXTENSIONS[ext].push(mime)
        }
      }
      delete EXTENSIONS[ext].temp
    }
  }
}

const createMimeJson = async () => {
  const EXTS = {}
  const NOTE = {}
  const HEAD = {}

  await parseTypes(nodePath.resolve(DIR_RESOURE, 'apache.mime.types'), EXTS)
  await parseSharedMimeInfo(EXTS, NOTE, HEAD)
  // TODO: you need etc.mime.types? 
  // await parseTypes(nodePath.resolve(DIR_RESOURE, 'etc.mime.types'), EXTS)
  // console.log(EXTS)
  await nodeFsPromises.writeFile(FILE_MIME_JSON, JSON.stringify(EXTS, null, 2))
  await nodeFsPromises.writeFile(FILE_CMNT_JSON, JSON.stringify(NOTE, null, 2))
  await nodeFsPromises.writeFile(FILE_HEAD_JSON, JSON.stringify(HEAD, null, 2))
}

const __getMimeArr = (mime) => {
  const mimeArr = mime.split('/')
  if (mimeArr.length !== 2) throw mime
  return mimeArr
}

const DUMMY = '%%CMNT_DUMMY%%'
const DUMMY_JSON = JSON.stringify('%%CMNT_DUMMY%%')
const createOptimizedData = async () => {
  const TYPE_EXTNAMES = await nodeFsPromises.readFile(FILE_MIME_JSON, { encoding: 'utf8' })
  const MIME_JSON_OBJ = JSON.parse(TYPE_EXTNAMES)
  const TYPE_NOTES = await nodeFsPromises.readFile(FILE_CMNT_JSON, { encoding: 'utf8' })
  const NOTES_JSON_OBJ = JSON.parse(TYPE_NOTES)
  const TYPE_HEADS = await nodeFsPromises.readFile(FILE_HEAD_JSON, { encoding: 'utf8' })
  const HEADS_JSON_OBJ = JSON.parse(TYPE_HEADS)

  // console.log(HEADS_JSON_OBJ)

  const NOTES = []
  const NOTES_ARR = []
  const NOTES_OBJ = {}

  const HEADS = []

  const EXTENSIONS = {}

  const MIME_TYPES_ARR = []
  const MIME_TYPES_OBJ = {}

  const MIME_SUBTYPES_ARR_ARR = []
  const MIME_SUBTYPES_OBJ_OBJ = {}

  for (const ext in MIME_JSON_OBJ) {
    const mimes = MIME_JSON_OBJ[ext]
    EXTENSIONS[ext] = []
    for (let i = 0; i < mimes.length; i++) {
      const mime = mimes[i]
      const [mimeName, mimeSubname] = __getMimeArr(mime)

      let mimeNameId = MIME_TYPES_OBJ[mimeName]
      if (mimeNameId == null) {
        mimeNameId = MIME_TYPES_OBJ[mimeName] = MIME_TYPES_ARR.push(mimeName) - 1
        MIME_SUBTYPES_ARR_ARR[mimeNameId] = []
        MIME_SUBTYPES_OBJ_OBJ[mimeName] = {}
        if (NOTES[mimeNameId]) throw NOTES
        NOTES[mimeNameId] = []

        if (HEADS[mimeNameId]) throw NOTES
        HEADS[mimeNameId] = {}
      }

      let mimeSubnameId = MIME_SUBTYPES_OBJ_OBJ[mimeName][mimeSubname]
      if (mimeSubnameId == null) {
        mimeSubnameId = MIME_SUBTYPES_OBJ_OBJ[mimeName][mimeSubname] =
        MIME_SUBTYPES_ARR_ARR[mimeNameId].push(mimeSubname) - 1
      }

      EXTENSIONS[ext].push(mimeNameId, mimeSubnameId)

      if (NOTES_JSON_OBJ[mime]) {
        const comment = NOTES_JSON_OBJ[mime]
        let cmntId = NOTES_OBJ[comment]
        if (cmntId == null) {
          cmntId = NOTES_OBJ[comment] = NOTES_ARR.push(comment) - 1
        }
        for (;NOTES[mimeNameId].length < mimeSubnameId;) {
          NOTES[mimeNameId].push(DUMMY)
        }
        NOTES[mimeNameId][mimeSubnameId] = cmntId
      }

      if (HEADS_JSON_OBJ[mime]) {
        const parent = HEADS_JSON_OBJ[mime]
        // for (;HEADS[mimeNameId].length < mimeSubnameId;) {
        //   HEADS[mimeNameId].push(DUMMY)
        // }
        HEADS[mimeNameId][mimeSubnameId] = parent
      }
    }
  }

  for (let i = 0; i < HEADS.length; i++) {
    for (let j in HEADS[i]) {
      j = +j
      // for (let j = 0; j < HEADS[i].length; j++) {
      const mime = HEADS[i][j]
      if (mime && mime !== DUMMY) {
        const [mimeName, mimeSubname] = __getMimeArr(mime)
        let mimeNameId = MIME_TYPES_OBJ[mimeName]
        if (mimeNameId == null) {
          mimeNameId = MIME_TYPES_OBJ[mimeName] = MIME_TYPES_ARR.push(mimeName) - 1
          MIME_SUBTYPES_ARR_ARR[mimeNameId] = []
          MIME_SUBTYPES_OBJ_OBJ[mimeName] = {}
        }

        let mimeSubnameId = MIME_SUBTYPES_OBJ_OBJ[mimeName][mimeSubname]
        if (mimeSubnameId == null) {
          mimeSubnameId = MIME_SUBTYPES_OBJ_OBJ[mimeName][mimeSubname] =
          MIME_SUBTYPES_ARR_ARR[mimeNameId].push(mimeSubname) - 1
        }

        HEADS[i][j] = [mimeNameId, mimeSubnameId]
      }
    }
  }

  // console.log(MIME_TYPES_ARR)
  // console.log(MIME_SUBTYPES_ARR_ARR)
  // console.log(EXTENSIONS)
  // console.log(NOTES)

  // console.log(HEADS)

  let headsTs = '/* eslint-disable max-len */\n\n'
  const heads = JSON.stringify(HEADS).replace(/"/g, '')
  headsTs += `export const _HEADS_DATA = ${heads} as const\n\n`
  headsTs += `export type TypeHeads = ${TYPE_HEADS}\n`
  await nodeFsPromises.writeFile(FILE_MIMEHEADS_TS, headsTs)

  let notesTs = '/* eslint-disable max-len */\n\n'
  const notes = JSON.stringify(NOTES).split(DUMMY_JSON).join('')
  notesTs += `export const _NOTES_LIST = ${JSON.stringify(NOTES_ARR)} as const\n\n`
  notesTs += `export const _NOTES_DATA = ${notes} as const\n\n`
  notesTs += `export type TypeNotes = ${TYPE_NOTES}\n`
  await nodeFsPromises.writeFile(FILE_MIMENOTES_TS, notesTs)

  let finalJs = '/* eslint-disable max-len */\n\n'
  finalJs += `export const _MIME_TYPES = ${JSON.stringify(MIME_TYPES_ARR)} as const\n\n`
  finalJs += `export const _MIME_NAMES = ${JSON.stringify(MIME_SUBTYPES_ARR_ARR)} as const\n\n`
  finalJs += `export const _EXTENSIONS = ${JSON.stringify(EXTENSIONS)} as const\n\n`
  finalJs += `export type TypeExtnames = ${TYPE_EXTNAMES}\n`
  await nodeFsPromises.writeFile(FILE_MIMETYPES_TS, finalJs)
}

//! uncomment for compile
const main = async () => {
  await createMimeJson()
  await createOptimizedData()
}

setTimeout(main, 250)
