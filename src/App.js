import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import {Switch,Route} from "react-router-dom";
import {fetchData} from "./Api";

function App() {
    useEffect( ()=>{
        async function FetchData(){
            const fetchedData = await fetchData();
            console.log(fetchedData);
        }
       FetchData();

    },[]);


  return (
       <div>
           <Switch>
               <Route exact path ='/' component={Navbar}/>
           </Switch>
       </div>


  );
}

export default App;
