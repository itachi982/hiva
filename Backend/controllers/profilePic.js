
const cloudinary =require('cloudinary').v2;
const multer= require ("multer");
const fs =require('fs');
require('dotenv').config();
const {PrismaClient} =require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate())

cloudinary.config({ 
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const uploadOnCloudinary= async (localfilepath)=>{
    try{
        if(!localfilepath) {
        return {msg: " no path found"};
        }
        const response=await cloudinary.uploader.upload(localfilepath,{
            localfilepath,
            resource_type: "image"

        });

        console.log("file is uploded in cloudinary",response.secure_url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localfilepath)// removes the localy save temp file as the upload ops got failed
        return res.json({
            msg: "temporary file was removed"
        });
    }
}

async function upload (req, res) {
    try {

        const emp_id=req.params.employeeid;
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload file to Cloudinary
        const response = await uploadOnCloudinary(req.file.path);

        //save url to db

        const updatedpic=await prisma.employee.update({
            where:{
                employee_id:emp_id
            },
            data:{
                url:response.secure_url
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })

        if(!updatedpic){
            return res.json({msg:"Something went wrong"})
        }
        // Remove the temporary file
        fs.unlinkSync(req.file.path);

        // Send response back to client
        res.status(200).json({ message: "File uploaded successfully",link:response.secure_url });
    } catch (error) {
        console.error("Upload failed:", error);
        fs.unlinkSync(req.file.path);
        res.status(500).json({ error: "Upload failed" });
    }
}

const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../Backend/public")
    },
    filename: function (req,file,cb){
        const uniqueSuffix=Date.now();
        cb(null,file.originalname+'-'+uniqueSuffix)
    }
})

const uploader=multer({storage})


async function url(req,res){

    const username=req.query.username;
    console.log("hello")
    
    //if(!req.tokenData){return res.status(300).json({msg:"UNAUTHORISED"});}

    if(!username){return res.status(300).json({msg:"Username Missing"});}
    

   try {
    const durl=await prisma.employee.findFirst({
        where:{
            username:username
        },
        select:{
            url:true
        },
        cacheStrategy: { swr: 60, ttl: 60 }
    })
    console.log(durl)
    if(!durl){return res.status(400).json({msg:"Profile pic not uploaded"})}
    return res.json({durl})
   } catch (error) {
        return res.status(500).json({msg:"INTENAL SERVER ERROR"})
   }

}

module.exports={
    upload,
    uploadOnCloudinary,
    uploader,
    url
};


