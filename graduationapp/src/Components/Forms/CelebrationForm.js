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

function CelebrationForm(props) {
  const [stayingAfterparty, setSayingAfterparty] = useState(true);

  const handleChange = (e) => {
    setSayingAfterpartyg(e.target.value === "true"); // Convert string value to boolean
  };

  const handleNext = () => {
    const data = { afterparty: stayingAfterparty };
    props.onNext(data);
  };

  return (
    <div className="Body">
      <Cards title="WANNA PARTY?!?" text="Let's get waaaaaaasted!">
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
            <FormLabel id="celebration-radio-buttons-group-label">
              Graduation afterparty?
            </FormLabel>
            {/* Radio Buttons Group Options*/}
            <RadioGroup
              aria-labelledby="celebration-radio-buttons-group-label"
              defaultValue="true"
              name="celebration-radio-buttons-group"
              onChange={handleChange} // Use the handleChange function
            >
              {/* Yes and No Radio Buttons wrapped in RadioGroup */}
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          <NextButton onNext={handleNext} />
        </form>
      </Cards>
    </div>
  );
}

export default CelebrationForm;
