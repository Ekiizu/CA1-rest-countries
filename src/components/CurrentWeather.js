import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentWeatherComponent = ({ lat, lon }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = '8f5d67270b44ded08b12692afc8fc984'; // OpenWeather API key

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` 
                );
                setWeather(response.data);
                console.log(response.data); 
            } catch (err) {
                setError(err);
                console.error("Error fetching weather data:", err);
            }
        };

        fetchWeather();
    }, [lat, lon, apiKey]);

    if (error) {
        return <div>Error fetching weather data: {error.message}</div>;
    }

    if (!weather) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div>
            <p><strong>Location:</strong> {weather.name}</p>
            <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
            <p><strong>Weather:</strong> {weather.weather[0].description}</p>
            <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
    );
};

export default CurrentWeatherComponent;



