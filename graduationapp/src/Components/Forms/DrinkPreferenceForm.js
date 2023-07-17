import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import DrinkPreferenceRadioButtons from "../Radios/CelebrationRadioButtons";

function DrinkPreferenceForm(props) {
  const handleNext = () => {
    props.onNext();
  };

  return (
    <div className="Body">
      <Cards
        title="SO, WHAT'S YOUR POISON?"
        text="Let's get waaaaaaasted!"
      >
        <form>
          <DrinkPreferenceRadioButtons stayingLabel="Pick your poison" />
          <NextButton  onNext={handleNext} />{" "}
        </form>
      </Cards>
    </div>
  );
}

export default DrinkPreferenceForm;