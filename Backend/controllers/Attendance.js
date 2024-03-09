const {PrismaClient} =require("@prisma/client");
const prisma=new PrismaClient();
require('dotenv').config();

const createAttendance=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

    const{
        dmonth,
        dpresent,
        dsick,
        dabsent,
        demployeeDataId
    }=req.body;

    try {
        const createdAttendance=await prisma.attendance.create({
            data:{
                month:dmonth,
                present:dpresent,
                sick:dsick,
                absent:dabsent,
                employeeDataId:demployeeDataId
            }
        })
        res.json({msg:"Success",createdAttendance})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}

const updateAttendance=async(req,res)=>{

    if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}

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
            }
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
            }
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
                }
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
                id:req.params.id
            }
        })
        res.json({msg:"Success",deleted})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"UNAUTHORISED"});
    }

}

module.exports={
    createAttendance,
    updateAttendance,
    getAllAttendance,
    getAttendanceByID,
    deleteAttendance
};