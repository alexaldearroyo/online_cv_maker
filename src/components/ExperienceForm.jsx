// components/ExperienceForm.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ExperienceForm = ({ onDataChange }) => {
  const [experience, setExperience] = useState([
    {
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperiences = [...experience];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setExperience(updatedExperiences);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataChange(experience);
    setIsFormVisible(false);
  };

  return (
    <div>
      <div
        className={`title-button ${isFormVisible ? "expanded" : ""}`}
        onClick={toggleFormVisibility}
      >
        <h2>Experience</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="form-field">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={exp.companyName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-field">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  value={exp.role}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-field">
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-field">
                <label>End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-field">
                <label>Description:</label>
                <div className="textarea-container">
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleChange(e, index)}
                />
                </div>
              </div>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      </div>
      )}
    </div>
  );
};

export default ExperienceForm;
