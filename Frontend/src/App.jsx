import { useEffect, useState } from 'react'
import './App.css'

import { UserSignin } from './pages/UserSignin'
import { AdminSignup } from './pages/AdminSignup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { UserDashboard } from './pages/Userdashboard'
import { AdminDashboard } from './pages/AdminDashboard'
import { UserHome } from './pages/UserHome'
import { AdminSignin } from './pages/AdminSignin'
import { Navigate } from 'react-router-dom'
import { CompanyDrop } from './components/Dropdown/Companydrop'
import { AdminHome } from './pages/AdminHome'
import { EmployeeData } from './pages/EmployeeData'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { AdminAtom, UserAtom } from './Atoms/AuthAtom'
import { SalaryData } from './pages/Salarydata'


function App() {
  
  return(
    <>
      <RecoilRoot>
        <Paths/>
      </RecoilRoot>
   </>
  )  
}

const Paths=()=>{

  const AdminValue= useRecoilValue(AdminAtom);
  const UserValue=useRecoilValue(UserAtom);

  console.log(AdminValue)

  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome/>} />
          <Route path="/home" element={<UserHome/>} />

          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/admin/signin" element={<AdminSignin/>} />
          <Route path="/admin/signup" element={<AdminSignup/>} />            
          {/* <Route path="/admin/dashboard" element={<AdminDashboard/>}/> */}
          <Route path="/admin/employeedata" element={<EmployeeData/>}/>
          <Route path="/admin/dashboard" element={AdminValue ? <AdminDashboard /> : <Navigate to="/admin/signin" />} />
          
          <Route path="/employee/signin" element={<UserSignin/>} />
          { /*<Route path="/employee/dashboard" element={UserValue ? <UserDashboard /> : <Navigate to="/employee/signin" />} />  */}
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/Salarydata" element={<SalaryData/>}/>
        </Routes>
      </BrowserRouter>
  )

}

export default App