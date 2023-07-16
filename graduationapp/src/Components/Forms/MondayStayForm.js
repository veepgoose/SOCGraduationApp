import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import StayRadioButtons from "../Radios/StayRadioButtons";

function MondayStayForm(props) {
  const handleNext = () => {
    props.onNext();
  };

  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      >
        <form>
          <StayRadioButtons stayingLeabel="Are you staying in Reading on Monday night?" />
          <NextButton  onNext={handleNext} />{" "}
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
