import React, {useState, useEffect} from "react";
import "../../App.css";
import "./HomePage.css";
import TvShowSlider2 from '../MovieSliders/SlickSlider';
import MovieSliderContainer from "./MovieSliderContainer";
// import NowPlayingMovieSlider from '../MovieSliders/NowPlayingMovieSlider';
import UpcomingMoviesSlider from '../MovieSliders/UpcomingMoviesSlider';
// import MovieSlider from "./MovieSlider";

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
    <div className="appWrapper">
        <MovieSliderContainer nowPlayingMovies={nowPlayingMovies} isSliderSmall={false} isHeroSectionComponent={true}/>
      <div className="movieWrapper">
        <MovieSliderContainer nowPlayingMovies={movies} sliderTitle={"Top Rated"} isSliderSmall={true} isHeroSectionComponent={false}/>
        <MovieSliderContainer nowPlayingMovies={nowPlayingMovies} sliderTitle={"Now Playing"} isSliderSmall={true} isHeroSectionComponent={false} />
        <MovieSliderContainer nowPlayingMovies={upcomingMovies} sliderTitle={"Upcoming"} isSliderSmall={true} isHeroSectionComponent={false}/>
      </div>
    </div>
  )
}
export default Home;
