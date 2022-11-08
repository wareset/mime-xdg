# mime-xdg
mimetypes, mimeheads and mimenotes from xdg/shared-mime-info

## Note

This library contains mime types from two sources:
- [apache.mime.types](https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types) - have the highest priority
- [gitlab.freedesktop.org/xdg/shared-mime-info](https://gitlab.freedesktop.org/xdg/shared-mime-info) - included in packages for defining mime types in Linux systems

In addition to this, there are top-level types (mime heads) and mime descriptions (mime notes).

All mime types and their descriptions are contained in an optimized form. Therefore, the library does not weigh so much.

Library | Size** | Mimetypes | Extensions
--- | --- | --- | ---
`mime-db (mime-types)`  | 136.8 KB | 2279 | 1180
`mime` | 36.6 KB | 956 | 1173
`mime-xdg*` | 48.8 KB | 1559 | 1619
> \* without `mime-xdg/heads` and `mime-xdg/notes`

> ** minified bundle size (current size, not .gz)
## Usage
### mimeType
Basic library with all mime types
```js
// FUNCTIONS
import { ext, extname, mimeType, mimeList } from 'mime-xdg'

/**
  * 1. ext
  */
// returns the extname if it is in the EXTENSIONS or empty string
ext('src/test.js') // => 'js'
ext('app\\test.foobar') // => '' - empty string
ext('test.abw.CRASHED') // => 'abw.CRASHED' - because it exists exactly in this form
ext('test.abw.crashed') // => ''

/**
  * 2. extname
  */
// works the same way as 'extname' from 'node:path', but
// returns the extname if it is in the EXTENSIONS or find it herself
extname('/tm') // => ''
extname('/.tm/') // => ''
extname('/.tm/test.foobar') // => '.foobar'
extname('test.abw.CRASHED') // => '.abw.CRASHED'
extname('test.abw.crashed') // => '.crashed'

/**
  * 3. mimeType
  */
// returns the mime type or empty string
mimeType('test.foobar') // => ''
mimeType('test.js') // => 'text/javascript'
mimeType('test.JS') // => 'text/javascript'
// but, in the schema 'shared-mime-info', sometimes the register matters:
mimeType('test.c') // => text/x-c
mimeType('test.C') // => text/x-c++src
// I do not know if this is right or not,
// but I think the Linux developers know better

/**
  * 4. mimeList
  */
// returns an array of all mime types
mimeList('test.js') // => ↴
["text/javascript", "application/x-javascript", "application/javascript"]

mimeList('test.foobar') // => []


// OBJECTS
import { EXTENSIONS, MIME_TYPES } from 'mime-xdg'
// You can change them yourself, add, delete, or reverse the order mimetypes

/**
  * 1. EXTENSIONS
  */
console.log(EXTENSIONS)
// EXTENSIONS equal to:
{
  "602": [
    "application/x-t602"
  ],
  "7z.001": [
    "application/x-7z-compressed"
  ],
  "svg.gz": [
    "image/svg+xml-compressed"
  ],
  "aw": [
    "application/applixware",
    "application/x-applix-word"
  ],
  /* etc... */
}

/**
  * 2. MIME_TYPES
  */
console.log(MIME_TYPES)
// MIME_TYPES equal to:
{
  application: {
    "x-riff": true,
    "x-matroska": true,
    "x-iff": true,
    "x-ole-storage": true,
    /* etc... */
  },
  audio: {
    "tta": true,
    "x-tta": true,
    "x-xi": true,
    "x-voc": true,
    /* etc... */
  },
  font: { /* etc... */ },
  image: { /* etc... */ },
  text: { /* etc... */ },
  /* etc... */
}
```

### mimeHead
Many mime types have their own main mime type
```js
// FUNCTION
import { mimeHead } from 'mime-xdg/heads'

/**
  * 2. mimeHead
  */
// returns main mime type or empty string
mimeHead('foobar') // => '' - empty string
mimeHead('text/javascript') // => 'application/ecmascript'

// OBJECT
import {  MIME_HEADS } from 'mime-xdg/heads'

/**
  * 1. MIME_HEADS
  */
console.log(MIME_HEADS)
// MIME_HEADS equal to:
{
  "message/rfc822": "text/plain",
  "font/otf": "font/ttf",
  "video/x-theora+ogg": "video/ogg",
  "video/x-theora": "video/ogg",
  /* etc... */
}
```

### mimeNote
some mime types have a short description
```js
// FUNCTION
import { MIME_NOTES, mimeNote } from 'mime-xdg/notes'
/**
  * 1. mimeNote
  */
// returns note or empty string
mimeNote('foobar') // => '' - empty string
mimeNote('text/javascript') // => 'JavaScript program'

// OBJECT
import { MIME_NOTES } from 'mime-xdg/notes'
/**
  * 1. MIME_NOTES
  */
console.log(MIME_NOTES)
// MIME_NOTES equal to:
{
  "flv-application/octet-stream": "Flash video",
  "message/rfc822": "email message",
  "font/woff2": "WOFF2 font",
  "font/woff": "WOFF font",
  /* etc... */
}
```

## License

[MIT](LICENSE)