import React, { useEffect, useState } from "react";

import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";
import { Button } from "../components/SigninHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../components/Notification";

export const UserChangePassword=()=>{
    const [UserMenuOpen,setUserMenuOpen]=useState(false);
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
    const [oldPassword,setoldPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [newPassword,setnewPassword]=useState("");
    const navigate=useNavigate();


    const changePass=async()=>{

        try {
      
            const response = await axios.patch("http://localhost:3000/employee_data/change_password",{
               
                    oldPassword,
                    newPassword,
                    confirmPassword
        },{
                    headers:{
                        'Authorization':localStorage.getItem('token')
                    }
                }
            )
            console.log(response.status)
           if(response.status==200){alert(response.data.msg)}

           localStorage.removeItem('token')

           setTimeout(()=>{
            navigate("/employee/signin")
           },1000)
              
        
        } catch (error) {
            console.error(error);
            // if (error) {
            //     errorNotification(response.data.msg);
            // }
        }

        
    
    }

    
    const closeAllMenus=()=>{
      setUserMenuOpen(false);
      setReportsMenuOpen(false);
    }
    return (
        <div>
            <div className="h-screen bg-slate-300">
                    <UserNavbar />
                     <div>
                         <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
                             <div className="relative">
                                <div>
                                    <ReportsDrop
                                    isOpen={ReportsMenuOpen}
                                    setIsOpen={setReportsMenuOpen}
                                    closeAllMenus={closeAllMenus}
                                    />
                                </div>
                             </div>
                        </div>
                     </div>

                    <div className="flex justify-center pt-20 font-medium mt-6 text-gray-500  shadow-lg text-5xl">
                        Change Password
                    </div>

                    <div className="bg-slate-300 p-4 grid justify-center shadow-md ">
                         <div className="bg-slate-300 pt-20">
                            Enter your old password :
                         <div>                  
                        <input onChange={e=>{setoldPassword(e.target.value)}} type="text" placeholder="Enter old passord" className="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>  
            
                    </div>
                    <div className="pt-5">
                       Enter new password :
                            <div>
                                    
                        <input onChange={e=>{setnewPassword(e.target.value)}} type="text" placeholder="enter password" className="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/> 
                        </div>
                    </div>
                      <div className="pt-5">
                                Retype to confirm new password :
                        <div>
                                    
                            <input onChange={e=>{setconfirmPassword(e.target.value)}} type="text" placeholder="retype password" className="border  border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
                            
                      </div>
                                
                     </div>

                     <div className="ml-20 w-full">
                        <Button label="Submit" func={changePass}></Button>
                     </div>


                    
            </div>
            
            </div>
            <div>
                        <Footer/>
                    </div>
            </div>
            </div>
       

    )
}
