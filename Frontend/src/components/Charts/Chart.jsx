import {Chart as ChartJS,defaults} from "chart.js/auto";
import {Bar,Doughnut,Pie} from "react-chartjs-2";

defaults.responsive=true;

export const Chart1=()=>{ 

    return(
        <div className="bg-slate-200 border shadow-lg ">
            <Bar

                data={{
                    labels:["jan","feb","march","april","may","june","july","august","september","november","December"],
                    datasets:[
                        {
                            label:"male",
                            data:[200,300,400,500,300,450,250,350,550,375,468]
                        },
                        {
                            label:"female",
                            data:[100,50,60,70,245,275,315,330,300,450,445,465]
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