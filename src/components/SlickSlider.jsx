import React from 'react';
import SliderMovie from "./SliderMovies";
import Swiper from 'react-id-swiper';
import "../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';

const TvShowSlider2 = ({movies}) => {
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
      600: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }
  }

      return (
        <div style={TvShowSlideContainer}>
          <h2 style={SliderTitle}>Top Rated</h2>
          <Swiper {...params}>
          {movies.map(movies => {
              return (
                <SliderMovie
                  key={movies.id}
                  image={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
                  title={movies.name}
                  movies={movies}
                />
              );
            })}
          </Swiper>
        </div>
      );
  };
  export default TvShowSlider2;

  const TvShowSlideContainer = {
    width: '100%',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  };

  const SliderTitle = {
    fontSize: '40px',
    color: '#fff',
    paddingBottom: '10px',
    textAlign: 'center',
  }