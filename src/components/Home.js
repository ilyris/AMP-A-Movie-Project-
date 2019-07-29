import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Home = ({movies}) => {

  return(
    <AppWrapper>
      <MovieWrapper>
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
      </MovieWrapper>
    </AppWrapper>
  )
}
export default Home;



const AppWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;


const MovieWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 30px 0;
`;