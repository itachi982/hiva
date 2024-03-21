import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";



export const UserDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


<div className="relative inline-block text-left">             
                       <div>
                          <button
                            className="inline-flex w-100 justify-center gap-x-1.5 rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-offset-0 ring-gray-300 hover:bg-blue-100"
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

                                        <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            
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
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Account settings
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          License
                        </a>
                        <form method="POST" action="#" role="none">
                          <button
                            type="submit"
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                      )};
                      </div>
};