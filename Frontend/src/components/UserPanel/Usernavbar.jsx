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
    <div className="grid grid-rows-1 relative">
    <div className="flex justify-between pr-10 pl-10 py-2 bg-slate-200 border shadow-lg">
                  <Link to="/home">
                    <button>
                      <img className="size-8 w-auto " src={logo} alt="hiva logo" />
                    </button>
                  </Link>

      <div className="flex justify-end">
                <div className="mr-6 mt-2">username</div>                 
                  <div className="flex justify-center shadow-lg ">
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
          </div>
          
      
  );
};
