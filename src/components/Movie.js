import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, moviesArray, image }, props) => {
  return (
    <Link styled ={ LinkToMoviePage }to={{ pathname: `/movie/${moviesArray.title}`,
    state: {moviesArray}}}>
        <div style={ ContentContainer }>
        <img style={movieImage} src={image} />
        <h2 style={ TitleHeading }>{title}</h2>
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
  width: '100%',
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
  maxWidth: '300px',
  padding: '20px',
  width: '25%',
}



export default Movie;