import React from "react";
import Button from "@mui/material/Button";

function NextButton({ onNext }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#81BC06",
        borderRadius: "1rem",
        width: "140px",
        height: "60px",
        fontSize: "16px",
        mt: "0.8em",

        "&:hover": { backgroundColor: "#81BC06", filter: "brightness(110%)" },
      }}
      onClick={onNext} // Invoke the `onNext` function when the button is clicked
    >
      Next
    </Button>
  );
}

export default NextButton;
