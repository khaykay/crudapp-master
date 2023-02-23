import React from "react";
import "../styles/Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search-input">
        <input
          type="search"
          name="inputsearch"
          id="search-input"
          placeholder="search....."
        />
      </div>
      <div className="filter">filter</div>
    </div>
  );
}

export default Search;
