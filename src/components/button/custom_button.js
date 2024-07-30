import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './custom_button.css';


function CustomButton({ icon, href = "#", onClickFunction, animateBtn }) {
  return (
    <div className="btn-container">
      <a href={href} target="_blank" rel="noreferrer"><button onClick={onClickFunction} className={(animateBtn ? "bouncy-animated" : "") + " custom-btn "}><FontAwesomeIcon icon={icon} className="icon" /></button></a>
    </div>
  )
}

export default CustomButton;
