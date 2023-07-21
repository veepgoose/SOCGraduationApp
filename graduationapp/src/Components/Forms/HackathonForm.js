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

  const handleChange = (e) => {
    setStayingHackathon(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = () => {
    const data = { hackathon: stayingHackathon };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards>
       <h2 className="Form-Title">GIT TIPSY++</h2>
        <p className="Form-Text">
        For those of you staying over on Monday evening, we will be hosting a hackathon in an Air BnB in central Reading. Expect coding, socialising and PIZZA! 🍕🍕🍕 Spaces are very limited, so please let us know if you would like to attend.
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
            {/* Header */}
          
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={stayingHackathon} // Use the staying state
              name="stay-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Gimme 🍕🍕🍕  " />
              <FormControlLabel value="false" control={<Radio />} label="I've coding enough for now, thanks tho " />
            </RadioGroup>
          </Box>
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default HackathonForm;

