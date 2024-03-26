import './custom_header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMoon} from '@fortawesome/free-solid-svg-icons'

function CustomHeader(){
    return(
        <div className="headerContainer">
            <div className="toggleTitleContainer">
            <FontAwesomeIcon icon={faMoon} className="toggle-icon" />
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
