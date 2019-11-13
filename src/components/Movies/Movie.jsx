import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movie = ({ title,id, movies, image }) => {
  const mullImage = 'https://image.tmdb.org/t/p/w185null';
  const undefinedImage = 'https://image.tmdb.org/t/p/w185undefined';
  const placeholderImage = 'http://www.citypages.com/img/movie-placeholder.gif';
  console.log(movies.id);
  return (

    <Link className ="linkToMoviePage" to={{ pathname: `/details/movie/${id}`, state: {movies}}}>
        <div className="contentContainer">
        <img className="movieImage" alt="Movie poster" src={image === mullImage || image === undefinedImage ? placeholderImage : image} />
        <h2 className="titleHeading">{title}</h2>
      </div>
    </Link>
  );
};

export default Movie;