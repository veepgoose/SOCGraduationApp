import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

function StayRadioButtons(props) {
  const { staying, onChange } = props;

  const handleChange = (e) => {
    const value = e.target.value === "true";
    onChange(value);
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
      <FormLabel id="stay-radio-buttons-group-label">
        {props.stayingLabel}
      </FormLabel>
      <RadioGroup
        aria-labelledby="stay-radio-buttons-group-label"
        value={staying.toString()}
        name="stay-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value={true} control={<Radio />} label="Yes" />
        <FormControlLabel value={false} control={<Radio />} label="No" />
      </RadioGroup>
    </Box>
  );
}

export default StayRadioButtons;