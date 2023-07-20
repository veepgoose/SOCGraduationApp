import React, { useState } from "react";
import axios from "axios";
import MondayStayForm from "./Components/Forms/MondayStayForm";
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

// const apiUrl = "https://soc-grad-app-22cd9e1b6bed.herokuapp.com"; // Replace with your deployed backend URL
const apiUrl = "/save"; // Replace with your deployed backend URL


function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [response, setResponse] = useState([]);

  const handleNextForm = async (data) => {
    try {
      if (currentFormIndex === 0) {
        await axios.post(`${apiUrl}/save`, { name: data.name, email: data.email });
        console.log(data, "backend");
      } else if (currentFormIndex === 5) {
        await axios.post(`${apiUrl}/save`, {
          none: data.none,
          beer: data.beer,
          wine: data.wine,
          spirits: data.spirits,
          beast: data.beast,
        });
      }

      setCurrentFormIndex(currentFormIndex + 1);
      setResponse([...response, data]);
    } catch (error) {
      console.error('Error submitting response:', error);
    }
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
