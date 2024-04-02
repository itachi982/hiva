// Import necessary modules
const cloudinary = require('cloudinary').v2;
const multer = require("multer");
const fs = require('fs');
require('dotenv').config();
const { PrismaClient } = require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate');
const prisma = new PrismaClient().$extends(withAccelerate());

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, // Corrected environment variable
    api_key: process.env.API_KEY,       // Corrected environment variable
    api_secret: process.env.API_SECRET  // Corrected environment variable
});

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public"); // Adjusted destination path
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix);
    }
});

// Multer uploader middleware
const uploader = multer({ storage });

// Function to upload image to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return { msg: "No path found" };
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "image"
        });
        console.log("File is uploaded to Cloudinary", response.secure_url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.error("Error uploading to Cloudinary:", error);
        return { msg: "Temporary file was removed" };
    }
};

// Endpoint handler for uploading
async function upload(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const response = await uploadOnCloudinary(req.file.path);

        const updatedPic = await prisma.employee.update({
            where: {
                employee_id: req.params.employeeid
            },
            data: {
                url: response.secure_url
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        });

        if (!updatedPic) {
            return res.json({ msg: "Something went wrong" });
        }

        fs.unlinkSync(req.file.path);

        res.status(200).json({ message: "File uploaded successfully", link: response.secure_url });
    } catch (error) {
        console.error("Upload failed:", error);
        fs.unlinkSync(req.file.path);
        res.status(500).json({ error: "Upload failed" });
    }
}

// Endpoint handler for retrieving URL
async function url(req, res) {
    const username = req.query.username;

    if (!username) {
        return res.status(400).json({ msg: "Username missing" });
    }

    try {
        const durl = await prisma.employee.findFirst({
            where: { username: username },
            select: { url: true },
            cacheStrategy: { swr: 60, ttl: 60 }
        });

        if (!durl) {
            return res.status(400).json({ msg: "Profile pic not uploaded" });
        }

        return res.json(durl);
    } catch (error) {
        console.error("Internal server error:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

// Export the modules
module.exports = { upload, uploadOnCloudinary, uploader, url };
