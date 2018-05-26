
let fs = require('fs')
console.log('\nAbriendo archivo...')

let content = fs.readFileSync('archivo.txt','utf8')
console.log(content)

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime())   //me indica el tiempo que tardo el programa


