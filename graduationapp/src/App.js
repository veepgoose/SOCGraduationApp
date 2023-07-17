import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
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

const supabaseUrl = 'https://uoznfrtkyowzlhglmoac.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvem5mcnRreW93emxoZ2xtb2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDk4MzcsImV4cCI6MjAwNDkyNTgzN30.wFQPxadi9ieAB8zBhwGwRmrOQD6FoUnVX3I9v6M9BQI';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [response, setResponse] = useState([]);

  const handleNextForm = async (data) => {
    try {
      if (currentFormIndex === 0) {
        const { data: attendeeResponse, error: attendeeError } = await supabase
          .from('attendees')
          .insert([{ name: data.name, email: data.email }]);
            console.log(data, "supabase");
        if (attendeeError) {
          console.error('Error submitting attendee:', attendeeError);
        } else {
          console.log('Attendee submitted successfully:', attendeeResponse);
        }
      } else if (currentFormIndex === 5) {
        const { data: drinkPreferenceResponse, error: drinkPreferenceError } = await supabase
          .from('drink_preferences')
          .insert([{ no_alcohol: data.none, beer: data.beer, wine: data.wine, spirits: data.spirits, beast_mode: data.beast }]);

        if (drinkPreferenceError) {
          console.error('Error submitting drink preferences:', drinkPreferenceError);
        } else {
          console.log('Drink preferences submitted successfully:', drinkPreferenceResponse);
        }
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
