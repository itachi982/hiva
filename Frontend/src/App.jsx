import { useState } from 'react'
import './App.css'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'


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
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
      </BrowserRouter>
    </>

  )


}

export default App