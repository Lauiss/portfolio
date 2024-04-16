import { faHouseChimney, faPuzzlePiece, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18n from 'i18next';
import React from 'react';
import Toggle from '../../components/toggle/toggle';
import './custom_header.css';

function CustomHeader({ condition, onToggle, lightIcon, darkIcon, tradFunc }) {
  const activeLanguage = i18n.language;

  return (
    <div className="headerContainer">
      <div className="toggleTitleContainer">
        <Toggle className="toggle-icon" condition={condition} onToggle={onToggle} lightIcon={lightIcon} darkIcon={darkIcon} />
        <label>
          <span className={`lang-span ${activeLanguage === 'fr' ? 'active' : ''}`} onClick={() => tradFunc('fr')}>
            Fr
          </span>|
          <span className={`lang-span ${activeLanguage === 'de' ? 'active' : ''}`} onClick={() => tradFunc('de')}>
            De
          </span>|
          <span className={`lang-span ${activeLanguage === 'en' ? 'active' : ''}`} onClick={() => tradFunc('en')}>
            En
          </span>
        </label>
      </div>

      <ul className="iconContainer">
        <li><a href={"#welcome-page"} ><FontAwesomeIcon icon={faHouseChimney} /></a></li>
        <li><a href={"#presentation"} ><FontAwesomeIcon icon={faUser} /></a></li>
        <li><a href={"#skills-and-projects"} ><FontAwesomeIcon icon={faPuzzlePiece} /></a></li>
      </ul>
    </div>
  )
}

export default CustomHeader;
