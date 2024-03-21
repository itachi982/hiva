import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from '../components/Footer';

export const UserDashboard = () => {
    return (    
        <div>
            <div className="h-screen border-slate-300">
                <UserNavbar />
                    <div className="flex-grow bg-slate-200 shadow-lg flex flex-col justify-between">
                         <div className="text-4xl p-4 text-center text-cyan-900 ">
                            Dashboard
                         </div> 
                    </div>
                    <div className="flex-grow bg-slate-100 shadow-lg rounded-lg flex justify-between" >
                         <div className="text-stone-700 mt-2 ml-60 text-sm pb-1">
                            Welcome to Hiva, you are logged in as an employee.
                        </div>
                    </div>
                    <div className="flex-grow shadow-inner bg-slate-400 ">
                        <div className="text-2xl text-pretty p-2 text-green-200 text-center">
                            Employee data
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
