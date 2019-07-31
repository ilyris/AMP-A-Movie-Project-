import React from 'react';
import SearchBox from "./SearchBox";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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

            <SearchBox
                searchChange={searchChange}
                submitUsersRecipe={submitUsersRecipe}
                handleKeyPress={handleKeyPress}
            />
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
export default Navigation;