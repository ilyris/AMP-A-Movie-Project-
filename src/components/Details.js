import React from "react";
import styled from "styled-components";
import {withRouter, Link} from 'react-router-dom';
import Navigation from './Navigation';


const Details = ({match, location}) =>  { 
    const {title, overview, release_date ,poster_path, vote_average,backdrop_path} = location.state.moviesArray;
    const posterImageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
    const backDropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`
    return  (
        <div>
            <Navigation/>
            <HeroSection>
                <BackDropImage src={backDropImage}></BackDropImage>
                <BackDropImageOverlay></BackDropImageOverlay>
                <PosterContainerDiv>
                    <PosterImage src={posterImageURL}></PosterImage>
                    <MovieDetailsParagraphText><Span>Released: </Span> {release_date}</MovieDetailsParagraphText>
                    <MovieDetailsParagraphText><Span>Rated: </Span> {vote_average} Stars </MovieDetailsParagraphText>
                </PosterContainerDiv>
                <InformationContainer>
                    <H2>{title}</H2>
                    <MovieDetailsParagraphText><Span>Details: </Span>{overview}</MovieDetailsParagraphText>
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
const BackDropImageOverlay = styled.div `
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
    z-index: -1;
`;
const PosterImage = styled.img `
    width: 30%;
    min-width: 500px;
    height: 60vh;
    max-width: 640px;
`;
const PosterContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    width: 40%;
    justify-content: center;
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
    width: 60%;
`;
const Span = styled.span `
    color: #ffbc00;
    font-size: 2rem;
`;
const MovieDetailsParagraphText = styled.p `
    color: #fff;
    margin: 10px 0;
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
