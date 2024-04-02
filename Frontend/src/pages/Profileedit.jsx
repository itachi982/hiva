import React, { useState } from "react";
import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";
import { Footer } from "../components/Footer";

export const ProfileEdit = () => {
    const [UserMenuOpen, setUserMenuOpen] = useState(false);
    const [ReportsMenuOpen, setReportsMenuOpen] = useState(false);
   
    const closeAllMenus = () => {
        setUserMenuOpen(false);
        setReportsMenuOpen(false);
    };


    return (
        <div>
            <div className="h-screen bg-slate-300">
                <UserNavbar />
                <div>
                    <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
                        <div className="relative">
                            <div>
                                <ReportsDrop
                                    isOpen={ReportsMenuOpen}
                                    setIsOpen={setReportsMenuOpen}
                                    closeAllMenus={closeAllMenus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-gray-500 font-md mt-10 text-4xl pl-20">
                    Edit Your Profile
                </div>
                <div className="text-gray-500 text-xl mt-20 pl-40 grid grid-cols-2">
                    <div>
                        Change Username
                        <div className="mt-10">
                            <input placeholder={"Enter New UserName"} />
                        </div>
                        <div className="mt-5">
                            <input placeholder={"Confirm New UserName"} />
                        </div>
                    </div>
                    <div>
                        Change Your Profile Picture
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};