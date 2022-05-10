// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('Hellow There')
// }).listen(3000,()=>
// console.log('Server is running at 3000'))

//Sometimes you want a server to dynamic generate html
// files. 
/*
Some templet engines for creating dynamic html pages
1. Ejs (Embeded javascript)
2. handlebars
3. pug 

you can use some js functions in templet engines.  
the templet engine repalce the variable in the 
templet file with actual values and transform the templet 
into html file and send to the client. 






*/

//simple example to create a view

const express= require("express");
const app=express();

const PORT=8000;

//infrom the express app from where it gets templet file. 

    // 1 templet engine  name 
app.set('view engine','pug')


// 2 to set the direectory. 
// app.set('views','/your name')

// 3 creating a route to render this page

// app.get('/',function (req,res){
//     //render (a method to render templets)
//     res.render("index3",{title:"pug is awesome",h1:"Learn Node brother",p:"Node is awesome"})
// }).listen(PORT,()=>{console.log('server is running')})

app.get('/',(req,res)=>{
    res.render('test')
}).listen(8000,()=>{console.log("Server is started on port 8000")})
