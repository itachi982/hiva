import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/sprinting.svg"

export const Heading=({title})=>{

    return(
        <div className="font-bold text-2xl pb-2 ml-2">
            {title}
        </div>
    )

}

export const SubHeading=({label})=>{

    return(
        <div className="text-slate-500 text-sm pl-3 pt-1 px-4 pb-4 mb-7">
            {label}
        </div>
    )
}

export const InputBox=({placeholder,onChange,type})=>{

    return(
        <div className='ml-2 pb-2'>
            <input type={type}onChange={onChange} placeholder={placeholder} className="rounded-md w-full px-2 py-1 border-slate-200 mb-5"/>
        </div>
    )

}

export const Button=({label,func})=>{

    return(
        
        <button onClick={func} className=" w-50 m-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {label}</button>
        
    )

}

export const BottomWarning=({label, buttonText, to})=>{
    return <div className="py-3 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <div>
      <Link to={to} className="text-blue-500 hover:underline">{buttonText}</Link>
      </div>
    </div>
}

export const Logo=()=>{

    return(
    
        <img src={logo} className="w-32 h-auto mx-auto mb-10 px-2" alt="React logo" />
    )

}