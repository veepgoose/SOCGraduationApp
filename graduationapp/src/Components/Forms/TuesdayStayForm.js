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

function TuesdayStayForm(props) {
  const [stayingTuesday, setStayingTuesday] = useState(true);

  const apiUrl = "https://your-backend-url"; // Replace with your deployed backend URL

  const handleChange = (e) => {
    setStayingTuesday(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = async () => {
    const data = { tuesday: stayingTuesday };
    try {
      await axios.post(`${apiUrl}/save/tuesday`, data); // Make the API call to submit data
      props.onNext(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="Body">
      <Cards
        title="TUESDAY SLEEPOVER?"
        text="It's a bit of a trek for a lot of people, so will you be amongst the brave souls who are staying in Reading on Tuesday night?"
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
            <FormLabel id="stay-radio-buttons-group-label">
              Are you staying in Reading on Tuesday night?
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={stayingTuesday} // Use the stayingTuesday state
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

export default TuesdayStayForm;

