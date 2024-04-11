import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom_button.css';


function CustomButton({ icon, role = "#", onClickFunction, animateBtn }) {
  return (
    <div className="btn-container">
      <button role={role} onClick={onClickFunction} className={(animateBtn ? "btn-animation" : "") + "custom-btn"}><FontAwesomeIcon icon={icon} className="icon" /></button>
    </div>
  )
}

export default CustomButton;
