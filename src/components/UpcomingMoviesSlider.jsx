import React from 'react';
import SliderMovies from "./SliderMovies";
import Swiper from 'react-id-swiper';
import "../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';

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
        <div style={TvShowSlideContainer}>
          <h2 style={SliderTitle}>Upcoming</h2>
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