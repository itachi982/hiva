import { AdminNavbar } from "../components/AdminPanel/AdminNavbar"
import { AttendanceCard, DeductionCard, SalaryCard } from "../components/cards/Card"
import { AdminDashboard } from "./AdminDashboard"
import { Link } from "react-router-dom"
import image from "../../src/assets/reports.svg"
import { useRecoilState, useRecoilValue } from "recoil"
import { ReportAtom } from "../Atoms/ReportAtom"
import { useEffect } from "react"
import axios from "axios"
import { UsernameAtom } from "../Atoms/AdminState"
import { SalaryAtom,AttendanceAtom,DeductionAtom } from "../Atoms/ReportAtom"
import { UserNavbar } from "../components/UserPanel/Usernavbar"
export const UserReport=()=>{

    const [reportData,setReportData]=useRecoilState(ReportAtom);
    const [salaryData,setSalaryData]=useRecoilState(SalaryAtom);
    const [attendanceData,setAttendanceData]=useRecoilState(AttendanceAtom);
    const [deduction,setDeduction]=useRecoilState(DeductionAtom);
    const username=useRecoilValue(UsernameAtom);

    useEffect(()=>{

        async function Data(){

            try {
                const response=await axios.get("http://localhost:3000/report/salaryData?username="+selectedUser,{
                    headers:{
                        'Authorization':localStorage.getItem('token')
                    }
                })
                setReportData(response.data);
                setSalaryData(response.data[1].Salary);
                setAttendanceData(response.data[2].attendances);
                setDeduction(response.data[3].deductions);
               // console.log(attendanceData);
            } catch (error) {
               // console.log(error)
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
                    <div className="">  
                      
                    </div>
                    <div>
                        <SalaryCard/>
                    </div>
                </div>
                <div className="flex justify-center space-x-10 pt-10">
                    <div className="">  
                      
                    </div>
                    <div>
                        <AttendanceCard/>
                    </div>
                </div>
                <div className="flex justify-center space-x-10 pt-10">
                    <div className="">  
                     
                    </div>
                    <div>
                        <DeductionCard/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}