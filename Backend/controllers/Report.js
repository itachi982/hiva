require('dotenv').config();
const {PrismaClient} =require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate');
const { jobDataSchema } = require('../Middleware/zodAuth');
const prisma = new PrismaClient().$extends(withAccelerate())
const axios =require('axios');

const salaryDatamain = async(req,res)=>{
    if (!req.tokenData){return res.status(400).json({msg:"UNAUTHORISED"});}
    console.log(req.query.username)
    let response=[{}];
        
    try {
        //Employee Data
        const data = await prisma.employee.findUnique({
            where:{
                username:req.query.username
            }
        })
        //Salary Data
        if(!data.jobdataid){return res.status(300).json({msg:"Employee not Found"})};

        const jobData=await prisma.job.findMany({
            where:{
                id:data.jobdataid     //error 21
            }
        })
        response.push({
           Salary:{
            base_salary:jobData[0].base_salary,
            trasportation_allowance:jobData[0].transportation_allowance,
            meal_allowance:jobData[0].meal_allowance
           }
        });
        //console.log(jobData)

       if(!jobData){return res.status(300).json({msg:"Employee not Found"})};

        //attendance data

        const attendanceData=await prisma.attendance.findMany({
            where:{
                employeeDataId:data.employee_id
            }
        })
        response.push({
            attendances:attendanceData
        })
        const createDeduction=await axios.get('http://localhost:3000/deduction_data/create?username='+req.query.username,{
            headers:{
                'authorization':req.headers.authorization
            }
        });
        //console.log(createDeduction)

        const deductionData=await prisma.deduction.findMany({
            where:{
                employeeDataId:data.employee_id
            }
        })

        response.push({
            deductions:deductionData
        })
        
        res.json(response);


    } catch (error) {
        console.log(error)
    }
    

}

module.exports = {
    salaryDatamain
}