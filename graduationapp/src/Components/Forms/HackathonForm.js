import React, { useState } from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import HackathonRadioButtons from "../Radios/HackathonRadioButtons";

function HackathonForm(props) {
  const [stayingHackathon, setstayingHackathon] = useState(true);

  const handleNext = () => {
    props.onNext(stayingHackathon);
  };

  const handleStayChange = (value) => {
    setstayingHackathon(value);
  };

  return (
    <div className="Body">
      <Cards
        title="AN IRL HACKATHON YOU SAY?!?"
        text="We're planning on having an in-person hackathon on Monday 24th July, which will take place at an Air BnB with fellow Bootcampers. Spaces will be limited, so if you're interested in joining your fellow bootcampers for a fun evening of coding together with drinks and pizza, now's your time to express that interest!"
      >
        <form>
          <HackathonRadioButtons
            hackathonLabel="Hackathon?! Count.Me.IN!"
            stayingHackathon={stayingHackathon}
            onChange={handleStayChange}
          />
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default HackathonForm;
