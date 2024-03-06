const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const jwt=require("json-web-token");

//JWT VERIFICATION

const authenticateJWT=async(req,res,next)=>{

    const token=req.header('authorization');

    if(!token){
        return res.status(401).json({
            msg:"UNAUTHORIZED"
        })
    }

    try{
        const decoded=jwt.verify(token,jwtpass);    
        req.user = {
            decodedusername: decoded.username,
            decodedAccessRights: decoded.access_rights,
        };
        next();
    }
    catch(err){
        res.status(403).json({
            msg:"FORBIDDEN"
        });
    }   
};


// VERIFY LOGEED IN USER  

const verifyUser=async(req,res,next)=>{

    const { decodedUsername, decodedAccessRights } = req.user;

    if(!decodedUsername){
        return res.status(401).json({msg: "Please log in to your account!"});
    }
    
    try{
        const employee=await prisma.employee.findUnique({

            where:{
                username:decodedUsername,
                access_rights:decodedAccessRights
            }
        })

        if(!employee){
            return res.status(401).json({msg: "user does not exist"});
        } 
        else{
            next();
            // return res.status(200).json({
            //     msg:"Successfull"
            // })
        }
    }
    catch(err){
        return res.status(500).json({
            msg:"INTERNAL SERVER ERROR"
        })
    }

}


// VERIFY IF USER IS ADMIN OR NOT

const adminOnly=async (req,res,next)=>{

    try{
        const { decodedUsername, decodedAccessRights } = req.user;

        const employee=await prisma.employee.findUnique({
            where:{
                username:decodedUsername,
                access_rights:decodedAccessRights
            }
        })
        
        if(!employee){
            return res.status(404).json({msg: "user does not exist"});
        }
        if(employee.access_rights!=="admin"){
            return res.status(403).json({
                msg:"Access Forbidden"
            })
        }else{
            next();
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ msg: "INTERNAL SERVER ERROR"});
    }

}

module.exports={
    authenticateJWT,
    verifyUser,
    adminOnly,
    jwt
}