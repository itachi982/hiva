
import axios from 'axios';
import { AdminNavbar } from '../components/AdminPanel/AdminNavbar';
import { Chart1,Chart2 } from '../components/Charts/Chart';
import { Footer } from '../components/Footer';
import { Card1,Card2,Card3,Card4 } from '../components/cards/Card';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { AdminAuthAtom } from '../Atoms/AuthAtom';
import { errorNotification } from '../components/Notification';
import { Card1Atom,Card2Atom,Card3Atom,Card4Atom, JobPositionAtom, UsernameAtom } from '../Atoms/AdminState';



export const AdminDashboard = ()=>{

    const [AdminState,setAdminState]=useRecoilState(AdminAuthAtom);
    const [jobdata,setjobdata]=useRecoilState(JobPositionAtom);
    const [card1,setCard1]=useRecoilState(Card1Atom);
    const [card2,setCard2]=useRecoilState(Card2Atom);
    const [card3,setCard3]=useRecoilState(Card3Atom);
    const [card4,setCard4]=useRecoilState(Card4Atom);
    
   

    const AdminData=async ()=>{

        try {
            const allEmp=await axios.get("http://localhost:3000/employee_data/all",{
                headers:{
                    'Authorization':localStorage.getItem("token")
                }
            })
            //console.log(allEmp.data.data)

            const job=await axios.get("http://localhost:3000/job_positions/all",{
                headers:{
                    'Authorization':localStorage.getItem("token")
                }
            })
            //console.log(allEmp);
            if(allEmp.data.data.length>0){
                setAdminState(allEmp.data.data)
                
            }
            if(job.data.jobdata.length>0){
                setjobdata(job.data.jobdata);
            }
            UpdateState();
            
        } catch (error) {
            //console.error(error);
            if(error){errorNotification(error.response.data.msg)}
        }

    }

    const UpdateState=()=>{


    let totalEmp=0;
    let totalAdmin=0;
    let jobs=0;
    for(let i=0;i<AdminState.length;i++){

        if(AdminState[i].access_rights=="user"){
            totalEmp++;
        }else{
            totalAdmin++
        }

    }

    for(let i=0;i<jobdata.length;i++){
        jobs++;
    }

    setCard1(totalEmp);
    setCard2(totalAdmin);
    setCard3(jobs);
    }

    useEffect(()=>{

        AdminData();
        
    },[])
    UpdateState();
    





    return(
        
        <div className="h-screen bg-slate-300">
            <AdminNavbar/>
            <div className='ml-10 mt-5 font-medium text-gray-500 text-2xl'>
                Admin Dashboard
            </div>
            {/* <Sidebar/> */}
            <div className='flex justify-center space-x-5 mt-16 mr-7 pb-6'>
                <Card1 number={card1}/>
                <Card2 number={card2}/>
                <Card3 number={card3}/>
                {/* <Card4 number={card4}/>     */}
            </div>
            <div className=' mt-18 shadow-lg'>
                <div className='grid grid-cols-2 justify-between ml-40 space-x-20 '>

                    <div className='px-10 col-span-1'>
                        <Chart1/>
                    </div>
                    <div  style={{maxWidth:'300px' }}>
                        <Chart2/>
                    </div>
                        
                </div>
            </div>

            <div className=''>
                <Footer/>
            </div>

        </div>

        

    )
}

//vishal