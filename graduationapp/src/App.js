import "./App.css";
import React, { useState } from "react";
import NameForm from "./Components/Forms/NameForm";
import MondayStayForm from "./Components/Forms/MondayStayForm";

function App() {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCurrentForm(currentForm + 1);
  };

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
      <header className="App-header">{renderForm()}</header>
    </div>
  );
}

export default App;
