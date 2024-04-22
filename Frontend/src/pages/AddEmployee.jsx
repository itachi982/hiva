import { AdminNavbar } from "../components/AdminPanel/AdminNavbar"
import { Button } from "../components/SigninHelper"
import { GenderDropdown } from "./Dropdown/GenderDropdown"
import { JobDataDropdown } from "./Dropdown/JobDataDropdown"
import { JobPositionAtom } from "../Atoms/AdminState"
import { constSelector, useRecoilState, useRecoilValue } from "recoil"
import { useEffect, useState } from "react"
import axios from "axios"
import { GenderAtom } from "../Atoms/Gender"
import { SelectedJobAtom } from "../Atoms/DropDown"
import pic from "../assets/EmployeeCreate.svg"
export const AddEmployee = () => {
    
    const [jobData, setjobData] = useRecoilState(JobPositionAtom);
    const [EmployeeName,setEmployeeName]=useState("");
    const [EmployeeID,setEmployeeID]=useState("");
    const [Username,setUsername]=useState("");
    const [PAN,setPAN]=useState("");
    const [Password,setPassword]=useState("");
    const [ConfirmPassword,setConfirmPassword]=useState("");
    const Gender = useRecoilValue(GenderAtom);
    const Job_id = useRecoilValue(SelectedJobAtom);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/job_positions/all", {
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

   

    async function CreateEmployee(){

        if(EmployeeName=="" || EmployeeID=="" || Username=="" || PAN=="" || Password=="" || ConfirmPassword=="" || Gender=="Gender" || Job_id=="Select Job Role"){
            alert("Please fill all the fields");
        }
        
        if(Password!=ConfirmPassword){
            alert("Password does not match");
        }

        try {
            const Employee=await axios.post("http://localhost:3000/employee/create",{
                employee_id:EmployeeID,
                employee_name:EmployeeName,
                username:Username,
                PAN:PAN,
                password:Password,
                gender:Gender,
                jobdataid:Job_id
            },{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            })
            if(Employee){
                alert(Employee.data.msg)
            }
        } catch (error) {
            //console.log(error)
            alert("Employee Creation Failed")
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
                    <div className="pb-3 text-gray-700 font-semibold">Employee Name</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  onChange={e=>{setEmployeeName(e.target.value)}} required type="text"  placeholder="Employee Name"/>
                    </div>
                </div>
                <div >
                    <div className="pb-3 text-gray-700 font-semibold">Employee ID</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  type="text"  placeholder="Employee ID" onChange={e=>{setEmployeeID(e.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className="pt-5 flex justify-end space-x-10 mr-10">
                <div>
                    <div className="pb-3 text-gray-700 font-semibold">Username</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  required type="text"  placeholder="Username" onChange={e=>{setUsername(e.target.value)}}/>
                    </div>
                </div>
                <div >
                    <div className="pb-3 text-gray-700 font-semibold">PAN</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  type="text"  placeholder="PAN" onChange={e=>{setPAN(e.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className="pt-5 flex justify-end space-x-10 mr-10 ">
                <div>
                    <div className="pb-3 text-gray-700 font-semibold">Password</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  required type="text"  placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                <div >
                    <div className="pb-3 text-gray-700 font-semibold">Confirm Password</div>
                    <div>
                        <input className=" rounded-md h-8 pl-2"  type="text"  placeholder="Confirm Password" onChange={e=>{setConfirmPassword(e.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className="pt-5 flex justify-end space-x-10 mr-20 ">
                <div className="mr-20 pr-5">
                    <GenderDropdown/>
                </div>
                <div className="mr-5">
                    <JobDataDropdown/>
                </div>
            </div>
            <div className="flex justify-end mt-10 mr-40 pr-5">
                <Button func={CreateEmployee} label={"Create Employee"}/>
            </div>
                </div>
                

            </div>
        </div>
    )
}