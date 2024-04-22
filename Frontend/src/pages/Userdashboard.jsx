import { Link } from "react-router-dom";
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from "../components/Footer"
import { useState } from "react";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { useRecoilState, useRecoilValue } from "recoil";
import { EmployeeDataAtom, urlAtom } from "../Atoms/EmployeeData";
import { UsernameAtom } from "../Atoms/AdminState";
import defaultPic from "../assets/vect.png"
import { useEffect } from "react";
import { errorNotification } from "../components/Notification";
import axios from "axios";

export const UserDashboard = () => {
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
    const pic=useRecoilValue(urlAtom);
    const [username,setUsername]=useRecoilState(UsernameAtom);
    const [employeeData,setemployeeData]=useRecoilState(EmployeeDataAtom);

    useEffect(()=>{
      
      const fetchUsername=async()=>{

        try {
          const dusername = await axios.get("http://localhost:3000/employee/username", {
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
          });

          setUsername(dusername.data.username);
          //console.log(pic)
          
        } catch (error) {
          console.log(error);
          errorNotification(error.response.data.msg)
          
        }

      }

      fetchUsername();
      

    },[])

    useEffect(()=>{

      const fetchData=async()=>{

        try {
          
          const data = await axios.get("http://localhost:3000/employee_data?username="+username, {
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
          });
          setemployeeData(data.data.user)

          //console.log(employeeData.job.job_title)


        } catch(error){
          //console.log(error);
          //errorNotification(error.response.data.msg)
        }

      }

      fetchData();

    },[username])


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
            {/* <ReportsDrop
              isOpen={ReportsMenuOpen}
              setIsOpen={setReportsMenuOpen}
              closeAllMenus={closeAllMenus}
            /> */}
              <Link to='/report'>
                <button>Reports</button>
              </Link>
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
                    
                    <div className="flex p-10 bg-slate-300 space-x-40 justify-center">
                        <div>
                            <img src={pic?pic:defaultPic} className="rounded-lg shadow-lg ml-10 w-70 h-60 mt-10" alt="pic" />
                        </div>
                        <div className="pt-20 text-xl flex-col">
                           <div className="flex justify-between space-x-3">
                              <div className="font-semibold">Employee Name:</div>
                              <div className="text-gray-600">{employeeData.employee_name}</div>

                           </div>
                           <div className="flex justify-between space-x-3">
                              <div className="font-semibold">Employee ID:</div>
                              <div className="text-gray-600">{employeeData.employee_id}</div>

                           </div>
                           <div className="flex justify-between space-x-3">
                              <div className="font-semibold">PAN:</div>
                              <div className="text-gray-600">{employeeData.PAN}</div>

                           </div>
                           <div className="flex justify-between space-x-3">
                              <div className="font-semibold">Role :</div>
                              <div className="text-gray-600">{employeeData.job?employeeData.job.job_title:"No Positions"}</div>

                           </div>
                           <div className="flex justify-between space-x-3">
                              <div className="font-semibold">Join Date:</div>
                              <div className="text-gray-600">{employeeData.join_date?employeeData.join_date:"Date Not Available"}</div>

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
