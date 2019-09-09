import React from "react";
import { Link } from "react-router-dom";
import "./SliderMovies.css";

const SliderMovies = ({ title, movies, image }) => {

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
      className="swiper-slide linkToMoviePage sliderMovie" to={{ pathname: `/movie/${movies.title}`, state: { movies } }}>
      <div className="contentContainer">
        <img className="movieImage" alt="Tv Show poster" src={image} />
        <h2 className="titleHeading">{movies.title}</h2>
      </div>
    </Link>
  );
};

export default SliderMovies;
