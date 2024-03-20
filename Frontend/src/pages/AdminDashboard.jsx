
import { AdminNavbar } from '../components/AdminPanel/AdminNavbar';

import { Sidebar } from '../components/AdminPanel/AdminSidebar';
import { Chart1,Chart2 } from '../components/Charts/Chart';
import { Footer } from '../components/Footer';
import { Card1,Card2,Card3,Card4 } from '../components/cards/Card';



export const AdminDashboard = ()=>{

    return(
        
        <div className="h-screen bg-slate-300">
            <AdminNavbar/>
            {/* <Sidebar/> */}
            <div className='flex justify-center space-x-5 mt-20 mr-7 pb-6'>
                <Card1 number={"3"}/>
                <Card2 number={"4"}/>
                <Card3 number={"4"}/>
                <Card4 number={"4"}/>    
            </div>
            <div className=' mt-10 py-10 shadow-lg'>
                <div className='grid grid-cols-2 justify-between ml-40 space-x-20 '>

                    <div className='px-5 col-span-1'>
                        <Chart1/>
                    </div>
                    <div  style={{maxWidth:'300px' }}>
                        <Chart2/>
                    </div>
                        
                </div>
            </div>

            <div>
                <Footer/>
            </div>

        </div>

        

    )
}