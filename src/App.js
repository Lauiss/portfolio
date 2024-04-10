import { faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import './App.css';
import CustomButton from './components/button/custom_button';
import CustomHeader from './items/header/custom_header';
import Presentation from './items/presentation/presentation';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: require('./translate/fr.json')
      },
      en: {
        translation: require('./translate/fr.json')
      },
      de: {
        translation: require('./translate/de.json')
      }
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false // Ne pas échapper les valeurs traduites
    }
  });

function App() {

  const { t: translate } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Modifier le titre de la page
    document.title = "Florian AMANN";

    // Modifier l'icône du navigateur
    const favicon = document.querySelector("link[rel~='icon']");
    favicon.href = "/src/assets/page-icon.png"; // Spécifiez le chemin de votre favicon
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  const scrollTo = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={(darkMode ? 'dark-theme' : 'light-theme') + " App"}>
      <div className="App-header">
        <CustomHeader condition={darkMode} onToggle={toggleDarkMode} lightIcon={faSun} darkIcon={faMoon} tradFunc={changeLanguage} />
      </div>
      <div className="welcome-page">
        <div>
          <p>{translate('HELLO')}<span className="hand-icon">👋</span></p>
          <p>{translate('I_AM')} <span>Florian</span>, {translate('SOFTWARE_ENGINEER')}</p>
        </div>
        <div className="btns-containers">
          <CustomButton onClickFunction={() => scrollTo('presentation')} icon={faUser} animateBtn={true} className="btn-margin" />
          <CustomButton icon={faGithub} animateBtn={true} className="btn-margin" />
          <CustomButton icon={faFreeCodeCamp} animateBtn={true} className="btn-margin" />
          <CustomButton icon={faCode} animateBtn={true} className="btn-margin" />
        </div>
      </div>
      <div id="presentation" className="presentation-section">
        <Presentation />
      </div>
    </div>
  );
}

export default App;
