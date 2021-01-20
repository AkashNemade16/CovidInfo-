import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import {Switch,Route} from "react-router-dom";
import {fetchData} from "./Api";

function App() {
    useEffect( ()=>{
        async function FetchData(){
            const data = await fetchData();
            console.log(data);
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
