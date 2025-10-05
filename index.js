/*const fs = require("fs");

fs.writeFileSync("message.txt", "Hola node JS");

//sino usar "utf-8" para mostrar el bufer
const message = fs.readFileSync("message.txt");

console.log(message.toString());

*/

//Modulo interno

const message = require("./message.js");

message.writeMessage("Probando modulo interno con Node JS");
