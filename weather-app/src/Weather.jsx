import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const apiKey = "81a005cbba61a4c018a02f95c0f2dfbe"; 

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="main-container">
           
            <div className="search">
        <i className="fa-solid fa-location-dot"></i>
        <input
          type="search"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} className="fa-solid fa-magnifying-glass"></button>
      </div>
    
            {weather && (
                <div style={{ marginTop: "20px" }}>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>

                    
            )}
        </div>
    );
};

export default Weather;
