import React, { useEffect, useState } from "react";
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
  
function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [response, setResponse] = useState([]);
  
  // RESPONSE CONTAINST HE ARRAY THAT HOLDS THE RESPOSNE ANSERWERS FROM THE USER
  //
  // 0: {name: 'Sam B', email: 'sam@gmail.com'}
  // 1: {monday: false}
  // 2: {hackathon: false}
  // 3: {tuesday: true}
  // 4: {afterparty: true}
  // 5: {beer: false, wine: true, spirits: true, beast: false, none: false}


      useEffect(() => {
        console.log(response);
      }, [response]);

  const handleNextForm = (data) => {
    setCurrentFormIndex(currentFormIndex + 1);
    setResponse([...response, data]);
  };

  //   useEffect(() => {
  //     const audioElement = new Audio(SchoolOfShanties);
  //     audioElement.loop = true;

  //   const playMusic = () => {
  //     audioElement.play();
  //     setIsMusicPlaying(true);

  //   };

  //   document.addEventListener("click", playMusic);

  //   return () => {
  //     document.removeEventListener("click", playMusic);
  //     audioElement.pause();
  //     setIsMusicPlaying(false);
  //   };
  // }, []);

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


  // State to keep track of the responses
//   const [response, setResponse] = useState([]);

  // This will log the response to the console every time it changes
  // Is for checking code works!
  // Is not needed for functionality
//     useEffect(() => {
//       console.log(response);
//     }, [response]);

  // This function will be passed to the form components
//   const handleNextForm = (data) =>
//   {
//     // This will update the state variables
//     setCurrentForm(currentForm + 1);
//     // This will add the response to the array
//     setResponse([...response, data]);
//     // This will log the response to the console
//     console.log("next button clicked");
//   };

//   const renderForm = () => {
//     switch (currentForm) {
//       case 1:
//         return <NameForm onNext={handleNextForm} />;
//       case 2:
//         return <MondayStayForm onNext={handleNextForm} />;
//       default:
//         return null;
//     }
// =======
