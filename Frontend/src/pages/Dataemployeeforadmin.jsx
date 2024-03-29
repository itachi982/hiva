import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { AdminAtom } from "../Atoms/AuthAtom";
import { errorNotification } from "../components/Notification";

export const DataEmployeeForAdmin = () => {
    const [employeeData, setEmployeeData] = useRecoilState(AdminAtom);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Number of items per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/employee_data/all", {
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
        
    }, []);

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
                        <div key={index} className="border grid row-span-1 p-2">
                            {/* Adjust the rendering based on your data structure */}
                            <div className="flex justify-between">
                                <img className="rounded-full size-20" src={employeeData.url} alt="profilepic" />
                                <p>{employeeData.PAN}</p>
                                <p>{employeeData.username}</p>
                                <p>{employeeData.job?employeeData.job.job_title:"No Positions"}</p>
                                <p>{employeeData.join_date?employeeData.join_date:"Not Available"}</p>
                                <p>{employeeData.status}</p>
                                <p>{employeeData.access_rights}</p>
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
