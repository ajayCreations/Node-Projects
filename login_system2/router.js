
var express=require('express')
var router=express.Router();


const credential={
    email:'admin@gmail.com',
    password:'admin123'
}

// first rout for login user

router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password ==  credential.password ){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')

    }else{
        res.redirect('/route/invalid')

    }
})

// route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){ 
        res.render('dashboard',{user:req.session.user}) //doubt
    }
    else{
        res.send("Unauthorize User")
    }
})


//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        console.log(err,'while destroying sessions');
        res.send(`Error occured : ${err}`)
    })
    // res.redirect('/');
    res.render('base',{title:'Express',logout:"Logout Successfully"})
})

router.get('/invalid',(req,res)=>{
    res.render('invalid')
})

module.exports = router;