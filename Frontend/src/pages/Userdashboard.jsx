import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from "../components/Footer"
import { useState } from "react";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";

export const UserDashboard = () => {
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
   
    const closeAllMenus=()=>{
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
                    <div className="ml-10 font-medium text-gray-500 text-2xl">
                       Employee Dashboard
                    </div>
                    <div className="flex-grow bg-slate-300 shadow-lg rounded-lg" >
                         <div className="text-stone-700 text-center text-sm">
                            Welcome to Hiva, you are logged in as an employee.
                        </div>
                    </div>
                    
                    <div className="flex p-10 bg-slate-300 space-x-40">
                        <div>
                            <img src={pic} className="w-full md:w-80 h-100 ml-40 rounded-md filter saturate-200 contrast=125 flex space-x-4" alt="pic" />
                        </div>
                        <div className="p-10">
                            <div className="h-16 w-24 text-pretty text-gray-600">Job Role :</div>
                            <div className="h-16 w-24 text-pretty text-gray-600">PAN :</div>
                            <div className="h-16 w-30 text-pretty text-gray-600">Employee Name :</div>
                            <div className="h-16 w-24 text-pretty text-gray-600">D.O.J :</div>
                        </div>
                    </div>
                    <div>
                        <Footer/>
                    </div>

            </div>
    </div>      
   )
}
