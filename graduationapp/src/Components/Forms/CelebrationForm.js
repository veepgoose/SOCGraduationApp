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

function CelebrationForm(props) {
  const [afterparty, setAfterparty] = useState(true);

  const apiUrl = "https://your-backend-url"; // Replace with your deployed backend URL

  const handleChange = (e) => {
    setAfterparty(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = async () => {
    const data = { afterparty };
    try {
      await axios.post(`${apiUrl}/save/afterparty`, data); // Make the API call to submit data
      props.onNext(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="Body">
      <Cards title="WANNA PARTY?!?" text="Let's get waaaaaaasted!">
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
            <FormLabel id="celebration-radio-buttons-group-label">
              Graduation afterparty?
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="celebration-radio-buttons-group-label"
              value={afterparty} // Use the afterparty state
              name="celebration-radio-buttons-group"
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

export default CelebrationForm;

