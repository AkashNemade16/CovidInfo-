import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
       <div>
           <Switch>
               <Route exact path ='/' component={Navbar}/>
           </Switch>
       </div>


  );
}

export default App;
