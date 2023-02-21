const sayHi = require("./utils")


// sayHi("susan")
// const data = require("./alternative-flavor")
// console.log(data)

require("./mind-gernade")

const os = require('os')

// console.log(os.userInfo())

// // system uptime in seconds

// console.log(os.uptime())

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)