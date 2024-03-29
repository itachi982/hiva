import {Chart as ChartJS,defaults} from "chart.js/auto";
import {Bar,Doughnut,Pie} from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { AdminAtom } from "../../Atoms/AuthAtom";

defaults.responsive=true;

export const Chart1=()=>{
    
    const employeeData=useRecoilValue(AdminAtom);
    let male=0,female=0;
    for(let i=0;i<employeeData.length;i++){
        if(employeeData[i].gender=='male'){male++}
        else{female++}
    }

    // console.log("male: "+male+" ,female "+female)

    return(
        <div className="bg-slate-200 border shadow-lg ">
            <Bar

                data={{
                    labels:["Total Number"],
                    datasets:[
                        {
                            label:"male",
                            data:[male]
                        },
                        {
                            label:"female",
                            data:[female]
                        }
                    ],
                }}

            />
        </div>

    )
}

export const Chart2=()=>{

    return(
        <div className="bg-slate-200 border shadow-lg ">
            <Doughnut
                data={{
                    labels:["jan","feb","march"],
                    datasets:[
                        {
                            label:"male",
                            data:[200,300,400,500,300]
                        },
                        {
                            label:"female",
                            data:[100,50,60,70,245]
                        }
                    ],
                }}  
            />

        </div>
    )

}