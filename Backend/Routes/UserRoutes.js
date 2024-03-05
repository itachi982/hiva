const express=require("express");
const { authenticateJWT, verifyUser, adminOnly } = require("../Middleware/AuthUser");
const router=express.Router();

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

    //Chitresh write your code here

// report Routes

    //Chitresh write your code here


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