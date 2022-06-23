import { useContext } from "react";
import { AppContext } from "../App";

const CurrentWeather =(props)=> {
    const {currentWeather, city} = useContext(AppContext);
    // console.log('curr Weather=>',currentWeather);

    if(currentWeather.length === 0) return null;

    return(
        <div>
            <h4>Current Weather</h4>
            <p>{city}</p>
            <div>{
                <>
                    <p>{currentWeather[0].Temperature.Metric.Value +" "+ currentWeather[0].Temperature.Metric.Unit}</p>
                    <p>{currentWeather[0].WeatherText}</p>
                    <img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`}/>
                </>  
            }
            </div>
        </div>
    )
};
export default CurrentWeather;