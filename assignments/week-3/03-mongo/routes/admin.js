const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');   

// Admin Routes
router.post('/signup',async (req, res) => {
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const course_object =  await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"Course added succedfully",
        course_object: course_object._id
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    
    const list_of_courses = await Course.find({}).exec();
    if(list_of_courses.length === 0){
        res.json({message:"add courses please"});
    }else{
        res.json({list_of_courses});
    }


});

module.exports = router;
// {
//     {
//         "list_of_courses": [
//             {
//                 "_id": "66abca1e7144da02c831774a",
//                 "title": "harkirat-web3",
//                 "description": "web3 + cohort 2",
//                 "imageLink": "https//vjaoniebvirubo",
//                 "price": 5000,
//                 "__v": 0
//             }
//         ]
//     }
// }