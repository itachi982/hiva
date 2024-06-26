import { useState } from "react"
import { BottomWarning, Button, Heading, InputBox, SubHeading ,Logo} from "../components/SigninHelper"
import Notification, { successNotification,errorNotification } from "../components/Notification";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { EmployeeDataAtom } from "../Atoms/EmployeeData";


export const UserSignin=({setIsUser})=>{
    const navigate=useNavigate();
    async function login(){

        try {
            
            const response=await axios.post("http://localhost:3000/user/login",{
                username,
                password
            })
            
            successNotification(response.data.msg);
            
            localStorage.setItem("token",response.data.token);
            
            if(response.data.token){
                
                const EmployeeData=await axios.get("http://localhost:3000/employee_data/?username="+username,{
                    headers:{
                        'Authorization':localStorage.getItem("token")
                    }
                });
                if(EmployeeData.data.user.access_rights=='user'){
                   // console.log("vishal")
                    //setIsUser(true);
                    console.log()
                    setTimeout(()=>{
                        navigate("/user/dashboard")
                    },3000)
                    
                }     
                
            }
        }catch (error) {
           // console.log(error)
            //localStorage.removeItem("token");
            errorNotification("Incorrect Username or Password")


        }
    }
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">

            
            <div className="bg-slate-100 p-7 rounded-lg h-100 mt-10 mb-10 flex flex-col justify-center">
                <Logo></Logo>
                <Heading title={"Employee Sign in"}></Heading>
                <SubHeading label={"Please sign in with username and password"}></SubHeading>
                <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder={"Username"}></InputBox>
                <InputBox  type={"password"} onChange={e=>setPassword(e.target.value)} placeholder={"Password"}></InputBox>
                <Button func={login} label={"Sign in"}></Button>
                <Notification/>
            
            </div>
        </div>
        
        
    )


}