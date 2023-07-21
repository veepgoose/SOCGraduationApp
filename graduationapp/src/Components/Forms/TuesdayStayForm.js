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
  const [staying, setStaying] = useState(true);

  const handleChange = (e) => {
    setStaying(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = () => {
    const data = { tuesday: staying };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards>
      <h2 className="Form-Title">GIT TIPSY++</h2>
        <p className="Form-Text">
        Picture the scene: It's 5pm, you're with your fellow SOC Bootcampers, riding the high of a fun day at Microsoft (Rumour has it there's LEGO!😲), will you be staying the night in Reading, or heading home?
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
            
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={staying} // Use the stayingTuesday state
              name="stay-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="I'm staying the night" />
              <FormControlLabel value="false" control={<Radio />} label="It's home time for me!" />
            </RadioGroup>
          </Box>
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default TuesdayStayForm;

