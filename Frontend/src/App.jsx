import { useState } from 'react'
import './App.css'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ContactUs } from './pages/Contactus'


function App() {
  const [count, setCount] = useState(0)
  
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          {/* <Route path="/about-us" element={<Signin/>} /> */}
          {/* <Route path="/contact-us" element={<Signin/>} /> */}
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Signup/>} />
          <Route path="/Contact-us" element={<ContactUs/>}/>
          
        </Routes>
      </BrowserRouter>
    </>

  )  
}

export default App