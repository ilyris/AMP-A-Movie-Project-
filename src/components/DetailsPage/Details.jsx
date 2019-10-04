import React,{useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
import "./DetailsPage.css";
import CastMemberSlideContainer from './CastMemberSlideContainer';

const Details = ({match, location, api_Key}) =>  { 
    const { title, overview, release_date ,poster_path, vote_average,backdrop_path} = location.state.movies;

    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    const baseURL2 = 'https://api.themoviedb.org/3/';

    const [cast, setCast] = useState([]);

      useEffect( () => {
        const fetchMovieCredits = async () => {
            const getCreditResponse = await fetch(`${baseURL2}movie/${location.state.movies.id}/credits?api_key=${api_Key}`);
            const creditResponseData = await getCreditResponse.json();
            console.log(creditResponseData.cast);
            setCast(creditResponseData.cast);
          };
        fetchMovieCredits();
      }, []);


    return  (
        <div>
            <div className= "heroSection">
                <img className="backgroundPosterImage" alt="background poster of movie" src={backDropImage}></img>
                <div className="backDropImageOverlay"></div>
                <div className="posterContainerDiv">
                    <img className="posterImage" alt="movie cover"src={posterImageURL}></img>
                    <p className="movieDetailsParagraphText"><span className="styledSpan">Released: </span> {release_date}</p>
                    <p className="movieDetailsParagraphText"><span className="styledSpan">Rated: </span> {vote_average} Stars </p>
                </div>
                <div className="informationContainer">
                    <h2 className="styledH2">{title}</h2>
                    <p className="movieDetailsParagraphText"><span className="styledSpan">Details: </span>{overview}</p>
                </div>
            </div>
            <CastMemberSlideContainer cast={cast} sliderTitle={"Cast Members"}/>
        </div>
        );
}


export default withRouter(Details);

