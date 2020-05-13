// const http = require('http')
const colors = require('colors')

// const handleServer = function(req, res){
//     res.writeHead(200, {'content-type': 'text/html' });
//     res.write('<h1>Hola mundo desde nodejs</h1>');
//     res.end();
// }
// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log('Server on port 3000'.green)
// }) //port

const express = require('express')

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola mundo con Express!     </h1>')
    res.end()
})

server.listen(3000, function(){
    console.log('Server on port 3000'.red)
})