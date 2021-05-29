import React, { useEffect, useState } from "react";
import "./Weather.css";

const initialWeather = {
    weather: [{ main: "" }],
    name: "Loading...",
    main: {
        temp: "",
    },
};

function Weather() {
    const [weather, setWeather] = useState(() => initialWeather);

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        const data = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=4e308b6d204eefcc89e786f307e8926c"
        );
        const weatherData = await data.json();
        console.log(weatherData);

        setWeather(weatherData);
    };

    return (
        <div className="weather">
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
            />
            <span>
                {weather.weather[0].main} {Math.round(weather.main.temp) + "°C"}
            </span>
        </div>
    );
}

export default Weather;
