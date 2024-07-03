const fs = require('fs')

//blocking version
console.log("before read file")
const data = fs.readFileSync('./text.txt')
console.log(data)
console.log("after read file")

//non blocking
console.log("before read file")
fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) return console.log(err)
    console.log(data)
})
console.log("after read file")