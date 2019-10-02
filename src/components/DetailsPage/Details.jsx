import React from "react";
import {withRouter} from 'react-router-dom';
import "./DetailsPage.css";

const Details = ({match, location}) =>  { 
    const { title, overview, release_date ,poster_path, vote_average,backdrop_path} = location.state.movies;
    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
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
        </div>
        );
}


export default withRouter(Details);

