import React from 'react';
import {Link} from "react-router-dom";
import "../SlideMovies/SliderMovies.css";

const CastMember = ({cast,title, crewMemberImage}) => {

  const mullImage = 'https://image.tmdb.org/t/p/w185null';
  const undefinedImage = 'https://image.tmdb.org/t/p/w185undefined';
  const placeholderImage = 'http://www.citypages.com/img/movie-placeholder.gif';
  const profileImage = `https://image.tmdb.org/t/p/original${crewMemberImage}`;

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
          <Link className =" swiper-slide linkToMoviePage sliderMovie" to={{ pathname: `/person/${cast.cast_id}`, state: {cast}}}>
              <div className="contentContainer">
              <img className="movieImage" alt="Movie poster" src={profileImage === mullImage || profileImage === undefinedImage ? placeholderImage : profileImage} />
              <h2 className="titleHeading">{title}</h2>
            </div>
          </Link>
        );
}

export default CastMember;

