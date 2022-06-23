import React, { useState, useEffect, useContext } from 'react';
import {AppContext} from '../App';
import './AutoCompleteText.css';
const baseUrl = 'http://dataservice.accuweather.com'; 
const apiKey = '%09FvkHMryqemPMAB3D8rrK1KPNWcnG0Y3d';

const AutoCompleteText = (props) => {
    const [suggestions, setSuggestions] = useState([]);
    const [hint, setHint] = useState('');
    // const [cityKey, setCityKey] = useState('')
    const {setCurrentWeather, city, setCity, setCityKey, cityKey} = useContext(AppContext);

    useEffect(()=> {
        getCurrentWeather(215854, 'Tel Aviv') // It is much better to put these arguments in an .ENV file
    },[])
    
    const getSuggestions = () => {
    fetch(`${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${hint}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setSuggestions(data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const getCurrentWeather = (cityKy, cityName) => {
        fetch(`${baseUrl}/currentconditions/v1/${cityKy}?apikey=${apiKey}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCity(cityName);
            setCurrentWeather(data);
            setSuggestions([]);
            setCityKey(cityKy);
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    

    return(
        <div className='AutoCompleteText'>
            <input type='text' onChange={(e)=>setHint(e.target.value)} value={hint}/>
            <button onClick={getSuggestions}>click</button>
            <ul>
                {
                    suggestions.map(item => {
                        return(
                            <li onClick={()=>getCurrentWeather(item.Key, item.LocalizedName)} value={item.Key} key={item.Key}>
                                {item.LocalizedName}, {item.Country.LocalizedName}
                            </li>                  
                        ) 
                    })
                }
            </ul>
        </div>
    )
};

export default AutoCompleteText;

// `${baseUrl}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}$metric=Metric`