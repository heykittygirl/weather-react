import React, { useState } from "react";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      condition: response.data.weather[0].main,
      description: response.data.weather[0].main.description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81d3b72cf20047c3d27312be14b34f47
&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app">
            <form
              onSubmit={handleSubmit}
              className="search-form"
              id="search-form"
            >
              <input
                type="search"
                placeholder="Type Your City Here"
                id="city-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" id="submit-button" />

              <button className="current-location">Current Location</button>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
