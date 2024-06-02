const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.setHeader("content-type","text/html");
    res.send("<h3>Hello Express</>");
})

app.listen(7000,()=>{
    console.log("server is running on port 7000");
})