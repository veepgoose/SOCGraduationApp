import React from "react";
import Button from "@mui/material/Button";

function NextButton() {
  return (
    <Button
      variant="contained"
      //sx is the container for styles in Material UI
      sx={{
        backgroundColor: "#81BC06",
        borderRadius: "1rem",
        width: "8em",
        height: "2.5em",
        fontSize: "0.7em",
        //Hover Styling
        "&:hover": { backgroundColor: "#81BC06", filter: "brightness(110%)" },
      }}
    >
      Next
    </Button>
  );
}

export default NextButton;
