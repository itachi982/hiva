import { useEffect, useState } from "react"
import { AdminNavbar } from "../components/AdminPanel/AdminNavbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/SigninHelper"
import { GenderDropdown } from "./Dropdown/GenderDropdown"
import { useRecoilState, useRecoilValue } from "recoil"
import { GenderAtom,selectedUserAtom } from "../Atoms/Gender"
import axios from "axios"
import { UsernameAtom } from "../Atoms/AdminState"
import { successNotification } from "../components/Notification"

export const UserEdit=()=>{

    const [gender,setGender]=useRecoilState(GenderAtom);
    const [updateUsername,setUpdateUsername]=useState("");
    const [employeeName,setUpdateEmployeeName]=useState("");
    const [PAN,setPAN]=useState("")
    const [employeeId,setEmployeeId]=useState("")
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const username=useRecoilValue(selectedUserAtom);

    

   // console.log(updateUsername);


    useEffect(()=>{

        async function data(){
            try {
                const response =await axios.get("http://localhost:3000/employee_data?username="+username,{
                    headers:{
                        'Authorization':localStorage.getItem('token')
                    }
                })
                //console.log(response.data.user);
                setUpdateUsername(response.data.user.username);
                setUpdateEmployeeName(response.data.user.employee_name);
                setPAN(response.data.user.PAN);
                setEmployeeId(response.data.user.employee_id);
                setGender(response.data.user.gender);
                //setAccess_rights(response.data.user.access_rights);
            } catch (error) {
               // console.log(error)
            }
        }
        data();

    },[])

    async function update(){
        try {
            const response = await axios.patch(
                "http://localhost:3000/employee_data", // PATCH request URL
                {
                    employee_id: employeeId,
                    username: updateUsername,
                    employee_name: employeeName,
                    PAN: PAN,
                    gender: gender
                },
                {
                    params: {
                        employee_id: employeeId // Parameters in the URL query string
                    },
                    headers: {
                        'Authorization': localStorage.getItem('token') // Authorization header with JWT token
                    }
                }
            );
            alert(response.data.msg);
        } catch (error) {
            //console.log(error)   
        }
    }

    async function updatePass(){
        try {
            const response=await axios.post("http://localhost:3000/employee/admin/change_password?username="+updateUsername,{
                newPassword,
                confirmPassword               
            },{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            })
            alert(response.data.msg)
        } catch (error) {
            //console.log(error);
        }
    }

    return(
        <div className="bg-slate-300 h-screen">
            <AdminNavbar />
            <div className="grid row-span-1 justify-center p-20 space-y-10">
                <div className="flex justify-between">
                    <div className="text-xl font-semibold text-gray-500 ">Update Username</div>
                    <div className="flex justify-between">
                        <div className="">
                            <input className=" rounded-md h-8" onChange={e=>{setUpdateUsername(e.target.value)}} type="text" placeholder="username" defaultValue={username}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl font-semibold text-gray-500">Update Employee Name</div>
                    <div className="flex justify-between">
                        <div className="">
                            <input className=" rounded-md h-8" onChange={e=>{setUpdateEmployeeName(e.target.value)}} type="text" defaultValue={employeeName} placeholder="Employee Name"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl font-semibold text-gray-500 " >Update PAN</div>
                    <div className="flex justify-between">
                        <div className="">
                            <input className=" rounded-md" onChange={e=>{setPAN(e.target.value)}} type="text" defaultValue={PAN} placeholder="PAN"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl font-semibold text-gray-500">Update Employee ID</div>
                    <div className="flex justify-between">
                        <div className="">
                            <input className=" rounded-md h-8" onChange={e=>{setEmployeeId(e.target.value)}} type="text" defaultValue={employeeId} placeholder="Employee ID"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl font-semibold text-gray-500">Update Gender</div>
                   <div className="">
                        <GenderDropdown /> 
                   </div>  
                </div>  
                <div className="flex justify-center w-full">
                    <Button func={update} label="Verify and Update"></Button>
                </div>

                <div className="text-xl pb-5 font-semibold text-gray-500">New Password</div>
                <div className="flex justify-between space-x-5">
                    <div className="pt-3">
                        <input className=" rounded-md h-8" onChange={e=>{setNewPassword(e.target.value)}} type="text" placeholder="New Password"/>
                    </div>
                    <div className="flex justify-between space-x-5">
                    <div className="pt-3">
                        <input className=" rounded-md h-8" onChange={e=>{setConfirmPassword(e.target.value)}} type="text" placeholder="Confirm password"/>
                    </div>
                    <div className="">
                        <Button func={updatePass} label="Update password"></Button>
                    </div>
                </div>
                </div>
               
            </div>


            
            
            <div>
                <Footer/>
            </div>
        </div>
            
    )
}