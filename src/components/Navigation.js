import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({searchChange, handleKeyPress, submitUsersRecipe}) => {
    return(
        <NavigationWrapper>
            <FirstMenuBlock>
            <Title id="companyName">AMP</Title>
            <Ul>
                <Li>
                    <StyledLink to="/">Home</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/movies">Movies</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/shows">TV Shows</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/highly-rated">Highly Rated</StyledLink>
                </Li>
            </Ul>
            </FirstMenuBlock>

            <SearchBoxWrapper>
            <SearchForm>
                <InputSearchField type="search" placeholder="Search Movie or Show" onChange={searchChange} onKeyPress={handleKeyPress}></InputSearchField>
                <ReactRouterLink to='/search' onClick={submitUsersRecipe}>
                    <FontAwesomeIcon icon={faSearch}/>
                </ReactRouterLink> 

            </SearchForm>

        </SearchBoxWrapper>
            <UserAccountLoginContainer>
                <StyledLink to="/user"><FontAwesomeIcon icon={faUser}/></StyledLink>
            </UserAccountLoginContainer>
        </NavigationWrapper>
    );
}

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    top: 0;
    width: 100%;
    position: relative;
    padding: 30px;
    background: #011c3a;
    box-shadow: 0px 5px 10px 1px #070707;
`;
const Title = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    padding-right: 20px;
`;

const Ul = styled.ul `
    display: flex;
    align-items; center;
`;
const Li = styled.li `
    list-style: none;
    padding: 0 15px;
`;
const FirstMenuBlock = styled.div `
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
`;
const UserAccountLoginContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 20%;
`;
const StyledLink = styled(Link) `
    font-size: 1.6rem;
    letter-spacing: .5px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
`;
const SearchBoxWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`;
const SearchForm = styled.form `
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50px;
    width: 50%;
    margin: 0 auto;
`;
const InputSearchField = styled.input `
    font-size: 1.4rem;
    border: none;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    outline: none;
    background-color: rgb(255,255,255);
    border-bottom: 3px solid #fff;
    color: #000;
    padding-left: 20px;
    height: 100%;
    width: 100%;
`;
const ReactRouterLink = styled(Link)`
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    background-color: #02cf5b;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: all ease-in-out 300ms;
    margin-left: 0;
    right: 50px;
    font-size: 2rem;
    height: 100%;
    position: relative;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default Navigation;