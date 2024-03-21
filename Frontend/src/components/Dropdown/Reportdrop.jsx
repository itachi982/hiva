import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const ReportDrop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
        <div>
        
        <button
              className=" w-100 justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900"
              id="menu-button"
              onClick={toggleMenu}
            >
              <div>
                Reports
              </div>

                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              
            </button>

          {isMenuOpen && (
            <div
              className=" z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none absolute"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Attendance
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Salary Data
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Deduction Data
                </a>
              </div>
            </div>
          )}
        </div>
      
    
  );
};
