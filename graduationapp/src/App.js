import React, { useEffect, useState } from "react";
import MondayStayForm from "./Components/Forms/MondayStayForm";
import logo from './logo.svg';
import './App.css';
import soclogo from './socdows logo.png';
import SchoolOfShanties from './School of Shanties master.wav';
import NameForm from './Components/Forms/NameForm';

function App() {
  const [currentForm, setCurrentForm] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleNextForm = () => {
    setCurrentForm(currentForm + 1);
  };

  useEffect(() => {
    const audioElement = new Audio(SchoolOfShanties);
    audioElement.loop = true;

  const playMusic = () => { 
    audioElement.play();
    setIsMusicPlaying(true);
  };

  document.addEventListener("click", playMusic);

  return () => {  
    document.removeEventListener("click", playMusic);
    audioElement.pause();
    setIsMusicPlaying(false);
  };
}, []);

  const renderForm = () =>
  {
    console.log('next button clicked')

    switch (currentForm) {
      case 1:
        return <NameForm onNext={handleNextForm} />;
      case 2:
        return <MondayStayForm onNext={handleNextForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
    <div className="background-image">
      <header className="App-header">
      <img src={soclogo} className="App-logo" alt="logo" />
      <header className="App-header">{renderForm()}</header>
     </header>
    </div>
    </div>
  );
}

export default App;
