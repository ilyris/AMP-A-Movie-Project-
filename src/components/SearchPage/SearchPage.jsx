import React from "react";
import Movie from "../Movies/Movie";
import "./SearchPage.css";

export default function SearchPage({movies = [], handlePagination, location, match}) {

  console.log({location});
  console.log({match});
  
    const nextPageHandler = () => {
      handlePagination(Number(match.params.id) + 1, location.state);
    }
    const previousPageHandler = () => {
      handlePagination(Number(match.params.id) - 1, location.state);
    }

    return(
      <div className="appWrapper">
        <div className="movieWrapper">
          {movies.map(movies => {
            
            return (
              <Movie
                key={movies.id}
                id={movies.id}
                image={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
                title={movies.title}
                movies={movies}
              />
            );
          })}
        </div>
        <div className="paginationButtonContainer">
                <button className="paginationButton prev" onClick={previousPageHandler}>Prev</button>
                <button className="paginationButton next" onClick={nextPageHandler}>Next</button>
        </div>
      </div>
    )
  }
