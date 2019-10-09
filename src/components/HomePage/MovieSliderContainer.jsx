import React from "react";
import Swiper from 'react-id-swiper';
import MovieSlider from "./MovieSlider";

import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "../MovieSliders/MovieSlider.css";

const MovieSliderContainer = ({isSliderSmall, isHeroSectionComponent, movies,sliderTitle}) => {
    const params = {
      init: true,
      loop: true,
      observer: true,
      slidesPerView: 1,
      spaceBetween: 0,
      shortSwipes : false,
      moveStartThreshold:false,
      longSwipes: true,
      longSwipesRatio: 0.3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
    if (isSliderSmall) {
      params.slidesPerView = 7;
      params.breakpoints = {
        1600: {
          slidesPerView: 7,
          spaceBetween: 10
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        860: {
          slidesPerView: 3,
          spaceBetween: 0
        },
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
            <MovieSlider movies={movies} isSliderSmall={isSliderSmall} isHeroSectionComponent={isHeroSectionComponent}/>
          </Swiper>
        </div>
    );
  }

  export default MovieSliderContainer;