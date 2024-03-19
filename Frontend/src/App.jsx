import { useState } from 'react'
import './App.css'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Footer } from './pages/footer'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { UserDashboard } from './pages/Userdashboard'


function App() {
  const [count, setCount] = useState(0)
  
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/contact-us" element={<Signin/>} /> */}
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Signup/>} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          
        </Routes>
      </BrowserRouter>
    </>

  )  
}

export default App