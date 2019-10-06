import React from 'react';
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const BackButton = ({handleBackButton}) => {
    return(
        <div className="backButton"><p onClick={handleBackButton}><FontAwesomeIcon icon={faArrowLeft} /><span>Go Back</span></p></div>
    );
}
export default BackButton;