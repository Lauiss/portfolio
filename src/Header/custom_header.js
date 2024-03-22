import './custom_header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function CustomHeader(){
    return(
        <div className="headerContainer">
            <div className="toggleTitleContainer">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <label>Florian AMANN</label>
            </div>

            <ul className="iconContainer">
                <li><FontAwesomeIcon icon={faEnvelope} className="icon" /></li>
                <li><FontAwesomeIcon icon={faLinkedin} className="icon" /></li>
            </ul>
        </div>
    )
}

export default CustomHeader;
