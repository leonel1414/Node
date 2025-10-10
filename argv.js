import { argv } from "process";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from 'fs/promises';

//console.log(argv);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname,"data", "products.json");


const match = argv.find((arg) => /^products\/\d+$/.test(arg));
const id = match ? match.split("/")[1] : null;


let [, , command, resource] = argv;

command = command.toLowerCase();
resource = resource.toLowerCase();

let products = [];

console.log(command,resource,id);
try{

    const jsonText = await readFile(filePath, 'utf-8');
    products = JSON.parse(jsonText);

} catch(error) {

    console.log("Error al leer el archivo JSON:",error);
}


if(command == 'read' && resource == 'products'){
    console.log(products);
}

