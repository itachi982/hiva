import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'



export const UserDashboard=()=>{
    return (
        <div>
            <div className="bg-slate-300 m-40 flex justify-between ">
                <div>
                        <div className="text-4xl p-8 text-yellow-900 ">
                        Dashboard 
                        </div>                                 
                        <div className="text-green-700 h-14 w-100 text-sm m-10 pb-4">
                            Welcome to Hiva, you are logged in as an employee.
                        </div>
                        <div className="text-xl p-4 m-10">
                                Employee data
                        </div>
                        <div className="flex p-8 space-x-20">
                              <div>
                                 <img src={pic} className="w-full md:w-80 h-64 rounded-md filter saturate-200 contrast=125 flex space-x-4" alt="pic"/>
                                </div>
                                
                                <div>
                                    <div className="h-16 w-24 text-pretty text-orange-700">Job Role              :</div>                         
                                   <div className="h-16 w-24  text-pretty text-orange-700">PAN                   :</div> 
                                    <div className="h-16 w-30 text-pretty text-orange-700">Employee Name         :</div>
                                    <div className="h-16 w-24 text-pretty text-orange-700">D.O.J                 :</div>
                                 </div>
                                 </div>
                </div>
            </div>
        </div> 

    )
}



//download reports button