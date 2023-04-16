
const fs = require ("fs");
const express = require ("express");
const path = require("path")

const dirPath=path.join(__dirname,"timestamps")
console.log("dirpath", dirPath);

const app=express();





app.use(express.static("timestamps"))

app.get("/",(req,res)=>{

    res.send("hey vp ...This is me")
})

app.get("/static",(req,res)=>{

    let time=new Date();

let date=time.toUTCString().slice(0,-4)
console.log(date)

const timestamp = `Last created timestamps :${date}`
    fs.writeFileSync(`${dirPath}/date-time.txt`,timestamp,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created")
            console.log(data)
    
        }
    })

    res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))
})

app.listen(7000,()=>console.log("server started")) 