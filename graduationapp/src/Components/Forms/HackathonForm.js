import React from "react";
import "./Forms.css";
import Cards from "../Cards/Cards";
import NextButton from "../Buttons/NextButton";
// <<<<<<< responses-array-logic
// import StayRadioButtons from "../Radios/StayRadioButtons";
// import { useState } from "react";

// function MondayStayForm(props) {
//   const [staying, setStaying] = useState(true);

//   const handleNext = () => {
//     props.onNext(staying); // Use the staying state variable
//   };

//   return (
//     <div className="Body">
//       <Cards
//         title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
//         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
//       >
//         <form>
//           <StayRadioButtons stayingLeabel="Would you be interested in attending a hackathon that day?" />
//           <NextButton staying={staying} onNext={handleNext} />
//         </form>
//       </Cards>
//     </div>
//   );
// }

// export default MondayStayForm;
// =======
import HackathonRadioButtons from "../Radios/HackathonRadioButtons";

function HackathonForm(props) {
    const handleNext = () => {
        props.onNext();
    };

    return (
        <div className="Body">
            <Cards
                title="AN IRL HACKATHON YOU SAY?!?"
                text="We're planning on having an in-person hackathon on Monday 24th July, which will take place at an Air BnB with fellow Bootcampers. Spaces will be limited, so if you're interested in joining your fellow bootcampers for a fun evening of coding together with drinks and pizza, now's your time to express that interest!"
            >
                <form>
                    <HackathonRadioButtons hackathonLabel="Hackathon?! Count.Me.IN!" />
                    <NextButton onNext={handleNext} />
                </form>
            </Cards>
        </div>
    );
}

export default HackathonForm;
