const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const { updateUserSchema } = require("../Middleware/zodAuth");
const { withAccelerate } = require('@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate())
require('dotenv').config();


//retrieve employee data
async function getEmployeeData(req,res) {
    try {
        console.log("all")
        if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
        // If the token is valid and the user is authorized, fetch the employee data
        const data = await prisma.employee.findMany({
            select:{
            id: true,
            employee_id : true,
            employee_name: true,
            username: true,
            gender: true,
            status : true,
            join_date: true,
            photo:true,
            url: true,
            access_rights: true,
            PAN : true,
            job: {
                select: {
                    job_title: true
                }
            }
            },
            cacheStrategy: { swr: 60, ttl: 60 }  
        });
        res.json({msg:"Success",data});
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            msg: "INTERNAL SERVER ERROR"
        })
    }
}
//retrieve employee data by employeeName

async function getEmployeeDataByEmployee_ID(req,res) {
    
    // Check if the user has the necessary role (e.g., admin) to access the data
    if (req.tokenData.role !== "admin") {return res.status(400).json({msg:"UNAUTHORISED"});}

    try {    
        // Get the user ID from the request parameters
        const employee_id = req.query.employeeid;
        console.log(employee_id);

        // If the token is valid and the user is authorized, fetch the employee data
        const employeeData = await prisma.employee.findUnique({
            where:{
                employee_id:employee_id
            },
            select:{
            id: true,
            employee_id : true,
            employee_name: true,
            username: true,
            gender: true,
            status : true,
            join_date: true,
            photo:true,
            url: true,
            access_rights: true,
            PAN : true,
            jobdataid:true},
            cacheStrategy: { swr: 60, ttl: 60 }
        });

        if(!employeeData){return res.status(404).json({msg:"Data not Found"});}
        
        res.json({msg:"Success",employeeData});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "internal error"})
    }
}
// retreive employee data by PAN
async function getEmployeeDataByPan(req,res) {
    // Check if the user has the necessary role (e.g., admin) to access the data
    if(req.tokenData.role !== "admin"){return res.status(400).json({msg:"UNAUTHORISED"});}

    try {
        // Get the user ID from the request parameters
        const dpan = req.query.pan;
        console.log(dpan);
        // If the token is valid and the user is authorized, fetch the employee data
        const user = await prisma.employee.findUnique({
            where: {
                PAN : dpan
            },
            select : {
                id: true,
                employee_id : true,
                employee_name: true,
                username: true,
                gender: true,
                status : true,
                join_date: true,
                photo:true,
                url: true,
                access_rights: true,
                PAN : true,
                jobdataid:true
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        if(!user){return res.status(404).json({msg: "Employee data not found "});}
        return res.json({user});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "INTERNAL SERVER ERROR"})
    }
}
// retrieve employee data by username
async function getEmployeeDataByUsername(req,res) {

    console.log("entry")
    
    // Check if the user has the necessary role (e.g., admin) to access the data
    //if (req.tokenData.role !== "admin"){return res.status(400).json({msg:"No token provided"});}
    try {       
        // Get the user ID from the request parameters
        const name = req.query.username;
        // If the token is valid and the user is authorized, fetch the employee data
        const user = await prisma.employee.findUnique({
            where : {
                username : name
            },
            select : {
                id: true,
                employee_id : true,
                employee_name: true,
                username: true,
                gender: true,
                status : true,
                join_date: true,
                photo:true,
                url: true,
                access_rights: true,
                PAN : true,
                jobdataid:true
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })
        if(!user){return res.status(404).json({msg: "Employee data not found "});}
        return res.json({user});
    }
    catch (error) { 
        console.log(error);
        res.status(500).json({msg: "INTERNAL SERVER ERROR"})
    }
}
// Update employee data
const updateEmployeeData = async (req, res) => {
    if (req.tokenData.role !== "admin"){return res.status(400).json({msg:"UNAUTHORISED"});}
    
    const employee = await employee.findOne({
        where: {
            employee_id: req.params.employeeid
        },
        cacheStrategy: { swr: 60, ttl: 60 }
    });

    if (!employee){return res.staus(404).json({ msg: "Employee data not found" });}
    const updateData= req.body;
    
    const validationResult=updateUserSchema.safeParse(updateData);

    if(!validationResult.success){return res.status(300).json({msg:"invalid Data"});}

    updateData=validationResult.data
    try {
        const updatedEmployee=await prisma.employee.update({    
            where: {
                employee_id: employee.employee_id
            },
            data:{
                PAN: updateData.PAN,
                employee_id: updateData.employee_id,
                employee_name: updateData.employee_name,
                username: updateData.username,
                gender: updateData.gender,
                photo: updateData.photo,
                url:updateData.url,
                join_date: updateData.join_date,
                status: updateData.status,
                access_rights: updateData.ccess_rights,
                jobdataid: updateData.jobdataid
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        })     
    res.status(200).json({ msg: "Employee data successfully updated",updatedEmployee});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ msg:"INTERNAL SERVER ERROR"});
    }
}
// Delete employee data
const deleteEmployeeData = async (req, res) => {
    if (req.tokenData.role !== "admin") {return res.status(400).json({msg:"UNAUTHORISED"});}
    const employee = await prisma.employee.findUnique({
        where: {
            employee_id: req.params.employeeid
        }
    });
    if (!employee){return res.status(404).json({ msg: "Employee data not found" });}
    try {
        const deletedEmployee=await prisma.employee.delete({
            where: {
                employee_id: employee.employee_id
            },
            cacheStrategy: { swr: 60, ttl: 60 }
        });
        res.json({ msg:"Employee data successfully deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:"INTERNAL SERVER ERROR"});
    }
}

const username=async (req,res)=>{
    if (req.tokenData.role !== "admin") {return res.status(400).json({msg:"UNAUTHORISED"});}


    res.json({msg:req.tokenData.username})
    

}

module.exports = {
    getEmployeeData,
    getEmployeeDataByEmployee_ID,
    updateEmployeeData,
    getEmployeeDataByPan,
    getEmployeeDataByUsername,
    deleteEmployeeData,
    username
};

