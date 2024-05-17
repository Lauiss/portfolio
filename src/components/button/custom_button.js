import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom_button.css';


function CustomButton({ icon, href = "#", onClickFunction, animateBtn, tooltipText }) {
  return (
    <div className="btn-container">
      <a href={href} rel="noreferrer"><button onClick={onClickFunction} className={(animateBtn ? "btn-animation" : "") + " custom-btn "}><FontAwesomeIcon icon={icon} className="icon" /></button></a>
    </div>
  )
}

export default CustomButton;
