import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { GenderAtom } from "../../Atoms/Gender";
import { AdminDropdownAtom } from "../../Atoms/DropDown";

export const AdminDropdown = ({role}) => {
    const [isOpen, setIsOpen] = useState(false);
    //const [selectedValue, setSelectedValue] = useRecoilState(AdminDropdownAtom);
    const [selectedValue, setSelectedValue]=useState(role);
    //console.log(role)
    // useEffect(()=>{
    //     setSelectedValue(role.role);
    // },[])
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        // setSelectedValue(role);
        //console.log(role.role)
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className={`text-${isOpen ? "white" : "white"} bg-${isOpen ? "white" : "white"} hover:bg-${isOpen ? "white" : "black"} focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700`}
                type="button"
            >
                {selectedValue || "Role"}{" "}
                <svg
                    className={`w-2.5 h-2.5 ms-3 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <button
                                onClick={() => handleSelect("admin")}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                admin
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSelect("user")}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                user
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
