import React, { useState } from "react";
import "./Weather.css";
import Footer from "./Footer";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Monday 09:00",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      condition: response.data.weather[0].main,
      description: response.data.weather[0].main.description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app">
            <form className="search-form" id="search-form">
              <input
                type="search"
                placeholder="Type Your City Here"
                id="city-input"
                autoFocus="on"
              />
              <input type="submit" value="Search" id="submit-button" />

              <button className="current-location">Current Location</button>
            </form>
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="weather-icon"
                />

                <span className="temp" id="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span id="units">
                  <button id="fahrenheit-link">°F</button> |
                  <button id="celcius-link">°C</button>
                </span>
              </div>

              <div className="col-md-6">
                <ul className="weather-details">
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                    mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=81d3b72cf20047c3d27312be14b34f47
&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
