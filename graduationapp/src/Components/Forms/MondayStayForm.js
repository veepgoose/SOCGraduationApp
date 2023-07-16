import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";

function MondayStayForm(props) {
  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      >
        <form>
          <div className="Name-Form">
            <label className="Name">Name</label>
            <input
              type="text"
              className="Name-Input"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="Email-Form">
            <label className="Email">Email address</label>
            <input
              type="email"
              className="Email-Input"
              id="email"
              placeholder="Enter email"
            />
            <NextButton />
          </div>
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
