const express = require("express");
const app = express()
require("dotenv").config();
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is runing")
})

app.get("/",(req,res)=>{
    res.status(200).json({msg:"successfull"})
})