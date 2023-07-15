import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function DrinkPreferenceRadioButtons() {
  const [checked, setChecked] = useState(false);
  const [beerChecked, setBeerChecked] = useState(false);
  const [wineChecked, setWineChecked] = useState(false);
  const [spiritsChecked, setSpiritsChecked] = useState(false);
  const [beastChecked, setBeastChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);

    if (checked) {
      // If "I don't drink" checkbox is checked, uncheck all other checkboxes
      setBeerChecked(false);
      setWineChecked(false);
      setSpiritsChecked(false);
      setBeastChecked(false);
    }
  };

  const handleBeastCheckboxChange = (event) => {
    const { checked } = event.target;
    setBeastChecked(checked);

    if (checked) {
      // If "I will drink anything, I am a beast" checkbox is checked, disable and check other checkboxes
      setChecked(false);
      setBeerChecked(true);
      setWineChecked(true);
      setSpiritsChecked(true);
    } else {
      // If "I will drink anything, I am a beast" checkbox is unchecked, enable other checkboxes
      setBeerChecked(false);
      setWineChecked(false);
      setSpiritsChecked(false);
    }
  };

  return (
    <>
      {/* Header */}
      <FormLabel id="drinks-radio-buttons-group-label">Drinks?</FormLabel>
      {/* Checkbox Group Options */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              disabled={beastChecked}
            />
          }
          label="I don't drink"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={beerChecked}
              onChange={() => setBeerChecked(!beerChecked)}
              disabled={checked || beastChecked}
            />
          }
          label="Beer"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={wineChecked}
              onChange={() => setWineChecked(!wineChecked)}
              disabled={checked || beastChecked}
            />
          }
          label="Wine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={spiritsChecked}
              onChange={() => setSpiritsChecked(!spiritsChecked)}
              disabled={checked || beastChecked}
            />
          }
          label="Spirits"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={beastChecked}
              onChange={handleBeastCheckboxChange}
              disabled={checked}
            />
          }
          label="I will drink anything, I am a beast"
        />
      </FormGroup>
    </>
  );
}

export default DrinkPreferenceRadioButtons;
