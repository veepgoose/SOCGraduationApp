import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import GooseSquad from "./GooseSquadLogoTipsyApp.png"

function ThankYouMessage(props) {
  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">🎉WOOHOO!🎉</h2>
        <p className="Form-Text">
        Thank you for taking part, and we can't wait to meet you all!
          <img src={GooseSquad} className="GooseSquad" alt="GooseSquad" />
          
          
        </p>
      </Cards>
    </div>
  );
}

export default ThankYouMessage;
