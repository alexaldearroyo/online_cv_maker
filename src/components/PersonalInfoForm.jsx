// components/PersonalInfoForm.jsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const PersonalInfoForm = ({ onUpdate }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false); // Estado para rastrear los cambios

  useEffect(() => {
    const savedData = localStorage.getItem("personalInfo");
    if (savedData) {
      setPersonalInfo(JSON.parse(savedData));
    }
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    onUpdate({ ...personalInfo, [name]: value });
    setHasChanges(true); // Marcar que se realizaron cambios
  };

  const handleSave = () => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    setHasChanges(false);
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
          <form>
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

            <button
              type="button"
              onClick={handleSave}
              disabled={!hasChanges}
              className={hasChanges ? "" : "saved-button"}
            >
              {hasChanges ? (
                <>
                  <FontAwesomeIcon icon={faSave} /> Save
                </>
              ) : (
                "Saved"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
