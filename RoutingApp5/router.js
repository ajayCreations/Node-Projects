const express=require('express');
const route=express.Router();

let accounts = require('./databse');

//get request

route.get('/accounts',(req,res)=>{
    res.json({userData : accounts})
}) 

//post request for adding data

route.post('/accounts',(req,res)=>{
    const incomingAccount = req.body;
    accounts.push(incomingAccount);
    res.json(accounts);
})


//gettting id -2 data
route.get('/accounts/:id',(req,res)=>{
    const accountid=Number(req.params.id)
    const getAccount=accounts.find((account)=>account.id === accountid)

        if(getAccount){
            res.json({userData:[getAccount]})
        }else{
            res.status(500).send('Account not found');// chinning method means calling two methods at same time by using single object.
        }
});

//working with put and delete 

// update value Put http method

route.put('/accounts/:id',(req,res)=>{
    const accountid=Number(req.params.id);
    const body=req.body;

    const account= accounts.find((account)=>account.id === accountid);
    const index=accounts.indexOf(account);

    if(!account){
        res.status(500).send('Account Not Found')
    }else{
        const updateAccount = {...account, ...body};
        // console.log({...account,...body});
        account[index]=updateAccount;
        res.send(updateAccount);


    }
})

//working with put and delete http methods


// delete the data from the database

// delete http request

route.delete('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const newAccounts= accounts.filter((account)=>
        account.id != accountid
    )

    if(!newAccounts){
        res.status(500).send("Account Not Found");
    }else{
        accounts=newAccounts;
        res.send(accounts);
    }
})


module.exports = route;