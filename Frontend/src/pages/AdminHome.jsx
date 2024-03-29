import React from "react";
import '../Shared/Shared.css'
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


export const AdminHome=()=>{

    return(
        
        <div>
            <div className="flex justify-between pr-10 pl-10 pt-5 bg-slate-200">
            
                <Link to="/admin/home">
                    <button><img className="size-8 w-auto " src={logo} alt="hiva logo"/></button>
                </Link>
                
                <div className="flex justify-end ">

                    <Link to="/admin/signin">
                        <button type="button" className="text-gray-900 bg-slate-100 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2.5 py-1 me-2 mb-2 ">Admin Sign in</button>
                    </Link>

                    <Link to="/signup">
                        <button type="button" className="text-gray-900 bg-slate-100 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-2 mb-2">Admin Sign up</button>
                    </Link>
                </div>

            </div>
            <Banner/>
        </div>
        
    )

}
