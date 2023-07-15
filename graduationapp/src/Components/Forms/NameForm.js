import React from 'react';
import './Forms.css';
import Cards from '../Cards/Cards';

function NameForm(props) {
  return (
    <div className="Body">
      <Cards
        title="WELCOME TO THE SOC GRADUATION DRINKS APP!"
        text="Before we begin, we need 2 bits of information from you, your name and email address, so that we can contact everyone with the location for the after graduation party!

"
      >
        <form>
          <div className="Name-Form">
            <label className="Name">Name</label>
            <input
              type="text"
              className="Name-Input"
              id="name"
              placeholder="Enter your name"
            />
            </div>
            <div className="Email-Form">
            
              <label className="Email">Email address</label>
              <input
                type="email"
                className="Email-Input"
                id="email"
                placeholder="Enter email"
            />
         </div>
        </form>
      </Cards>
    </div>
  );
}

export default NameForm;

