import React from 'react';
import {Link} from "react-router-dom";
import S from "styled-components";

const GuestProfile = ({username, handleLogOut}) => {
    return(
        <ProfilePageContainer>
            <AccountInformation>
                <ProfileImage src={require('../UserLogin/movieLoginBackground.jpg')} />
                <Username>{username}</Username>
                <ProfileUnderline></ProfileUnderline>
                <SLink to="/" onClick={handleLogOut}>Log Out</SLink>
            </AccountInformation>

            <AccountMovieInformation>
            <AccountMovieTitle>Favorite Movies</AccountMovieTitle>
                <AccountMovieSpan></AccountMovieSpan>
                <FavoriteMovies>
                    <NoFavoriteMoviesText>Sorry, you have no favorite movies.</NoFavoriteMoviesText>
                </FavoriteMovies>
            </AccountMovieInformation>
            <AccountMovieInformation>
            <AccountMovieTitle>Rated Movies</AccountMovieTitle>
                <AccountMovieSpan></AccountMovieSpan>
                <FavoriteMovies>
                    <NoFavoriteMoviesText>Sorry, you have no rated movies.</NoFavoriteMoviesText>
                </FavoriteMovies>
            </AccountMovieInformation>
        </ProfilePageContainer>
    );
}
export default GuestProfile;

const ProfilePageContainer = S.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    height: 100vh;
`;
const AccountInformation = S.div`
    width: 100%;
    background-color: #008fee;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`;
const ProfileImage = S.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
const Username = S.h3`
    font-size: 3rem;
    color: #000;
`;
const ProfileUnderline = S.span`
    width: 300px;
    height: 5px;
    background-color: #fff;
`;
const AccountMovieInformation = S.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
`;
const AccountMovieTitle = S.h4 `
    font-size: 4rem;
    color: #000;
    text-align: center;
`;
const AccountMovieSpan = S.span`
    height: 3px;
    background-color: #000;
    width: 300px;
    padding-top: 10px;
`;
const FavoriteMovies = S.div`
    width: 100%;
`;
const NoFavoriteMoviesText = S.p`
    font-size: 2rem;
    text-align: center;
    padding-top: 20px;
`;
const SLink = S(Link)`
    background-color: #fff;
    color: #000;
    width: 200px;
    padding: 20px;
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
    transition: all ease-in-out 120ms;
    :hover {
        cursor: pointer;
        background-color: #000;
        color: #fff;
    }
`;