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
        <Footer />
      </div>
    </div>
  );
}
