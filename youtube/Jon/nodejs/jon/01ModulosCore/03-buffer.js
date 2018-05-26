
/** Buffers
 * Un buffer es una tira de bytes (datos binarios)
 * Similar a un array de enteros
 * Tamano fijo
 * Manipular datos directamente
 *      -sockets
 *      -streams
 *      -Implementar protocolos complejos
 *      -Criptografia
 */

 'use strict'
//  se instancia un buffer de 26 posiciones
 let buf = new Buffer(26);

//  buf no contiene nada de informacion por eso en el console.log de abajo aparecen 0

 console.log(
     buf,
     buf.length,
     buf.toString()
 );

 for (let i = 0; i < buf.length; i++) {
     buf[i] = i + 97;
 }
//  la letra a se representa con 97 en codigo ascii 

 console.log(buf.toString());