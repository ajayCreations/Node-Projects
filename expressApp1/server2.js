/*
Advanced topics of express

1. Session 

-->Session handling in webapplication is very important. 
without it you can't track the user activities. 

it's used to track the user activity. 



2. Cookies 
3. Core Middleware
4. Core Routing
5. Build own APIs
6. Core Views
7. Database Integration



*/

//creating simple form 

const express=require('express');
const path=require('path');
const app=express();

const PORT = process.env.PORT||8000;

app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))

//serializing form data by middleware. 

app.use(express.urlencoded({
    extended:true
}))


// before getting the data from the form we need to serialize the data using middlware. 
// Serialization is the process of converting a data object—a combination 
// of code and data represented within a region of data storage—into a series 
// of bytes that saves the state of the object in an easily transmittable form

app.post('/form_submit',(req,res)=>{
    const username= req.body.username
    const email= req.body.email
    res.end(`Your username is submitted ${username} and emai also ${email}`)
})


app.get('/',(req,res)=>{
    res.render('index2',{title:"Form Handling"})
}).listen(PORT,()=>{
    console.log(`Server is started on : http://localhost:${PORT}`);
})
 

//for getting the data through post method
