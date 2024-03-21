import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { CompanyDrop } from "../Dropdown/Companydrop";
import { TransactionDrop } from "../Dropdown/Transaction";
import { ReportDrop } from "../Dropdown/Reportdrop";

export const AdminNavbar = () => {
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [transactionMenuOpen, setTransactionMenuOpen] = useState(false);
  const [reportMenuOpen, setReportMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setCompanyMenuOpen(false);
    setTransactionMenuOpen(false);
    setReportMenuOpen(false);
  };

  return (
    <div className="grid grid-rows-2 relative">
      <div className="flex justify-between pr-10 pl-10 py-2 bg-slate-200 border shadow-lg">
        <Link to="/home">
          <button>
            <img className="size-8 w-auto " src={logo} alt="hiva logo" />
          </button>
        </Link>

        <div className="flex justify-end ">
          <div className="mr-6 mt-2">username</div>
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Default avatar"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 pl-10 pt-4 bg-yellow-120 shadow-lg text-gray-500">
        <div className="relative">
          <div>
            <CompanyDrop
              isOpen={companyMenuOpen}
              setIsOpen={setCompanyMenuOpen}
              closeAllMenus={closeAllMenus}
            />
          </div>
        </div>

        <div>
          <TransactionDrop
            isOpen={transactionMenuOpen}
            setIsOpen={setTransactionMenuOpen}
            closeAllMenus={closeAllMenus}
          />
        </div>

        <div>
          <ReportDrop
            isOpen={reportMenuOpen}
            setIsOpen={setReportMenuOpen}
            closeAllMenus={closeAllMenus}
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};
