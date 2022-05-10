/*
working on routing 

*/


const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({extended:false}))

const route=require('./router');

const port = 8000;
 
app.use('/api',route);


//home route
app.get('/',(req,res)=>{
    res.end("Routing App");
})



app.listen(port,()=>{
    console.log(`Server is started at http://localhost:8000`);
})