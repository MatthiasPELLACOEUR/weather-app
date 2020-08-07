import React, { useState } from 'react';
import axios from 'axios'
import table from './weatherType';
const api = {
    key:  "497d29378ab7e397129f0701b0c9f5ea",
    base: "api.openweathermap.org/data/2.5/"
}


const Weather = () => {
    
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    
    const search = evt => {
        if(evt.key === "Enter") {
            axios.get(`https://${api.base}weather?q=${query}&APPID=${api.key}`)
            .then(res => {
                console.log(res)
                const test = res.data
                setWeather(test)
                setQuery('')
                console.log(test);
            })
        }
    }
    
    return(
        <div className="card-content white-text">
            <input 
                    type="text"
                    className="search-bar white-text"
                    placeholder="Search ..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
        {(typeof weather.main != "undefined") ? (
            <div>
                <span className="card-title">
                    {weather.name}, {weather.sys.country}
                    </span>
                <p><img src={table[weather.weather[0].id]} alt="logo_weather"/></p>
                <span className="temperature">{Math.round(weather.main.temp-273.5)}°C</span>
                <div className="wind">Wind {weather.wind.speed} km/h ({weather.wind.deg}°)</div>
            </div>
         ) : ('')} 
            
        </div>
   
    )

}

export default Weather
