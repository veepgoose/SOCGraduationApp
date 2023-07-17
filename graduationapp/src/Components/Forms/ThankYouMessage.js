import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";


function ThankYouMessage(props) {
 


  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">THANK YOU!</h2>
        <p className="Form-Text">
          "We'll be in touch!"
        </p>
        </Cards>
    </div>
  );
}

export default ThankYouMessage;