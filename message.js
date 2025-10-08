const fs = require("fs");
const path = require("path");

const pathFile = path.join(__dirname,"message.txt");


const writeMessage = (message) =>{
    fs.writeFileSync(pathFile, message);
};

const readMessage = () =>{
    return fs.readFileSync(pathFile, "utf-8");
};

const deleteMessage = () =>{
    fs.unlinkSync(pathFile);
};

module.exports = {
    writeMessage,
    readMessage,
    deleteMessage
}