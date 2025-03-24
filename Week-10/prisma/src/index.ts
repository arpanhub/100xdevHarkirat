import { PrismaClient } from "@prisma/client";
import { log } from "console";
const prisma  = new PrismaClient();

async function insertINTO(username: string,firstName:string,lastName:string,password:string){
    const res = await prisma.user.create({
        data:{
            email:username,
            firstName:firstName,
            lastName:lastName,
            password:password,
        },
        select:{
            id:true,
            firstName:true
        }
    })
    log(res);
}
// insertINTO("arpangupta@gmail.com","arpan","gupta",'12345');
interface Update{
    newEmail:string,
    password:string
}
async function Update(username:string,{
    newEmail,
    password
}:Update){
    const res = await prisma.user.update({
        where:{
            email:username
        },
        data:{
            email:newEmail,
            password:password
        }
    })
    log(res);
}

// Update("harkirat@gmail.com",{
//     newEmail:"arpu@gmail.com",
//     password:"54321"
// }); 
async function getuser(username:string){
    try{
        const res = await prisma.user.findUnique({
        where:{
            email:username
        }   
    })
    log(res);
    }catch(error){
        log(console.error());
    }finally{
        log("done")
    }
}
getuser("arapangupta@gmail.com");