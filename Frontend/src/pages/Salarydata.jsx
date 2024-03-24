import React, { useEffect, useState } from "react";

import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";


export const SalaryData=()=>{
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
                        Salary Data
                    </div>

                                                    <div className="bg-slate-300 p-4 shadow-md ">
                                    <table className="shadow-2xl font-[poppins] border-2 w-10/12 m-40 space-y-10 bg-slate-100 border-slate-400  ">
                                        <thead>
                                            <tr>
                                                <th className="py-10">No.</th>
                                                <th className="py-10">Month/year</th>
                                                <th className="py-10"> Basic salary</th>
                                                <th className="py-10">Transportation Allownace </th>
                                                <th className="py-10">Meal Allowance </th>
                                                <th className="py-10">Deductions</th>
                                             </tr>
                                            </thead>
                                            <tbody className="text-center text-cyan-900">
                                                
                                                <tr className="bg-cyan-200">
                                                    <td>1.</td>
                                                
                                                    <td>1 Jan / 2024</td>
                                                
                                                    <td>Rs. 7,000,000</td>
                                                  
                                                    <td>Rs. 500,000</td>
                                                  
                                                    <td>Rs. 200,000</td>
                                                
                                                    <td>Rs. 100,000</td>
                                                    </tr>
                                                    <tr className="bg-cyan-200">
                                                    <td>2.</td>
                                                
                                                    <td>1 Feburary / 2024</td>
                                                
                                                    <td>Rs. 7,000,000</td>
                                                  
                                                    <td>Rs. 500,000</td>
                                                  
                                                    <td>Rs. 200,000</td>
                                                
                                                    <td>Rs. 100,000</td>
                                                    </tr>
                                                    <tr className="bg-cyan-200">
                                                    <td>2.</td>
                                                
                                                    <td>1 Feburary / 2024</td>
                                                
                                                    <td>Rs. 7,000,000</td>
                                                  
                                                    <td>Rs. 500,000</td>
                                                  
                                                    <td>Rs. 200,000</td>
                                                
                                                    <td>Rs. 100,000</td>
                                                    </tr>
                                                
                                            </tbody>
                                                
                                            
                                    </table>
                                    <div className="w-full text-center border-t-2 bg-slate-200 col-span-6">
                                        <span>Total Salary =</span>
                                        <span>Rs. 7,600,000</span>
                                    </div>
                                    <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md col-span-6">
                                        Salary Slip
                                    </button>
                                </div>
                                </div>


                    <div>
                        <Footer/>
                    </div>

            </div>
           
       

    )
}
