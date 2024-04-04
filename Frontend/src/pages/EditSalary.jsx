import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { SalaryAtom } from "../Atoms/ReportAtom";
import { useRecoilValue } from "recoil";


export const EditSalary = () => {
  const salaryData = useRecoilValue(SalaryAtom);
  console.log(salaryData);

  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Salary */}
            <div className="flex items-center mb-6">
              <svg
                className="h-6 w-6 mr-2 text-gray-500"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path d="M12 18l-6-6H9V4h6v8h3"></path>
              </svg>
              <div className="text-lg font-semibold text-gray-700">Salary</div>
            </div>
            <div className="text-gray-600 mb-4">{salaryData.base_salary}</div>

            {/* Transport Allowance */}
            <div className="flex items-center  mb-6">
              <svg
                className="h-6 w-6 mr-2 mt-10 text-gray-500"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <circle cx="7" cy="17" r="2"></circle>
                <circle cx="17" cy="17" r="2"></circle>
                <path d="M5 17h14l-1-5h-3v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4H6"></path>
              </svg>
              <div className="text-lg font-semibold mt-10 text-gray-700">Transport Allowance</div>
            </div>
            <div className="text-gray-600 mb-4">{salaryData.trasportation_allowance}</div>

            {/* Meal Allowance */}
            <div className="flex items-center mt-5">
              <svg
                className="h-6 w-6 mr-2 mt-2 text-gray-500"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="15" x2="12" y2="21"></line>
                <path d="M16 4l1 6a5 5 0 0 1-10 0l1-6"></path>
              </svg>
              <div className="text-lg font-semibold mt-2 text-gray-700">Meal Allowance</div>
            </div>
            <div className="text-gray-600">{salaryData.meal_allowance}</div>
          </div>

          {/* Right Column */}
          <div>
            {/* Salary Input Box */}
            <div className="max-w-md bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <input
                type="text"
                id="salaryInputBox"
                className="flex-1 mr-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter Salary"
              />
            </div>

            {/* Transport Allowance Input Box */}
            <div className="max-w-md bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <input
                type="text"
                id="transportInputBox"
                className="flex-1 mr-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter Transport Allowance"
              />
            </div>

            {/* Meal Allowance Input Box */}
            <div className="max-w-md bg-white rounded-lg shadow-md p-4 flex items-center">
              <input
                type="text"
                id="mealInputBox"
                className="flex-1 mr-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter Meal Allowance"
              />
            </div>

            {/* Apply Changes Button */}
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-400">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
