const fs = require("fs");

const writeMessage = (message) =>{
    fs.writeFileSync("message.txt", message);
};

const readMessage = () =>{
    return fs.readFileSync("message.txt", "utf-8");
};

const deleteMessage = () =>{
    fs.unlinkSync("message.txt");
};

module.exports = {
    writeMessage,
    readMessage,
    deleteMessage
}