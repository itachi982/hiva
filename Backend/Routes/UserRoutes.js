const express=require("express");
const {jwtverify } = require("../Middleware/AuthUser");
const { adminLogin, userlogin, changePassword, adminChangePassword } = require("../controllers/Auth");
const { userCreate,adminCreate } = require("../controllers/createAccount");
const { createJobData, updateJobData, getJobData, getJobDataByID, deleteJobData } = require("../controllers/jobData");
const { getAllAttendance, getAttendanceByID, createAttendance, updateAttendance, deleteAttendance } = require("../controllers/Attendance");
const router=express.Router();

//admin Login
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
router.post("/employee/admin/change_password",jwtverify,adminChangePassword);

//Employee Routes 

router.get("/employee_data",jwtverify,);
router.get("/employee_data/id",jwtverify);
router.get('/data_employee/pan/',jwtverify);
router.get("/employee_data/name",jwtverify);
router.post("/employee_data",jwtverify);
router.patch("/employee_data",jwtverify);
router.delete("/employee_data",jwtverify);
router.patch("/employee_data/change_password/",jwtverify);



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
router.delete("/attendance_data",jwtverify,deleteAttendance);

//Deduction_data Routes

router.get("/deduction_data");
router.get("/deduction_data");
router.post("/deduction_data");
router.patch("/deduction_data/update");

// Emplopyee_salary_data Routes
router.get("/employee_salary_data");
router.get("/employee_salary_data/month");
router.get("/employee_salary_data/year/");   


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