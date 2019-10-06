import React from 'react';
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const BackButton = ({handleBackButton}) => {
    return(
        <div className="backButton" ><FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButton}/></div>
    );
}
export default BackButton;