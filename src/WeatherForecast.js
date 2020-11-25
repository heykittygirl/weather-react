import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <img
            src={forecast.list[0].weather[0].icon}
            alt={forecast.list[0].main.description}
            id="weather-icon"
          />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=b8d550e6f9d491d2fd0cf484466fab52&units=imperial`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
