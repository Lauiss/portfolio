import './custom_button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CustomButton({ icon }){
    return(
        <div className="btn-container">
            <button role=""><FontAwesomeIcon icon={icon} className="icon"/></button>
        </div>
    )
}

export default CustomButton;