import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function CelebrationRadioButtons() {
  return (
    <>
      {/* Header */}
      <FormLabel id="celebration-radio-buttons-group-label">
        Graduation afterparty?
      </FormLabel>
      {/* Radio Buttons Group Options*/}
      <RadioGroup
        aria-labelledby="celebration-radio-buttons-group-label"
        defaultValue="true"
        name="celebration-radio-buttons-group"
      >
        {/* Yes and No Radio Buttons wrapped in RadioGroup */}
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </>
  );
}

export default CelebrationRadioButtons;
