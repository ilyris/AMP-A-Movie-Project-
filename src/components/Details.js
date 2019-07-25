import React from "react";
import styled from "styled-components";
import {withRouter, Link} from 'react-router-dom';
import Navigation from './Navigation';


const Details = ({match, location}) =>  { 
    const {title, overview, release_date ,poster_path, popularity,backdrop_path} = location.state.moviesArray;
    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`
    return  (
        <div>
            <Navigation/>
            <HeroSection>
                <BackDropImage src={backDropImage}></BackDropImage>
                <BackDropOverlay></BackDropOverlay>
                <PosterImage src={posterImageURL}></PosterImage>
                <InformationContainer>
                    <H2>{title}</H2>
                    <ReleaseDate><Span>Details: </Span>{overview}</ReleaseDate>
                    <ReleaseDate><Span>Released: </Span>{release_date}</ReleaseDate>
                    <ReleaseDate><Span>Rated: </Span>{popularity}</ReleaseDate> 
                </InformationContainer>
            </HeroSection>
        </div>
        );
}


export default withRouter(Details);


const HeroSection = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
`;
const BackDropImage = styled.img `
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`;
const BackDropOverlay = styled.div `
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
    z-index: -1;
`;
const PosterImage = styled.img `
    width: 30%;
    min-width: 640px;
    height: 80vh;
    max-width: 640px;
    margin-left: 200px;
`;
const H2 = styled.h2 `
    font-size: 3.4rem;
    color: #ffbc00;
    text-align: center;
    margin: 20px 0 30px 0;
    letter-spacing: 3px;
`;
const InformationContainer = styled.div`
    height: 80%;
    padding: 0 200px;
`;
const Span = styled.span `
    color: #ffbc00;
    font-size: 2rem;
`;
const ReleaseDate = styled.p `
    color: #fff;
    margin: 20px 0;
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 40px;
`;
const StyledLink = styled(Link) `
    text-decoration: none;
    font-size: 1.6rem;
    margin: 20px 0 0 10px;
    color: #fff;
`;
