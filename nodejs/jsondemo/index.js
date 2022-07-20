const fs = require('fs')

const obj = {
name : "harshita",
    age:22,
}

const jsonobj = JSON.stringify(obj);
console.log(jsonobj);

fs.writeFile("json1.json",jsonobj,(e)=>{
    console.log("done");
});

const buufdata = fs.readFile("json1.json","utf-8",(res,req)=>{
    console.log("red",req);
})