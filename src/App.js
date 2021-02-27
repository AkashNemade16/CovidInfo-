import React from "react";
import Header from "./components/Header/Header";
import {fetchData} from "./Api";
import Cards from "./components/cards/Cards";
import Chart from "./components/Charts/charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import {Grid} from '@material-ui/core'

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
                <Grid container direction='column' spacing={6}   justify="center" >
                    <Grid item xs='auto'>
                        <Header/>
                    </Grid>
                    <Grid item xs='auto'>
                        <CountryPicker changeCountry={this.changeCountry} />
                    </Grid>
                    <Grid item>
                        <Cards data={data}/>
                    </Grid>
                    <Grid item xs='auto'>
                        <Chart data={data} country={country}/>
                    </Grid>

                </Grid>
            </div>


        );
    }




}

export default App;
