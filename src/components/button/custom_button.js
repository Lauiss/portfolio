import './custom_button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CustomButton({ icon, onclickfunction }){
    return(
        <div className="btn-container">
            <button role="" onClick={onclickfunction}><FontAwesomeIcon icon={icon} className="icon"/></button>
        </div>
    )
}

export default CustomButton;