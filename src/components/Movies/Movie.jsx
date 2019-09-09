import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movie = ({ title, movies, image }) => {
  return (
    <Link className ="linkToMoviePage" to={{ pathname: `/movie/${title}`,
    state: {movies}}}>
        <div className="contentContainer">
        <img className="movieImage" alt="Movie poster" src={image} />
        <h2 className="titleHeading">{title}</h2>
      </div>
    </Link>
  );
};

export default Movie;