const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const jwt=require("jsonwebtoken");
require('dotenv').config();

//JWT VERIFICATION

const jwtverify=async(req,res,next)=>{

    const token=req.header('Authorization');
    console.log(token)
    

    if(!token){return res.status(400).json({msg:"Token Missing"});}

    const decoded=jwt.verify(token,process.env.JWTPASS);
    console.log(decoded);
    
    if(!decoded){return res.status(400).json({msg:"Invalid Token"})}

    req.tokenData=decoded;
    next();

    //console.log(req.tokenData);

}

module.exports={jwtverify,jwt}