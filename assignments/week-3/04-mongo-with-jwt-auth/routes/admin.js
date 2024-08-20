const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SCERET_KEY} = require('../index')

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        "msg:" : "Admin created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username});
    if(user){
        const jwt_token = jwt.sign({
            username
        },JWT_SCERET_KEY)
        res.json({
            jwt_token
        })
    }else{
        res.json({
            msg:"Incorrect usernmae or password"
        })
    }


});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});


module.exports = router;