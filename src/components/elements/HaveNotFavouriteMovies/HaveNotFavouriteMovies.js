import React from "react";
import "./HaveNotFavouriteMovies.css";
import hearth from "../img/favorite.png";

const HaveNotFavouriteMovies = () => {
  return (
    <div className="text-container text-center">
      <img className="no-movie-img" src={`${hearth}`} alt="hearth-img" />
      <h1>Click Movie ♥ to add the movie to your favorites. </h1>
    </div>
  );
};

export default HaveNotFavouriteMovies;
