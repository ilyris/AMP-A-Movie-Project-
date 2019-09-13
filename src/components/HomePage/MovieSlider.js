import React, {useState} from 'react';
import HomeSectionMovie from "./HomeSectionMovie";
import Swiper from 'react-id-swiper';
import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "../MovieSliders/MovieSlider.css";

function MovieSlider({isSliderSmall = false, isHeroSectionComponent = false, children}) {
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
  if (isSliderSmall) params.slidesPerView = 7;

  let classNames = "sliderContainer";
  if(isHeroSectionComponent) {
    classNames += " heroSectionContainer";
  }
  return(
    <div className={classNames}>
        <Swiper {...params}>
          {children}
        </Swiper>
      </div>
  );
}
// HeroSection is the MovieSlider component we are rendering on the home page, we call it Hero Section here for sake of naming conventions.
const HeroSection = ({nowPlayingMovies, isHeroSectionComponent = true}) => {
  return (
      <MovieSlider>
          {nowPlayingMovies.map(movie => (
              <HomeSectionMovie
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w185${isHeroSectionComponent ? movie.backdrop_path : movie.poster_path}`}
                title={movie}
                movies={movie}
              />
          ))}
      </MovieSlider>
  )
}

export default HeroSection;









