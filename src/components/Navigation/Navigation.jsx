import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';

import "./Navigation.css";

const Navigation = ({searchChange, handleSubmit, handleOnClickSubmit}) => {
    return(
        <nav className="navWrapper">
            <div className="farLeftLinkWrapper">
            <Link className='styledReactLink' to="/"><h1 className='title' id="companyName">AMP</h1></Link>
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
            <li className='mainListLinks'>
                <Link className='styledReactLink' to="/"><FontAwesomeIcon icon={faHome}/></Link>
            </li>
            <li className='mainListLinks'>
                <Link className='styledReactLink' to="/login"><FontAwesomeIcon icon={faUser}/></Link>
            </li>

            <li className='mainListLinks'>
                <Link className='styledReactLink' to="/discover"><FontAwesomeIcon icon={faCompass}/></Link>
            </li>
            </div>
        </nav>
    );
}

export default Navigation;