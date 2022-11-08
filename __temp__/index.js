// import * as mimeXDG from 'mime-xdg'
// export default mimeXDG
// 48.8 KB
// EXTS 1619
// MIMES 1559

// const mimetypes = {}
// for (const ext in mimeXDG.EXTENSIONS) {
//   for (const mime of mimeXDG.EXTENSIONS[ext]) mimetypes[mime] = 1
// }
// console.log('EXTS:', Object.keys(mimeXDG.EXTENSIONS).length)
// console.log('MIMES:', Object.keys(mimetypes).length)

// import mimeDB from 'mime-db/db.json'
// export default mimeDB
// 136.8 KB
// EXTS 1180
// MIMES 2279

// const exts = {}
// for (const mime in mimeDB) {
//   const extensions = mimeDB[mime].extensions
//   if (extensions) for (const ext of extensions) exts[ext] = 1
// }

// console.log(mimeDB)
// console.log('EXTS:', Object.keys(exts).length)
// console.log('MIMES:', Object.keys(mimeDB).length)

// import mime from 'mime'
// 36.6 KB
// EXTS 1173
// MIMES 956

// console.log(mime)
// console.log('EXTS:', Object.keys(mime._types).length)
// console.log('MIMES:', Object.keys(mime._extensions).length)
