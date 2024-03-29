import React, { useEffect, useState } from "react";

import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";
import { MonthDrop } from "../components/Dropdown/Monthdrop";
import { YearDrop } from "../components/Dropdown/Yeardrop";


export const AttendanceData=()=>{
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
                     <div className=" pl-16 font-medium mt-6 text-gray-500  shadow-lg text-5xl">
                        Attendance Data
                     </div>
                     <div className="text-2xl ml-20 mt-10 text-pink-950">
                        Filter Employee Attendance Data
                     </div>
                     <div className="bg-white">
                        <div className="text-2xl ml-40 mt-4 ">
                            Month
                            <MonthDrop/>
                        
                        </div>
                        <div className="text-2xl ml-40 mt-4 ">
                             Year
                             <YearDrop/>
                        </div>
                             
                             </div>
                     </div>
                    <div>
                        <Footer/>
                    </div>
                
            </div>
           
       

    )
}
