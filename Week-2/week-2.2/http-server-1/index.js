const express = require('express');
const app = express();  
const bodyParser = require('body-parser');
const port = 3000;
 app.get('/',function(req,res){
    res.send('<b>Hello World<b>');
 })

app.use(bodyParser.json());
 app.post('/message',function(req,res){
    // console.log(req.headers["authorization"]);
    console.log(req.query);
    res.send({
        message: 'Hello World',
        sum: 10+20
    });
 })
app.get('/message',function(req,res){

})

 app.listen(port,function(){
    console.log('Server is running at port 3000');
 })