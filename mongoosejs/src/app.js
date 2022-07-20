const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ttchanell",{
    // useNewUrlParser:true,
    // useUnitiedTopology:true
    useUnifiedTopology: true,
    useNewUrlParser: true,
  
})
.then(()=>console.log("connection succesfully"))
.catch((err)=>console.log("e",err));


const PlaylistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const playlist = new mongoose.model("Playlist",PlaylistSchema) 
const ceatedocumnet  = async ()=>{
    try{
        const reactPlaylist = new playlist({
            name:"REACT JS",
            ctype:"FRONT END",
            videos:80,
            author:"THAPA THECHNICAL",
            active:true,
           
        })
        const nodePlaylist = new playlist({
            name:"NODE JS",
            ctype:"BACK END",
            videos:40,
            author:"THAPA THECHNICAL",
            active:true,
           
        })
        const expreesPlaylist = new playlist({
            name:"EXPREES",
            ctype:"BACK END",
            videos:500,
            author:"THAPA THECHNICAL",
            active:true,
           
        })
        const result = await playlist.insertMany([reactPlaylist,nodePlaylist,expreesPlaylist])
        console.log(result);
    }catch(error){
        console.log("error",error);
    }
}
// ceatedocumnet()

// const reactPlaylist = new playlist({
//     name:"REACT JS",
//     ctype:"FRONT END",s
//     videos:80,
//     author:"THAPA THECHNICAL",
//     active:true,cls
   
// })
//  reactPlaylist.save()

const getDocumnet = async()=>{
    // const result = await playlist.find({ctype:{$nin:["BACK END","FRONT END"]}})
    const result = await playlist.find({$or : [{ctype:"BACK END"},{ctype:"FRONT END"}]})
    .select({name:1})
    // .limit(3)
    .countDocuments();
    console.log("result of if else",result);
}
getDocumnet()

//Alt+
// 26 → →
// 3 → ♥
// 0164 → ¤
// 242 → ≥
// 243 → ≤
// 0178 → ²
// 0179 → ³
// 225 → ß
// 224 → α
// 0169 → ©
// 0174 → ®
// 7  → •
// 35 → #
// 24 → ↑
// 25 → ↓


