const argon2=require('argon2');
require('dotenv').config();
const {PrismaClient} =require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate())
const { jwt } = require('../Middleware/AuthUser');
const { changePasswordSchema, changeAdminPasswordSchema } = require('../Middleware/zodAuth');


const adminLogin = async(req,res)=>{

    try{
        const dusername=req.body.username;
        const dpassword=req.body.password;
        console.log(dusername,dpassword)

        //prisma check
        
        const admin=await prisma.employee.findUnique({
            where:{
                username:dusername,
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })

        console.log(admin)

        if(!admin){
            res.status(404).json({
                msg:"Incorrect Username Or password"
            })
            return;
        }

        if(admin.status!="active"){
            res.status(403).json({
                msg:"Your id is Inactive"
            })
            return;
        }

        if(admin.access_rights!="admin"){
            res.status(403).json({
                msg:"Forbidden"
            })
            return;
        }

      

        const verifyPassword=await argon2.verify(admin.password,dpassword);

        if(!verifyPassword){
            res.status(400).json({
                msg:"Incorrect Username Or password"
           })
            return;
        }

        const payload={
            employee_id:admin.employee_id,
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
        console.log("Error happened during admin login",err)
        res.status(500).json({
            msg:"Internal server error"
        })

    }
}

const userlogin=async(req,res)=>{
    try{
       
       const dusername=req.body.username;
       const dpassword=req.body.password;

       console.log(dusername,dpassword);

       const user=await prisma.employee.findUnique({
            where:{
                username:dusername,
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        console.log(user);
        
        if(!user){
            res.status(404).json({
                msg:"Incorrect Username Or password"
            })
            return;
        }

        if(user.status!="active"){
            res.status(403).json({
                msg:"Your id is Inactive"
            })
            return;
        }

        if(user.access_rights!="user")
        {
            res.status(403).json({
                msg:"Forbidden"
            })
            return;
        }

        const verifyPassword=await argon2.verify(user.password,dpassword);

        if(!verifyPassword){
            res.status(400).json({
                msg:"Incorrect Username Or password"
            })
            return;
        }
        const payload={
            employee_id:user.employee_id,
            username:dusername,
            role:user.access_rights
        }
        const token=jwt.sign(payload,process.env.JWTPASS,{ expiresIn: '1h' });
        res.status(200).json({
            token,
            msg:"Login Successfull"
        })
    }
    catch(err){
        console.log("Error happened during user login",err)
        res.status(500).json({
            msg:"Internal server error"
        })

    }
}

const changePassword=async(req,res)=>{

    const changePass=req.body;
    
    if(!changePass){return res.status(400).json({msg:"Bad Request please enter old,new,confirm password"});}

    if(!req.tokenData){return res.status(400).json({msg:"UNAUTHORISED"})}

    const authenticatedChangePass=changePasswordSchema.safeParse(changePass);

    console.log(authenticatedChangePass);

    if(authenticatedChangePass.success){

        if(changePass.newPassword!=changePass.confirmPassword){
            res.status(300).json({
                msg:"New password and Confirm password should be same",
            })
            return;
        }

        const user=await prisma.employee.findUnique({
            where:{
                username:req.tokenData.username,
                employee_id:req.tokenData.employee_id,
            },
            
        })
    
        const verifyPassword=await argon2.verify(user.password,changePass.oldPassword);
    
        if(!verifyPassword){return res.status(300).json({msg:"Incorrect Old Password"})}
        try{
            await prisma.employee.update({
                where:{
                    username:req.tokenData.username,
                    employee_id:req.tokenData.employee_id,
                },
                data:{
                    password:await argon2.hash(changePass.newPassword),
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })

            res.json({msg:"Password updated Successfully"})
        }
        catch(error){
            console.log(error);
            res.status(500).json({msg:"INTERNAL SERVER ERROR"})
        }
    }
    else{
        return res.status(400).json({
            message: "Validation error",
            errors: authenticatedChangePass.error.errors,
        });
    }

}


const adminChangePassword=async(req,res)=>{

    let changePass=req.body;
    if(!changePass){
        res.status(400).json({
            msg:"Bad Request please enter old,new,confirm password"
        })
        return;
    }


    const validationResult=changeAdminPasswordSchema.safeParse(changePass);

    if(validationResult.success){

        changePass=validationResult.data;

        //if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

        if(changePass.newPassword!=changePass.confirmPassword){
            res.status(300).json({
                msg:"New password and Confirm password should be same",
            })
            return;
        }
            
        try{
            const user=await prisma.employee.findUnique({
                where:{
                    username:changePass.username,
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })

            await prisma.employee.update({
                where:{
                    username:user.username,
                    employee_id:user.employee_id,
                },
                data:{
                    password:await argon2.hash(changePass.newPassword),
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })

            res.json({
                msg:"Password updated Successfully",
            })
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                msg:"INTERNAL SERVER ERROR",
            })
        }
        
    }
    else{
        return res.status(400).json({
            message: "Validation error",
            errors: authenticatedChangePass.error.errors,
        })
    }
}

module.exports={
    adminLogin,
    userlogin,
    changePassword,
    adminChangePassword
}