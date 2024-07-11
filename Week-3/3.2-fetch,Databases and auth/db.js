// Code Snippet for fetching data from database
//-------------------fetching data from database----------------

/* const mongoose = require("mongoose");
// const { string } = require("zod");
mongoose.connect("mongodb://localhost:27017/test")
const express = require("express");
const app = express();
app.use(express.json());


const User =mongoose.model('Users',{name:String,email:String,password:String});

app.post("/signup",
   async  function(req,res){
        const name = req.body.name;
        const mail = req.body.mail;
        const password = req.body.password;

        const existingUser = await User.findOne({email:mail});
        if(existingUser){
            return res.status(403).json({
                msg:"sorry we already have a user with this email id"
            });
        }
        const user = new User(
            {
                name:name,
                email:mail,
                password:password
            }
        );
        await user.save();
        res.json({
            msg:"user created successfully"
        })
    
    }
)
app.listen(2000,function(){
    console.log("server is running on port 2000");
})

/* const user = new User(
    {
        name:"arpan gupta",
        email:"123@gmail.com",
        password:"123"
    }
); */
//------------------------------------------------------------------------------


//code to use 