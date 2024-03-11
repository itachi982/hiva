const {PrismaClient} =require("@prisma/client");
const prisma=new PrismaClient();
require('dotenv').config();


const salaryData=async(req,res)=>{

if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"})}

    try {
        const salaryData=await prisma.employee.findMany({
            select: {
                id: true,
                PAN: true,
                employee_name: true,
                job: {
                  select: {
                    job_title: true,
                    base_salary: true,
                    transportation_allowance: true,
                    meal_allowance: true,
                  },
                },
            }, 
        })
        res.json({msg:"Success",salaryData});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }
}

const salaryDatabyName=async(req,res)=>{

    const name=req.params.username;

    if(!name){return res.status(301).json({msg:"Bad request"})};

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"})}

    try {
        const salaryData=await prisma.employee.findUnique({
            where:{
                username:name     
            },
            select: {
                id: true,
                PAN: true,
                employee_name: true,
                job: {
                  select: {
                    job_title: true,
                    base_salary: true,
                    transportation_allowance: true,
                    meal_allowance: true,
                  },
                },
            }, 
        })
        res.json({msg:"Success",salaryData});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }
}

const salaryDatabyMonth=async(req,res)=>{

    const month=req.params.month;

    if(!month){return res.status(301).json({msg:"BAD REQUEST"})}

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"})}

    try {
        const salaryData=await prisma.employee.findMany({
            select: {
                id: true,
                PAN: true,
                employee_name: true,
                job: {
                  select: {
                    job_title: true,
                    base_salary: true,
                    transportation_allowance: true,
                    meal_allowance: true,
                  },
                },
                attendences: {
                  where: {
                    month: month, // Replace with the desired month
                  },
                  select: {
                    present: true,
                    sick: true,
                    absent: true,
                  },
                },
                deductions: {
                  where: {
                    month: month, // Replace with the desired month
                  },
                  select: {
                    deduction_amount: true,
                    salaryAfterDeduction: true,
                  },
                },
              },
        })
        res.json({msg:"Success",salaryData});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }

}


module.exports={
    salaryData,
    salaryDatabyName,
    salaryDatabyMonth
}