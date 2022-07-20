const EventsEmiter = require("events")
const events = new EventsEmiter();

events.on("sayHi",(sc,data)=>{
    console.log("say hi....1",sc,data);
})
events.on("sayHi",(sc,data)=>{
    console.log("say hi....1",sc,data);
})



events.emit("sayHi",200,"ok")
// events.emit("sayHi",50,"ok")