import React from 'react';
import SliderMovies from "./SliderMovies";
import Swiper from 'react-id-swiper';
import "../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';

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
        spaceBetween: 40
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }
      return (
        <div style={TvShowSlideContainer}>
          <h2 style={SliderTitle}>Now Playing</h2>
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

  const TvShowSlideContainer = {
    width: "100%",
    padding: '0 20px',
  };

  const SliderTitle = {
    fontSize: '40px',
    color: '#fff',
    paddingBottom: '10px',

  }