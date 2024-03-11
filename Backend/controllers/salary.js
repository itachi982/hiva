const {PrismaClient} =require("@prisma/client");
const prisma=new PrismaClient();
require('dotenv').config();


const salaryData=async(req,res)=>{

if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"})}

    try {
        const salaryData=await prisma.job.findMany({
            select:{
                job_title:true,
                base_salary:true,
                transportation_allowance:true,
                meal_allowance:true,
                Employees:{
                    select:{
                        id:true,
                        PAN:true,
                        employee_name:true
                    }
                }
            }
        })
        res.json({msg:"Success",salaryData});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }
}

const salaryDatabyName=async(req,res)=>{

    const name=req.params.name;

    if(!name){return res.status(301).json({msg:"Bad request"})};

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"})}

    try {
        const salaryData=await prisma.job.findMany({
            
            where:{
                Employees:{
                    employee_name:name
                }
            },
            select:{
                job_title:true,
                base_salary:true,
                transportation_allowance:true,
                meal_allowance:true,
                Employees:{
                    select:{
                        id:true,
                        PAN:true,
                        employee_name:true
                    }
                }
            }
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
            include:{
                job:true,
                attendences:{
                    where:{
                        month:month
                    }
                }
            },
            where:{
               Employees:{
                atten
               }
            },
            select:{
                job_title:true,
                base_salary:true,
                transportation_allowance:true,
                meal_allowance:true,
                Employees:{
                    select:{
                        id:true,
                        PAN:true,
                        employee_name:true
                    }
                }
            }
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