export const Card1=({number})=>{

  return (
    
    <div className="flex bg-slate-200 justify-start border pt-5 pb-5 pr-40 shadow-md rounded-lg">
    
      <div className="ml-2">
        <svg class="h-10 w-10 text-cyan-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
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