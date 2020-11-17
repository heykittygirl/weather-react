import React from "react";
import axios from "axios";

export default function Currentweather() {
  let weatherData = {
    city: "Portland",
    date: "Friday, 12:30",
    condition: "Cloudy",
    temperature: "55",
    humidity: "72",
    wind: "2",
  };
  return (
    <div className="Currentweather">
      <h1 id="city">{weatherData.city}</h1>
      <ul className="date-and-condition">
        <li>
          <span className="current-date">{weatherData.date}</span>
        </li>
        <li>
          <span id="condition">{weatherData.condition}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="clouds"
            id="weather-icon"
          />

          <span className="temp" id="temp">
            {weatherData.temperature}
          </span>
          <span id="units">
            <a href="#" id="fahrenheit-link">
              °F
            </a>{" "}
            |
            <a href="#" id="celcius-link">
              °C
            </a>
          </span>
        </div>

        <div className="col-md-6">
          <ul className="weather-details">
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
