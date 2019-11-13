import React, {useState, useEffect} from "react";
import "../../App.css";
import "./HomePage.css";
import {apiKey} from '../../config';
import MovieSliderContainer from "./MovieSliderContainer";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  useEffect( () => {
    const baseURL = 'https://api.themoviedb.org/3/';

    const fetchApiCall = async () => { 
      // put all these calls into seperate functions
      const getResponse = await fetch(`${baseURL}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
      const data = await getResponse.json();
      setMovies(data.results);

      const getNowPlayingResponse = await fetch(`${baseURL}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
      const nowPlayingData = await getNowPlayingResponse.json();
      setNowPlayingMovies(nowPlayingData.results);

      const getUpcomingMoviesResponse = await fetch(`${baseURL}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
      const upcomingMoviesData = await getUpcomingMoviesResponse.json();
      setUpcomingMovies(upcomingMoviesData.results);
    };
    fetchApiCall();

  },[]);

  return(
    <div className="appWrapper">
        <MovieSliderContainer movies={nowPlayingMovies} isSliderSmall={false} isHeroSectionComponent={true}/>
      <div className="movieWrapper">
        <MovieSliderContainer movies={movies} sliderTitle={"Top Rated"} isSliderSmall={true} isHeroSectionComponent={false}/>
        <MovieSliderContainer movies={nowPlayingMovies} sliderTitle={"Now Playing"} isSliderSmall={true} isHeroSectionComponent={false} />
        <MovieSliderContainer movies={upcomingMovies} sliderTitle={"Upcoming"} isSliderSmall={true} isHeroSectionComponent={false}/>
      </div>
    </div>
  )
}
export default Home;
