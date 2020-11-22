import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <h1 id="city">Portland</h1>
          <ul className="date-and-condition">
            <li>
              <span className="current-date">Sunday 9:42</span>
            </li>
            <li>
              <span id="condition">Cloudy</span>
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
                37
              </span>
              <span id="units">
                <button id="fahrenheit-link">°F</button> |
                <button id="celcius-link">°C</button>
              </span>
            </div>

            <div className="col-md-6">
              <ul className="weather-details">
                <li>
                  Humidity: <span id="humidity">94</span>%
                </li>
                <li>
                  Wind: <span id="wind">4</span> mph
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="source-code" id="source-code">
          <a
            href="https://https://github.com/heykittygirl/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Katie Bergmann
        </footer>
      </div>
    </div>
  );
}
