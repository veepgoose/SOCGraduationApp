import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function HackathonRadioButtons() {
  return (
    <>
      {/* Header */}
      <FormLabel id="hackathon-radio-buttons-group-label">
        In-person hackathon?
      </FormLabel>
      {/* Radio Buttons Group Options*/}
      <RadioGroup
        aria-labelledby="hackathon-radio-buttons-group-label"
        defaultValue="true"
        name="hackathon-radio-buttons-group"
      >
        {/* Yes and No Radio Buttons wrapped in RadioGroup */}
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </>
  );
}

export default HackathonRadioButtons;
