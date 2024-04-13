import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import defaultpic from "../assets/vect.png"
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { AdminAuthAtom } from "../Atoms/AuthAtom";
import { errorNotification, successNotification } from "../components/Notification";
import { selectedUserAtom } from "../Atoms/Gender";
import { AdminDropdown } from "./Dropdown/AdminDropdown";
import { AdminDropdownAtom } from "../Atoms/DropDown";

export const DataEmployeeForAdmin = () => {
    const [employeeData, setEmployeeData] = useRecoilState(AdminAuthAtom);
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteEntry,setdelete]=useState("")
    const [selectedUser,setSelectedUser]=useRecoilState(selectedUserAtom);
    const [role,setRole]=useRecoilState(AdminDropdownAtom);
    const pageSize = 4; // Number of items per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://hiva-1.onrender.com/employee_data/all", {
                    headers: {
                        'Authorization': localStorage.getItem("token")
                    }
                });
                setEmployeeData(response.data.data);
            } catch (error) {
                console.error(error);
                if (error) {
                    errorNotification(error.response.data.msg);
                }
            }
        };
        fetchData();
        
    }, [deleteEntry]);
  

    // Calculate total pages based on the number of items and page size
    const totalPages = Math.ceil(employeeData.length / pageSize);

    // Slice the employee data array to display only the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentEmployeeData = employeeData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

   

    return (
        <div className="h-screen bg-slate-300">
            <AdminNavbar />
            <div className="text-3xl text-gray-500 ml-10 mt-10 pl-10">
                Employee Data
            </div>
            <div>
                <Link to="/admin/addEmployee">
                    <button className="text-white text-2xl text-center mt-4 ml-20 rounded-md bg-black p-2 pr-5 pl-5">
                        Add Employee +
                    </button>
                </Link>
            </div>

            <div className="grid row-span-2 mt-10 p-10">
                <div className="flex justify-between p-7 ml-2 text-xl font-semibold bg-white rounded-xl">
                    {/* Header for employee data */}
                    {/* Adjust the headers based on your data structure */}
                    <p>Profile Pic</p>
                    <p>PAN</p>
                    <p>Username</p>
                    <p>Job Position</p>
                    <p>Join Date</p>
                    <p>Status</p>
                    <p>Access Rights</p>
                </div>

                <div className="mt-10 p-1">
                    {/* Render employee data for the current page */}
                    {Array.isArray(currentEmployeeData) &&currentEmployeeData.map((employeeData, index) => (
                        <div key={index} className="border grid row-span-1 p-2 ">
                            {/* Adjust the rendering based on your data structure */}
                            <div className="flex justify-between">
                               
                                <img className="rounded-full size-20" src={employeeData.url?employeeData.url:defaultpic} alt="profilepic" />
                                <p>{employeeData.PAN}</p>
                                <p>{employeeData.username}</p>
                                <p>{employeeData.job?employeeData.job.job_title:"No Positions"}</p>
                                <p>{employeeData.join_date?employeeData.join_date:"Not Available"}</p>
                                <p>{employeeData.status}</p>
                                <p>{employeeData.access_rights}</p>
                                {/* <div>{<AdminDropdown role={employeeData.access_rights}/>}</div> */}
                                
                                <div className="flex justify-between space-x-2">
                                    
                                    <Link to={"/user/edit"}>
                                        <button  className="pt-6" title="Edit" onClick={()=>{setSelectedUser(employeeData.username)}}>
                                            <svg className="h-8 w-8 text-amber-500"  viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>                                   
                                        </button>
                                    </Link>
                                     
                                    <button title="Delete" onClick={async()=>{const response=await axios.delete("https://hiva-1.onrender.com/employee_data/delete?username="+employeeData.username,{
                                                            headers:{
                                                                    'Authorization':localStorage.getItem('token')
                                                                    }
                                                    })
                                                alert(response.data.msg);
                                                setdelete(employeeData.username)}}>
                                        <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                    </button>
                                    <Link to='/user/report'>
                                        <button className="pt-6" onClick={()=>{setSelectedUser(employeeData.username)}}>
                                            <svg className="h-8 w-8 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls */}
                <div className="flex justify-center mt-4 gap-5">
                    <button className="bg-black text-white rounded-md text-xl p-1" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span className="mx-2 bg-black text-white rounded-md text-xl px-3 pt-1">{currentPage}</span>
                    <button className="bg-black text-white rounded-md text-xl p-1" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};
