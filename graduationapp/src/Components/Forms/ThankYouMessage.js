import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";

function ThankYouMessage({ formData, onNext }) {
  const handleSubmit = () => {
    // Perform any final form validation or processing here if needed

    // Call the onNext function to trigger the form submission
    onNext(formData);
  };

  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">THANK YOU!</h2>
        <p className="Form-Text">
          "We'll be in touch!"
          <img
            className="gif"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmNvczhmNWl6b2Q3c2d2NnE2ZWUxamFwYXBybnR3d2F4ajdwZWdtYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dh5q0sShxgp13DwrvG/giphy.gif"
            alt="Thank you"
          />
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </Cards>
    </div>
  );
}

export default ThankYouMessage;
