const argon2=require('argon2');
require('dotenv').config();
const {PrismaClient} =require("@prisma/client");
const { jwt } = require('../Middleware/AuthUser');
const prisma=new PrismaClient();
const jwtpass=process.env.JWTPASS;


const adminLogin = async(req,res)=>{

    try{
        const dusername=req.body.username;
        const dpassword=req.body.password;

        //prisma check
        
        const admin=await prisma.employee.findUnique({
            where:{
                username:dusername,
            }
        })

        if(!admin){
            res.status(404).json({
                msg:"Incorrect Username Or password"
            })
        }

        const verifyPassword=await argon2.verify(admin.password,dpassword);

        if(!verifyPassword){
            res.status(400).json({
                msg:"Incorrect Username Or password"
            })
        }

        const payload={
            username:dusername,
            role:admin.access_rights
        }

        //console.log(payload);
        const token=jwt.sign(payload,process.env.JWTPASS,{ expiresIn: '1h' });
        console.log(token);
        res.status(200).json({
            token,
            msg:"Login Successfull"
        })

    }
    catch(err){
        console.log("Error happened during admin login")
        res.status(500).json({
            msg:"Internal server error"
        })

    }
}

const userlogin=async(req,res)=>{
    try{
       
       const dusername=req.body.username;
       const dpassword=req.body.password;

       const user=await prisma.employee.findUnique({
            where:{
                username:dusername,
            }
        })
        if(user.access_rights!="user")
        {
            res.status(400).json({
                msg:"this page is for employee's only"
            })
        }
        else{
            if(!user){
                res.status(404).json({
                    msg:"Incorrect Username Or password"
                })
            }
    
            const verifyPassword=await argon2.verify(user.password,dpassword);
    
            if(!verifyPassword){
                res.status(400).json({
                    msg:"Incorrect Username Or password"
                })
                return;
            }
            const payload={
                username:dusername,
                role:user.access_rights
            }
            const token=jwt.sign(payload,jwtpass,{ expiresIn: '1h' });
            res.status(200).json({
                token,
                msg:"Login Successfull"
            })
        }
    }
    catch(err){
        console.log("Error happened during user login")
        res.status(500).json({
            msg:"Internal server error"
        })

    }
}

module.exports={
    adminLogin,
    userlogin
}