const express=require("express");
const {jwtverify, jwt } = require("../Middleware/AuthUser");
const { adminLogin, userlogin, changePassword, adminChangePassword } = require("../controllers/Auth");
const { userCreate,adminCreate } = require("../controllers/createAccount");
const { createJobData, updateJobData, getJobData, getJobDataByID, deleteJobData } = require("../controllers/jobData");
const { getAllAttendance, getAttendanceByID, createAttendance, updateAttendance, deleteAttendance, createDeduction, getDeductionData, deleteDeductionData } = require("../controllers/Attendance");
const { salaryData, salaryDatabyName, salaryDatabyMonth } = require("../controllers/salary");
const { getEmployeeData, getEmployeeDataByEmployee_ID, getEmployeeDataByPan, getEmployeeDataByUsername, updateEmployeeData, deleteEmployeeData } = require("../controllers/dataemployee");

const router=express.Router();

//admin Login.
router.get("/admin/login",adminLogin);
//user login
router.get("/user/login",userlogin);
//admin creation
router.post("/admin/create",adminCreate);
//usercreation
router.post("/employee/create",jwtverify,userCreate);
//change password
router.post("/employee/change_password",jwtverify,changePassword);
//change password for admin
router.post("/employee/admin/change_password",adminChangePassword);

//Employee Routes 

router.get("/employee_data",jwtverify,getEmployeeData);
router.get("/employee_data/id",jwtverify,getEmployeeDataByEmployee_ID);
router.get('/data_employee/pan/',jwtverify,getEmployeeDataByPan);
router.get("/employee_data/name",jwtverify,getEmployeeDataByUsername);
router.post("/employee_data",jwtverify,userCreate);
router.patch("/employee_data",jwtverify,updateEmployeeData);
router.delete("/employee_data",jwtverify,deleteEmployeeData);
router.patch("/employee_data/change_password/",jwtverify,changePassword);



//JOB Positions Routes
router.get("/job_positions",jwtverify,getJobData);
router.get("/job_positions/:id",jwtverify,getJobDataByID);
router.post("/job_positions",jwtverify,createJobData);
router.patch("/job_positions/:id",jwtverify,updateJobData);
router.delete("/job_positions/:id",jwtverify,deleteJobData);


//Attendance Data Routes

router.get("/attendance_data",jwtverify,getAllAttendance);
router.get("/attendance_data/:id",jwtverify,getAttendanceByID);
router.post("/attendance_data",jwtverify,createAttendance);
router.patch("/attendance_data/update/:id",jwtverify,updateAttendance);
router.delete("/attendance_data/:id",jwtverify,deleteAttendance);

//Deduction_data Routes

router.get("/deduction_data/:username",jwtverify,getDeductionData);
router.post("/deduction_data/:username",jwtverify,createDeduction);
router.delete("/deduction_data/:username",jwtverify,deleteDeductionData);

//no need for patch above req will automatically update or create data
//router.patch("/deduction_data/update");

// Emplopyee_salary_data Routes
router.get("/employee_salary_data",jwtverify,salaryData);
router.get("/employee_salary_data/:username",jwtverify,salaryDatabyName);
router.get("/employee_salary_data/month/:month",jwtverify,salaryDatabyMonth);
//router.get("/employee_salary_data/year/");   


// report Routes

//employee salary
router.get("/report/salary");
router.get("/report/salary/name/");
router.get("report/salary/month/");
router.get("/report.salary/year/");

//emloyee attendance
router.get("/report/attendance/month/");
router.get("/report/salary/year/");

//employee salary slips
router.get("/report/salary_slip/name/");
router.get("/report/salary_slip/month/");
router.get("/report/salary_slip/year/");


//different Dashboard for {Usersadmins}

router.get("/employee/dashboard");
router.get("/admin/dashboard");

//Salary Data Routes

router.get("/salary/month");
router.get("/salary/year");
//change password for user
router.patch("/change_password");
//Logout Routes
router.delete("/logout");

module.exports=router;