import { argv } from "process";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from 'fs/promises';

//console.log(argv);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname,"data", "products.json");


const match = argv.find((arg) => /^products\/\d+$/.test(arg));
let id = match ? match.split("/")[1] : null;
id = parseInt(id);

let [, , command, resource] = argv;

command = command.toLowerCase();

if(id){
    resource = resource.split("/")[0];
}
resource = resource.toLowerCase();

let products = [];

console.log(command,resource,id);

try{

    const jsonText = await readFile(filePath, 'utf-8');
    products = JSON.parse(jsonText);

} catch(error) {

    console.log("Error al leer el archivo JSON:",error);
}


if(command == 'read' && resource == 'products' && id){
    const product = products.find(product => product.id == id);

    if(product){
        console.log(product);
    }else{
        console.log("No existe el producto");
    }
}

