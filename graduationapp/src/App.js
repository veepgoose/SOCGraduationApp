import logo from './logo.svg';
import './App.css';
import soclogo from './socdows logo.png';
import NameForm from './Components/Forms/NameForm';
import DrinkPreferenceRadioButtons from './Components/Radios/DrinkPreferenceRadioButtons';

function App() {
  return (
    <div className="App">
    <div className="background-image">
      <header className="App-header">
      <img src={soclogo} className="App-logo" alt="logo" />
      <NameForm />
      </header>
    </div>
    </div>
  );
}

export default App;
