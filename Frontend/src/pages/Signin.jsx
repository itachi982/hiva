import { useState } from "react"
import { BottomWarning, Button, Heading, InputBox, SubHeading ,Logo} from "../components/SigninHelper"
import Notification, { successNotification,errorNotification } from "../components/Notification";
import axios from "axios";
import { Navbar } from "../components/Navbar";

export const Signin=()=>{


    async function login(){

        try {
            const response=await axios.post("http://localhost:3000/admin/login",{
                username,
                password
            })
            
            successNotification(response.data.msg);
            localStorage.setItem("token",response.data.token);
        
        } catch (error) {
            errorNotification("Admin not created : "+error.response.data.msg);
        }



    }

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">

            
            <div className="bg-slate-100 p-7 rounded-lg h-100 mt-10 mb-10 flex flex-col justify-center">
                <Logo></Logo>
                <Heading title={"Sign in"}></Heading>
                <SubHeading label={"Please sign in with username and password"}></SubHeading>
                <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder={"Username"}></InputBox>
                <InputBox  type={"password"} onChange={e=>setPassword(e.target.value)} placeholder={"Password"}></InputBox>
                <Button func={login} label={"Sign in"}></Button>
                <Notification/>
                <BottomWarning label={"Dont have a account?"} buttonText={"Create Account"} to={"/signup"}></BottomWarning>
            
            </div>
        </div>
        
        
    )


}