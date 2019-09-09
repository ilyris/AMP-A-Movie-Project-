import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import "./Navigation.css";

const Navigation = ({searchChange, handleSubmit, handleOnClickSubmit}) => {
    return(
        <nav className="navWrapper">
            <div className="farLeftLinkWrapper">
            <h1 className='title' id="companyName">AMP</h1>
            <ul className="mainUl">
                <li className='mainListLinks'>
                    <Link className='styledReactLink' to="/">Home</Link>
                </li>
                <li className='mainListLinks'>
                    <Link className='styledReactLink' to="/movies">Movies</Link>
                </li>
                <li className='mainListLinks'>
                    <Link className='styledReactLink' to="/discover">Discover</Link>
                </li>
                <li className='mainListLinks'>
                    <Link className='styledReactLink' to="/highly-rated">Top Rated</Link>
                </li>
            </ul>
            </div>
            
            <div className='searchBoxWrapper'>
            <form className='searchForm'  onKeyPress={handleSubmit}>
                <input className='inputSearchField' type="search" placeholder="Search Movie or Show" onChange={searchChange} ></input>
                <Link className='reactRouterLink' to='/search' onClick={handleOnClickSubmit}>
                    <button className='hiddenButton'></button>
                    <FontAwesomeIcon icon={faSearch}/>
                </Link> 
            </form>

        </div>
            <div className='userAccountLoginContainer'>
                <Link className='styledReactLink' to="/user"><FontAwesomeIcon icon={faUser}/></Link>
            </div>
        </nav>
    );
}

export default Navigation;