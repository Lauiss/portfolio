import './App.css';
import CustomButton from './components/button/custom_button';
import CustomHeader from './header/custom_header';
import { faUser, faCode, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import Presentation from './presentation/presentation';
import React, {useState} from 'react';

function App() {

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
          <p>Bonjour <span className="hand-icon">👋</span></p>
          <p>Je suis <span>Florian</span>, Ingénieur logiciel.</p>
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
