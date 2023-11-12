import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const EducationForm = ({ onUpdate }) => {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    degree: "",
    major: "",
    graduationYear: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(educationInfo);
  };

  return (
    <div>
      <div className="title-button" onClick={toggleFormVisibility}>
        <h2>Education Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name:</label>
            <input
              type="text"
              name="schoolName"
              value={educationInfo.schoolName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={educationInfo.degree}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Major:</label>
            <input
              type="text"
              name="major"
              value={educationInfo.major}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Graduation Year:</label>
            <input
              type="text"
              name="graduationYear"
              value={educationInfo.graduationYear}
              onChange={handleChange}
            />
          </div>
          {/* Agrega más campos de educación según sea necesario */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EducationForm;
