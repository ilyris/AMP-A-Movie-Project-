import React from "react";
import { Link } from "react-router-dom";



const SliderMovies = ({ title, movies, image }) => {
  const addAdditionalSwiperButtonClasses = () => {
    const swiperButtonsNext = document.querySelectorAll('.swiper-button-next');
    const swiperButtonsPrev = document.querySelectorAll('.swiper-button-prev');
    swiperButtonsNext.forEach( buttons => buttons.classList.add('swiper-buttons-added-class'));
    swiperButtonsPrev.forEach( buttons => buttons.classList.add('swiper-buttons-added-class'));
  }
  addAdditionalSwiperButtonClasses();


  return (
    <Link  className="swiper-slide" style ={ LinkToMoviePage }to={{ pathname: `/movie/${movies.title}`, state: {movies}}}>
        <div style={ContentContainer}>

        <img style={movieImage} alt="Tv Show poster" src={image} />
                <h2 style={TitleHeading}>{movies.title}</h2>

      </div>
    </Link>

  );
};

const TitleHeading = {
  fontSize: '1rem',
  textAlign: 'center',
  letterSpacing: '1px',
  color: '#fff',
  padding: '10px',
  textTransform: 'capitalize',
  width: '100%',
}


const movieImage = {
  width: '85%',
  borderRadius: '20px',
}

const ContentContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
}


const LinkToMoviePage = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '400px',
}



export default SliderMovies;