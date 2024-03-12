
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.Cloudinary_cloud_name,
  api_key: process.env.Cloudinary_api_key,
  api_secret: process.env.Cloudinary_api_secret
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
            console.log("file is upladed in cloudinary",
            response.url);
            return response;
    }
    catch(error){
        fs.unlinkSync(localfilepath)// removes the localy save temp file as the upload ops got failed
        return resizeBy.json({
            msg: " temporary file was removed"
        });
    }
}

async function upload (req, res) {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload file to Cloudinary
        const response = await uploadOnCloudinary(req.file.path);

        // Remove the temporary file
        fs.unlinkSync(req.file.path);

        // Send response back to client
        res.status(200).json({ message: "File uploaded successfully", cloudinaryResponse: response });
    } catch (error) {
        console.error("Upload failed:", error);
        res.status(500).json({ error: "Upload failed" });
    }
}
module.exports={
    upload,
    uploadOnCloudinary
};


