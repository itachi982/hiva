
import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from "../components/Footer"
import { useState } from "react";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";

export const LicensingContent = () => {
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
   
    const closeAllMenus=()=>{
      setReportsMenuOpen(false);
    
    }
    return (    
    <div>
            <div className=" bg-slate-300">
                <UserNavbar />        
            </div>
            <div className="bg-slate-300 h-200 p-40 text-xl font-semibold text-gray-600 text-center">
                <p className="text-center">MIT License</p><br/>

                <p className="text-center">Copyright (c) 2024 Vishal Patsariya and Chitresh Manjhi</p><br/>

                <p className="text-center">Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:</p><br/>

                <p>The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.</p><br/>

                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p><br/>
            </div>
            <div>
               <Footer/>
            </div>
     </div>
                 
   )
}




















