import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let dynamic = url;
    if(country){
        dynamic = `${url}/countries/${country}`
    }
    try{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(dynamic);
        return {confirmed, recovered, deaths, lastUpdate};
    }catch(error){
    console.log(error);
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
       const loopOverData = data.map((dailyData)=>({
           confirmed:dailyData.confirmed.total,
           deaths:dailyData.deaths.total,
           date:dailyData.reportDate,
       }));
       return loopOverData;
    }catch(error){

    }
}

export const fetchCountryData = async() => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);

    }catch (error) {
        console.log(error);
    }
}