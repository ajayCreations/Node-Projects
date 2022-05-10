//Practice with morgan 

const morgan = require('morgan');
const express = require('express');
const app = express();


app.use(morgan('combined'));
console.log(morgan('combined'))

app.get('/',(req,res)=>{
 res.send(`Welcome to morgan practice, ${morgan("combined")}`)

}).listen(process.env.PORT || 8000,()=>{
    console.log(`server is started at : http://localhost:8000`);
})