import React from "react";
import {withRouter} from 'react-router-dom';

const Details = ({match, location}) =>  { 
    const {title, overview, release_date ,poster_path, vote_average,backdrop_path} = location.state.moviesArray;
    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`
    return  (
        <div>
            <div style={ HeroSection }>
                <img style={ backgroundPosterImage } alt="background poster of movie" src={backDropImage}></img>
                <div style={ BackDropImageOverlay }></div>
                <div style={ PosterContainerDiv }>
                    <img style={PosterImage} alt="movie cover"src={posterImageURL}></img>
                    <p style={ MovieDetailsParagraphText }><span style={styledSpan}>Released: </span> {release_date}</p>
                    <p style={ MovieDetailsParagraphText }><span style={styledSpan}>Rated: </span> {vote_average} Stars </p>
                </div>
                <div style={ InformationContainer }>
                    <h2 styled={ styledH2 }>{title}</h2>
                    <p style={ MovieDetailsParagraphText }><span style={styledSpan}>Details: </span>{overview}</p>
                </div>
            </div>
        </div>
        );
}


export default withRouter(Details);


const HeroSection = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
}
const backgroundPosterImage = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1',
}
const BackDropImageOverlay = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '-1',
}
const PosterImage = {
    width: '30%',
    minWidth: '500px',
    height: '60vh',
    maxWidth: '640px',
}
const PosterContainerDiv = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '200px',
    width: '40%',
    justifyContent: 'center',
}
const styledH2 = {
    fontSize: '3.4rem',
    color: '#ffbc00',
    textSlign: 'center',
    margin: '20px 0 30px 0',
    letterSpacing: '3px',
}
const InformationContainer = {
    height: '80%',
    padding: '0 200px',
    width: '60%',
}
const styledSpan = {
    color: '#ffbc00',
    fontSize: '2rem',
}
const MovieDetailsParagraphText = {
    color: '#fff',
    margin: '10px 0',
    fontSize: '1.6rem',
    letterSpacing: '1px',
    lineHeight: '40px',
}


