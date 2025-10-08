/*const fs = require("fs");

fs.writeFileSync("message.txt", "Hola node JS");

//sino usar "utf-8" para mostrar el bufer
const message = fs.readFileSync("message.txt");

console.log(message.toString());

*/

/**
 * Modulo interno
*/

//esestructuración, para no requerrir todo el modulo completo

//const {writeMessage} = require("./message.js");
//writeMessage("Probando modulo interno con Node JS");


const message = require("./message.js");

message.writeMessage("Hola Node JS, __dirname");


//para leer
const messagee = message.readMessage();
console.log(messagee)

//para borrar
//message.deleteMessage();



/**
 * MODULO DE TERCEROS
 */

/*
const cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: "I'm a mooooodule",
        e: "oO",
        T: "U ",
    })
);
*/
