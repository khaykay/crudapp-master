import React from "react";
import "../styles/Card.css";
import Country from "./Country";
import { useEffect, useState } from "react";

function Card({ countries, loading, error, tryAgain }) {
  const [favourite, setFavourite] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem("favourite", JSON.stringify(favourite));
  // }, [favourite]);

  const addFavouriteHandler = (country) => {
    const countryVar = localStorage.getItem("favourite");
    const countryArray = countryVar
      ? JSON.parse(localStorage.getItem("favourite"))
      : [];

    const newFavouriteList = [...countryArray, country];
    setFavourite(newFavouriteList);
    
localStorage.setItem("favourite", JSON.stringify(newFavouriteList));
  };
  return (
    <div className="card">
      {!loading ? (
        <>
          {!error ? (
            countries.map((country) => {
              return (
                <Country
                  key={country.name}
                  flag={country.flags.svg}
                  name={country.name || ""}
                  population={country.population.toLocaleString("en")}
                  region={country.region}
                  capital={country.capital || "No capital"}
                  alpha3Code={country.alpha3Code}
                  addFavouriteHandler={() => addFavouriteHandler(country)}
                />
              );
            })
          ) : (
            <div className="text-2xl mt-7 font-medium space-y-5 text-gray-900 dark:text-white">
              <p>Error. Try again</p>
              <button
                onClick={tryAgain}
                className="dark:bg-darkelem shadow-md bg-white text-base px-3 py-2 rounded-md"
              >
                Refresh
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <p>is loading ....</p>
        </>
      )}
    </div>
  );
}

export default Card;
