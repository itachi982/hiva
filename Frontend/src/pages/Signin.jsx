import { useState } from "react"
import { BottomWarning, Button, Heading, InputBox, SubHeading ,Logo} from "../components/SigninHelper"
import Notification, { successNotification,errorNotification } from "../components/Notification";
import axios from "axios";

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
    const [showPassword, setShowPassword] = useState(false);

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">
            
            <div className="bg-slate-100 p-7 rounded-lg h-100 mt-10 mb-10 flex flex-col justify-center">
                <Logo></Logo>
                <Heading title={"Sign in"}></Heading>
                <SubHeading label={"Please sign in with username and password"}></SubHeading>
                <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder={"Username"}></InputBox>
                <input type={showPassword ? "text" : "password"} placeholder="Password" className="rounded-md w-auto px-2 py-1 m-1 border-slate-200 mb-5"/>
                {/* <button onClick={e=>{setShowPassword(!showPassword)}}>click</button> */}
                <Button func={login} label={"Sign in"}></Button>
                <Notification/>
                <BottomWarning label={"Dont have a account?"} buttonText={"Create Account"} to={"/signup"}></BottomWarning>
              


            </div>
        </div>
        
        
    )


}