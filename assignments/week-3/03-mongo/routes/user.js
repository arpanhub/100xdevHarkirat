const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    const flag = await User.findOne({username})
    if(!flag){
        User.create({
            username:username,
            password:password
        })
        .then(function(){
            res.json({msg:"user created succesfully"});
        })
    }else{
        res.json({msg:"user already exist with this username"})
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const purchased_Courses = await Course.find({}).exec();
    res.json({
        List_Courses:purchased_Courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseID = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username : username
    },{
        "$push":{
            purchasedCourses:courseID
        }
    })
    res.json({
        msg:"purchased succesfully"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({username})
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses
    })
});

module.exports = router