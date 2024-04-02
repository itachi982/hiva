import { useRecoilValue } from "recoil"
import { SalaryAtom,AttendanceAtom,DeductionAtom } from "../../Atoms/ReportAtom"

export const Card1=({number})=>{

  return (
    
    <div className="flex bg-slate-200 justify-start border pt-5 pb-5 pr-40 shadow-md rounded-lg">
    
      <div className="ml-2">
        <svg class="h-10 w-10 text-cyan-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokelinecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>

        <div className="font-semibold text-2xl">
        {number}
        </div>
        <div className="text-gray-500">
        Employee's Data
        </div>
      </div>

    </div>
  
  )
}

export const Card2=({number})=>{

  return (
    
    <div className="bg-slate-200 flex justify-start border pt-5 pb-5 pr-40 shadow-md rounded-lg">
    
      <div className="ml-2">
      <svg class="h-10 w-10 text-cyan-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>


        <div className="font-semibold text-2xl">
        {number}
        </div>
        <div className="text-gray-500">
        Admin's Data
        </div>
      </div>

    </div>
  
  )
}
export const Card3=({number})=>{

  return (
    
    <div className="bg-slate-200 flex justify-start border pt-5 pb-5 pr-40 shadow-md rounded-lg">
    
      <div className="ml-2">
      <svg class="h-10 w-10 text-cyan-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" /></svg>

        <div className="font-semibold text-2xl">
        {number}
        </div>
        <div className="text-gray-500">
        Job Data
        </div>
      </div>

    </div>
  
  )
}

export const Card4=({number})=>{

  return (
    
    <div className="bg-slate-200 flex justify-start border pt-5 pb-5 pr-40 shadow-md rounded-lg">
    
      <div className="ml-2">
      <svg class="h-10 w-10 text-cyan-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />  <line x1="11" y1="6" x2="20" y2="6" />  <line x1="11" y1="12" x2="20" y2="12" />  <line x1="11" y1="18" x2="20" y2="18" /></svg>

        <div className="font-semibold text-2xl">
        {number}
        </div>
        <div className="text-gray-500">
        Attendance Data
        </div>
      </div>

    </div>
  
  )
}

export const SalaryCard=()=>{

  const salaryData=useRecoilValue(SalaryAtom);
  console.log(salaryData)

  return (
    
    <div className="bg-slate-200 border pt-8 pl-10 pr-10 pb-10 shadow-md rounded-lg">
     
      <div className="flex  justify-center space-x-10">

        <div className="">
          <div className="pl-4 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg></div>
          <div className="font-semibold text-gray-600">Salary</div>
          <div className="underline">{salaryData.base_salary}</div>
        </div>
        
        <div>
          <div className="pl-10 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg></div>
          <div className="font-semibold text-gray-600">Transport Allowance</div>
          <div className="underline">{salaryData.trasportation_allowance}</div>
        </div>

        <div>
          <div className="pl-10 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="15" x2="12" y2="21" />  <path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z" /></svg></div>
          <div className="font-semibold text-gray-600">Meal Allowance</div>
          <div className="underline"> {salaryData.meal_allowance}</div>  
        </div>

      </div>  
     
    </div>
  
  )
}

export const DeductionCard=()=>{

  const deductionData=useRecoilValue(DeductionAtom);
  const latestDeduction=deductionData.slice(-1)[0];
  console.log(latestDeduction)

  return (
    
    <div className="bg-slate-200 border pt-8 pl-10 pr-10 pb-10 shadow-md rounded-lg">
     
      <div className="flex  justify-center space-x-10">

        <div className="">
          <div className="pl-8 pb-2"><svg class="h-5 w-5 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                    </svg>
</div>
          <div className="font-semibold text-gray-600">Deducted Amount</div>
          <div className="underline">{latestDeduction.deduction_amount}</div>
        </div>
        
        <div>
          <div className="pl-10 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /></svg></div>
          <div className="font-semibold text-gray-600">Salary Remaning</div>
          <div className="underline">{latestDeduction.salaryAfterDeduction}</div>
        </div>

      </div>  
     
    </div>
  
  )
}

export const AttendanceCard=()=>{

  const attendanceData=useRecoilValue(AttendanceAtom);
  //console.log(attendanceData)
  const latestMonth=attendanceData.slice(-1)[0]
  console.log(latestMonth)

  return (
    
    <div className="bg-slate-200 border pt-8 pl-10 pr-10 pb-10 shadow-md rounded-lg">
     
      <div className="flex  justify-center space-x-10 ">

        <div className="pl-10 pr-10">
          <div className="pl-4 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg></div>
          <div className="font-semibold text-gray-600">Present</div>
          <div className="underline">{latestMonth.present}</div>
        </div>
        
        <div className="pl-5 pr-5">
          <div className="pl-2 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <line x1="16" y1="11" x2="22" y2="11" /></svg></div>
          <div className="font-semibold text-gray-600">Absent</div>
          <div className="underline">{latestMonth.absent}</div>
        </div>

        <div className="pr-4 pl-4">
          <div className="pl-2 pb-2"><svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <line x1="19" y1="7" x2="19" y2="10" />  <line x1="19" y1="14" x2="19" y2="14.01" /></svg></div>
          <div className="font-semibold text-gray-600">Sick</div>
          <div className="underline"> {latestMonth.sick}</div>  
        </div>

      </div>  
     
    </div>
  
  )
}
