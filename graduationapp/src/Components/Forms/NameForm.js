import React, { useState } from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
// Remove the import of the backend/db.js as it is not required here.

function NameForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    const data = { name, email };
    props.onNext(data);
  };

  // Async function to fetch attendees data from Supabase.
  const fetchAttendeesData = async () => {
    try {
      const response = await fetch('http://localhost:3000/get-attendees'); // Replace with your backend URL for fetching attendees data
      const data = await response.json();
      console.log(data); // Process the fetched data if needed.
    } catch (error) {
      console.error('Error fetching attendees data:', error);
    }
  };

  return (
    <div className="Body">
      <Cards>
        <h2 className="Form-Title">
          WELCOME TO THE SOC GRADUATION DRINKS APP!
        </h2>
        <p className="Form-Text">
          We’re all excited for our graduation day at Microsoft next week, but
          the all-important question: What are we all doing after?! The day is
          scheduled to finish at 5 pm, and we’d like to keep the party going!
          So, if you’re looking to carry on the celebrations, use this App to
          help us plan the festivities. There is also an option to join an
          in-person Hackathon on Monday for those who will be in the area.
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
