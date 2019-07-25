import React from 'react';
import SearchBox from "./SearchBox";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Navigation = ({searchChange, submitUsersRecipe, handleKeyPress }) => {
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
                <StyledLink to="/user">Login</StyledLink>
            </UserAccountLoginContainer>
        </NavigationWrapper>
    );
}

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
`;
const Title = styled.h1`
    font-size: 2rem;
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
    padding: 0 5px;
`;
const FirstMenuBlock = styled.div `
    display: flex;
    align-items: center;
    width: 30%;
`;
const UserAccountLoginContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
`;
const StyledLink = styled(Link) `
    font-size: 16px;
    letter-spacing: .5px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
`;
export default Navigation;