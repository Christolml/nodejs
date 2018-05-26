/* Single Thread */
'use strict'

function singleThread() {

    process.argv[2] = 'Que onda estamos aprendiendo nodej'
    process.argv[3] = 19
    process.argv[4] = true

    // se estan accediendo a las propiedades de process
    console.log('-----------------------')
    console.log('EL PROCESO DE NODE.JS')
    console.log('Id del proceso............' + process.pid)
    console.log('Titulo....................' + process.title)
    console.log('Directorio de node........' + process.execPath)
    console.log('Directorio actual.........' + process.cwd())
    console.log('Version de Node...........' + process.version)
    console.log('Versiones Dependencias....' + process.versions)
    console.log('Plataforma (S.O)..........' + process.platform)
    console.log('Arquitectura (S.O)........' + process.arch)
    console.log('Tiempo activo de Node.....' + process.uptime())
    console.log('Argumentos del proceso....' + process.argv)
    console.log('-------------------------')
}

singleThread()

let key = 0

for (key in process.argv) {
    console.log(process.argv[key])
}







