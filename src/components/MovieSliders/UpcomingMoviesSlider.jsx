import React from 'react';
import SliderMovies from "../SlideMovies/SliderMovies";
import Swiper from 'react-id-swiper';
import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "./MovieSlider.css";

const NowPlayingMovies = ({upcomingMovies}) => {
    
const params = {
    init: true,
    loop: true,
    observer: true,
    slidesPerView: 7,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
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
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    860: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 10
    }
    }
  }
      return (
        <div className="sliderContainer">
          <h2 className="sliderTitle">Upcoming</h2>
          <Swiper {...params}>
          {upcomingMovies.map(upcomingMovies => {
              return (
                <SliderMovies
                  key={upcomingMovies.id}
                  image={`https://image.tmdb.org/t/p/w185${upcomingMovies.poster_path}`}
                  title={upcomingMovies.name}
                  movies={upcomingMovies}
                />
              );
            })}
          </Swiper>
        </div>
      );
  };
  export default NowPlayingMovies;