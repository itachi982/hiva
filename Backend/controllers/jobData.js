const {PrismaClient} =require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate())

const { jobDataSchema, jobDataSchemaId } = require("../Middleware/zodAuth");
require('dotenv').config();

const createJobData=async(req,res)=>{

    let jobdata=req.body;
    console.log("vishal");

    if(!jobdata){
        return res.status(400).json({
            msg:"Bad Request"
        })
    }
    const validationResult=jobDataSchema.safeParse(jobdata);

    if(validationResult.success){

        if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
        const emp_id=req.tokenData.employee_id;
        
        jobdata=validationResult.data;

        try{
            const createdJob=await prisma.job.create({
                data:{
                    job_title:jobdata.job_title,
                    base_salary:jobdata.base_salary,
                    transportation_allowance:jobdata.transportation_allowance,
                    meal_allowance:jobdata.meal_allowance
                },
                cacheStrategy: { swr: 10, ttl: 10 }
            })  
            console.log(createdJob);    
            //connect the job to a employee
            // await prisma.employee.update({
            //     where:{
            //         employee_id:emp_id
            //     },
            //     data:{
            //         job:{
            //             connect:{
            //                 id:createdJob.id
            //             }
            //         }
            //     },
            //     cacheStrategy: { swr: 60, ttl: 60 }
            // })
            res.json({
                msg:`Job created Successfully `
            })
        }
        catch(err){
            console.log(err);
            res.status(500).json({msg:"INTERNAL ERROR"});
        }
    }
    else{
        return res.status(400).json({
            message: "Validation error",
            errors: validationResult.error.errors,
        });
    }
}

const updateJobData=async(req,res)=>{

    let data=req.body;

    if(!data){
        res.status(400).json({msg:"Bad Request"});
    }

    const validationResult=jobDataSchemaId.safeParse(data);

    if(validationResult.success){

        if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

        data=validationResult.data;
        try{
            const job=await prisma.job.findUnique({
                where:{
                    id:req.job_id
                },
                cacheStrategy: { swr: 10, ttl: 10 }
            })

            if(!job){
                res.status(404).json({msg:"Data not Found"});
                return;
            }

            await prisma.job.update({
                where:{
                    id:data.job_id
                },
                data:{
                    job_title:data.job_title,
                    base_salary:data.base_salary,
                    transportation_allowance:data.transportation_allowance,
                    meal_allowance:data.meal_allowance
                },
                cacheStrategy: { swr: 10, ttl: 10 }
            })

            res.json({msg:"Job updated Successfully"});
        }
        catch(err){
            
        }

    }
}

const getJobData = async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
    try {
        const jobdata=await prisma.job.findMany({
            select: {
                id:true,
                job_title: true,
                base_salary: true,
                transportation_allowance: true,
                meal_allowance: true
            },
            cacheStrategy: { swr: 10, ttl: 10 }
        });
        console.log(jobdata)
        if(!jobdata){
            res.status(500).json({msg:"No Job Data Found"})
        }
        res.json({jobdata});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}

const getJobDataByID=async(req,res)=>{

    const djob_id=req.params.id;
    
    //data cam fro jwtverify middleware
    
    if(!req.tokenData){return res.status(400).json({msg:"Invalid token"});}

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    if(!djob_id){
        res.status(400).json({msg:"Bad Request"})
        return;
    }

    try{
        const job =await prisma.job.findFirst({
            where:{
                id:parseInt(djob_id)
            },
            include:{
                Employees:{
                    select:{
                        employee_id:true,
                        username:true,
                        job_title:true,
                        access_rights:true
                    }
                }
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({job});
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}

const deleteJobData=async(req,res)=>{
    const djob_id=req.params.id;

    if(!djob_id){
        res.status(400).json({msg:"Bad Request"})
        return;
    }

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
        

    try{
        const deletedJob =await prisma.job.delete({
            where:{
                id:parseInt(djob_id)
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({msg:"Job deleted Successfully",deletedJob});
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}


module.exports={
    createJobData,
    updateJobData,
    getJobData,
    getJobDataByID,
    deleteJobData
}