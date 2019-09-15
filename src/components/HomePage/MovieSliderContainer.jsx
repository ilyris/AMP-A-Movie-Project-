import React from "react";
import Swiper from 'react-id-swiper';
import MovieSlider from "./MovieSlider";

import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "../MovieSliders/MovieSlider.css";

const MovieSliderContainer = ({isSliderSmall, isHeroSectionComponent, nowPlayingMovies,sliderTitle}) => {
    const params = {
      init: true,
      loop: true,
      observer: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
    if (isSliderSmall) {
      params.slidesPerView = 6;
      params.breakpoints = {
        1600: {
          slidesPerView: 6,
          spaceBetween: 10
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        860: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      };
    }

    let classNames = "sliderContainer";
    if(isHeroSectionComponent) {
      classNames += " heroSectionContainer";
    }
    return(
      <div className={classNames}>
          <h2 className="sliderTitle">{sliderTitle}</h2>
          <Swiper {...params}>
            <MovieSlider nowPlayingMovies={nowPlayingMovies} isSliderSmall={isSliderSmall} isHeroSectionComponent={isHeroSectionComponent}/>
          </Swiper>
        </div>
    );
  }

  export default MovieSliderContainer;