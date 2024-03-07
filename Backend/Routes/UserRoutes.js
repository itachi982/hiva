const express=require("express");
const { authenticateJWT, verifyUser, adminOnly } = require("../Middleware/AuthUser");
const { adminLogin, userlogin } = require("../controllers/Auth");
const { userCreate } = require("../controllers/createAccount");
const router=express.Router();

//admin Login

router.get("/admin/login",adminLogin);
router.get("/user/login",userlogin);
router.post("/employee/create",userCreate);

//Employee Routes 

router.get("/employee_data",authenticateJWT,verifyUser,adminOnly);
router.get("/employee_data/id",authenticateJWT,verifyUser,adminOnly);
router.get('/data_employee/pan/',authenticateJWT,verifyUser, adminOnly);
router.get("/employee_data/name",authenticateJWT,verifyUser);
router.post("/employee_data",authenticateJWT,verifyUser,adminOnly);
router.patch("/employee_data",authenticateJWT,verifyUser,adminOnly);
router.delete("/employee_data",authenticateJWT,verifyUser,adminOnly);
router.patch("/employee_data/change_password/",authenticateJWT,verifyUser,adminOnly);

//JOB Positions Routes
router.get("/job_positions",authenticateJWT,verifyUser,adminOnly);
router.get("/job_positions",authenticateJWT,verifyUser,adminOnly);
router.post("/job_positions",authenticateJWT,verifyUser,adminOnly);
router.patch("/job_positions",authenticateJWT,verifyUser,adminOnly);
router.delete("/job_positions",authenticateJWT,verifyUser,adminOnly);


//Attendance Data Routes

router.get("/attendance_data",authenticateJWT,verifyUser,adminOnly);
router.get("/attendance_data",authenticateJWT,verifyUser,adminOnly);
router.post("/attendance_data",authenticateJWT,verifyUser,adminOnly);
router.patch("/attendance_data/update",authenticateJWT,verifyUser,adminOnly);
router.delete("/attendance_data",authenticateJWT,verifyUser,adminOnly);

//Deduction_data Routes

router.get("/deduction_data",authenticateJWT,verifyUser,adminOnly);
router.get("/deduction_data",authenticateJWT,verifyUser,adminOnly);
router.post("/deduction_data",authenticateJWT,verifyUser,adminOnly);
router.patch("/deduction_data/update",authenticateJWT,verifyUser,adminOnly);

// Emplopyee_salary_data Routes
router.get("/employee_salary_data",authenticateJWT,verifyUser,adminOnly);
router.get("/employee_salary_data/month",authenticateJWT,verifyUser,adminOnly);
router.get("/employee_salary_data/year/",authenticateJWT,verifyUser,adminOnly);   


// report Routes

//employee salary
router.get("/report/salary",authenticateJWT,verifyUser,adminOnly);
router.get("/report/salary/name/",authenticateJWT,verifyUser,adminOnly);
router.get("report/salary/month/",authenticateJWT,verifyUser,adminOnly);
router.get("/report.salary/year/",authenticateJWT,verifyUser,adminOnly);

//emloyee attendance
router.get("/report/attendance/month/",authenticateJWT,verifyUser,adminOnly);
router.get("/report/salary/year/",authenticateJWT,verifyUser,adminOnly);

//employee salary slips
router.get("/report/salary_slip/name/",authenticateJWT,verifyUser,adminOnly);
router.get("/report/salary_slip/month/",authenticateJWT,verifyUser,adminOnly);
router.get("/report/salary_slip/year/",authenticateJWT,verifyUser,adminOnly);


//different Dashboard for {Users,admins}

router.get("/employee/dashboard",authenticateJWT,verifyUser);
router.get("/admin/dashboard",authenticateJWT,adminOnly);

//Salary Data Routes

router.get("/salary/month",authenticateJWT,verifyUser);
router.get("/salary/year",authenticateJWT,verifyUser);

//change password for user
router.patch("/change_password",authenticateJWT,verifyUser);

//Logout Routes
router.delete("/logout",authenticateJWT);

module.exports=router;