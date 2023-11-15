// components/personalInfoForm.jsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const PersonalInfoForm = ({ onUpdate }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "", 
    email: "",
    phoneNumber: "",
    location: "", 
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

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
    setHasChanges(true);
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
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={personalInfo.fullName}
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
            <div className="form-field">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={personalInfo.location}
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
