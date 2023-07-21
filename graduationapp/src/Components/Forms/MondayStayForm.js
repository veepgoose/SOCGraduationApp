import React, { useState } from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
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
      <Cards>
      <h2 className="Form-Title">GIT TIPSY++</h2>
        <p className="Form-Text">
        So, it's a 9:30am start at Microsoft on Tuesday, are you staying in Reading on the Monday evening?
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
            <FormLabel id="stay-radio-buttons-group-label">
              
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="stay-radio-buttons-group-label"
              value={staying} // Use the staying state
              name="stay-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Hell Yeah!" />
              <FormControlLabel value="false" control={<Radio />} label="Early morning train journey for me :(" />
            </RadioGroup>
          </Box>

          <NextButton staying={staying} onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default MondayStayForm;
