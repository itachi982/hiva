import { useState } from 'react'
import './App.css'

import { UserSignin } from './pages/UserSignin'
import { AdminSignup } from './pages/AdminSignup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Footer } from './pages/footer'
import { UserDashboard } from './pages/Userdashboard'
import { AdminDashboard } from './pages/AdminDashboard'
import { Home } from './pages/Home'
import { AdminSignin } from './pages/AdminSignin'
import { Navigate } from 'react-router-dom'


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/admin/signin" element={<AdminSignin setIsAdmin={setIsAdmin}/>} />
          <Route path="/admin/signup" element={<AdminSignup/>} />            
          <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/signin" />} />
          <Route path="/employee/signin" element={<UserSignin setIsUser={setIsUser}/>} />
          <Route path="/employee/dashboard" element={isUser ? <AdminDashboard /> : <Navigate to="/employee/signin" />} />
          <Route path="/footer" element={<Footer/>}/>
          
        </Routes>
      </BrowserRouter>
    </>

  )  
}

export default Appß