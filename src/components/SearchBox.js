import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({submitUsersRecipe, searchChange, handleKeyPress}) => {
    return(
        <SearchBoxWrapper>
            <SearchForm>
                <InputSearchField type="search" placeholder="Search Movie or Show" onChange={searchChange} onKeyPress={handleKeyPress}></InputSearchField>
                <SubmitButton onClick={submitUsersRecipe}><FontAwesomeIcon icon={faSearch}/></SubmitButton>
            </SearchForm>

        </SearchBoxWrapper>

    );
}

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

const SubmitButton = styled.button `
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

export default SearchBox;