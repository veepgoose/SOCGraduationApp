import React, { useEffect, useState } from "react";
import MondayStayForm from "./Components/Forms/MondayStayForm";
import logo from './logo.svg';
import './App.css';
import soclogo from './socdows logo.png';
import SchoolOfShanties from './School of Shanties master.wav';
import NameForm from './Components/Forms/NameForm';
import HackathonForm from './Components/Forms/HackathonForm';
import TuesdayStayForm from './Components/Forms/TuesdayStayForm';
import CelebrationForm from './Components/Forms/CelebrationForm';
import DrinkPreferenceForm from "./Components/Forms/DrinkPreferenceForm";
import ThankYouMessage from "./Components/Forms/ThankYouMessage";

const formSequence = [
  NameForm,
  MondayStayForm,
  HackathonForm,
  TuesdayStayForm,
  CelebrationForm,
  DrinkPreferenceForm,
  ThankYouMessage,
];
  
function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleNextForm = () => {
    setCurrentFormIndex(currentFormIndex + 1);
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

  const CurrentForm = formSequence[currentFormIndex];
 
  return (
    <div className="App">
    <div className="background-image">
      <header className="App-header">
      <img src={soclogo} className="App-logo" alt="logo" />
      <header className="App-header">
      <CurrentForm onNext={handleNextForm} />
      </header>
     </header>
    </div>
    </div>
  );
}

export default App;
