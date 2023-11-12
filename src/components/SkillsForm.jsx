import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SkillsForm = ({ onUpdate }) => {
  const [skillsInfo, setSkillsInfo] = useState({
    skillsList: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkillsInfo({ ...skillsInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(skillsInfo);
  };

  return (
    <div>
      <div className="title-button" onClick={toggleFormVisibility}>
        <h2>Skills Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Skills List:</label>
            <textarea
              name="skillsList"
              value={skillsInfo.skillsList}
              onChange={handleChange}
            />
          </div>
          {/* Agrega más campos de habilidades según sea necesario */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SkillsForm;
