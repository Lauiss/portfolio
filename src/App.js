import './App.css';
import CustomButton from './Button/custom_button';
import CustomHeader from './Header/custom_header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CustomHeader />
        <div className="text-container">
          <p>Bonjour 👋</p>
          <p>Je suis <span>Florian</span>, Ingénieur logiciel.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
