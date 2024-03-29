import React from 'react';
import {Card,CardContent,Typography,Grid} from "@material-ui/core";
import CountUp from 'react-countup';


const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
        return 'Loading...';
    }
    return(
    <div className='Cards'>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant ="h5" >
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of Active cases</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant ="h5" gutterBottom>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of recoveries</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant ="h5" gutterBottom>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of deaths caused</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
    );


}
export default Cards;
