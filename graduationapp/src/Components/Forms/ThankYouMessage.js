import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";

function ThankYouMessage(props) {
  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">🎉WOOHOO!🎉</h2>
        <p className="Form-Text">
        Thank you for taking part, and we can't wait to meet you all!
          <img
            className="gif"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmNvczhmNWl6b2Q3c2d2NnE2ZWUxamFwYXBybnR3d2F4ajdwZWdtYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dh5q0sShxgp13DwrvG/giphy.gif"
            alt="Thank you"
          />
        </p>
      </Cards>
    </div>
  );
}

export default ThankYouMessage;
