import React from "react";
import Movie from "../Movies/Movie";
import "./SearchPage.css";

export default function SearchPage({movies}) {
    return(
      <div className="appWrapper">
        <div className="movieWrapper">
          {movies.map(movies => {
            return (
              <Movie
                key={movies.id}
                image={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
                title={movies.title}
                movies={movies}
              />
            );
          })}
        </div>
      </div>
    )
  }
