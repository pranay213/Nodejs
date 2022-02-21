const express=require('express')
const app=express();
const port=4000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('This is from home page');
})
app.post('/hello',(req,res)=>
{
    res.send('This is post data');
})
app.post('/uname',(req,res)=>
{
    console.log(req.body.username)
    res.status(200).send({"usr":req.body.username});

})
app.listen(port,(req,res)=>
{
    console.log('port number running on '+port)
})
