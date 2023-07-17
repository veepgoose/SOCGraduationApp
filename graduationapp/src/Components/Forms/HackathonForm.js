import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import StayRadioButtons from "../Radios/StayRadioButtons";
import { useState } from "react";

function MondayStayForm(props) {
  const [staying, setStaying] = useState(true);

  const handleNext = () => {
    props.onNext(staying); // Use the staying state variable
  };

  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      >
        <form>
          <StayRadioButtons stayingLeabel="Would you be interested in attending a hackathon that day?" />
          <NextButton staying={staying} onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
