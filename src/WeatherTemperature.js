import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temp" id="temp">
          {Math.round(props.fahrenheit)}
        </span>
        <span id="units">
          °F |
          <a href="/" id="celsius-link" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="temp" id="temp">
          {Math.round(celsius)}
        </span>
        <span id="units">
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
