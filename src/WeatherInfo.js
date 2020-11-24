import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <ul className="date-and-condition">
        <li>
          <span className="current-date">
            <FormattedDate date={props.data.date} />
          </span>
        </li>
        <li>
          <span id="condition">{props.data.condition}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="weather-icon"
          />

          <span className="temp" id="temp">
            {Math.round(props.data.temperature)}
          </span>
          <span id="units">
            <button id="fahrenheit-link">°F</button> |
            <button id="celcius-link">°C</button>
          </span>
        </div>

        <div className="col-md-6">
          <ul className="weather-details">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
