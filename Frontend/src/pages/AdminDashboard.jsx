
import { AdminNavbar } from '../components/AdminPanel/AdminNavbar';

import { Sidebar } from '../components/AdminPanel/AdminSidebar';
import { Card1,Card2,Card3,Card4 } from '../components/cards/Card';



export const AdminDashboard = ()=>{

    return(
        
        <div className="h-screen bg-slate-300">
            <AdminNavbar/>
            <Sidebar/>
            <div className='flex justify-center space-x-5 mt-20 mr-7'>
                <Card1 number={"3"}/>
                <Card2 number={"4"}/>
                <Card3 number={"4"}/>
                <Card4 number={"4"}/>
                
            </div>

        </div>
    )
}