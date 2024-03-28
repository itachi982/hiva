import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import React, { useEffect,useState } from "react";


export const DataEmployeeForAdmin = () => {
    const [employeeData,setEmployeeData]=useState([]);
    useEffect(()=>{
        axios.post('your_api_endpoint')
        .then(response=>{
            setEmployeeData(response.data);
        })
        .catch(error=>{
            console.error('Error fetching data: ',error);
        });
    },[]);
    return (
        <div className="h-screen bg-slate-300">
            <AdminNavbar />
            <div className="text-4xl text-gray-500 ml-10 mt-5  pl-10">
                Employee Data
            </div>
            <div>
                <button className="text-white border-gray-500 text-2xl text-center mt-4 ml-20 rounded-full bg-orange-300">
                    Add Employee +
                </button>
             </div>
             <div>
    {employeeData.map(employee => (
        <div key={employee.id} className="border border-gray-300 rounded-md p-4 mb-4">
            {/* Render employee data here */}
            <p className="text-lg font-bold">Employee Name: {employee.name}</p>
            <p className="text-gray-600">Email: {employee.email}</p>
            <p className="text-gray-600">Employee ID: {employee.id}</p>
            {/* Add more fields as needed */}
        </div>
    ))}
</div>

             <div>
                <Footer/>
             </div>
             </div>
          
    );
}
