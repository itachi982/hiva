const argon2=require('argon2');
require('dotenv').config();
const {PrismaClient} =require("@prisma/client");
const { jwt } = require('../Middleware/AuthUser');
const { changePasswordSchema, changeAdminPasswordSchema } = require('../Middleware/zodAuth');
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
            return;
        }

        if(admin.status!="Active"){
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

       console.log(dusername,dpassword);

       const user=await prisma.employee.findUnique({
            where:{
                username:dusername,
            }
        })
        console.log(user);
        
        if(!user){
            res.status(404).json({
                msg:"Incorrect Username Or password"
            })
            return;
        }

        if(user.status!="Active"){
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
        const token=jwt.sign(payload,jwtpass,{ expiresIn: '1h' });
        res.status(200).json({
            token,
            msg:"Login Successfull"
        })
    }
    catch(err){
        console.log("Error happened during user login")
        res.status(500).json({
            msg:"Internal server error"
        })

    }
}

const changePassword=async(req,res)=>{

    const changePass=req.body;
    const token=req.header('authorization');
    

    if(!changePass){
        res.status(400).json({
            msg:"Bad Request please enter old,new,confirm password"
        })
        return;
    }

    if(!token){
        res.status(400).json({
            msg:"Missing Token"
        })
        return;
    }

    const authenticatedChangePass=changePasswordSchema.safeParse(changePass);

    console.log(authenticatedChangePass);


    if(authenticatedChangePass.success){

        if(changePass.newPassword!=changePass.confirmPassword){
            res.status(300).json({
                msg:"New password and Confirm password should be same",
            })
            return;
        }
    
        const decoded=jwt.verify(token,process.env.JWTPASS);
            
        const user=await prisma.employee.findUnique({
            where:{
                username:decoded.username,
                employee_id:decoded.employee_id,
            }
        })
    
        const verifyPassword=await argon2.verify(user.password,changePass.oldPassword);
    
        if(!verifyPassword){
            res.status(300).json({
                msg:"Incorrect Old Password"
            })
            return;
        }
    
        try{
            await prisma.employee.update({
                where:{
                    username:decoded.username,
                    employee_id:decoded.employee_id,
                },
                data:{
                    password:await argon2.hash(changePass.newPassword),
                }
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
        });
    }

}


const adminChangePassword=async(req,res)=>{

    const changePass=req.body;
    const token=req.header('authorization');
    let tokendata;

    if(!changePass){
        res.status(400).json({
            msg:"Bad Request please enter old,new,confirm password"
        })
        return;
    }

    const authenticatedChangePass=changeAdminPasswordSchema.safeParse(changePass);

    if(authenticatedChangePass.success){

        if(changePass.newPassword!=changePass.confirmPassword){
            res.status(300).json({
                msg:"New password and Confirm password should be same",
            })
            
            return;
        }
    
        const decoded=jwt.verify(token,process.env.JWTPASS);
            
        const user=await prisma.employee.findUnique({
            where:{
                username:decoded.username,
                employee_id:decoded.employee_id,
            }
        })
        console.log(decoded);
        if(decoded.role!="admin"){
            res.status(403).json({
                msg:"UNAUTHORISED"
            })
            return;
        }
        
        try{
            await prisma.employee.update({
                where:{
                    username:decoded.username,
                    employee_id:decoded.employee_id,
                },
                data:{
                    password:await argon2.hash(changePass.newPassword),
                }
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