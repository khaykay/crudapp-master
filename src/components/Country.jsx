import React from "react";
import "../styles/Country.css";
import { useNavigate } from "react-router-dom";

function Country({
  flag,
  name,
  population,
  region,
  capital,
  alpha3Code,
  addFavouriteHandler,
}) {
  let navigate = useNavigate();

  return (
    <div className="card-wrapper">
      <span className="favourite">
        <i
          class="material-icons favourite-active"
          onClick={addFavouriteHandler}
        >
          favorite
        </i>
      </span>
      <div className="card-container" onClick={() => navigate(alpha3Code)}>
        <figure>
          <img src={flag} alt="" className="flag" />
          <figcaption>{name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Country;
