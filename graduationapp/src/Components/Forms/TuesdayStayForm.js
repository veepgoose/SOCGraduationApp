import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import StayRadioButtons from "../Radios/StayRadioButtons";

function TuesdayStayForm(props) {
  const handleNext = () => {
    props.onNext();
  };

  return (
    <div className="Body">
      <Cards
        title="TUESDAY SLEEPOVER?"
        text="It's a bit of a trek for a lot of people, so will you be amongst the brave souls who are staying in Reading on Tuesday night?"
      >
        <form>
          <StayRadioButtons stayingLeabel="Are you staying in Reading on Tuesday night?" />
          <NextButton  onNext={handleNext} />{" "}
        </form>
      </Cards>
    </div>
  );
}

export default TuesdayStayForm;