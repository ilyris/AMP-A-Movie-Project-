import React from 'react';
import HomeSectionMovie from "./HomeSectionMovie";
import "../../App.css";
import "../MovieSliders/MovieSlider.css";

const MovieSlider = ({nowPlayingMovies, isHeroSectionComponent}) => {

  return (
    <React.Fragment>
          {nowPlayingMovies.map(movie => (
              <HomeSectionMovie
                key={movie.id}
                image={`https://image.tmdb.org/t/p/original${isHeroSectionComponent ? movie.backdrop_path : movie.poster_path}`}
                title={movie}
                movies={movie}
              />
          ))}
    </React.Fragment>
  )
}

export default MovieSlider;









