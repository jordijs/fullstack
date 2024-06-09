/* eslint-disable react/prop-types */
import weatherService from '../services/weather'
import { useEffect, useState } from 'react'

const Weather = ({ country }) => {

    useEffect(() => {
        if (country) {
            weatherService.getCityWeather(country.capital)
                .then(response => {
                    setWeather(response)
                })
        }
    }, [country])

    const [weather, setWeather] = useState(null)

    if (!weather) {
        return <p>No weather data available</p>
    }

    return <div>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {weather.main.temp} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <p>wind {weather.wind.speed} m/s</p>
    </div>
}

export default Weather