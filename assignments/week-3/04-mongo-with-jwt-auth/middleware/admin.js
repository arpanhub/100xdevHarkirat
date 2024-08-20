// Middleware for handling auth
const jwt  = require('jsonwebtoken');
const {JWT_SECRET_KEY} = require('../index');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const JWT_TOKEN = req.headers.authroization;
    const TOKEN_OBJECT = JWT_TOKEN.split(' ')[1];
    try{
        const decoded_token = jwt.verify(TOKEN_OBJECT,JWT_SECRET_KEY);
        if(decoded_token.username){
            next();
        }else{
            res.status(500).json({
                msg:"use not authenticated"
            })
        }
    }catch(e){
        res.json({
            msg:"Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;