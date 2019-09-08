import React from "react";
import { Link } from "react-router-dom";



const SliderMovies = ({ title, movies, image }) => {
console.log(movies);
  return (
    <Link  className="swiper-slide" style ={ LinkToMoviePage }to={{ pathname: `/movie/${movies.title}`,
    state: {movies}}}>
        <div style={ ContentContainer }>
        <img style={movieImage} alt="Tv Show poster" src={image} />
        <h2 style={ TitleHeading }>{movies.title}</h2>
      </div>
    </Link>

  );
};

const TitleHeading = {
  fontSize: '1.4rem',
  letterSpacing: '1px',
  color: '#fff',
  padding: '10px 0',
  textTransform: 'capitalize',
  width: '100%',
}


const movieImage = {
  width: '85%',
}

const ContentContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  width: '200px',
}


const LinkToMoviePage = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
}



export default SliderMovies;