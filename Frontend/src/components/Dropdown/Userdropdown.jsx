import React, { useState } from "react";
import { Link } from "react-router-dom";
import { successNotification } from "../Notification";

export const UserDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // State for submenu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const Signout=()=>{

    console.log("OK")
    localStorage.removeItem("token");
    successNotification("Logged out")
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
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <button
                  onClick={() => alert("Change Password")}
                  className="text-gray-500 block pl-8 text-center text-sm"
                  role="menuitem"
                  tabIndex="-1"
                >
                 - Change Password
                </button>
                <button
                  onClick={() => alert("Profile Edit")}
                  className="text-gray-500 block pl-8 text-center text-sm"
                  role="menuitem"
                  tabIndex="-1"
                >
                 - Profile Edit
                </button>
              </div>
            )}
            <Link to="/admin">
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
