import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { AttendanceAtom } from "../Atoms/ReportAtom";
import { useRecoilValue } from "recoil";

export const EditAttendance = () => {
    const attendanceData=useRecoilValue(AttendanceAtom);
    const latestMonth=attendanceData.slice(-1)[0];

    return (
        <div className="bg-slate-200 border pt-8 pl-10 pr-10 pb-10 shadow-md rounded-lg">
            <AdminNavbar/>
            <div className="flex justify-center space-x-10">
                <div className="pl-10 pr-10">
                    <div className="pl-4 pb-2">
                        <svg className="h-5 w-5 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11h6m-3 -3v6" />
                        </svg>
                    </div>
                    <div className="font-semibold text-gray-600">Present</div>
                    <div className="underline">{latestMonth.present}</div>
                </div>
                <div className="pl-5 pr-5">
                    <div className="pl-2 pb-2">
                        <svg className="h-5 w-5 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <line x1="16" y1="11" x2="22" y2="11" />
                        </svg>
                    </div>
                    <div className="font-semibold text-gray-600">Absent</div>
                    <div className="underline">{latestMonth.absent}</div>
                </div>
                <div className="pr-4 pl-4">
                    <div className="pl-2 pb-2">
                        <svg className="h-5 w-5 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <line x1="19" y1="7" x2="19" y2="10" />
                            <line x1="19" y1="14" x2="19" y2="14.01" />
                        </svg>
                    </div>
                    <div className="font-semibold text-gray-600">Sick</div>
                    <div className="underline">{latestMonth.sick}</div>  
                </div>
            </div>
            {/* Input Boxes and Apply Changes Button */}
            <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow-md p-4">
                <input
                    type="text"
                    id="presentInputBox"
                    className="w-full mb-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter Present"
                />
                <input
                    type="text"
                    id="absentInputBox"
                    className="w-full mb-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter Absent"
                />
                <input
                    type="text"
                    id="sickInputBox"
                    className="w-full mb-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter Sick"
                />
                <div className="flex justify-end">
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-400">
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
  );
};
