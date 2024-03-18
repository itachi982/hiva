import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


export const Sidebar=()=>{

    return(

        <div className="grid grid-cols-5 h-screen">

            <div className='col-span-1 bg-slate-300 ' >

                <Navigation
                // you can use your own router's api to get pathname
                    activeItemId="/dashboard"
                    onSelect={({itemId}) => {
                    // maybe push to the route
                    }}
                    items={[
                    {
                        title: 'Dashboard',
                        itemId: '/dashboard',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        // elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'Company',
                        itemId: '/Company',
                        // elemBefore: () => <Icon name="users" />,
                        subNav: [
                        {
                            title: 'Employee data',
                            itemId: '/Employee/data',
                        },
                        {
                            title: 'Job Data',
                            itemId: '/job/data',
                        },
                        ],
                    },
                    {
                        title: 'Transaction',
                        itemId: '/transaction',
                        subNav: [
                        {
                            title: 'Attendance',
                            itemId: '/attendance/data',
                        },
                        {
                            title:"Salary Data",
                            itemId:"/salary/data"
                        },
                        {
                            title:"Deduction Data",
                            itemId:"/deduction/data"
                        }
                        ],
                    },
                    {
                        title:"Reports",
                        itemId:"/reports"
                    }
                    ]}
                />
            </div>
        
        </div>

    )


}