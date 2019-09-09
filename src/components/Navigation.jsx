import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({searchChange, handleSubmit, handleOnClickSubmit}) => {
    return(
        <nav style={ navWrapper }>
            <div style={ farLeftLinkWrapper }>
            <h1 style={ Title } id="companyName">AMP</h1>
            <ul className="mainUl" style={ mainLinksWrapper }>
                <li style={ mainListLinks }>
                    <Link style={ styledReactLink } to="/">Home</Link>
                </li>
                <li style={ mainListLinks }>
                    <Link style={ styledReactLink } to="/movies">Movies</Link>
                </li>
                <li style={ mainListLinks }>
                    <Link style={ styledReactLink } to="/shows">TV Shows</Link>
                </li>
                <li style={ mainListLinks }>
                    <Link style={ styledReactLink } to="/highly-rated">Highly Rated</Link>
                </li>
            </ul>
            </div>
            
            <div style={ searchBoxWrapper }>
            <form style={ SearchForm }  onKeyPress={handleSubmit}>
                <input style={ InputSearchField } type="search" placeholder="Search Movie or Show" onChange={searchChange} ></input>
                <Link style={ ReactRouterLink }to='/search' onClick={handleOnClickSubmit}>
                    <button style={hiddenButton}></button>
                    <FontAwesomeIcon icon={faSearch}/>
                </Link> 
            </form>

        </div>
            <div style={UserAccountLoginContainer}>
                <Link style={ styledReactLink } to="/user"><FontAwesomeIcon icon={faUser}/></Link>
            </div>
        </nav>
    );
}
const navWrapper = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: '0',
    width: '100%',
    position: 'relative',
    padding: '30px',
    background: '#011c3a',
    boxShadow: '0px 5px 10px 1px #070707',
}
const Title = {
    fontSize: '3rem',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: '1px',
    paddingRight: '20px',
}
const hiddenButton ={
    display: 'none',
}
const mainLinksWrapper = {
    display: 'flex',
    alignItems: 'center',
}
const mainListLinks = {
    listStyle: 'none',
    padding: '0 15px',
}
const farLeftLinkWrapper = {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
}
const UserAccountLoginContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '20%',
}
const styledReactLink = {
    fontSize: '1.6rem',
    letterSpacing: '.5px',
    color: '#fff',
    textDecoration: 'none',
}
const searchBoxWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
}
const SearchForm = { 
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '50px',
    width: '50%',
    margin: '0 auto',
}
const InputSearchField = {
    fontSize: '1.4rem',
    border: 'none',
    borderBottomLeftRadius: '25px',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    outline: 'none',
    backgroundColor: 'rgb(255,255,255)',
    borderBottom: '3px solid #fff',
    color: '#000',
    paddingLeft: '20px',
    height: '100%',
    width: '100%',
}
const ReactRouterLink = {
    color: '#fff',
    textAlign: 'center',
    letterSpacing: '2px',
    backgroundColor: '#02cf5b',
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    transition: 'all ease-in-out 300ms',
    marginLeft: '0',
    right: '50px',
    fontSize: '2rem',
    height: '100%',
    position: 'relative',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    padding: '0 20px 0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
export default Navigation;