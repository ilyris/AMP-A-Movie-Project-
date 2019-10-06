import React from "react";
import { Link } from "react-router-dom";
import "../SlideMovies/SliderMovies.css";

const HomeSectionMovie = ({ movies, image }) => {
  const addAdditionalSwiperButtonClasses = () => {
    const swiperButtonsNext = document.querySelectorAll(".swiper-button-next");
    const swiperButtonsPrev = document.querySelectorAll(".swiper-button-prev");
    swiperButtonsNext.forEach(buttons =>
      buttons.classList.add("swiper-buttons-added-class")
    );
    swiperButtonsPrev.forEach(buttons =>
      buttons.classList.add("swiper-buttons-added-class")
    );
  };
  addAdditionalSwiperButtonClasses();
  return (
    <Link
      className="swiper-slide linkToMoviePage sliderMovie" to={{ pathname: `/details/movie/${movies.id}`, state: { movies } }}>
      <div className="contentContainer">
        <img className="movieImage" alt="Tv Show poster" src={image} />
        <div className="movieImageOverlay"></div>
        <h2 className="titleHeading">{movies.title}</h2>
        <div className="aboutMovieContentContainer">
        <h2 className="titleHeading">{movies.title}</h2>
          <p className="movieRating">Rating: {movies.vote_average}</p>
          <p className="movieLanguage">Langauge: {movies.original_language === "en" ? "englsh" : movies.original_language}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeSectionMovie;