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


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);


  useEffect(()=>{
    const IsAdmin=localStorage.getItem("IsAdmin");
    if(IsAdmin=='true'){setIsAdmin(true)}
  },[])

  
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome/>} />
          <Route path="/home" element={<UserHome/>} />

          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/admin/signin" element={<AdminSignin setIsAdmin={setIsAdmin}/>} />
          <Route path="/admin/signup" element={<AdminSignup/>} />            
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          {/* <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/signin" />} /> */}
          
          <Route path="/employee/signin" element={<UserSignin setIsUser={setIsUser}/>} />
          <Route path="/employee/dashboard" element={isUser ? <AdminDashboard /> : <Navigate to="/employee/signin" />} />          
        </Routes>
      </BrowserRouter>
    </>

  )  
}

export default App