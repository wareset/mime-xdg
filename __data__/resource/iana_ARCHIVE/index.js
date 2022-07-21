setTimeout(() => {}, 1000 * 60 * 60 * 60)

console.clear()

console.log('run')

import * as nodePath from 'node:path'
import * as nodeFs from 'node:fs'
import { promises as nodeFsPromises } from 'node:fs'

import sax from 'sax'
import fetch from 'node-fetch'

// console.log(sax)

const DIR_TEMP = nodePath.resolve('temp')

const FILE_MEDIA_TYPES_XML = nodePath.resolve(DIR_TEMP, 'media-types.xml')
const FILE_MEDIA_TYPES_JSON = nodePath.resolve(DIR_TEMP, 'media-types.json')

const stringify = JSON.stringify

const checkSubDirs = async (path) => {
  const basedir = nodePath.dirname(path)
  if (basedir) await nodeFsPromises.mkdir(basedir, { recursive: true })
  return path
}

const createMimeTypesXML = async () => {
  try {
    await nodeFsPromises.access(FILE_MEDIA_TYPES_XML)
    // xml = await nodeFsPromises.readFile(FILE_MEDIA_TYPES_XML, { encoding: 'utf8' })
  } catch {
    const response = await fetch('https://www.iana.org/assignments/media-types/media-types.xml')
    const xml = await response.text()
    await nodeFsPromises.writeFile(await checkSubDirs(FILE_MEDIA_TYPES_XML), xml)
  }
}

const createMimeTypesJSON = async () => {
  try {
    await nodeFsPromises.access(FILE_MEDIA_TYPES_JSON)
    // xml = await nodeFsPromises.readFile(FILE_MEDIA_TYPES_XML, { encoding: 'utf8' })
  } catch {
    const data = { node: {}, children: [] }
    const CURRENT = [data]
  
    const saxStream = sax.createStream(true)
  
    saxStream.on('error', (e) => {
      // same object as above
      console.error(e)
    })
  
    let newCur
    saxStream.on('text', (text) => {
      CURRENT[CURRENT.length - 1].text = text
    })
  
    saxStream.on('opentag', (node) => {
      if (!node.isSelfClosing) {
        const name = node.name
        switch (name) {
          // case 'registry':
          case 'record':
          case 'name':
          case 'file':
            if (name === 'record') {
              if (CURRENT.length > 1) {
                if (!CURRENT[CURRENT.length - 1].children.length) return
              }
            } else if (CURRENT[CURRENT.length - 1].node.name !== 'record') return
  
            CURRENT[CURRENT.length - 1].children.push(newCur = { node, children: [] })
            CURRENT.push(newCur)
            break
          default: {
          }
        }
      }
    })
  
    saxStream.on('closetag', (tag) => {
      if (tag === CURRENT[CURRENT.length - 1].node.name) CURRENT.pop()
    })
  
    await new Promise((res) => {
      saxStream.on('end', () => {
        res()
      })
      nodeFs.createReadStream(FILE_MEDIA_TYPES_XML).pipe(saxStream)
    })
  
    console.log(data.children)
  
    let arrStr = '[\n'
    for (let a = data.children, i = 0; i < a.length; i++) {
      try {
        arrStr += `  [${stringify(a[i].children[0].text)}, ${stringify(a[i].children[1].text)}],\n`
      } catch {
        console.log(stringify(a[i]))
        // throw 12
      }
    }
  
    arrStr = arrStr.slice(0, -2)
    arrStr += '\n]'
  
    // console.log(arrStr)
    await nodeFsPromises.writeFile(await checkSubDirs(FILE_MEDIA_TYPES_JSON), arrStr)
  }
}

const DIR_LIST = nodePath.resolve(DIR_TEMP, 'list')
const URL = 'https://www.iana.org/assignments/media-types/'
const __download = async ([name, link]) => {
  name = name.replace(/\//g, '_')
  const FILE = nodePath.resolve(DIR_LIST, `${link}[${name}].txt`)
  try {
    await nodeFsPromises.access(FILE)
    return false
  } catch {
    const response = await fetch(`${URL}${link}`)
    const text = await response.text()
    await nodeFsPromises.writeFile(await checkSubDirs(FILE), text)
    return true
  }
}

const sleep = (n) => new Promise((res) => {
  setTimeout(res, n)
})

// eslint-disable-next-line no-unused-vars
const createSchemes = async () => {
  const json = JSON.parse(
    await nodeFsPromises.readFile(FILE_MEDIA_TYPES_JSON, { encoding: 'utf8' })
  )

  let count = 0
  for await (const item of json) {
    if (await __download(item)) {
      count++
      console.log(count, item[0])
      if (count > 50) {
        count = 0
        await sleep(2000)
      }
    }
  }
}

// TODO
// eslint-disable-next-line no-unused-vars
const getFileExtensionsFromList = async () => {
  // const types = await nodeFsPromises.readdir(DIR_LIST)
  // console.log(types)

  const type = 'video'
  const files = await nodeFsPromises.readdir(nodePath.resolve(DIR_LIST, type))
  // console.log(files)

  let count = 0
  for await (const filename of files) {
    count++
    // if (count > 1) return
    // console.log(filename)
    const text = await nodeFsPromises.readFile(
      nodePath.resolve(DIR_LIST, type, filename), { encoding: 'utf8' }
    )

    const exts = text.match(/\n[^\n]*File\s+extension[^\n:]*:\s*([^\n]+)/)
    if (exts) console.log(count, filename, true, exts[1].trim())
    else console.log(count, filename, false)
  }
}

const main = async () => {
  console.log(DIR_TEMP)

  await createMimeTypesXML()
  await createMimeTypesJSON()
  // await createSchemes()
  // await getFileExtensionsFromList()
}

setTimeout(main, 100)
