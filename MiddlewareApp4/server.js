/*

MiddleWare needs to finish responding to the request. 


serving satic files--
1.  First check file exists or not, if not then continue
to the next middlestack

2. Don't send hardcorded file as it not good practice. 

3. if file is not exists so use 404 middleware handler. 
_>its shows the next listening is last functions in app. 

4. Order of middleware is very important



*/

const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8000;





app.use(function(req,res,next){
    console.log("Requested:"+new Date());
    // res.sendFile('./static/cool.txt') wrong way
     next();
})

app.use(function(req,res,next){
var filepath = path.join(__dirname,"static",req.url);
fs.stat(filepath,function(err,fileInfo){
    if(err){
        next();
        return;
    }
    if(fileInfo.isFile()){ 
        res.sendFile(filepath)
    }else{
        next();
     }
})
})


//404 middleware handler 

app.use(function(req,res){
    res.status(404); 
    res.send("File Not Found!")
})



app.listen(PORT,()=>{
    console.log(`Server is started http://localhost:${PORT}`);

})

