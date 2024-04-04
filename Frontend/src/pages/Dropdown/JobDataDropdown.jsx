import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { JobPositionAtom } from "../../Atoms/AdminState"
import axios from "axios"
import { SelectedJobAtom ,SelectedJobTitleAtom} from "../../Atoms/DropDown";
export const JobDataDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [jobData, setjobData] = useRecoilState(JobPositionAtom);
    const [selectedValue, setSelectedValue] = useRecoilState(SelectedJobAtom);
    const [selectedJobTitle,setSelectedJobTitle]=useRecoilState(SelectedJobTitleAtom)


   
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };

    const handleSelect = (jobid,jobtitle) => {
        setSelectedValue(jobid);
        setSelectedJobTitle(jobtitle);
        setIsOpen(false);
        
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className={`text-${isOpen ? "white" : "white"} bg-${isOpen ? "white" : "white"} hover:bg-${isOpen ? "white" : "black"} focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700`}
                type="button"
            >
                {selectedJobTitle || "Select Job Role"}{" "}
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
                        {jobData.map((job) => (
                            <li key={job.id}>
                                <button
                                    onClick={() => handleSelect(job.id,job.job_title)}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    {job.job_title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
