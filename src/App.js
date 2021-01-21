import React from "react";
import Header from "./components/Header/Header";
import {fetchData} from "./Api";
import Cards from "./components/cards/Cards";
import Chart from "./components/Charts/charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";

class App extends React.Component{
    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetcheddata = await fetchData();
        this.setState({data:fetcheddata});
    }

    changeCountry = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country});
    }

    render(){
        const {data, country} = this.state
        return (
            <div className='App'>
                <Header/>
                <CountryPicker changeCountry={this.changeCountry} />
                <Cards data={data}/>
                <Chart data={data} country={country}/>

            </div>


        );
    }




}

export default App;
