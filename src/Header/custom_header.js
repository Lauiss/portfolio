import './custom_header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Toggle from '../components/toggle/toggle';

function CustomHeader({ condition, onToggle, lightIcon, darkIcon }){

    return(
        <div className="headerContainer">
            <div className="toggleTitleContainer">
                {/* <FontAwesomeIcon icon={faMoon} className="toggle-icon" /> */}
                <Toggle className="toggle-icon" condition={condition} onToggle={onToggle} lightIcon={lightIcon} darkIcon={darkIcon} />
                <label>Florian AMANN</label>
            </div>

            <ul className="iconContainer">
                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
        </div>
    )
}

export default CustomHeader;
