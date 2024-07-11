const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailschema = zod.string().email();
const passwordschema = zod.string().min(5);



function signJwt(username, password) {
    
    const emailresponse = emailschema.safeParse(username);
    const passresponse = passwordschema.safeParse(password);
    if(emailresponse.success && passresponse.success){
        const signature = jwt.sign({username},jwtPassword);
        return signature;
    }else{
        return null;
    }

}
function verifyjwt(token){
   try{
    const response = jwt.verify(token,jwtPassword);
    return response;
    }catch(e){
        return "not verified";
    }
}

function decodeJwt(token){
   
    const decode = jwt.decode(token);
    if(decode){
        console.log(decode);
        return decode;
    }else{
        return false;
    
    }

}

const token = signJwt("arpan@gmail.com","123456");
const response = verifyjwt(token);
console.log("this is your details:"+response);
console.log("your token:"+token);
console.log("can be decoded: "+ decodeJwt(token));