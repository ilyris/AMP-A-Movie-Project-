import React from 'react';
import "./FavoriteButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";

const FavoriteButton = () => {
    return(
        <div className="favoriteButton"><p><FontAwesomeIcon icon={faHeart} /><span>Favorite</span></p></div>
    );
}
export default FavoriteButton;