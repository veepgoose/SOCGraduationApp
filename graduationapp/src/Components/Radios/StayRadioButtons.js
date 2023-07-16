import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

function StayRadioButtons(props) {
  const [staying, setStaying] = useState(true); // Define the staying state

  const handleChange = (e) => {
    setStaying(e.target.value === "true"); // Update the staying state
  };

  return (
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
        {props.stayingLeabel}
      </FormLabel>
      {/* Radio Buttons Group Options*/}
      <RadioGroup
        aria-labelledby="stay-radio-buttons-group-label"
        value={staying.toString()} // Use the staying state
        name="stay-radio-buttons-group"
        onChange={handleChange} // Use the handleChange function
      >
        {/* Yes and No Radio Buttons wrapped in RadioGroup */}
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </Box>
  );
}

export default StayRadioButtons;
