const express=require('express');
const multer= require ("multer");
const {uploadOnCloudinary} =require ('./backedn/public');


const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./Backend/public")
    },
    filename: function (req,file,cb){
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.filename+'-'+uniqueSuffix)
    }
})
const uploadstorage=multer({
    storage
})

module.exports=uploadstorage;
