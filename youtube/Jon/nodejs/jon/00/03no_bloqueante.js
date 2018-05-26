
let fs = require('fs')
console.log('\nAbriendo archivo...')

let content = fs.readFile('archivo.txt', 'utf8', function(error, content){
    console.log(content)
})

console.log('\nHaciendo otra cosa')
console.log(process.uptime())


// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);