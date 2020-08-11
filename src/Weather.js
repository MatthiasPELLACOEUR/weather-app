import React, { useState, useEffect } from 'react';
import axios from 'axios'
import table from './weatherType';
import Days from './Days';
import Geoloc from './geolocalisation';

const api = {
    key:  "273aad0d475fb3afa9f0b2d3e1cc0344",
    base: "api.openweathermap.org/data/2.5/"
}


const Weather = () => {

    
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [day, setDay] = useState(0);
    const [coords, setCoords] = useState({
        lat: "",
        lon: ""
    })
    
    const changeDay = (day) => {
        setDay(day);
    }

    const weatherByLocation = () => {
        console.log('weatherByLocation is running');
        if(coords.lat !== undefined && coords.lon !== undefined) {
            axios.get(`https://${api.base}forecast?lat=${coords.lat}&lon=${coords.lon}&&units=metric&APPID=${api.key}&lang=fr`)
                .then(res => {
                    const data = res.data
                    setWeather(data)
                })
        }
    }

    const search = evt => {
        console.log('search is running');
        if(evt.key === "Enter") {
            axios.get(`https://${api.base}forecast?q=${query}&units=metric&APPID=${api.key}&lang=fr`)
            .then(res => {
                const data = res.data
                setWeather(data)
                setQuery('')
            })
        }
    }

    useEffect(() => {
        weatherByLocation()
    }, [coords])

    
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
            <div className='row'>
                <span className="card-title">
                    {weather.city.name}, {weather.city.country}
                    </span>
                <p><img src={table[weather.list[day].weather[0].id]} alt="logo_weather" width="196px" height="196px"/></p>
                <span className="temperature">{Math.round(weather.list[day].main.temp)}°C</span>
                <div className="wind">Wind {Math.round((weather.list[day].wind.speed)*3.6)} km/h ({weather.list[day].wind.deg}°)</div>
            </div>
         ) : ('')} 
            <Days day={changeDay}/>
            <Geoloc
                setCoords={setCoords}
                coords={coords} 
            />
        </div>
   
    )

}

export default Weather
