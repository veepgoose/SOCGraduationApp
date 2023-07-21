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
    fecthResponses();
  }, []);

  useEffect(() => {
    //colsone log resposn eeverytime somnethign is updated
    console.log(response);
  }, [response]);

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
  // Making a fecth to the api and console logging to check if the database is connected

  async function fecthResponses() {
    let response = await fetch(
      "https://soc-grad-app-22cd9e1b6bed.herokuapp.com/api/get",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();
    console.log(data.payload);
  }

  const handleNextForm = async (data) => {
    console.log("Received data from form:", data);
    console.log("Current form index:", currentFormIndex);
    // when the formSequence is complete, send the data to the backend
    console.log("currentFormIndex:", currentFormIndex);
    if (currentFormIndex === 5) {
      // if (response.length >= 6 && Object.keys(drinkPreferences).length === 4) {
      let bodyContent = JSON.stringify({
        name: response[0].name,
        email: response[0].email,
        staying_monday: response[1].monday,
        hackathon: response[2].hackathon,
        staying_tuesday: response[3].tuesday,
        going_out_interest: response[4].afterparty,
        beer: drinkPreferences.beer,
        wine: drinkPreferences.wine,
        spirits: drinkPreferences.spirits,
        beast_mode: drinkPreferences.beast,
      });

      console.log("your body content: " + bodyContent);

      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let apiResponse = await fetch(
        "https://soc-grad-app-22cd9e1b6bed.herokuapp.com/api/save",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      console.log(apiResponse.status); // Check the status code
      console.log(apiResponse.headers); // Check the response headers
      let postData = await apiResponse.json(); // Parse the response data
      console.log(postData); // Check the parsed response data
      // } else {
      //   console.error("Incomplete response data. Form data might be missing.");
      // }
    }

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
