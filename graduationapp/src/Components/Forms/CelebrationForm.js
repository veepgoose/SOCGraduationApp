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
  const [stayingAfterparty, setSayingAfterparty] = useState(true);

  const handleChange = (e) => {
    setSayingAfterpartyg(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = () => {
    const data = { afterparty: stayingAfterparty };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards>
      <h2 className="Form-Title">GIT TIPSY || GO HOME</h2>
        <p className="Form-Text">
        Yay! A fun day out at Microsoft followed by the all important School Of Code Graduation Ceremony 🎉🎓, but the celebrations don't stop there! We will be heading to a local bar for drinks and nibbles, so please let us know if you would like to join us.
        </p>
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
              
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="celebration-radio-buttons-group-label"
              value={stayingAfterparty} // Use the afterparty state
              name="celebration-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Count me IN!!!🥳" />
              <FormControlLabel value="false" control={<Radio />} label="I wanna go home, Bab! 👋" />
            </RadioGroup>
          </Box>
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default CelebrationForm;

