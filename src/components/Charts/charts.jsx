import React,{useState,useEffect} from "react";
import {fetchDailyData} from "../../Api";
import {Line} from 'react-chartjs-2';

const Chart = ({data,country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchCovid = async () =>{
            setDailyData(await fetchDailyData());
        }

        fetchCovid();
    });

    const line=(
       dailyData.length?
           (<Line data={{
            labels: dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed}) =>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyData.map(({deaths}) =>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,
            }],
        }}/>):null
    );
    return(

        <h1>{line}</h1>
    )
}

export default Chart;