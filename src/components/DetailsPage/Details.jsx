import React,{useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
import "./DetailsPage.css";
import CastMemberSlideContainer from './CastMemberSlideContainer';
import MovieReviewContainer from "./MovieReviewContainer";
import YouTubeMovieTrailers from "./YouTubeMovieTrailers";

const Details = ({match, location, api_Key}) =>  { 
    const { title, overview, release_date ,poster_path, vote_average,backdrop_path} = location.state.movies;

    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    const baseURL2 = 'https://api.themoviedb.org/3/';

    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [movieTrailers, setMovieTrailers] = useState([]);

      useEffect( () => {
        const fetchMovieCredits = async () => {
            const getCreditResponse = await fetch(`${baseURL2}movie/${location.state.movies.id}/credits?api_key=${api_Key}`);
            const creditResponseData = await getCreditResponse.json();
            setCast(creditResponseData.cast);

            const getMovieReviewsResponse = await fetch(`${baseURL2}movie/${location.state.movies.id}/reviews?api_key=${api_Key}&language=en-US&page=1`);
            const getMovieReviewsResponseData = await getMovieReviewsResponse.json();
            setReviews(getMovieReviewsResponseData.results);

            const getMovieTrailersResponse = await fetch(`${baseURL2}movie/${location.state.movies.id}/videos?api_key=${api_Key}&language=en-US`);
            const getMovieTrailersData = await getMovieTrailersResponse.json();
            setMovieTrailers(getMovieTrailersData.results);
          };
        fetchMovieCredits();
        {/* // eslint-disable-next-line */}
      }, [cast]);
    return  (
        <div>
            <div className= "heroSection">
                <img className="backgroundPosterImage" alt="background poster of movie" src={backDropImage}></img>
                <div className="backDropImageOverlay"></div>
                <h2 className="styledH2">{title}</h2>
                <div className="posterContainerDiv">
                    <img className="posterImage" alt="movie cover"src={posterImageURL}></img>
                    <p className="movieDetailsParagraphText"><span className="styledSpan">Released: </span> {release_date}</p>
                    <p className="movieDetailsParagraphText"><span className="styledSpan">Rated: </span> {vote_average} Stars </p>
                </div>
            </div>
            <div className="informationContainer">
              <h2 className="sliderTitle">Summary</h2>
              <p className="movieDetailsParagraphText">{overview}</p>
            </div>
            <div className="TrailerContainer">
              <h2 className="sliderTitle">Trailers</h2>
              {movieTrailers.map( (movieTrailers, index) => {
                if(index < 3) {
                  return(
                  <YouTubeMovieTrailers
                    trailerKey={movieTrailers.key}
                    key={index}
                  />
                  );
                } return null;

          })}
          </div>
            <CastMemberSlideContainer cast={cast} sliderTitle={"Cast Members"}/>
            <div className="movieReviewContainer">
              <MovieReviewContainer reviews={reviews} title={"Reviews"}/>
          </div>
        </div>
        );
}


export default withRouter(Details);

