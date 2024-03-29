import { UserSignin } from './pages/UserSignin'
import { AdminSignup } from './pages/AdminSignup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { UserDashboard } from './pages/Userdashboard'
import { AdminDashboard } from './pages/AdminDashboard'
import { UserHome } from './pages/UserHome'
import { AdminSignin } from './pages/AdminSignin'
import { AdminHome } from './pages/AdminHome'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { AdminAtom, UserAtom } from './Atoms/AuthAtom'
import { SalaryData } from './pages/Salarydata'
import { UserChangePassword } from './pages/Userchangepassword'
import { AdminChangePassword } from './pages/Adminchangepassword'
import { DataEmployeeForAdmin } from './pages/Dataemployeeforadmin'






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
  
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome/>} />
          <Route path="/home" element={<UserHome/>} />

          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/admin/signin" element={<AdminSignin/>} />
          <Route path="/admin/signup" element={<AdminSignup/>} />            
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          
          {/* <Route path="/admin/dashboard" element={AdminValue ? <AdminDashboard /> : <Navigate to="/admin/signin" />} /> */}
          
          <Route path="/employee/signin" element={<UserSignin/>} />
          { /*<Route path="/employee/dashboard" element={UserValue ? <UserDashboard /> : <Navigate to="/employee/signin" />} />  */}
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/Salarydata" element={<SalaryData/>}/>
          {/* <Route path="/employee/dashboard" element={UserValue ? <UserDashboard /> : <Navigate to="/employee/signin" />} /> */}
          <Route path="/Userchangepassword" element={<UserChangePassword/>}/>
          <Route path="/adminchangepassword" element={<AdminChangePassword/>}/>
          <Route path="/Dataemployeeforadmin" element={<DataEmployeeForAdmin/>}/>
          
          
        </Routes>
      </BrowserRouter>
  )

}

export default App