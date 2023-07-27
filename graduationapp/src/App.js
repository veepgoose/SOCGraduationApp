import React, { useState, useEffect } from "react";
import MondayStayForm from "./Components/Forms/MondayStayForm";
import "./App.css";
import soclogo from "./socdows logo.png";
import SchoolOfShanties from "./School of Shanties master.wav";
import NameForm from "./Components/Forms/NameForm";
import HackathonForm from "./Components/Forms/HackathonForm";
import TuesdayStayForm from "./Components/Forms/TuesdayStayForm";
import CelebrationForm from "./Components/Forms/CelebrationForm";
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
  const [response, setResponse] = useState([]);
  const [drinkPreferences, setDrinkPreferences] = useState({});
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

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

  const handleNextForm = (data) => {
    console.log("Received data from form:", data);
    console.log("Current form index:", currentFormIndex);

    // If the current form is the DrinkPreferenceForm, update the drink preferences state.
    if (currentFormIndex === 5) {
      setDrinkPreferences(data);
    } else {
      setResponse((prevResponse) => [...prevResponse, data]);
    }

    setCurrentFormIndex(currentFormIndex + 1);
  };

  const CurrentForm = formSequence[currentFormIndex];

  if (!CurrentForm) {
    return <div>No form found</div>;
  }

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
