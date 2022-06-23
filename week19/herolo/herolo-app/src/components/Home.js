import { useState, useEffect } from "react";

const Home = () => {
    const [city, setCity] = useState('tel');
    // https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09FvkHMryqemPMAB3D8rrK1KPNWcnG0Y3d&q=tel

    useEffect(()=> {
        const fetchData = async () => {
            await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09FvkHMryqemPMAB3D8rrK1KPNWcnG0Y3d&q=${city}`)
            .then(res =>res.json())
            .then(data=> {
                console.log(data);
                setCity(JSON.stringify(data))
            })
            .catch(error=> {
                console.log(error);
            })
        }
        fetchData()  
    },[city])

    const handleFav = () => {
        console.log('added to fav');
    };

    return(
        <div className="home">
            <h1>ACcuWeather</h1>
                <div className="main">
                        <input type='text' 
                            onChange={(e)=> setCity(e.target.value)}
                            placeholder='Enter City'
                        />
                    <div className="two-cards">
                        <div className="current_weather">
                            <h4>Current Weather</h4>
                            <h3>{city}</h3>
                            {/* <h6>{city.Country}</h6> */}
                        </div>
                        <div className="five_days">
                            <h4>5- day forecast</h4>
                            
                        </div>
                    </div>
                    <button onClick={handleFav}>Add To Fav</button>
                </div>
        </div>
    )
};

export default Home;