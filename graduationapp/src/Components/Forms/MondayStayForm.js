import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
import { useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function MondayStayForm(props) {
  const [staying, setStaying] = useState(true);

  const handleChange = (e) => {
    setStaying(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = () => {
    const data = { monday: staying };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
              Will you be staying in London on Monday 23rd July?
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={staying} // Use the staying state
              name="stay-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>

          <NextButton staying={staying} onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
