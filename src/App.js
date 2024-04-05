import './App.css';
import CustomButton from './components/button/custom_button';
import CustomHeader from './header/custom_header';
import { faUser, faCode, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import Presentation from './presentation/presentation';
import React, {useState} from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';


//
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

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={(darkMode ? 'dark-theme' : 'light-theme') + " App"}>
      <div className="App-header">
        <CustomHeader condition={darkMode} onToggle={toggleDarkMode} lightIcon={faSun} darkIcon={faMoon} />
      </div>
      <div className="welcome-page">
        <div>
          <p>{ translate('HELLO') }<span className="hand-icon">👋</span></p>
          <p>{ translate('I_AM') } <span>Florian</span>, { translate('SOFTWARE_ENGINEER') }</p>
        </div>
        <div className="btns-containers">
        <CustomButton icon={faUser} className="btn-margin" />
        <CustomButton icon={faGithub} className="btn-margin" />
        <CustomButton icon={faFreeCodeCamp} className="btn-margin" />
        <CustomButton icon={faCode} className="btn-margin" />
        </div>
      </div>
      <div>
        {/* <Presentation /> */}
      </div>
    </div>
  );
}

export default App;
