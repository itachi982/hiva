import React, { useState } from "react";
import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";
import { UploadFile } from "../components/Uploadfile";
import { Button } from "../components/SigninHelper";
import { useRecoilState } from "recoil";
import { urlAtom } from "../Atoms/EmployeeData";
import { UpdatePicAtom } from "../Atoms/Updatepic";
import axios from "axios";
import { EmpIDAtom } from "../Atoms/AdminState";
import { UsernameAtom } from "../Atoms/AdminState";



export const ProfileEdit = () => {
    const [UserMenuOpen, setUserMenuOpen] = useState(false);
    const [ReportsMenuOpen, setReportsMenuOpen] = useState(false);
    const [url,seturl]=useRecoilState(urlAtom);
    const [image,setImage]=useRecoilState(UpdatePicAtom);
    const [EmpID,setEmpID]=useRecoilState(EmpIDAtom);
    const [username,setUsername]=useRecoilState(UsernameAtom);
    let dusername=username;

    const closeAllMenus = () => {
        setUserMenuOpen(false);
        setReportsMenuOpen(false);
    };


    return (
        <div>
            <div className="h-screen bg-slate-300">
                <UserNavbar />
                <div>
                    <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
                        
                    </div>
                </div>
                <div className="text-gray-500 font-md mt-10 text-4xl pl-20">
                    Edit Your Profile
                </div>
                <div className="text-gray-500 text-xl mt-20 pl-40 grid grid-cols-2">
                    <div className="">
                        Change Username
                        <div className="mt-3">
                            {/* <input placeholder={"Enter New UserName"} /> */}

                           <div className="flex space-x-5 mt-10">
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                    </span>
                                    <input onChange={e=>{dusername=e.target.value}} type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm border-gray-300 p-2.5" placeholder="username" defaultValue={username}/>
                                </div>
    
                                <div>
                                    <Button func={async()=>{
                                        try {
                                            const response=await axios.post("https://hiva-1.onrender.com/employee/updateUsername/"+EmpID,{
                                                username:dusername
                                            },{
                                                headers:{
                                                    'Authorization':localStorage.getItem('token')
                                                }
                                            })
                                            //console.log(response.data)
                                            alert(response.data.msg)
                                            localStorage.setItem('token',response.data.token)
                                        } catch (error) {
                                            alert('Username Update Failed')
                                        }
                                    }} label="Update username"></Button>
                                </div>
                            </div>
                          

                        </div>
                    </div>
                    <div className="pt-10 flex justify-around">
                       
                       <div className="bg-gray-400 p-7 rounded-full">
                            <img width="300px" height="600px" src={url} alt="" />
                       </div>
                       <div className="mt-8">
                        <UploadFile/>
                       </div>
                       <div className="mt-10">
                            <Button func={async()=>{
                                try {
                                    const formData = new FormData();
                                    formData.append('file', image);
                                    const response = await axios.post('https://hiva-1.onrender.com/profile_pic/upload/'+EmpID, formData, {
                                      headers: {
                                          'Authorization':localStorage.getItem('token'),
                                          'Content-Type': 'multipart/form-data', // Make sure to set the correct content type for FormData
                                      },
                                    });
                                    alert("Profile Updated")
                                  } catch (error) {
                                    alert("profile pic not uploaded")
                                  }
                            }} label="Submit"></Button>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};