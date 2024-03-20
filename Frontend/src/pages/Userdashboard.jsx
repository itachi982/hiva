import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from "./footer"

export const UserDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <UserNavbar />

            <div className="flex-grow bg-slate-200 shadow-lg flex flex-col justify-between">
                <div>
                    <div className="text-4xl p-8 text-center text-yellow-900 ">
                        Dashboard
                    </div>
                    <div className="text-green-700 h-14 w-100 ml-40 text-sm m-10 pb-4">
                        Welcome to Hiva, you are logged in as an employee.
                    </div>
                    <div className="text-xl ml-60 m-10">
                        Employee data
                    </div>
                    <div className="flex p-8 ml-40 space-x-40">
                        <div>
                            <img src={pic} className="w-full md:w-80 h-64 rounded-md filter saturate-200 contrast=125 flex space-x-4" alt="pic" />
                        </div>

                        <div>
                            <div className="h-16 w-24 text-pretty text-orange-700">Job Role :</div>
                            <div className="h-16 w-24 text-pretty text-orange-700">PAN :</div>
                            <div className="h-16 w-30 text-pretty text-orange-700">Employee Name :</div>
                            <div className="h-16 w-24 text-pretty text-orange-700">D.O.J :</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
