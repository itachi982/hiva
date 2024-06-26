import { useState } from "react"
import { BottomWarning, Button, Heading, InputBox, SubHeading ,Logo} from "../components/SigninHelper"
import Notification, { successNotification,errorNotification } from "../components/Notification";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { AdminAuthAtom } from "../Atoms/AuthAtom";
import { UsernameAtom } from "../Atoms/AdminState";


export const AdminSignin=()=>{

    const navigate=useNavigate();
    const setUsernameAtom=useSetRecoilState(UsernameAtom);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const setAdminAtom=useSetRecoilState(AdminAuthAtom);
    async function login(){

        try {    

            const response=await axios.post("http://localhost:3000/admin/login",{
                username,
                password
            })
            
            successNotification(response.data.msg);
            localStorage.setItem("token",response.data.token);
            if(response.data.token){
                try {
                    const AdminData=await axios.get("http://localhost:3000/employee_data/?username="+username,{
                        headers:{
                            'Authorization':localStorage.getItem("token"),
                        }
                    });
        
                    
        
                    if(AdminData.data.user.access_rights=='admin'){
                        setUsernameAtom(AdminData.data.user.username);
                        setAdminAtom(true);
                        setTimeout(()=>{
                            navigate("/admin/dashboard")
                        },3000)
                    }
                    
                } catch (error) {
        
                   // console.log(error)
                    if(error){errorNotification(error.response.data.msg)}
                }
        
            }
        } catch (error) {
            //console.log(error)
            localStorage.removeItem("token");
            errorNotification(error.response.data.msg);
        }

        
    }
    

    

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">

            
            <div className="bg-slate-100 p-7 rounded-lg h-100 mt-10 mb-10 flex flex-col justify-center">
                <Logo></Logo>
                <Heading title={"Admin Sign in"}></Heading>
                <SubHeading label={"Please sign in with username and password"}></SubHeading>
                <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder={"Username"}></InputBox>
                <InputBox  type={"password"} onChange={e=>setPassword(e.target.value)} placeholder={"Password"}></InputBox>
                <Button func={login} label={"Sign in"}></Button>
                <Notification/>
                <BottomWarning label={"Dont have a account?"} buttonText={"Create Account"} to={"/admin/signup"}></BottomWarning>
            
            </div>
        </div>
        
        
    )


}