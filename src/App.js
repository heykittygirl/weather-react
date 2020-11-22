import React from "react";
import "./App.css";
import Search from "./Search";
import Currentweather from "./Currentweather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <Currentweather />
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
