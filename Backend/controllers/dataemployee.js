const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const { updateUserSchema } = require("../Middleware/zodAuth");
const prisma = new PrismaClient();
require('dotenv').config();


//retrieve employee data
async function getEmployeeData(req,res) {
    try {
        if (req.tokenData.role != "admin")
        {
            res.status(403).json({
                msg : "unauthorized"
            });
            return ;
        }
        // If the token is valid and the user is authorized, fetch the employee data
        const data = await prisma.employee.findMany();
        res.json({data});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error"
        })
    }
}


//retrieve employee data by employeename

async function getEmployeeDatabyemployeename(req,res) {
    try {
        
        // Check if the user has the necessary role (e.g., admin) to access the data
        if (req.tokenData.role !== "admin") {
        return res.status(400).json({msg:"Unauthorized"});
        }
        // Get the user ID from the request parameters
        const { employee_name } = req.params.employeeid;

        // If the token is valid and the user is authorized, fetch the employee data
        const employeedata = await prisma.employee.findUnique();
        where:{
            id : employee_name
        }
        if(!employeedata)
        {
            return res.status(404).json({msg: "Employee data not found "});
        }
            return res.json({
                employeedata
            });
    }

        
     catch (error) {
        console.log(eroor);
        res.status(500).json({
            msg: "internal error"
        })
    }
}

// retreive employee data by pan


async function getEmployeeDatabypan(req,res) {
    try {
        // Check if the user has the necessary role (e.g., admin) to access the data
        if (req.tokenData.role !== "admin") {
        return res.status(400).json({msg:"Unauthorized"});
        }
        // Get the user ID from the request parameters
        const pan = req.params.PAN;
        // If the token is valid and the user is authorized, fetch the employee data
        const user = await prisma.employee.findUnique({
        where : {
            PAN : pan
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
        if(!user)
        {
            return res.status(404).json({msg: "Employee data not found "});
        }
            return res.json({
               user
            });
    }

        
     catch (error) {
        console.log(eroor);
        res.status(500).json({
            msg: "internal error"
        })
    }
}

// retrieve employee data by username

async function getEmployeeDatabyusername(req,res) {
    try {

               
        // Check if the user has the necessary role (e.g., admin) to access the data
        if (req.tokenData.role !== "admin") {
        return res.status(400).json({msg:"No token provided"});
        }
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
        if(!user)
        {
            return res.status(404).json({msg: "Employee data not found "});
        }
            return res.json({
               user
            });
    }

        
     catch (error) {
        console.log(eroor);
        res.status(500).json({
            msg: "internal error"
        })
    }
}

// Update employee data
 const updateEmployeeData = async (req, res) => {
    if (req.tokenData.role !== "admin") {
        return res.status(400).json({msg:"Unauthorized"});
        }
    const employee = await employee.findOne(
        {
        where: {
            employee_id: req.params.id
        }
    });

    if (!employee) return res.staus(404).json({ msg: "Employee data not found" });
        const updateData= req.body;
        
        const validationResult=updateUserSchema.safeParse(updateData);

        if(!validationResult.success){return res.status(300).json({msg:"invalid Data"});}

        updateData=validationResult.data
    try {
        await prisma.employee.update({
            PAN: pan,
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
        }, {
            where: {
                id: employee.id
            }
        });
        res.status(200).json({ msg: "Employee data successfully updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


// Delete employee data
const deleteEmployeeData = async (req, res) => {
    if (req.tokenData.role !== "admin") {
        return res.status(400).json({msg:"Unauthorized"});
        }
    const employee = await prisma.employee.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!employee) return res.status(404).json({ msg: "Employee data not found" });
    try {
        await prisma.employee.destroy({
            where: {
                id: employee.id
            }
        });
        res.status(200).json({ msg: "Employee data successfully deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}




module.exports = {
    getEmployeeData,
    getEmployeeDatabyemployeename,
    updateEmployeeData,
    getEmployeeDatabypan,
    getEmployeeDatabyusername,
    deleteEmployeeData
};

