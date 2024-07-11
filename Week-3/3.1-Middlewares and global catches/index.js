//using headers and query parameter

/* const express = require("express");
const app = express();
app.get('/health-checkup',function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "arpan" && password != "pass"){
        res.status(403).json({
            "message":"wrong input password"});
            return;
    }

    if(kidneyID != 1 && kidneyID != 2){
        res.status(400).json({"message":"no kidney"});
        return;
    }
    res.json({"msg":"your kidney is fine"})
});
app.listen(2000); */

//------------------------------------------------------------------------------

// using creating middlewares

/* 
const express = require("express");
const app = express();

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "arpan" && password != "pass"){
        res.status(403).json({
            "message":"wrong input password"});
            }else{
                next();
        }
        }
        
        function kidneyMiddleware(req,res,next){
            const kidneyID = req.query.kidneyID; 
            if(kidneyID != 1 && kidneyID != 2){
                res.status(400).json({"message":"no kidney"});
                }else{
                    next();
            }
            }
            
            app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
                res.json({"msg":"your kidney is fine"})
                });
                
                const port = 2000;
                app.listen(port,function(){
                    console.log(`server is running on port ${port}`);
                    }); */
                    
//------------------------------------------------------------------------------

// INPUT VALIDATION- will catch error using global catch
// in this app is using the json data so its reading the data
// but what it user send the scrapy input that is not in express.json
//it gives an error so we need to catch that error using global catch 


/* const express = require("express");
const app = express();
app.use(express.json());

app.post("/health-checkup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(username != "arpan" || password != "pass"){
        res.status(403).json({
            "message":"wrong input password"});
            return;
    }

    res.json({"msg":"your kidney is fine"})
});

app.use(function(err,req,res,next){
    res.status(500).json({"message":"something went wrong"})
})


app.listen(2000,function(){
    console.log("server is running on port 2000");
}) */

//------------------------------------------------------------------------------



// using ZOD input VALIDATION
// more cleaner way to do instead using multiple if else check passes in the 
// code
/* 
const express = require("express");
const zod = require("zod");
const app = express();

const scehema = zod.array(zod.number());
app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const response = scehema.safeParse(kidneys);
    res.json(response);
});

app.use(function(err,req,res,next){
    res.status(500).json({"message":"something went wrong"})
})

app.listen(2000,function(){
    console.log("server is running on port 2000");
}) */


    
//------------------------------------------------------------------------------
// Email password validation using zod

const express = require("express");
const zod = require("zod");


function validator(obj){
    const scehema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8).max(10)
    })
    const response = scehema.safeParse(obj);
    console.log(response);
}
validator({
    email: "arpan@gmail.com",
    password:"12345678"
})