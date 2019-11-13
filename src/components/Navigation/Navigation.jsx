import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';


import "./Navigation.css";

const Navigation = ({guestSessionID, onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        // stop the page from refreshing when a user submits the search.
        event.preventDefault();
        // pass in the search query state, which is set from the value of the search field.
        onSubmit(searchQuery);
    }
    return(
        <nav className="navWrapper">
            <div className="farLeftLinkWrapper">
            <Link className='styledReactLink' to="/"><h1 className='title' id="companyName">AMP</h1></Link>
            </div>
            
            <div className='searchBoxWrapper'>
            <form className='searchForm'  onSubmit={handleSubmit}>
                <input className='inputSearchField' type="search" placeholder="Search Movie or Show" onChange={(event) => setSearchQuery(event.target.value)} value={searchQuery}></input>
                <button type="submit" className='reactRouterLink'> <FontAwesomeIcon icon={faSearch}/> </button>
            </form>

        </div>
            <div className='userAccountLoginContainer'>
            <li className='mainListLinks'>
                <Link className='styledReactLink' to="/"><FontAwesomeIcon icon={faHome}/></Link>
            </li>
            <li className='mainListLinks'>
                {guestSessionID === '' || guestSessionID === undefined  ? <Link className='styledReactLink' to="/login"><FontAwesomeIcon icon={faUser}/> </Link>  : <Link className='styledReactLink' to="/profile/guest"><FontAwesomeIcon icon={faUser}/></Link>}
            </li>

            <li className='mainListLinks'>
                <Link className='styledReactLink' to="/discover"><FontAwesomeIcon icon={faCompass}/></Link>
            </li>
            </div>
        </nav>
    );
}

export default Navigation;