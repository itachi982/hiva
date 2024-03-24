import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { OpenDropdownAtom,DropDownStateFamily} from "../../Atoms/DropDown";

export const CompanyDrop = () => {
  
  return(
    <RecoilRoot>
        <Drop/>
    </RecoilRoot>
  )
  
};




const Drop=()=>{

  // const [CompanyDropValue,setCompanyDropValue]=useRecoilState(CompanyDropAtom);
  // const setTransactionDropValue = useSetRecoilState(TransactionDropAtom);
  // const setReportDropValue = useSetRecoilState(ReportDropAtom);
  // const Report=useRecoilValue(ReportDropAtom)
  // const company=useRecoilValue(CompanyDropAtom)
  // const Transaction=useRecoilValue(TransactionDropAtom)

  // const [transactionState, setTransactionState] = useRecoilState(DropDownStateFamily('transaction'));
  const [companyState, setCompanyState] = useRecoilState(DropDownStateFamily('company'));
  // const [reportState, setReportState] = useRecoilState(DropDownStateFamily('report'));
  const [openDropdown, setOpenDropdown] = useRecoilState(OpenDropdownAtom);

  function toggle() {
    setCompanyState(!companyState);
    if (openDropdown !== 'company') {
      setOpenDropdown('company');
    } else {
      setOpenDropdown('');
    }
  }

  useEffect(() => {
    if (openDropdown !== 'company') {
      setCompanyState(false);
    }
  }, [openDropdown]);
  

  return (
    <div className="">
    
    <button
          className=" w-100 justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900"
          id="Company"
          onClick={toggle}
        >
          <div>
            company
          </div>

            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          
        </button>

      {companyState && (
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
              Employee Data
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Job Data
            </a>
          </div>
        </div>
      )}
    </div>
  

);

}
