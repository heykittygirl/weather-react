import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img
        src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
        alt={props.alt}
      />
    </div>
  );
}
