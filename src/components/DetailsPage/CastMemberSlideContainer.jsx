import React from "react";
import Swiper from 'react-id-swiper';
import CastMemberSlider from "./CastMemberSlider";

import "../../App.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "../MovieSliders/MovieSlider.css";

const CastMemberSlideContainer = ({cast,sliderTitle}) => {
    const params = {
      init: true,
      loop: true,
      observer: true,
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
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
    return(
      <div className="sliderContainer">
          <h2 className="sliderTitle">{sliderTitle}</h2>
          <Swiper {...params}>
            <CastMemberSlider cast={cast}/>
          </Swiper>
        </div>
    );
  }

  export default CastMemberSlideContainer;