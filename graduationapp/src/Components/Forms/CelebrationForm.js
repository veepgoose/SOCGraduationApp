import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import CelebrationRadioButtons from "../Radios/CelebrationRadioButtons";

function CelebrationForm(props) {
  const handleNext = () => {
    props.onNext();
  };

  return (
    <div className="Body">
      <Cards
        title="WANNA PARTY?!?"
        text="Let's get waaaaaaasted!"
      >
        <form>
          <CelebrationRadioButtons stayingLeabel="Are you partying?" />
          <NextButton  onNext={handleNext} />{" "}
        </form>
      </Cards>
    </div>
  );
}

export default CelebrationForm;