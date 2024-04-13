import { useRecoilState, useRecoilValue } from "recoil"
import { AdminNavbar } from "../../components/AdminPanel/AdminNavbar"
import { Button } from "../../components/SigninHelper"

import { EmployeeDataAtom, currentPageAtom } from "../../Atoms/EmployeeData"
import axios from "axios"
import { useEffect } from "react"


export const EmployeeData=()=>{

    const PER_PAGE_ITEMS=5;
    //const EmployeeData=useRecoilValue(AdminAtom);
    const [EmployeeData,setEmployeeData]=useRecoilState(EmployeeDataAtom);
    const [currentPage,setCurrentPage]=useRecoilState(currentPageAtom);

    const totalPages=Math.ceil(EmployeeData.length/PER_PAGE_ITEMS);
    const startPage=(currentPage-1)*PER_PAGE_ITEMS;
    const endPage=startPage+PER_PAGE_ITEMS;

    const getEmployeeData=async()=>{

        const allEmp=await axios.get("https://hiva-1.onrender.com/employee_data/all",{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        })

        // console.log(allEmp.data.data);
        
        if(allEmp.data.data.length>0){
            setEmployeeData(allEmp.data.data);
        }
    }

    useEffect(()=>{
        getEmployeeData();
    },[])

    // console.log(EmployeeData)


    const paginationItems = (currentPage, totalPages, setCurrentPage) => {

        
        const items = [];
        const maxVisiblePages = 5;
    
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

       
    
        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`py-2 px-4 border border-gray-2 text-black font-semibold dark:text-white dark:border-strokedark rounded-lg`}
                    style={{ display: 'inline-block', margin: '5px' }}
                >
                   {page} 
                </button>
                
            );
           
        }

        if (startPage > 1) {
            items.unshift(
                <button
                    key="start"
                    onClick={() => setCurrentPage(1)}
                    className="py-2 px-4 border border-gray-2 text-black font-semibold dark:text-white dark:border-strokedark hover:bg-gray-2 dark:hover:bg-stroke rounded-lg"
                >
                    1
                </button>,
                <p
                    key="s-start"
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                >
                    ...
                </p>
            );
        }
    
        if (endPage < totalPages) {
            items.push(
                <p
                    key="e-end"
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                >
                    ...
                </p>,
                <button
                    key="end"
                    onClick={() => setCurrentPage(totalPages)}
                    className="py-2 px-4 border border-gray-2 text-black font-semibold dark:text-white dark:border-strokedark hover:bg-gray-2 dark:hover:bg-stroke rounded-lg"
                >
                    {totalPages}
                </button>
            );
        }
    
        return items;
    };
    

    const data=paginationItems(currentPage,totalPages,setCurrentPage);
    //console.log(data);


    return(
        <div>
            <div>
                <AdminNavbar/>
            </div>
            <div className="ml-10 mt-5 font-medium text-gray-500 text-2xl">
                Employee's Data
            </div>
            <div className="ml-8 mt-5 w-100">
                <Button label={"Add An Employee"}/>
            </div>
            <div className="border grid-rows-2">
                <div className="flex justify-between p-3">
                    <div>dropdown</div>
                    <div>search</div>
                </div>
            </div>
            <button>
            {data.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))}
            </button>
           
                
        </div>

    )


}