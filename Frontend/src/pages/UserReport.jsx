import { AdminNavbar } from "../components/AdminPanel/AdminNavbar"
import { AttendanceCard, DeductionCard, SalaryCard } from "../components/cards/Card"
import { AdminDashboard } from "./AdminDashboard"
import { Link } from "react-router-dom"
import image from "../../src/assets/reports.svg"
import { useRecoilState, useRecoilValue } from "recoil"
import { ReportAtom } from "../Atoms/ReportAtom"
import { useEffect } from "react"
import axios from "axios"
import { selectedUserAtom } from "../Atoms/Gender"
import { SalaryAtom,AttendanceAtom,DeductionAtom } from "../Atoms/ReportAtom"
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { EmployeeDataAtom } from "../Atoms/EmployeeData"
export const UserReport=()=>{

    const [reportData,setReportData]=useRecoilState(ReportAtom);
    const [salaryData,setSalaryData]=useRecoilState(SalaryAtom);
    const [attendanceData,setAttendanceData]=useRecoilState(AttendanceAtom);
    const [deduction,setDeduction]=useRecoilState(DeductionAtom);
    const [employeeData,setemployeeData]=useRecoilState(EmployeeDataAtom);

    useEffect(()=>{

        async function Data(){

            try {

                
                const response=await axios.get("https://hiva-1.onrender.com/report/salaryData?username="+employeeData.username,{
                    headers:{
                        'Authorization':localStorage.getItem('token')
                    }
                })
                

                if(response.data[1].Salary){
                    setSalaryData(response.data[1].Salary);
                }
                else{
                    setSalaryData("");
                }
                if(response.data[2].attendances){
                    setAttendanceData(response.data[2].attendances);
                }
                else{
                    setAttendanceData("");
                }
                if(response.data[3].deductions){

                    setDeduction(response.data[3].deductions);
                }else{
                    setDeduction("");
                }
                //console.log(attendanceData +"Report.jsx");
            } catch (error) {
                //console.log(error)
            }

        }

        setTimeout(()=>{
            Data();
        },1000)
    },[])


    return(
        <div className="h-screen bg-slate-300">
            <UserNavbar/>
            <div className="flex justify-center pt-10 space-x-10 ">
                <div>
                    <img className="w-45 h-45 rounded-md" src={image} alt="background" />
                </div>
                <div>
                <div className="flex justify-center space-x-10 pt-10">
                    {/* <div className="">  
                        <Link to="/admin/addEmployee">
                            <button className="text-white text-2xl text-center mt-4 ml-20 rounded-md bg-black p-2 pr-12 pl-12" >
                                Edit Salary +

                            </button>
                        </Link>
                    </div> */}
                    <div className="">
                        <SalaryCard/>
                    </div>
                </div>
                <div className="flex pl-60 space-x-10 pt-10 pr-60">
                    
                    <div>
                        <AttendanceCard/>
                    </div>
                    
                </div>
                <div className="flex justify-center space-x-10 pt-10">
                    
                    <div>
                        <DeductionCard/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}