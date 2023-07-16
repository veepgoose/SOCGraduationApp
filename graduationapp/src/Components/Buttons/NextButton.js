import React from "react";
import Button from "@mui/material/Button";

function NextButton({ onNext }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#81BC06",
        borderRadius: "1rem",
        width: "9em",
        height: "3.5em",
        fontSize: "0.9em",
        mt: "2.5em",
        "&:hover": { backgroundColor: "#81BC06", filter: "brightness(110%)" },
      }}
      onClick={onNext} // Invoke the `onNext` function when the button is clicked
    >
      Next
    </Button>
  );
}

export default NextButton;
