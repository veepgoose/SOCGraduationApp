import React, { useState } from 'react';
import NameForm from './Components/Forms/NameForm';
import Emaillnput from './Components/Inputs/Emaillnput';
import CelebrationForm from './Components/Forms/CelebrationForm';
import DrinkPreferenceForm from './Components/Forms/DrinkPreferenceForm';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    celebration: '',
    drinkPreference: '',
    // Add other form fields as needed
  });

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // You can handle the response from the backend here
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <NameForm formData={formData} setFormData={setFormData} />
      <Emaillnput formData={formData} setFormData={setFormData} />
      <CelebrationForm formData={formData} setFormData={setFormData} />
      <DrinkPreferenceForm formData={formData} setFormData={setFormData} />
      {/* Render other form components as needed */}
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

// ... Other form components

// In the last form component or where all required information is collected
const FinalForm = ({ formData, onNext }) => {
  // ... Your form component code

  const handleFormSubmit = async () => {
    // Handle any additional processing or validation if needed

    // Submit the form data to the backend
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response if needed
      onNext(formData); // Pass the formData to onNext function
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      {/* Your form inputs */}
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};


export default FinalForm;
