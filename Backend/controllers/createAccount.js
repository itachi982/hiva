const {PrismaClient} =require("@prisma/client");
const { createAdminSchema } = require("../Middleware/zodAuth");
const { error } = require("console");
const prisma =new PrismaClient();
require('dotenv').config();


    const adminCreate= async(req,res)=>
    {
    const admindetails=req.body;
    const validationResult=createAdminSchema.safeParse(admindetails);
    const validatedadmindetails=validationResult.data;
    

    
    if(validationResult.success)
    {        
            try{
            await prisma.employee.create({
                data:{
                employee_id:validatedadmindetails.employee_id,
                employee_name:validatedadmindetails.employee_name,
                username:validatedadmindetails.username,
                password:validatedadmindetails.password,
                gender:validatedadmindetails.gender,
                job_title:validatedadmindetails.job_title,
                access_rights:"admin",
                PAN:validatedadmindetails.PAN,

                    }
                });
        res.json({
            msg: "admin created",
        })
    }
    catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({ msg: "Internal server error" })
        }
    
    }
    else {
        // If validation fails, send validation errors as response
        res.json({ msg: "validation failed" });
    }
    }

module.exports = adminCreate;




