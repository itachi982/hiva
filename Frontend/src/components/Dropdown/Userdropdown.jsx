import React, { useState } from "react";
import { Link } from "react-router-dom";
import { successNotification } from "../Notification";
import { useRecoilState, useRecoilValue } from "recoil";
import { AdminAuthAtom } from "../../Atoms/AuthAtom";
import { UsernameAtom, roleAtom,EmpIDAtom } from "../../Atoms/AdminState";
import { urlAtom } from "../../Atoms/EmployeeData";
import { useEffect } from "react";
import { errorNotification } from "../Notification";
import defaultPic from "../../assets/vect.png"
import axios from "axios";

export const UserDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // State for submenu
  const [username,setUsername]=useRecoilState(UsernameAtom);
  const [url,seturl]=useRecoilState(urlAtom);
  const [role,setrole]=useRecoilState(roleAtom);
  const [EmpID,setEmpID]=useRecoilState(EmpIDAtom);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/employee/username", {
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            });
           
            setUsername(response.data.username);
            setrole(response.data.role)
            setEmpID(response.data.empId)
        } catch (error) {
            console.error(error);
            if (error) {
                errorNotification(error.response.data.msg);
            }
        }
    };
    fetchData();
}, []);

useEffect(()=>{
  const fetchurl=async()=>{
    try {
      
      const durl = await axios.get("http://localhost:3000/profile/url?username="+username, {
          headers: {
              'Authorization': localStorage.getItem("token")
          }
      });
      //console.log(durl)
     
      seturl(durl.data.durl.url);
  } catch (error) {
      //console.log(error);
      if (error) {
          errorNotification(error.response.data.msg);
      }
  }
  }
  fetchurl();
},[username])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const Signout=()=>{

    //console.log("OK")
    localStorage.removeItem("token");
    alert("Logged out")
  }
  

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className=""
          id="menu-button"
          onClick={toggleMenu}
        >
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={url?url:defaultPic}
              alt="Default avatar"
            />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              onClick={toggleSubMenu}
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
              role="menuitem"
              tabIndex="-1"
            >
              Account settings
              <svg
                className="ml-2 h-5 w-5 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isSubMenuOpen && ( // Rendering submenu if isSubMenuOpen is true
              <div
                className="py-1"
                role="none"
              >
                <Link to="/Userchangepassword">
                  <button
                    className="text-gray-500 block pl-8 text-center text-sm"
                    role="menuitem"
                    tabIndex="-1"
                  >
                  - Change Password
                  </button>
                </Link>
                <Link to='/profileedit'>
                  <button
                    className="text-gray-500 block pl-8 text-center text-sm"
                    role="menuitem"
                    tabIndex="-1"
                  >
                  - Profile Edit
                  </button>
                </Link>
              </div>
            )}
            <Link to={role=="user"?"/employee/signin":"/admin/signin"}>
            <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
                onClick={Signout}
              >
                Sign out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
