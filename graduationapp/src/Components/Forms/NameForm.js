import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";

function NameForm(props) {
  const handleNext = () => {
    // Call the onNext function passed as a prop
    props.onNext();
  };

  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">WELCOME TO THE SOC GRADUATION DRINKS APP!</h2>
        <p className="Form-Text">
          We’re all excited for our graduation day at Microsoft next week, but the all-important question: What are we all doing after?! The day is scheduled to finish at 5 pm, and we’d like to keep the party going! So, if you’re looking to carry on the celebrations, use this App to help us plan the festivities. There is also an option to join an in-person Hackathon on Monday for those who will be in the area.
        </p>

        <form>
          <div className="Name-Form">
            <input type="text" className="Name-Input" id="name" placeholder="Name" />
          </div>
          <div className="Email-Form">
            <input type="email" className="Email-Input" id="email" placeholder="Email" />
            <NextButton onNext={handleNext} />{" "}
          </div>
        </form>
      </Cards>
    </div>
  );
}

export default NameForm;