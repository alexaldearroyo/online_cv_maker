import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faPlus, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";

const EducationForm = ({ onUpdate }) => {
  const [educationList, setEducationList] = useState([
    {
      schoolName: "",
      degree: "",
      major: "",
      graduationYear: "",
    },
  ]);

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      {
        schoolName: "",
        degree: "",
        major: "",
        graduationYear: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    if (educationList.length > 1) {
      const updatedEducationList = [...educationList];
      updatedEducationList.splice(index, 1);
      setEducationList(updatedEducationList);
      onUpdate(updatedEducationList);
    }
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index] = { ...updatedEducationList[index], [name]: value };
    setEducationList(updatedEducationList);
    onUpdate(updatedEducationList);
    setHasChanges(true);
  };

  const handleSave = () => {
    localStorage.setItem("education", JSON.stringify(educationList));
    setHasChanges(false);
  };

  return (
    <div>
      <div
        className={`title-button ${isFormVisible ? "expanded" : ""}`}
        onClick={toggleFormVisibility}
      >
        <h2>Education</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <div className="form-container">
          <form>
            {educationList.map((education, index) => (
              <div key={index}>
                <div className="form-field">
                  <label>School Name:</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={education.schoolName}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label>Degree:</label>
                  <input
                    type="text"
                    name="degree"
                    value={education.degree}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label>Major:</label>
                  <input
                    type="text"
                    name="major"
                    value={education.major}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label>Graduation Year:</label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={education.graduationYear}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="button-container">
                  {index === educationList.length - 1 && (
                    <button type="button" onClick={handleAddEducation}>
                      <FontAwesomeIcon icon={faPlus} /> New
                    </button>
                  )}
                  {educationList.length > 1 && (
                    <button type="button" onClick={() => handleDelete(index)}
                    className="delete-button">
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

export default EducationForm;
