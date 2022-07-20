const fs = require('fs')

//...................makdir ..............................
// fs.mkdirSync("demo");

//.........add data.............
// fs.writeFileSync('demo/bio.txt','hello this is for crud opertions...');

//........append data........
// fs.appendFileSync('demo/bio.txt','  ........this is append line')

// const bio_data=fs.readFileSync('demo/bio.txt','utf8');
// console.log(bio_data,"bio_data");

//.......rename file..
// fs.renameSync('demo/bio.txt','demo/mybio.txt')



////................you have to delete first file inside th folder..
// fs.unlinkSync('demo/bio.txt');
//....remove folder with folddr name..
// fs.rmdirSync('demo')




//......THIS IS FOR ASYANCRONOUS...
// fs.writeFile('demo/read.txt',"hello demo/read.txt",(e)=>{
//     console.log("this is created")
// })
// fs.appendFile('demo/read.txt'," append data ",(e)=>{
//     console.log("hello append",e);
// })
// fs.readFile('demo/read.txt','utf-8',(e,data)=>{
//     console.log("data",data);
// })
// fs.rename('demo/read.txt','demo/readnew.txt',(err)=>{
//     console.log("hello rename");
// })
// fs.unlink('demo/readnew.txt',(e)=>{
//     console.log("deleted file");
// })
// fs.rmdir("demo")