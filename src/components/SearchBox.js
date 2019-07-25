import React from 'react';
import styled from 'styled-components';


const SearchBox = ({submitUsersRecipe, searchChange, handleKeyPress}) => {
    return(
        <SearchBoxWrapper>
            <InputSearchField type="search" placeholder="search recipe" onChange={searchChange} onKeyPress={handleKeyPress}></InputSearchField>
            <SubmitButton onClick={submitUsersRecipe}>Search</SubmitButton>
        </SearchBoxWrapper>

    );
}

const SearchBoxWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

const SubmitButton = styled.button `
    font-size: 1.8rem;
    color: white;
    padding: 10px 15px;
    text-align: center;
    letter-spacing: 2px;
    background-color: #000;
    border: none;
    outline: none;
    margin-left: 20px;
    border-radius: 10px;
    transition: all ease-in-out 300ms;
`;

const InputSearchField = styled.input `
    font-size: 1.6rem;
    padding: 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    background-color: rgb(255, 255, 255);
    border-bottom: 3px solid #fff;
    color: #000;
    padding-left: 20px;
`;

export default SearchBox;