const express = require("express");
const app = express()

app.listen(3000,()=>{
    console.log("server is runing")
})

app.get("/",(req,res)=>{
    res.status(200).json({msg:"successfull"})
})