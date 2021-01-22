import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from "@material-ui/core";
import {fetchCountryData} from "../../Api";

const CountryPicker = ({changeCountry}) =>{
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchCountries = async() =>{
            setFetchedCountries(await fetchCountryData());
        }
        fetchCountries();
    },[]);

    return(
       <FormControl>
           <NativeSelect defaultValue="" onChange={(e) => changeCountry(e.target.value)}>
               <option value=''>United States</option>
               {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;