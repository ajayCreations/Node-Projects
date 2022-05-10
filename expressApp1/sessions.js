/*
1. Session 

-->Session handling in webapplication is very important. 
without it you can't track the user activities. 

it's used to track the user activity. 

_to use session you need to install express session. 
_to setup sessions you need to use session module as 
middleware


*/

const express=require('express')
const app=express();
const session=require('express-session')

const PORT = process.env.PORT || 8000;

//useing session module as middleware
app.use(session({
    secret:"Your Secret Key",   // you can store secret key
    resave:true,      // force the session to be saved
    saveUninitialized:true  // force a uninitilized session to be saved. 
}))

//step 2 for session 
app.get("/",(req,res)=>{
    req.session.name="John";

    return res.send("Session Set")
})


//getting session on diff route
app.get("/session",(req,res)=>{
    var name = req.session.name;
    return res.send(name);
})


//to destroye the session
app.get('/destroy',(req,res)=>{
    req.session.destroy(function(error){
        console.log("Session destroy");
    })
})
app.listen(PORT,(req,res)=>{
    console.log(`Started server at http://localhost:8000`);
})

