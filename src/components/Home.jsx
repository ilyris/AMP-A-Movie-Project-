import React, {useState, useEffect} from "react";
import "../App.css";
import TvShowSlider from './TvShowSlider';


const Home = () => {

  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  useEffect( () => {
    const api_Key = process.env.REACT_APP_API_KEY;
    const baseURL = 'https://api.themoviedb.org/3/';

    const fetchApiCall = async () => {
      
      const getResponse = await fetch(`${baseURL}tv/top_rated?api_key=${api_Key}&language=en-US&page=1`);
      const data = await getResponse.json();
      console.log(data.results);
      setTopRatedTvShows(data.results);

    };
    fetchApiCall();
  },[]);

  return(
    <div style={AppWrapper}>
      <div style={MovieWrapper}>
      <TvShowSlider topRatedTvShows={topRatedTvShows} />
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
}