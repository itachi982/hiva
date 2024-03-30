import { AdminNavbar } from "../components/AdminPanel/AdminNavbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/SigninHelper"

export const UserEdit=()=>{

    return(
        <div>
            <div className="h-screen bg-slate-300">
                    <AdminNavbar />
                     <div>
                         <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
                             <div className="relative">
                                <div>
                                    
                                </div>
                             </div>
                        </div>
                     </div>

                    <div className="flex justify-center pt-20 font-medium mt-6 text-gray-500  shadow-lg text-5xl">
                        Edit Employee
                    </div>

                    <div className="bg-slate-300 p-4 grid justify-center shadow-md ">
                        <div className="bg-slate-300 pt-20">
                            Update Username
                        <div>                  
                        <input onChange={e=>{setoldPassword(e.target.value)}} type="text" placeholder="username" className="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>  
                    </div>
                    <div className="pt-5">
                       Update Employee Name
                            <div>
                                    
                        <input onChange={e=>{setnewPassword(e.target.value)}} type="text" placeholder="Employee Name" className="border border-gray-300 pl-10 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/> 
                        </div>
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
                     <div className="pl-20 mt-3">
                         <Button label="Submit"/>

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