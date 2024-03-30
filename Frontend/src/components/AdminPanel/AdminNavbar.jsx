import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { CompanyDrop } from "../Dropdown/Companydrop";
import { TransactionDrop } from "../Dropdown/Transaction";
import { ReportDrop } from "../Dropdown/Reportdrop";
import { UsernameAtom } from "../../Atoms/AdminState";
import { useRecoilValue } from "recoil";
import { UserDropDown } from "../Dropdown/Userdropdown";

export const AdminNavbar = () => {

  const username=useRecoilValue(UsernameAtom);
  //console.log(username)


  return (
    <div className="grid grid-rows-2 relative">
      <div className="flex justify-between pr-10 pl-10 py-2 bg-slate-200 border shadow-lg">
        <Link to="/admin">
          <button>
            <img className="size-8 w-auto " src={logo} alt="hiva logo" />
          </button>
        </Link>

        <div className="flex justify-end ">
          <div className="mr-6 mt-2">{username}</div>
          <div>
            <div>
              <UserDropDown/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
        <div className="relative">
          <div>
            <CompanyDrop/>
          </div>
        </div>

        <div>
          <TransactionDrop
          />
        </div>

        <div> 
          <ReportDrop
                      />
        </div>

        <div></div>
      </div>
    </div>
  );
};
//vishal