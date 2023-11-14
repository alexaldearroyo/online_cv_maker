// components/PersonalInfoForm.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PersonalInfoForm = ({ onUpdate }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(personalInfo);
    setIsFormVisible(false);
  };

  return (
    <div>
      <div
        className={`title-button ${isFormVisible ? "expanded" : ""}`}
        onClick={toggleFormVisibility}
      >
        <h2>Personal Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name:</label>
              <input
                type="text"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Surname:</label>
              <input
                type="text"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Phone:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={personalInfo.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {/* Agrega más campos según sea necesario */}

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
