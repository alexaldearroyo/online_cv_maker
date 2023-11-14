import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const ExperienceForm = ({ onUpdate }) => {
  const [experience, setExperience] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Cargar los datos guardados desde localStorage cuando se monta el componente
    const savedExperience = localStorage.getItem("experience");
    if (savedExperience) {
      setExperience(JSON.parse(savedExperience));
    }
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez al montar el componente.

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperiences = [...experience];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setExperience(updatedExperiences);
    onUpdate(updatedExperiences);
    setHasChanges(true);
  };

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
    if (experience.length > 1) {
      const updatedExperiences = [...experience];
      updatedExperiences.splice(index, 1);
      setExperience(updatedExperiences);
      onUpdate(updatedExperiences);
    }
  };

  const handleSave = () => {
    localStorage.setItem("experience", JSON.stringify(experience));
    setHasChanges(false);
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
          <form>
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
                  {index === experience.length - 1 && (
                    <button type="button" onClick={handleAddExperience}>
                      <FontAwesomeIcon icon={faPlus} /> New
                    </button>
                  )}
                  {experience.length > 1 && (
                    <button type="button" onClick={() => handleDelete(index)}
                    className="delete-button" >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  )}
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
