import React, { useState } from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";

function NameForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    const data = { name, email };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">GIT TIPSY++</h2>
        <p className="Form-Text">
        Welcome to Git Tipsy++ – where coding meets celebration! 🎉 Get ready for the API Hour of your life as we gather to raise our glasses and toast to our coding journey! While True: Drink() is the mantra of this post-graduation bash at Microsoft. Help us make it unforgettable by filling out a few questions, and let's code the perfect celebration together! 🍻🎓
        </p>

        <form>
          <div className="Name-Form">
            <input
              type="text"
              className="Name-Input"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="Email-Form">
            <input
              type="email"
              className="Email-Input"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <NextButton onNext={handleNext} />{" "}
          </div>
        </form>
      </Cards>
    </div>
  );
}

export default NameForm;
