import { useState } from "react";
import { Button, Heading, InputBox, SubHeading } from "../components/SigninHelper"
import axios, { AxiosError } from "axios";
import Notification, { errorNotification, successNotification } from "../components/Notification";
import {useNavigate } from 'react-router-dom';


export const AdminSignup=()=>{
    const navigate=useNavigate();

    async function createAccount(){

        try{
            
            const response=await axios.post("http://localhost:3000/admin/create",{
                employee_id,
                PAN,
                employee_name,
                username,
                password,
                gender
            })

            successNotification(response.data.msg+" Redirecting to Login Page");
            setTimeout(()=>{
                navigate("/admin/signin")
            },3000);
            
            
        }
        catch(AxiosError){
           // console.log(AxiosError)
            errorNotification("Admin not created : "+AxiosError.response.data.msg);
        }
       
      
    }

    const [employee_name,setEmployeeName]=useState("")
    const [PAN,setPanNumber]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("")
    const [employee_id,setEmployeeId]=useState("")

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">
            
            <div className="bg-slate-100 p-7 rounded-lg h-100 mt-10 mb-10 flex flex-col justify-center">
                <Heading title={"Admin Sign up"}></Heading>
                <SubHeading label={"Please fill up all information to create a admin account"}></SubHeading>
                <InputBox onChange={e=>{setEmployeeName(e.target.value);}} placeholder={"Employee Name"} ></InputBox>
                <InputBox onChange={e=>{setEmployeeId(e.target.value)}} placeholder={"Employee ID"} ></InputBox>
                <InputBox onChange={e=>{setPanNumber(e.target.value)}} placeholder={"Pan Number"} ></InputBox>
                <InputBox onChange={e=>{setusername(e.target.value)}} placeholder={"Username"}></InputBox>
                <InputBox onChange={e=>{setpassword(e.target.value)}} placeholder={"password"}></InputBox>
                <InputBox onChange={e=>{setgender(e.target.value)}} placeholder={"Gender (male/female)"} /> 
                <Button func={createAccount} label={"Create Account"}></Button>     
                <Notification/>
            </div>
        </div>

    )

}
