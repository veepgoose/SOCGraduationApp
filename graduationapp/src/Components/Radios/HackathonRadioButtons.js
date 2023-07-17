import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import { useState } from "react";

function HackathonRadioButtons(props) {
  const [stayingHackathon, setstayingHackathon] = useState(true); // Define the staying state

  const handleChange = (e) => {
    setStaying(e.target.value === "true"); // Update the staying state
  };

//random comment

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
      <FormLabel id="hackathon-radio-buttons-group-label">
        teststs In-person hackathon?
      </FormLabel>
      {/* Radio Buttons Group Options*/}
      <RadioGroup
        aria-labelledby="hackathon-radio-buttons-group-label"
        value={stayingHackathon.toString()}
        name="hackathon-radio-buttons-group"
        onChange={handleChange}
      >
        {/* Yes and No Radio Buttons wrapped in RadioGroup */}
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </Box>
  );
}

export default HackathonRadioButtons;
