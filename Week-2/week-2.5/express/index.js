/* const express = require('express');

const app = express();

function sum(n){
    return n*(n+1)/2;
}   
app.get("/",function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi you answer is :"+ ans);
    // console.log("Request received");
});


app.get("/hello",function(req,res){
    res.send("Hello");
    // console.log("Request received");
});
app.listen(3000); */

//-----------------------------------------------


// small task project to get better undertstandig of express get,post,put,delete methods

const express = require('express');
const app = express();
app.use(express.json());
const users = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];
app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealtykidneys = 0;
    for(let i = 0;i < numberofkidneys;i++){
        if(johnkidneys[i].healthy){
            numberofhealtykidneys++;
        }
    }
    numberofUnhealtykidneys = numberofkidneys - numberofhealtykidneys;
    res.status(200).json({
        numberofkidneys,
        numberofhealtykidneys,
        numberofUnhealtykidneys
    });
});

app.get("/hello",function(req,res){
    res.send("hello")
});


app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    console.log(users[0].kidneys.length);
    res.json({
        message: "kidney added"
    })
})

app.put("/",function(req,res){
    for(let i  = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = "true";
    }
    res.json({})
})

function isthereAnyUnhealthyKidney(){
    for(let i = 0;i < users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
          return  true;
        }
    }
    return false;
}
app.delete("/",function(req,res){
    const newArray = [];
    if(isthereAnyUnhealthyKidney())
    {
        for(let i = 0;i< users[0].kidneys.length;i++){
            if(!users[0].kidneys[i].healthy){
                users[0].kidneys = newArray;
            }
        }
        res.json({
            message:"kidney removed successfully"
        })
    }
    else
    {
        res.status(411).json({
            message:"NO bad kidneys left no delete request can be made"
        })
    }
    })
    
app.listen(3000,function(){
    console.log(`Server is running at http://localhost:3000/`);
});