import React, {useState, useEffect} from "react";
import "../App.css";
import TvShowSlider2 from './SlickSlider';
import NowPlayingMovieSlider from './NowPlayingMovieSlider';
import UpcomingMoviesSlider from './UpcomingMoviesSlider';


const Home = () => {

  const [movies, setMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  useEffect( () => {
    const api_Key = process.env.REACT_APP_API_KEY;
    const baseURL = 'https://api.themoviedb.org/3/';

    const fetchApiCall = async () => {
      
      const getResponse = await fetch(`${baseURL}movie/top_rated?api_key=${api_Key}&language=en-US&page=1`);
      const data = await getResponse.json();
      setMovies(data.results);

      const getNowPlayingResponse = await fetch(`${baseURL}movie/now_playing?api_key=${api_Key}&language=en-US&page=1`);
      const nowPlayingData = await getNowPlayingResponse.json();
      setNowPlayingMovies(nowPlayingData.results);

      const getUpcomingMoviesResponse = await fetch(`${baseURL}movie/upcoming?api_key=${api_Key}&language=en-US&page=1`);
      const upcomingMoviesData = await getUpcomingMoviesResponse.json();
      setUpcomingMovies(upcomingMoviesData.results);
    };
    fetchApiCall();
  },[]);

  return(
    <div style={AppWrapper}>
      <div style={MovieWrapper}>
        <TvShowSlider2 movies={movies} />
        <NowPlayingMovieSlider nowPlayingMovies={nowPlayingMovies} />
        <UpcomingMoviesSlider upcomingMovies={upcomingMovies}/>
      </div>
    </div>
  )
}
export default Home;



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
  width: '80%',
  margin: '0 auto',
}