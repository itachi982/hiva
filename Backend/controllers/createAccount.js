
const {PrismaClient} =require("@prisma/client");
const { createUserSchema,createAdminSchema } = require("../Middleware/zodAuth");
const prisma =new PrismaClient();
require('dotenv').config();
const argon2 = require("argon2");

const userCreate = async (req, res) => {
    const userDetails = req.body;
    console.log(userDetails);

    if (!userDetails) {
        res.status(400).json({
            msg: "Bad Request: Please provide PAN, employee_name, username, password, gender, job_title",
        });
        return;
    }

    const validationResult= createUserSchema.safeParse(userDetails);
    //console.log(validationResult.error.errors);
    

    if (validationResult.success) {
        const validatedUserDetails = validationResult.data;

        if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

        try {
            await prisma.employee.create({
                data: {
                    employee_id:validatedUserDetails.employee_id,
                    PAN: validatedUserDetails.PAN,
                    employee_name: validatedUserDetails.employee_name,
                    username: validatedUserDetails.username,
                    password: await argon2.hash(validatedUserDetails.password),
                    gender: validatedUserDetails.gender,
                    job_title: validatedUserDetails.job_title,
                    access_rights:"user",
                    status:"active"
                }
            });

            res.json({
                msg: "Employee Created Successfully",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                msg: "Internal Server Error",
            });
        }
    }
    else{
        return res.status(400).json({
            message: "Validation error",
            errors: validationResult.error.errors,
        });
    }
};

const adminCreate = async (req, res) => {
    const adminDetails = req.body;
   

    if (!adminDetails) {
        res.status(400).json({
            msg: "Bad Request: Please provide PAN, employee_name, username, password, gender, job_title",
        });
        return;
    }

    
    const validationResult= createAdminSchema.safeParse(adminDetails);
    //console.log(validationResult.error.errors);
    console.log(validationResult)
    
    
    if (validationResult.success) {
        const validatedUserDetails = validationResult.data;
        
        try {
            const userExist=await prisma.employee.findUnique({
                where:{
                    employee_id:validatedUserDetails.employee_id,
                    username:validatedUserDetails.username,
                    
                }
            })
            console.log(userExist);
            if(!userExist){
                await prisma.employee.create({
                    data: {
                        employee_id:validatedUserDetails.employee_id,
                        PAN: validatedUserDetails.PAN,
                        employee_name: validatedUserDetails.employee_name,
                        username: validatedUserDetails.username,
                        password: await argon2.hash(validatedUserDetails.password),
                        gender: validatedUserDetails.gender,
                        job_title: validatedUserDetails.job_title,
                        access_rights:"admin",
                        status:"active"
                    }
                });
    
                res.json({
                    msg: "Admin Created Successfully",
                });
                
            }
            else{
                res.status(300).json({msg:"user already exists"})
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                msg: "Internal Server Error",
            });
        }
    }
    else{
        return res.status(400).json({
            msg: "Validation error",
            errors: validationResult.error.errors,
        });
    }
};


module.exports={
    userCreate,
    adminCreate
}

