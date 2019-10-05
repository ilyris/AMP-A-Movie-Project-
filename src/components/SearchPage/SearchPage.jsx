import React from "react";
import Movie from "../Movies/Movie";
import "./SearchPage.css";

export default function SearchPage({movies,fetchApiCall, handlePagination}) {

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
        <div className="paginationButtonContainer" onClick={fetchApiCall}>
                <button className="paginationButton prev" onClick={() => handlePagination("-")}>Prev</button>
                <button className="paginationButton next" onClick={() => handlePagination("+")}>Next</button>
            </div>
      </div>
    )
  }
