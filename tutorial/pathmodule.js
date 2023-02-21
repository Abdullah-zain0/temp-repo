const path = require('path')

// console.log(path.sep)
// console.log(path.join())

const absPath = path.resolve(__dirname,"./content/subfolder/test.txt")
console.log(absPath)