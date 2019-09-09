import React from 'react';
import SliderMovies from "../SlideMovies/SliderMovies";
import Swiper from 'react-id-swiper';
import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "./MovieSlider.css";

const NowPlayingMovies = ({nowPlayingMovies}) => {
    
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
    }
  }
      return (
        <div className="sliderContainer">
          <h2 className="sliderTitle">Now Playing</h2>
          <Swiper {...params}>
          {nowPlayingMovies.map(nowPlayingMovies => {
              return (
                <SliderMovies
                  key={nowPlayingMovies.id}
                  image={`https://image.tmdb.org/t/p/w185${nowPlayingMovies.poster_path}`}
                  title={nowPlayingMovies.name}
                  movies={nowPlayingMovies}
                />
              );
            })}
          </Swiper>
        </div>
      );
  };
  export default NowPlayingMovies;
