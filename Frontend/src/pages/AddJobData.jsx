import { useState } from "react"
import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Button } from "../components/SigninHelper";
import axios from "axios"
import pic from "../assets/job.svg"

export const AddJobData = () => {

    const [job_title,setJob_title]=useState("");
    const [base_salary,setBase_salary]=useState("");
    const [transportation_allowance,setTransportation_allowance]=useState("");
    const [meal_allowance,setMeal_allowance]=useState("");

    async function CreateJob(){

        if(job_title=="" || base_salary==""){
            alert("Please fill all the fields");
        }
        
        try {
            const job=await axios.post("https://hiva-1.onrender.com/job_positions",{
                job_title:job_title,
                base_salary:parseInt(base_salary),
                transportation_allowance:parseInt(transportation_allowance),
                meal_allowance:parseInt(meal_allowance)
            },{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            })
            if(job){
                alert(job.data.msg)
            }
        } catch (error) {
            //console.log(error)
            alert("Job Creation Failed")
        }

    }

    return(
        <div className="bg-gray-300 h-screen">
            <AdminNavbar />
            <div className="flex justify-around">
                <div className="mt-20 pt-10">
                    <img src={pic} alt="signup" />
                </div>

                <div>
                <div className="flex justify-end space-x-10 mt-40 mr-10 ">
                <div>
                    <div className="pb-3 text-gray-700 font-semibold">Job Title</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  onChange={e=>{setJob_title(e.target.value)}} required type="text"  placeholder="Job Title"/>
                    </div>
                </div>
                <div >
                    <div className="pb-3 text-gray-700 font-semibold">Base Salary</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  type="text"  placeholder="Base Salary" onChange={e=>{setBase_salary(e.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className="pt-5 flex justify-end space-x-10 mr-10">
                <div>
                    <div className="pb-3 text-gray-700 font-semibold">Transportation Allowance</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  required type="text"  placeholder="Transportation Allowance" onChange={e=>{setTransportation_allowance(e.target.value)}}/>
                    </div>
                </div>
                <div >
                    <div className="pb-3 text-gray-700 font-semibold">Meal Allowance</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  type="text"  placeholder="Meal Allowance" onChange={e=>{setMeal_allowance(e.target.value)}}/>
                    </div>
                </div>
            </div>  
            <div className="flex justify-end mt-10 mr-40 pr-5">
                <Button func={CreateJob} label={"Create Employee"}/>
            </div>
                </div>
                

            </div>
        </div>
    )
}