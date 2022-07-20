const name ="harshita"
// console.log("harshita");

const fs = require("fs")

fs.writeFileSync('read.txt','hello this is line 1>>')
// fs.writeFileSync('read.txt','hello this is line 2>>')

fs.appendFileSync('read.txt',' this is added data here')

const buf_data = fs.readFileSync('read.txt');

const original_data = buf_data.toString();
console.log(original_data);

// rename file 

// fs.renameSync('read.js','readwrite.txt')

fs.writeFileSync('readwrite.txt',"this is new set of data");
fs.appendFileSync('readwrite.txt',"hello this is append data in readwrite.txt")
