import './App.css';
import CustomButton from './button/custom_button';
import CustomHeader from './header/custom_header';
import { faUser, faCode, faHandPaper } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CustomHeader />
      </div>
      <div className="text-container">
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
    </div>
  );
}

export default App;
