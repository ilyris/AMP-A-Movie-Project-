
import React, {useState} from "react";
import styled from "styled-components";
import Navigation from './Navigation';
import Movie from "./Movie";

const Home = () => {

  const api_Key = process.env.REACT_APP_API_KEY;
  const baseURL = 'https://api.themoviedb.org/3/';

  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const fetchApiCall = async () => {
    const getResponse = await fetch(
      `${baseURL}search/movie?api_key=${api_Key}&query=${searchfield}`
    );
    const data = await getResponse.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const searchChange = event => setSearchField(event.target.value);

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      return fetchApiCall();
    }
  }

  const submitUsersRecipe = event => {
    event.preventDefault();
    fetchApiCall();
  };


  return(
    <AppWrapper>
      <Navigation
        searchChange={searchChange}
        submitUsersRecipe={submitUsersRecipe}
        handleKeyPress={handleKeyPress}
      />
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
