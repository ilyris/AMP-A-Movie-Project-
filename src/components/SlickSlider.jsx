import React from 'react';
import TopRatedTvShow from "./TopRatedTvShow";
import Swiper from 'react-id-swiper';
import "../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';

const TvShowSlider2 = ({topRatedTvShows}) => {
const params = {
    init: true,
    loop: true,
    observer: true,
    slidesPerView: 9,
    spaceBetween: 15,
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
// test commit
      return (
        <div>
          <h2>Top Rated TV Shows</h2>
          <Swiper {...params}>
          {topRatedTvShows.map(topRatedTvShows => {
              return (
                <TopRatedTvShow
                  key={topRatedTvShows.id}
                  image={`https://image.tmdb.org/t/p/w185${topRatedTvShows.poster_path}`}
                  title={topRatedTvShows.name}
                  topRatedTvShows={topRatedTvShows}
                />
              );
            })}
          </Swiper>
        </div>
      );
  };
  export default TvShowSlider2;