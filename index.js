const fs = require("fs");

fs.writeFileSync("message.txt", "Hola node JS");

const message = fs.readFileSync("message.txt");

console.log(message);