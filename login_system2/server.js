/*You need to inform the surver to use static assets

//now making the login functionality. 

what is body parser{
    it is responsible for passing the 
    incoming request  bodies in the middleware before you use it.

}

--if you don't want to use bodyparser that's ok so you can use simple middleware
to serialize the data 
--


1. add body parser
2. require session module   
3. Make session key secret using uuid module.
4. Now create route for taking user input
5. Use sepration of concern for better management. 
6. After creating route variable 

..7. Creating Logout
9. Simple create a logout route with session destroyed functionality
10. Creating a seperate templet for invalid credentials


*/

const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const session =require('express-session')
const {v4:uuidv4}=require('uuid');

//seperation of concern
const router= require('./router')

const app=express()

const PORT=process.env.PORT || 8000;

app.use(bodyparser.json())
//for data serialization you can use middleware of bodyparser or express. 
// express data serialization middleware -> app.use(express.urlencoded({extended:true}))

app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))


//use hash value for making session secrets (so use uuid module)
app.use(session({
    secret:uuidv4(), //it'll make session completely seperate and unique. 
    resave:false,
    saveUninitialized:true
}))


//using form route
app.use('/route',router); 

// home route  

app.get('/',(req,res)=>{
    res.render('base',{title:'Login System',})
})
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:8000`);
})
