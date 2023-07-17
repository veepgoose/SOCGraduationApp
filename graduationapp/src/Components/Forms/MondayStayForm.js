import React, { useState } from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import StayRadioButtons from "../Radios/StayRadioButtons";

function MondayStayForm(props) {
  const [staying, setStaying] = useState(true);

  const handleNext = () => {
    props.onNext(staying);
  };

  const handleStayChange = (value) => {
    setStaying(value);
  };

  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="LOL MORE PLACEHOLDER TEXT"
      >
        <form>
          <StayRadioButtons
            stayingLabel="Are you staying in Reading on Monday night?"
            staying={staying}
            onChange={handleStayChange}
          />
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
