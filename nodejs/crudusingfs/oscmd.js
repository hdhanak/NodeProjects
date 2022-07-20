const os = require('os');
const path = require('path')

// console.log(os.arch());
// console.log(os.type());
// const memory = os.freemem();
// console.log(`${memory/1024/1024/1024}`);
// const totalmem = os.totalmem()
// console.log(`${totalmem/1024/1024/1024}`);
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.networkInterfaces());

//..........path logs.........
console.log(path.parse("C:\Users\Dell\NODE JS PROJECT\Connection btw mongodb and node js\nodejs\crudusingfs\oscmd.js"));
const pname = path.parse("C:\Users\Dell\NODE JS PROJECT\Connection btw mongodb and node js\nodejs\crudusingfs\oscmd.js");
console.log(pname.name);