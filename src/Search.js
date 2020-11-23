import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form class="search-form" id="search-form">
        <input
          type="search"
          placeholder="Type Your City Here"
          id="city-input"
        />
        <input type="submit" value="Search" id="submit-button" />

        <button class="current-location">Current Location</button>
      </form>
    </div>
  );
}
