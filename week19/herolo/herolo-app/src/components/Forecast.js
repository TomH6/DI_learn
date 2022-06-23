import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const baseUrl = 'http://dataservice.accuweather.com'; 
const apiKey = '%09FvkHMryqemPMAB3D8rrK1KPNWcnG0Y3d';

const Forecast =(props)=> {
    const {setCurrentWeather, city, setCity, setCityKey, cityKey} = useContext(AppContext);
    const [fiveDay, setFiveDay] = useState([]);
    useEffect(()=>{
        fetch(`${baseUrl}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFiveDay(data);
        })
        .catch(error=>{
            console.log(error);
        })
        
    },[])

    return(
        <div>
            <h2>5-Day Forecast</h2>  
        </div>
    )
};
export default Forecast;