const os = require('os')

const fs = require('fs')

console.log(os.platform())
console.log(os.release())
console.log(os.freemem())
console.log(os.totalmem())

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if (err){
        console.log(err)
    }
    console.log('Archivo creado!')
})

console.log('Ultima linea de codigo')