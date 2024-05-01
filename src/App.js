import { faDiagramProject, faMoon, faPuzzlePiece, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import './App.css';
import CustomButton from './components/button/custom_button';
import CustomHeader from './items/header/custom_header';
import Presentation from './items/presentation/presentation';
import Projects from './items/projects/projects';
import Skills from './items/skills/skills';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: require('./translate/fr.json')
      },
      en: {
        translation: require('./translate/en.json')
      },
      de: {
        translation: require('./translate/de.json')
      }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

function App() {

  const { t: translate } = useTranslation();
  const [language, setLanguage] = useState('fr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Florian AMANN";

    const favicon = document.querySelector("link[rel~='icon']");
    favicon.href = "/src/assets/page-icon.png";
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={(darkMode ? 'dark-theme' : 'light-theme') + " App"}>
      <div className="App-header fade-in-element">
        <CustomHeader condition={darkMode} onToggle={toggleDarkMode} lightIcon={faSun} darkIcon={faMoon} tradFunc={changeLanguage} />
      </div>
      <div className="welcome-page fade-in-element" id="welcome-page fade-in-element">
        <div className="welcome-text">
          <p>{translate('HELLO')}<span className="hand-icon">👋</span></p>
          <p>{translate('I_AM')} <span>Florian</span>, {translate('SOFTWARE_ENGINEER')}</p>
        </div>
        <div className="btns-containers">
          <CustomButton href={"#presentation"} icon={faUser} animateBtn={true} className="btn-margin" />
          <CustomButton href={"#skills"} icon={faPuzzlePiece} animateBtn={true} className="btn-margin" />
          <CustomButton href={"#projects"} icon={faDiagramProject} animateBtn={true} className="btn-margin" />
        </div>
      </div>
      <div id="presentation" className="presentation-section fade-in-element">
        <Presentation translate={translate} />
      </div>
      <div id="skills" className="skills fade-in-element">
        <Skills translate={translate} />
      </div>
      <div id="projects" className="projects fade-in-element">
        <Projects language={language} translate={translate} isDarkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
