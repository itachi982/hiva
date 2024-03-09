const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const { updateUserSchema } = require("../Middleware/zodAuth");
const prisma = new PrismaClient();
require('dotenv').config();


//retrieve employee data
async function getEmployeeData(req,res) {
    try {
        if(req.tokenData.role!='admin'){return res.status(300).json({msg:"UNAUTHORISED"});}
        // If the token is valid and the user is authorized, fetch the employee data
        const data = await prisma.employee.findMany({
            id: true,
            employee_id : true,
            employee_name: true,
            username: true,
            gender: true,
            job_title: true,
            status : true,
            join_date: true,
            photo:true,
            url: true,
            access_rights: true,
            PAN : true,
            jobdataid:true
        });
        res.json({msg:"Success",data});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "INTERNAL SERVER ERROR"
        })
    }
}


//retrieve employee data by employeeName

async function getEmployeeDataByEmployeeName(req,res) {
    
    // Check if the user has the necessary role (e.g., admin) to access the data
    if (req.tokenData.role !== "admin") {return res.status(400).json({msg:"UNAUTHORISED"});}

    try {    
        // Get the user ID from the request parameters
        const { employee_name } = req.params.employee_name;

        // If the token is valid and the user is authorized, fetch the employee data
        const employeeData = await prisma.employee.findUnique({
            where:{
                i:employee_name
            },
            select:{
            id: true,
            employee_id : true,
            employee_name: true,
            username: true,
            gender: true,
            job_title: true,
            status : true,
            join_date: true,
            photo:true,
            url: true,
            access_rights: true,
            PAN : true,
            jobdataid:true}
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
        const dpan = req.params.PAN;
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
                job_title: true,
                status : true,
                join_date: true,
                photo:true,
                url: true,
                access_rights: true,
                PAN : true,
                jobdataid:true
            }
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
    
    // Check if the user has the necessary role (e.g., admin) to access the data
    if (req.tokenData.role !== "admin"){return res.status(400).json({msg:"No token provided"});}
    try {       
        // Get the user ID from the request parameters
        const name = req.params.username;
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
                job_title: true,
                status : true,
                join_date: true,
                photo:true,
                url: true,
                access_rights: true,
                PAN : true,
                jobdataid:true
            }
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
            employee_id: req.params.id
        }
    });

    if (!employee){return res.staus(404).json({ msg: "Employee data not found" });}
    const updateData= req.body;
    
    const validationResult=updateUserSchema.safeParse(updateData);

    if(!validationResult.success){return res.status(300).json({msg:"invalid Data"});}

    updateData=validationResult.data
    try {
        const updatedEmployee=await prisma.employee.update({    
            where: {
                id: employee.id
            },
            data:{
                PAN: updateData.PAN,
                employee_id: updateData.employee_id,
                employee_name: updateData.employee_name,
                username: updateData.username,
                gender: updateData.gender,
                job_title: updateData.job_title,
                photo: updateData.photo,
                url:updateData.url,
                join_date: updateData.join_date,
                status: updateData.status,
                access_rights: updateData.ccess_rights,
                jobdataid: updateData.jobdataid
            }
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
    const employee = await prisma.employee.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!employee){return res.status(404).json({ msg: "Employee data not found" });}
    try {
        const deletedEmployee=await prisma.employee.delete({
            where: {
                id: employee.id
            }
        });
        res.json({ msg:"Employee data successfully deleted",deletedEmployee});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:"INTERNAL SERVER ERROR"});
    }
}

module.exports = {
    getEmployeeData,
    getEmployeeDataByEmployeeName,
    updateEmployeeData,
    getEmployeeDataByPan,
    getEmployeeDataByUsername,
    deleteEmployeeData
};

