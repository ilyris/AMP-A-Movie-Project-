import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faCompass, faStar } from "@fortawesome/free-solid-svg-icons";

import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div className="hamburgerWrapper">
      <Link to ="/"  className="iconLinks">
        {/* <i className="fas fa-home"></i>
        */}
        <FontAwesomeIcon icon={faHome}/>
        Home 
      </Link>
      <Link to="/discover" className="iconLinks">
      <FontAwesomeIcon icon={faCompass}/>
        Discover
      </Link>
      {/* <div id="hamburgerMenuContainer">
        <div className="hamburger-menu hidden-lg">
          <span></span>
        </div>
      </div> */}
      <Link to="/discover" className="iconLinks">
      <FontAwesomeIcon icon={faStar}/>
        Top Rated
      </Link>
      <Link to="/login" className="iconLinks">
      <FontAwesomeIcon icon={faUser}/>
        Login
      </Link>
    </div>
  );
};

export default MobileMenu;

