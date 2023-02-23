import React from "react";
import "../styles/Homepage.css";
import Card from "./Card";
import Search from "./Search";
import { useEffect, useState } from "react";
import CountryPage from "./CountryPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Main() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const fetchFavourite = async () => {
  //   let localStorageFavourite = localStorage.getItem("favourite");
  //   localStorageFavourite = JSON.parse(localStorageFavourite);
  //   return localStorageFavourite;
  // };
  const fetchData = async () => {
    // let localStorageData = localStorage.getItem("countries")
    //   ? localStorage.getItem("countries")
    //   : false;

    // localStorageData = localStorageData ? JSON.parse(localStorageData) : [];

    try {
      setError(false);
      setLoading(true);
      // let slicedcountries = [];
      let response = await fetch("https://restcountries.com/v2/all");
      let countries = await response.json();
      // slicedcountries = countries.slice(0, 21);
      // console.log(`slicedcountries: ${slicedcountries}`);
      //  console.log(`slicedcountries: ${slicedcountries}`);
      console.log(countries);
      // if (localStorageData.length < 1) {
      //   let response = await fetch("https://restcountries.com/v2/all");
      //   let countries = await response.json();
      //   slicedcountries = countries.slice(0, 21);
      // }

      // const mainData =
      //   localStorageData.length < 1 ? slicedcountries : localStorageData;
      // // const favouriteData = await fetchFavourite();

      // const countrymapping = mainData.map((country) => {
      //   const modifiedData = favouriteData.map((data) => {
      //     return {
      //       ...country,
      //       favourite: country.alpha3code === data.alpha3code ? true : false,
      //     };
      //   });

      //   console.log(modifiedData);

      //   return {
      //     ...country,
      //     favourite : flag
      //   };
      // });
      // console.log(countrymapping);

      // if (localStorageData.length > 1) {
      //   localStorage.setItem("countries", JSON.stringify(countrymapping));
      // }
      setCountries(countries);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <Card
                  error={error}
                  countries={countries}
                  loading={loading}
                  tryAgain={fetchData}
                />
              </>
            }
          />
          <Route
            path="/:countryName"
            element={<CountryPage loading={loading} countries={countries} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;
