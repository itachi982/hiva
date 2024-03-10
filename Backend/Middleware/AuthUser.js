const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const jwt=require("jsonwebtoken");
require('dotenv').config();

//JWT VERIFICATION

const jwtverify=async(req,res,next)=>{

    const token=req.header('Authorization');
    //console.log(token)
    
    let decoded="";
    try {
        if(!token){return res.status(400).json({msg:"Token Missing"});}
        decoded=jwt.verify(token,process.env.JWTPASS);
        console.log(decoded);
        if(!decoded){return res.status(400).json({msg:"Invalid Token"})}
    } catch (error) {
        //console.log(error);
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ msg: "Unauthorized: Invalid Token" });
        } else if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ msg: "Unauthorized: Token Expired" });
        } else {
            return res.status(500).json({ msg: "Internal Server Error" });
        }
    }
    req.tokenData=decoded;
    next();

    //console.log(req.tokenData);

}

module.exports={jwtverify,jwt}