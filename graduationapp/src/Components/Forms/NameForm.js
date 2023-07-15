import React from 'react';
import './Forms.css';
import Cards from '../Cards/Cards';

function NameForm(props) {
  return (
    <div className="Body">
      <Cards
        title="Name Form"
        text="Please fill out the form below with your name and email address to register for the graduation ceremony."
      >
        <form>
          <div className="Name-form">
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

