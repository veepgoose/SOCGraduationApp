import React, { useState } from "react";
import axios from "axios"; // Import Axios library
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function HackathonForm(props) {
  const [stayingHackathon, setStayingHackathon] = useState(true);

  const apiUrl = "https://your-backend-url"; // Replace with your deployed backend URL

  const handleChange = (e) => {
    setStayingHackathon(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = async () => {
    const data = { hackathon: stayingHackathon };
    try {
      await axios.post(`${apiUrl}/save/hackathon`, data); // Make the API call to submit data
      props.onNext(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="Body">
      <Cards
        title="AN IRL HACKATHON YOU SAY?!?"
        text="We're planning on having an in-person hackathon on Monday 24th July, which will take place at an Air BnB with fellow Bootcampers. Spaces will be limited, so if you're interested in joining your fellow bootcampers for a fun evening of coding together with drinks and pizza, now's your time to express that interest!"
      >
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            {/* Header */}
            <FormLabel id="stay-radio-buttons-group-label">
              Hackathon?! Count.Me.IN!
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={stayingHackathon} // Use the staying state
              name="stay-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default HackathonForm;

