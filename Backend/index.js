const express=require('express');
const cors = require('cors');
const dotenv=require('dotenv');

const {jwtverify } = require("./Middleware/AuthUser");

const app=express();
const port = 3000;

const UserRouter=require("./Routes/UserRoutes");
const AuthRouter=require("./Routes/AuthRoutes")

app.use(express.json());
app.use(cors());

app.use(UserRouter);
//app.use("/v1",AuthRouter);



app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`)
})
