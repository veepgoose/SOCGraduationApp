import React, { useState, useEffect } from "react";
import MondayStayForm from "./Components/Forms/MondayStayForm";
import "./App.css";
import soclogo from "./socdows logo.png";
import NameForm from "./Components/Forms/NameForm";

function App()
{
  // State to keep track of which form we are on
  const [currentForm, setCurrentForm] = useState(1);
  // State to keep track of the responses
  const [response, setResponse] = useState([]);

  // This will log the response to the console every time it changes
  // Is for checking code works!
  // Is not needed for functionality
    useEffect(() => {
      console.log(response);
    }, [response]);

  // This function will be passed to the form components
  const handleNextForm = (data) =>
  {
    // This will update the state variables
    setCurrentForm(currentForm + 1);
    // This will add the response to the array
    setResponse([...response, data]);
    // This will log the response to the console
    console.log("next button clicked");
  };

  const renderForm = () => {
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
