const http  = require('http')
const fs = require("fs")
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/apidatastore/api.json`,"utf-8")
    // const objdata = JSON.parse(data);
    // // console.log(objdata);
    // const obj = JSON.parse(data);

    if(req.url == "/"){
        res.end("hello from the others sides")
    } else  if(req.url == "/about"){
        res.end("hello from the about")
    } else  if(req.url == "/contcat"){
        res.end("hello from the contcat")
    
    }else if(req.url == "/api"){
        res.writeHead(200,{"Content-type" : "application/json"})
        res.end(data)

    }  else{
        res.writeHead(404,{"Content-type" : "text/html"}  );
        res.end("404 error found")
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("lsiting to the port no 8000");
})