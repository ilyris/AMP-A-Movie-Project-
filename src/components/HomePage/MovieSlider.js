import React, {useState} from 'react';
import HomeSectionMovie from "./HomeSectionMovie";
import Swiper from 'react-id-swiper';
import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "../MovieSliders/MovieSlider.css";

function MovieSlider({isSliderSmall, isHeroSectionComponent, children}) {
  console.log(isSliderSmall);
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
    params.slidesPerView = 7;
    params.breakpoints = {
      1600: {
        slidesPerView: 7,
        spaceBetween: 20
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
    <div className={classNames} isSliderSmall={true}>
        <Swiper {...params}>
          {children}
        </Swiper>
      </div>
  );
}
// HeroSection is the MovieSlider component we are rendering on the home page, we call it Hero Section here for sake of naming conventions.
const HeroSection = ({nowPlayingMovies, isHeroSectionComponent, isSliderSmall}) => {
  console.log(isSliderSmall);
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









