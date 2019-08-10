import React from "react";
import Movie from "./Movie";

export default function SearchPage({movies}) {
    return(
      <div style={ AppWrapper }>
        <div style={ MovieWrapper }>
          {movies.map(movies => {
            return (
              <Movie
                key={movies.id}
                image={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
                title={movies.title}
                moviesArray={movies}
              />
            );
          })}
        </div>
      </div>
    )
  }



const AppWrapper = {
  width: '100%',
  boxSizing: 'border-box',
  height: '100%',
}
const MovieWrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '40px',
  padding: '30px 0',
}

