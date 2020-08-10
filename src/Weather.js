import React, { useState } from 'react';
import axios from 'axios'
import table from './weatherType';
import Days from './Days';

const api = {
    key:  "497d29378ab7e397129f0701b0c9f5ea",
    base: "api.openweathermap.org/data/2.5/"
}


const Weather = (props) => {

    
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [day, setDay] = useState(0);
    
    const changeDay = (day) => {
        setDay(day);
        // console.log(day);
    }
    

    const search = evt => {
        if(evt.key === "Enter") {
            axios.get(`https://${api.base}forecast?q=${query}&units=metric&APPID=${api.key}&lang=fr`)
            .then(res => {
                const data = res.data
                setWeather(data)
                setQuery('')
                console.log(data);
            })
        }
        // else {
        //     axios.get(`https://${api.base}forecast?lat=${}&lon=${}&appid=${api.key}&lang=fr`)
        //     .then(res => {
        //         const data = res.data
        //         setWeather(data)
        //         setQuery('')
        //         console.log(data);
        //     })
        // }
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
        {(typeof weather.city != "undefined") ? (
            <div>
                <span className="card-title">
                    {weather.city.name}, {weather.city.country}
                    </span>
                <p><img src={table[weather.list[day].weather[0].id]} alt="logo_weather"/></p>
                <span className="temperature">{Math.round(weather.list[day].main.temp)}°C</span>
                <div className="wind">Wind {Math.round((weather.list[day].wind.speed)*3.6)} km/h ({weather.list[day].wind.deg}°)</div>
            </div>
         ) : ('')} 
            <Days day={changeDay}/>
        </div>
   
    )

}

export default Weather
