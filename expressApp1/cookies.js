/*

cookies : are most imp. 

it's small data that sits on client side and 
sent to the client along with server req. 

_various functionality. 

1. for mainting sessions
2. adding user specific features in web application 



*/

const express=require('express')
const app=express()
const cookies=require('cookie-parser');
  

const PORT= process.env.PORT || 8000;

//using cookies as middleware

//step 2.
app.use(cookies());
let users={
    name:"jogn",
    Age:28
}
// to work with cookies you need to install cookie parser 

app.get("/",(req,res)=>{
    res.send("cookie tutorial");
})


//step 3. 
app.get('/setuser',(req,res)=>{
    res.cookie("userData",users) // userData is the name of cookie

                                 // users data will be stored in userData Variable as cookies           

    res.send("User data Added to cookies");
})


//step 4. getting cookie data on diff. route
app.get('/getuser',(req,res)=>{
    res.send(req.cookies);
})


//destroying the cookie
app.get('/logout',(req,res)=>{
    res.clearCookie('userData');
    res.send("user logout successfuly")
})

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost${PORT}`);
})