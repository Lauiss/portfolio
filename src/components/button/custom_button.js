import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom_button.css';


function CustomButton({ icon, onClickFunction, animateBtn }) {
  return (
    <div className="btn-container">
      <button role="" onClick={onClickFunction} className={(animateBtn ? "btn-animation" : "")}><FontAwesomeIcon icon={icon} className="icon" /></button>
    </div>
  )
}

export default CustomButton;
