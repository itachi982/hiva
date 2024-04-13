import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { errorNotification } from "../components/Notification";
import { JobPositionAtom } from "../Atoms/AdminState";

export const DataRole = () => {
    const [jobData, setjobData] = useRecoilState(JobPositionAtom);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Number of items per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://hiva-1.onrender.com/job_positions/all", {
                    headers: {
                        'Authorization': localStorage.getItem("token")
                    }
                });
                setjobData(response.data.jobdata);
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
    const totalPages = Math.ceil(jobData.length / pageSize);

    // Slice the employee data array to display only the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentJobData = jobData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
   

    return (
        <div className="h-screen bg-slate-300">
            <AdminNavbar />
            <div className="text-3xl text-gray-500 ml-10 mt-10 pl-10">
                Job Data
            </div>
            <div>
                <Link to="/AddJobData">
                    <button className="text-white text-2xl text-center mt-4 ml-20 rounded-md bg-black p-2 pr-5 pl-5">
                        Add Job +
                    </button>
                </Link>
            </div>

            <div className="grid row-span-2 mt-10 p-10">
                <div className="flex justify-between p-7 ml-2 text-xl font-semibold bg-white rounded-xl">
                   
                    <p>Job Title</p>
                    <p>Base Salary</p>
                    <p>Transportation Allowance</p>
                    <p>Meal Allowance</p>
                </div>

                <div className="mt-10 p-1">
                
                    {Array.isArray(currentJobData) &&currentJobData.map((jobData, index) => (
                        <div key={index} className="border grid row-span-1 p-2">
                            
                            <div className="flex justify-between">
                                <p>{jobData.job_title}</p>
                                <p>{jobData.base_salary}</p>
                                <p>{jobData.transportation_allowance}</p>
                                <p>{jobData.meal_allowance}</p>
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
                        {/* {console.log(currentPage)} */}
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};
