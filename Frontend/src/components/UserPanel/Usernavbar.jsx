import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserDropDown } from "../Dropdown/Userdropdown";

export const UserNavbar = () => {
  const [UserMenuOpen,setUserMenuOpen]=useState(false);
  const closeAllMenus=()=>{
    setUserMenuOpen(false);
  }
  return (
    <div>
    <div className="flex justify-between pr-10 pl-10 py-2 bg-slate-300">
                  <Link to="/home">
                    <button className="bg-slate-300">
                      <img className="size-8 h-10 mt-2 w-auto " src={logo} alt="hiva logo" />
                    </button>
                  </Link>

      <div className="flex justify-end">
                <div className="mr-6 mt-4">username</div>
                    
            </div>
          </div>
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Default avatar"
            />
          </div>
          <div>
          
      
          <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
        <div className="relative">
          <div>
            <UserDropDown
              isOpen={UserMenuOpen}
              setIsOpen={setUserMenuOpen}
              closeAllMenus={closeAllMenus}
            />
          </div>
        </div>
          </div>
          </div>
          </div>
      
  );
};
