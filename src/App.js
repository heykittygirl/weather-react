import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
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
  );
}
