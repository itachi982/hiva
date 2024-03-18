const {PrismaClient} =require("@prisma/client");
const { withAccelerate } = require('@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate())
require('dotenv').config();

const createAttendance=async(req,res)=>{
    const {present,absent,sick}=req.body;
    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
    const days=present+absent+sick;
    if(present<0 || absent<0||sick<0){return res.json({msg:"Days can not be negative"});}
    if(days!=30){return res.json({msg:"Incorrect number of days"})}

    try {
        const createdAttendance=await prisma.attendance.create({
            data:{
                month:req.body.month,
                present:req.body.present,
                sick:req.body.sick,
                absent:req.body.absent,
                employeeDataId:req.body.employee_id
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })

        await prisma.employee.update({
            where:{
                employee_id:req.body.employee_id
            },
            data:{
                attendences:{
                        connect:{
                            id:createdAttendance.id
                        }
                }
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({msg:"Success",createdAttendance})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}

const updateAttendance=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
    const days=req.body.present+req.body.absent+req.body.sick;
    if(days!=30){return res.json({msg:"Incorrect number of days"})}
    const{
        dmonth,
        dpresent,
        dsick,
        dabsent,
        demployeeDataId
    }=req.body;

    try {
        const attendance=await prisma.attendance.update({
            
            where:{
                id:req.params.id
            },
            data:{
                month:dmonth,
                present:dpresent,
                sick:dsick,
                absent:dabsent,
                employeeDataId:demployeeDataId
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({msg:"Success",attendance});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }

}

const getAllAttendance=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    try {
        const AllAttendance=await prisma.attendance.findMany({
            include:{
                EmployeeData:true
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        });
        if(!AllAttendance){return res.status(404).json({msg:"No Data Found"});}
        res.json({msg:"Success",AllAttendance})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }

}

const getAttendanceByID=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

        try {
            const data=await prisma.employee.findUnique({
                where:{
                    id:req.params.id
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })
            res.json({msg:"Success",data});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:"INTERNAL SERVER ERROR"})
        }
}

const deleteAttendance=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    try {
        const deleted=await prisma.attendance.delete({
            where:{
                id:parseInt(req.params.id)
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({msg:"Success",deleted})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"UNAUTHORISED"});
    }

}

const createDeduction=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    async function calculateandupdate(){
        let response=[];
        try {
            const employee=await prisma.employee.findUnique({
                where:{
                    username:req.params.username
                },
                select:{
                    employee_id:true,
                    employee_name:true,
                    username:true,
                    gender:true,
                    join_date:true,
                    access_rights:true,
                    job:true,
                    attendences:true
                },
                cacheStrategy: { swr: 60, ttl: 60 }            
            })
        
            for(const attendance of employee.attendences){
                const {month}=attendance

                //calculate
                const{deduction,salaryAmount}=await calculate(employee.job,attendance,month);

                //update
                const result = await updateDeduction(employee.employee_id,month,deduction,salaryAmount);
                response.push(result);
            }
            res.json({msg:"Success",response})
        }catch(error){
            console.log(error)
            res.status(500).json({msg:"INTERNAL SERVER ERROR"})
        }
    }

    async function calculate(job,attendance,month){

        const {sick,absent}=attendance;
        const {base_salary}=job

        const sickD=(sick*(base_salary/30))/2;
        const absentD=absent*(base_salary/30);

        const deduction=sickD+absentD;
        const salaryAmount=job.base_salary-deduction;

        return {deduction,salaryAmount};

    }

    async function updateDeduction(emp_id,month,deductionAmount,salaryAmount){
        try {
            const existingDeduction=await prisma.deduction.findFirst({
                where:{
                    employeeDataId:emp_id,
                    month:month
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })

            //console.log(existingDeduction);

            //if exist update 
        if(existingDeduction){
            const update=await prisma.deduction.update({
                where:{
                    id:existingDeduction.id
                },
                data:{
                    deduction_amount:deductionAmount,
                    salaryAfterDeduction:salaryAmount
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })
            return `Deduction updated for month ${month}`;
        }
        else{
            const create=await prisma.deduction.create({
                data:{
                    month:month,
                    deduction_amount:deductionAmount,
                    salaryAfterDeduction:salaryAmount,
                    employeeDataId:emp_id
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })
            return `Deduction created for month ${month}`;
        }
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:"INTERNAL SERVER ERROR"})
        }

        


    }

    calculateandupdate();

}

const getDeductionData=async(req,res)=>{
    
    const dusername=req.params.username;
    const month=req.query.month;
    console.log(dusername,month);
    if(!dusername){return res.status(300).json({msg:"BAD REQUEST"})}


    if(!month){
        try {
            const deduction=await prisma.deduction.findMany({
                where:{
                    EmployeeData:{
                        username:dusername
                    } 
                },
                cacheStrategy: { swr: 60, ttl: 60 }
            })
    
            if(!deduction){
                return res.status(404).json({msg:"No Data Found"})
            }
            res.json({msg:"Success",deduction});
        } catch (error) {  
            res.status(500).json({msg:"INTERNAL SERVER ERROR"})
        }
    }else{
       try {
        const deduction=await prisma.deduction.findFirst({
            where:{
                EmployeeData:{
                    username:dusername
                },
                month:month
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        if(!deduction){
            return res.status(404).json({msg:"No Data Found"})
        }
        res.json({msg:"Success",deduction});
       } catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
       }

    }

}

const deleteDeductionData=async(req,res)=>{

    const dusername=req.params.username;
    const month=req.query.month;
    if(!dusername||!month){return res.status(300).json({msg:"BAD REQUEST"})}
    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    try {

        const emloyee=await prisma.employee.findUnique({
            where:{
                username:dusername
            },
            include:{
                deductions:{
                    where:{
                        month:month
                    }
                }
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })

        if(!emloyee){return res.json({msg:"No data Found"})}

        const deletedDeduction=await prisma.deduction.delete({
            where:{
                id:emloyee.deductions[0].id
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        res.json({msg:"Success",deletedDeduction})
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({msg:"INTERNAL SERVER ERROR"})
    }

}

module.exports={
    createAttendance,
    updateAttendance,
    getAllAttendance,
    getAttendanceByID,
    deleteAttendance,
    createDeduction,
    getDeductionData,
    deleteDeductionData
};