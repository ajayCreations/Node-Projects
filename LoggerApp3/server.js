const express=require("express");
const morgan = require("morgan");
const {v4:uuidv4} = require("uuid");
const fs =  require('fs');
const path = require('path');

const app=express();
const port=process.env.PORT||8000;
 


// create morgan token
morgan.token('id',function getId(req){
    return req.id;
})       

app.use(assignid);

//will apeend all log info inside file
let accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})

//diff tokes of morgan
app.use(morgan(':id :method :status :url "HTTP/:http-version"'));


//this options append all info in file. 
app.use(morgan(':id :method :status :url "HTTP/:http-version"',{stream:accessLogStream}));

//creation of unique id.


app.get('/',(req,res)=>{
    res.end("Morgan Logger App")
})



function assignid(req,res,next) {
    req.id=uuidv4();
    next();
    
}



app.listen(port,()=>{
    console.log(`Server is started at http://localhost:8000`);
})