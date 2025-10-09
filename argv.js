import { argv } from "process";

console.log(argv);

const products = [];

if(argv[2] == 'read' && argv[3] == 'products'){
    console.log(products);
}