// components/ExperienceForm.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ExperienceForm = ({ onUpdate }) => {
  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    const updatedExperiences = [...experience];
    if (updatedExperiences.length > 1) {
      updatedExperiences.splice(index, 1);
      setExperience(updatedExperiences);
      onUpdate(updatedExperiences);
    }
  };

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
    onUpdate(experience);
    // setIsFormVisible(false);
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
                    name="company"
                    value={exp.company}
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
                <div className="button-container">
                  <button type="button" onClick={handleAddExperience}>
                    New
                  </button>
                  <button type="button" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                     <button type="submit">Submit</button>
                </div>
              </div>
            ))}

         
          </form>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
