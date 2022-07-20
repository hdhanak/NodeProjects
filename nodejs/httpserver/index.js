const http  = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("hello from the others sides")
    } else  if(req.url == "/about"){
        res.end("hello from the about")
    } else  if(req.url == "/contcat"){
        res.end("hello from the contcat")
    } else{
        res.writeHead(404,{"Content-type" : "text/html"}  );
        res.end("404 error found")
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("lsiting to the port no 8000");
})