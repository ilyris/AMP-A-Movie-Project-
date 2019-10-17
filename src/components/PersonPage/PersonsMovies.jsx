import React from 'react';
import S from 'styled-components';
import {Link} from "react-router-dom";

const PersonsMovies = ({id, title, overview, poster_path, release_date, movies}) => {
    const movieImage = `https://image.tmdb.org/t/p/w185${poster_path}`;
    return(
        <MovieBlockContainer>
            <StyledLink to={{ pathname: `/details/movie/${id}`,
    state: {movies}}}>
            <Movie>
                <Image src={movieImage}/>
                <MovieContent>{title}</MovieContent>
                <MovieContent>{release_date}</MovieContent>
            </Movie>
            </StyledLink>
            <MovieOverview>
            <MovieOverviewTitle>Overview</MovieOverviewTitle>
                <MovieOverviewcontent>{overview}</MovieOverviewcontent>
            </MovieOverview>
        </MovieBlockContainer>

    );
}
const MovieBlockContainer = S.div`
    width: 100%;
    border-left: 5px solid #000;
    display: flex;
    flex-flow: row wrap;
    margin: 50px 0;
    background-color: #fff;
    padding: 20px 20px 20px 100px
    border-radius: 15px;
    justify-content: space-between;
`;
const Movie = S.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const StyledLink = S(Link)`
    width: 200px;
    :hover {
        transform: scale(1.1);
    }
`;
const Image = S.img`
    height: 100%;
    width: 100%;
    border-radius: 15px;
`;
const MovieContent = S.h6`
    font-size: 1.8rem;
    color: #000;
`;
const MovieOverview = S.div`
    width: 50%;
`;
const MovieOverviewTitle = S.h6`
    font-size: 2.4rem;
`;
const MovieOverviewcontent = S.p`
    font-size: 1.8rem;
    letter-spacing: 1px;
    line-height: 40px;
`;
export default PersonsMovies;