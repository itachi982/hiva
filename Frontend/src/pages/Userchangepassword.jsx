import React, { useEffect, useState } from "react";

import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";


export const UserChangePassword=()=>{
    const [UserMenuOpen,setUserMenuOpen]=useState(false);
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
    
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
                        <input type="text" class="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>  
            
                    </div>
                    <div className="pt-5">
                       Enter new password :
                            <div>
                                    
                        <input type="text" class="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/> 
                        </div>
                    </div>
                      <div className="pt-5">
                                Retype to confirm new password :
                        <div>
                                    
                            <input type="text" class="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
                            
                      </div>
                                
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
