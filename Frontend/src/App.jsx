import { UserSignin } from './pages/UserSignin'
import { AdminSignup } from './pages/AdminSignup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { UserDashboard } from './pages/Userdashboard'
import { AdminDashboard } from './pages/AdminDashboard'
import { UserHome } from './pages/UserHome'
import { AdminSignin } from './pages/AdminSignin'
import { AdminHome } from './pages/AdminHome'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { SalaryData } from './pages/Salarydata'
import { UserChangePassword } from './pages/Userchangepassword'
import { AdminChangePassword } from './pages/Adminchangepassword'
import { DataEmployeeForAdmin } from './pages/Dataemployeeforadmin'
import { DataRole } from './pages/Datarole'
import { AboutContent } from './pages/About'
import { PrivacyPolicyContent } from './pages/Privacypolicy'
import { LicensingContent } from './pages/Licensing'
import { ContactUsContent } from './pages/Contactus'
import { AttendanceData } from './pages/Ateendancedata'
import { UserEdit } from './pages/UserEdit'






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
          <Route path="/admin/EmployeeData" element={<DataEmployeeForAdmin/>}/>\
          <Route path="/admin/jobs" element={<DataRole/>}/>

          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path='/user/edit' element={<UserEdit/>}/>
          
          {/* <Route path="/admin/dashboard" element={AdminValue ? <AdminDashboard /> : <Navigate to="/admin/signin" />} /> */}
          
          <Route path="/employee/signin" element={<UserSignin/>} />
          { /*<Route path="/employee/dashboard" element={UserValue ? <UserDashboard /> : <Navigate to="/employee/signin" />} />  */}
          <Route path="/Salarydata" element={<SalaryData/>}/>
          {/* <Route path="/employee/dashboard" element={UserValue ? <UserDashboard /> : <Navigate to="/employee/signin" />} /> */}
          <Route path="/Userchangepassword" element={<UserChangePassword/>}/>
          <Route path="/adminchangepassword" element={<AdminChangePassword/>}/>
          <Route path="/Dataemployeeforadmin" element={<DataEmployeeForAdmin/>}/>
          <Route path="/Datarole" element={<DataRole/>}/>
          <Route path="/About" element={<AboutContent/>}/>      
          <Route path="/Privacypolicy" element={<PrivacyPolicyContent/>}/>
          <Route path="/Licensing" element={<LicensingContent/>}/>
          <Route path="/Contactus" element={<ContactUsContent/>}/>
          <Route path="/Attendancedata" element={<AttendanceData/>}/>
        </Routes>
      </BrowserRouter>
  )

}

export default App