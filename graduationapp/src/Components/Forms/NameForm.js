import React from 'react';
import './Forms.css';
import Cards from '../Cards/Cards';

function NameForm(props) {
  return (
    <div>
      <Cards
        title="Name Form"
        text="Please fill out the form below with your name and email address to register for the graduation ceremony."
      />
      <form>
        <div className="Name-form">
          <label className="" >Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
      </form>
    </div>
  );
}

export default NameForm;
