const express=require('express');
const req = require('express/lib/request');
const app=express();
const port=require('./helper').port;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('This is from home page');
})
app.post('/hello',(req,res)=>
{
    res.send('This is post data');
})
app.post('/uname',(req,res,next)=>
{req.body.username+="This is middle ware method"
    next();
},function(req,res,next)
{
    req.body.username+="This is new thing";
    next();
} ,(req,res)=>
{
    console.log(req.body.username)
    res.status(200).send({"usr":req.body.username});

})
app.listen(port,(req,res)=>
{
    console.log('port number running on '+port)
})
