import React, {useState} from 'react';
import S from 'styled-components';
import {apiKey} from '../../config';
import Axios from 'axios';

const UserLogin = () => {

    const [token, setToken] = useState("");

    const requestToken = () => {

        Axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
        .then((getTokenResponse)=> {
            setToken(getTokenResponse.data.request_token);
            
        })
        .catch( (error)=>{
            console.log(error);
        });
        Axios.get("https://www.themoviedb.org/authenticate/"+token+"?redirect_to=http://amovieproject.netlify.com/approved")
        .then( (getAuthResponse) =>{
            console.log(getAuthResponse);
        })
    };

    return(
        <SLoginPageContainer>
            <HalfPageContainer>
                <TextContentContainer>
                <S_h1>Log In</S_h1>
                <LoginHeading>AMP</LoginHeading>
                <LoginHeading>Guests have limited access</LoginHeading>
                </TextContentContainer>
                <S_LoginContainer>
                    <S_LoginButton onClick={requestToken}>Log In</S_LoginButton>
                    <S_LoginButton>Guest Log In</S_LoginButton>
                </S_LoginContainer>
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
const S_h1 = S.h1`
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
const S_LoginContainer = S.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 100px;
    padding: 20px;
`;

const S_LoginButton = S.a`
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
const SecondHalfContainerImage = S.img`
    width: 50%;
    height: 100%;
    background: url("/movieLoginBackground.jpg");
`;