const multer= require ("multer");



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


module.exports=uploader;
