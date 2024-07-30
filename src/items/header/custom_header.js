import { faDiagramProject, faPuzzlePiece, faUser } from '@fortawesome/free-solid-svg-icons';
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
            FR
          </span>|
          <span className={`lang-span ${activeLanguage === 'de' ? 'active' : ''}`} onClick={() => tradFunc('de')}>
            DE
          </span>|
          <span className={`lang-span ${activeLanguage === 'en' ? 'active' : ''}`} onClick={() => tradFunc('en')}>
            EN
          </span>
        </label>
      </div>
      <div className="navigation-menu">
        <a href={"#presentation"}><span><FontAwesomeIcon icon={faUser} className="navigation-icon" /></span></a>
        <a href={"#skills"}><span><FontAwesomeIcon icon={faPuzzlePiece} className="navigation-icon" /></span></a>
        <a href={"#projects"}><span><FontAwesomeIcon icon={faDiagramProject} className="navigation-icon" /></span></a>
      </div>
    </div>
  )
}

export default CustomHeader;
