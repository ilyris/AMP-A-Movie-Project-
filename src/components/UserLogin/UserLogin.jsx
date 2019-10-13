import React, {useState} from 'react';
import S from 'styled-components';
import {apiKey} from '../../config';
import Axios from 'axios';
import {Link} from "react-router-dom";

const UserLogin = ({createGuestSession, guestSessionID}) => {

    // Need to store token in local storage since the token in state acts weird.
    const token = localStorage.getItem("token");

    const requestToken = () => {
        Axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
        .then( (getTokenResponse) => {
            localStorage.setItem("token", getTokenResponse.data.request_token);
        })
        .catch( (error)=>{
            console.log(error);
        });
    };  
    console.log(guestSessionID);
    return(
        <SLoginPageContainer>
            <HalfPageContainer>
                <TextContentContainer>
                <Sh1>Log In</Sh1>
                <LoginHeading>AMP</LoginHeading>
                <LoginHeading>Guests have limited access</LoginHeading>
                </TextContentContainer>
                <SLoginContainer>
                    <SLoginButton onClick={requestToken} href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=https://amovieproject.netlify.com/user/approved`}>
                            Log In
                    </SLoginButton>
                    <SLink to="/profile/guest" onClick={createGuestSession}>Guest Log In</SLink>
                </SLoginContainer>
            </HalfPageContainer>
            <SecondHalfContainerImage src={require('./movieLoginBackground.jpg')}></SecondHalfContainerImage>
        </SLoginPageContainer>
    );
}
export default UserLogin;

const SLoginPageContainer = S.main`
    display: flex;
    flex-direction: row;
    height: 100vh;

`;
const HalfPageContainer = S.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    height: 100%;
`;
const TextContentContainer = S.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    background-color: #008fee;
    border-bottom: 3px solid #000;
    width: 100%;
`;
const Sh1 = S.h1`
    font-size: 6rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
`;
const LoginHeading = S.h3`
    color: #fff;
    font-size: 3rem;
    letter-spacing: 1px;
    text-align: center;
    padding: 20px 0;
`;
const SLoginContainer = S.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 100px;
    padding: 20px;
`;

const SLoginButton = S.a`
background-color: #008fee;
color: #fff;
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
const SLink = S(Link)`
    background-color: #008fee;
    color: #fff;
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
const Sbutton = S.button `
    border: none;
`;
const SecondHalfContainerImage = S.img`
    width: 50%;
    height: 100%;
    background: url("/movieLoginBackground.jpg");
`;